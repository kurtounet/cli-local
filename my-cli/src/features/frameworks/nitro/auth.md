Voici un **kit d’endpoints JWT** pret a l’emploi pour **Nuxt 3 + Nitro (H3)** avec **Zod**, **bcryptjs**, **jsonwebtoken** et **Drizzle** (MySQL).
Arborescence suggeree :

```
server/
  api/auth/
    login.post.ts
    register.post.ts
    refresh.post.ts
    me.get.ts
    logout.post.ts
  utils/
    jwt.ts
    password.ts
    auth.ts
  database/
    db.ts           // votre instance drizzle
    schemas.ts      // export { users } avec passwordHash
```

> Variables .env requises : `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`
> Cookies: `refresh_token` (httpOnly). Access token retourne dans la reponse.

---

### `server/utils/jwt.ts`

```ts
import jwt from 'jsonwebtoken'

const ACCESS_TOKEN_TTL = '15m'
const REFRESH_TOKEN_TTL = '7d'

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET!
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!

export function signAccessToken(payload: object) {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_TOKEN_TTL })
}
export function signRefreshToken(payload: object) {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_TOKEN_TTL })
}
export function verifyAccessToken(token: string) {
  return jwt.verify(token, ACCESS_SECRET) as any
}
export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_SECRET) as any
}
```

### `server/utils/password.ts`

```ts
import bcrypt from 'bcryptjs'
export function hashPassword(plain: string) {
  return bcrypt.hash(plain, 10)
}
export function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash)
}
```

### `server/utils/auth.ts`

```ts
import { H3Event, getHeader, createError } from 'h3'
import { verifyAccessToken } from './jwt'

export function getBearer(event: H3Event) {
  const auth = getHeader(event, 'authorization') || ''
  const [, token] = auth.split(' ')
  return token
}

export function requireUser(event: H3Event) {
  const token = getBearer(event)
  if (!token) throw createError({ statusCode: 401, statusMessage: 'Missing token' })
  try {
    return verifyAccessToken(token) as { sub: number; email: string }
  } catch {
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' })
  }
}
```

---

### `server/api/auth/register.post.ts`

```ts
import { defineEventHandler, readBody, setCookie, createError } from 'h3'
import { z } from 'zod'
import { db } from '~/server/database/db'
import { users } from '~/server/database/schemas'
import { eq } from 'drizzle-orm'
import { hashPassword } from '~/server/utils/password'
import { signAccessToken, signRefreshToken } from '~/server/utils/jwt'

const RegisterDto = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1)
})

export default defineEventHandler(async (event) => {
  const raw = await readBody(event)
  const dto = RegisterDto.parse(raw)

  const [exists] = await db.select().from(users).where(eq(users.email, dto.email)).limit(1)
  if (exists) throw createError({ statusCode: 409, statusMessage: 'Email already in use' })

  const passwordHash = await hashPassword(dto.password)
  const [user] = await db.insert(users).values({
    email: dto.email,
    name: dto.name,
    passwordHash
  }).returning()

  const accessToken  = signAccessToken({ sub: user.id, email: user.email })
  const refreshToken = signRefreshToken({ sub: user.id })

  setCookie(event, 'refresh_token', refreshToken, {
    httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production',
    path: '/', maxAge: 60 * 60 * 24 * 7
  })

  return { success: true, data: { accessToken, user: { id: user.id, email: user.email, name: user.name } } }
})
```

### `server/api/auth/login.post.ts`

```ts
import { defineEventHandler, readBody, setCookie, createError } from 'h3'
import { z } from 'zod'
import { db } from '~/server/database/db'
import { users } from '~/server/database/schemas'
import { eq } from 'drizzle-orm'
import { verifyPassword } from '~/server/utils/password'
import { signAccessToken, signRefreshToken } from '~/server/utils/jwt'

const LoginDto = z.object({
  email: z.string().email(),
  password: z.string().min(1)
})

export default defineEventHandler(async (event) => {
  const raw = await readBody(event)
  const dto = LoginDto.parse(raw)

  const [user] = await db.select().from(users).where(eq(users.email, dto.email)).limit(1)
  if (!user) throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })

  const ok = await verifyPassword(dto.password, user.passwordHash)
  if (!ok) throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })

  const accessToken  = signAccessToken({ sub: user.id, email: user.email })
  const refreshToken = signRefreshToken({ sub: user.id })

  setCookie(event, 'refresh_token', refreshToken, {
    httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production',
    path: '/', maxAge: 60 * 60 * 24 * 7
  })

  return { success: true, data: { accessToken, user: { id: user.id, email: user.email, name: user.name } } }
})
```

### `server/api/auth/refresh.post.ts`

```ts
import { defineEventHandler, getCookie, setCookie, createError } from 'h3'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'refresh_token')
  if (!token) throw createError({ statusCode: 401, statusMessage: 'Missing refresh token' })

  let payload: any
  try { payload = verifyRefreshToken(token) } 
  catch { throw createError({ statusCode: 401, statusMessage: 'Invalid refresh token' }) }

  const accessToken  = signAccessToken({ sub: payload.sub, email: payload.email })
  const refreshToken = signRefreshToken({ sub: payload.sub, email: payload.email })

  setCookie(event, 'refresh_token', refreshToken, {
    httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production',
    path: '/', maxAge: 60 * 60 * 24 * 7
  })

  return { success: true, data: { accessToken } }
})
```

### `server/api/auth/me.get.ts`

```ts
import { defineEventHandler } from 'h3'
import { requireUser } from '~/server/utils/auth'
import { db } from '~/server/database/db'
import { users } from '~/server/database/schemas'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const jwt = requireUser(event)
  const [user] = await db.select().from(users).where(eq(users.id, Number(jwt.sub))).limit(1)
  return { success: true, data: user ? { id: user.id, email: user.email, name: user.name } : null }
})
```

### `server/api/auth/logout.post.ts`

```ts
import { defineEventHandler, deleteCookie } from 'h3'

export default defineEventHandler(async (event) => {
  deleteCookie(event, 'refresh_token', { path: '/' })
  return { success: true, message: 'Logged out' }
})
```

---

### Exemple minimal de schema Drizzle `users`

```ts
// server/database/schemas.ts
import { mysqlTable, bigint, varchar } from 'drizzle-orm/mysql-core'
export const users = mysqlTable('users', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
})
```

---

Si tu veux la version **sans Drizzle** (mock en memoire) ou **avec cookie pour l’access token**, dis-le et je te la pose direct.
