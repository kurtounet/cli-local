Parfait. Voici la variante **Nuxt 3 + Nitro** avec **access token en cookie httpOnly** (et refresh aussi).
Deps: `bcryptjs`, `jsonwebtoken`, `zod`, `drizzle-orm`.

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
    cookies.ts
    auth.ts
  database/
    db.ts
    schemas.ts
```

> .env requis: `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`
> Cookies: `access_token` (15 min), `refresh_token` (7 j), tous deux httpOnly.

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

### `server/utils/cookies.ts`

```ts
import { H3Event, setCookie, deleteCookie } from 'h3'

export const ACCESS_COOKIE = 'access_token'
export const REFRESH_COOKIE = 'refresh_token'

const base = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
}

export function setAuthCookies(event: H3Event, accessToken: string, refreshToken: string) {
  setCookie(event, ACCESS_COOKIE, accessToken, { ...base, maxAge: 60 * 15 })        // 15 min
  setCookie(event, REFRESH_COOKIE, refreshToken, { ...base, maxAge: 60 * 60 * 24 * 7 }) // 7 j
}

export function clearAuthCookies(event: H3Event) {
  deleteCookie(event, ACCESS_COOKIE, { path: '/' })
  deleteCookie(event, REFRESH_COOKIE, { path: '/' })
}
```

### `server/utils/auth.ts`

```ts
import { H3Event, getCookie, createError } from 'h3'
import { verifyAccessToken } from './jwt'
import { ACCESS_COOKIE } from './cookies'

export function requireUser(event: H3Event) {
  const token = getCookie(event, ACCESS_COOKIE)
  if (!token) throw createError({ statusCode: 401, statusMessage: 'Missing token' })
  try {
    return verifyAccessToken(token) as { sub: number; email?: string }
  } catch {
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' })
  }
}
```

---

### `server/api/auth/register.post.ts`

```ts
import { defineEventHandler, readBody, createError } from 'h3'
import { z } from 'zod'
import { db } from '~/server/database/db'
import { users } from '~/server/database/schemas'
import { eq } from 'drizzle-orm'
import { hashPassword } from '~/server/utils/password'
import { signAccessToken, signRefreshToken } from '~/server/utils/jwt'
import { setAuthCookies } from '~/server/utils/cookies'

const RegisterDto = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1),
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
    passwordHash,
  }).returning()

  const accessToken  = signAccessToken({ sub: user.id, email: user.email })
  const refreshToken = signRefreshToken({ sub: user.id })
  setAuthCookies(event, accessToken, refreshToken)

  return { success: true, data: { user: { id: user.id, email: user.email, name: user.name } } }
})
```

### `server/api/auth/login.post.ts`

```ts
import { defineEventHandler, readBody, createError } from 'h3'
import { z } from 'zod'
import { db } from '~/server/database/db'
import { users } from '~/server/database/schemas'
import { eq } from 'drizzle-orm'
import { verifyPassword } from '~/server/utils/password'
import { signAccessToken, signRefreshToken } from '~/server/utils/jwt'
import { setAuthCookies } from '~/server/utils/cookies'

const LoginDto = z.object({
  email: z.string().email(),
  password: z.string().min(1),
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
  setAuthCookies(event, accessToken, refreshToken)

  return { success: true, data: { user: { id: user.id, email: user.email, name: user.name } } }
})
```

### `server/api/auth/refresh.post.ts`

```ts
import { defineEventHandler, getCookie, createError } from 'h3'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '~/server/utils/jwt'
import { REFRESH_COOKIE, setAuthCookies } from '~/server/utils/cookies'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, REFRESH_COOKIE)
  if (!token) throw createError({ statusCode: 401, statusMessage: 'Missing refresh token' })

  let payload: any
  try { payload = verifyRefreshToken(token) }
  catch { throw createError({ statusCode: 401, statusMessage: 'Invalid refresh token' }) }

  const accessToken  = signAccessToken({ sub: payload.sub, email: payload.email })
  const refreshToken = signRefreshToken({ sub: payload.sub, email: payload.email })
  setAuthCookies(event, accessToken, refreshToken)

  return { success: true }
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
import { defineEventHandler } from 'h3'
import { clearAuthCookies } from '~/server/utils/cookies'

export default defineEventHandler(async (event) => {
  clearAuthCookies(event)
  return { success: true, message: 'Logged out' }
})
```

### `server/database/schemas.ts` (exemple)

```ts
import { mysqlTable, bigint, varchar } from 'drizzle-orm/mysql-core'
export const users = mysqlTable('users', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  email: varchar('email', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
})
```

---

Notes rapides (securite & UX):

* Cookies httpOnly => protege des XSS, mais attention CSRF. Au minimum `SameSite=Lax`; pour cross-site, ajouter un **CSRF token** (cookie non httpOnly `csrf_token` + header `x-csrf-token`), et ne valider que POST/PUT/PATCH/DELETE si header ok.
* En dev cross-origin, utiliser `credentials: 'include'` dans `$fetch` cote client.

Si tu veux, je te mets la variante avec **CSRF minimal** (cookie + middleware H3) en plus.



Voici la **variante CSRF minimal** (cookie + middleware H3) pour Nuxt 3 + Nitro, compatible avec tes endpoints actuels (access/refresh en cookies httpOnly).

---

### 1) Utilitaires CSRF

`server/utils/csrf.ts`

```ts
import { H3Event, getCookie, setCookie } from 'h3'
import crypto from 'node:crypto'

export const CSRF_COOKIE = 'csrf_token'

const base = {
  httpOnly: false,              // lisible par le client pour l'envoyer en header
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: 60 * 60 * 2,          // 2h
}

export function createCsrfToken() {
  return crypto.randomBytes(32).toString('base64url')
}

export function ensureCsrfCookie(event: H3Event) {
  let token = getCookie(event, CSRF_COOKIE)
  if (!token) {
    token = createCsrfToken()
    setCookie(event, CSRF_COOKIE, token, base)
  }
  return token
}

export function setNewCsrfCookie(event: H3Event) {
  const token = createCsrfToken()
  setCookie(event, CSRF_COOKIE, token, base)
  return token
}
```

---

### 2) Middleware global H3

Vérifie le header `x-csrf-token` sur les requêtes **mutantes** et dépose le cookie CSRF sur GET/HEAD.

`server/middleware/csrf.global.ts`

```ts
import { defineEventHandler, getMethod, getHeader, createError } from 'h3'
import { ensureCsrfCookie } from '~/server/utils/csrf'

const MUTATING = new Set(['POST', 'PUT', 'PATCH', 'DELETE'])

export default defineEventHandler((event) => {
  const method = getMethod(event)

  // Préflight et GET/HEAD : on dépose le cookie si manquant
  if (method === 'OPTIONS') return
  if (method === 'GET' || method === 'HEAD') {
    ensureCsrfCookie(event)
    return
  }

  // Requêtes mutantes : on exige le header qui matche le cookie
  if (MUTATING.has(method)) {
    const cookieToken = ensureCsrfCookie(event) // s'assure qu'il existe
    const headerToken = getHeader(event, 'x-csrf-token')
    if (!headerToken || headerToken !== cookieToken) {
      throw createError({ statusCode: 403, statusMessage: 'CSRF token invalid or missing' })
    }
  }
})
```

---

### 3) Intégrer CSRF dans tes endpoints auth

**Après** avoir posé `access_token` + `refresh_token`, on **renouvelle** le CSRF pour éviter la fixation.

Exemple (montre juste l’ajout) :

`server/api/auth/login.post.ts` (idem pour `register` et `refresh`)

```ts
import { setNewCsrfCookie } from '~/server/utils/csrf'
// ...
const accessToken  = signAccessToken({ sub: user.id, email: user.email })
const refreshToken = signRefreshToken({ sub: user.id })
setAuthCookies(event, accessToken, refreshToken)
setNewCsrfCookie(event) // <— rotate le CSRF apres auth
return { success: true, data: { user: { id: user.id, email: user.email, name: user.name } } }
```

---

### 4) Côté client (Nuxt) : envoyer le header automatiquement

Option simple via un plugin qui ajoute le header et `credentials: 'include'`.

`plugins/ofetch-csrf.client.ts`

```ts
export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    onRequest({ options }) {
      options.credentials = 'include'
      const token = useCookie('csrf_token').value
      options.headers = { ...(options.headers || {}), 'x-csrf-token': token || '' }
    },
  })
  return { provide: { api } }
})
```

Utilisation :

```ts
// au lieu de $fetch(...)
const { $api } = useNuxtApp()
await $api('/api/auth/login', { method: 'POST', body: { email, password } })
```

> Si tu gardes `$fetch` directement, ajoute `credentials: 'include'` + le header `x-csrf-token` à chaque appel mutateur.

---

### 5) Rappels rapides

* `access_token` + `refresh_token` : cookies **httpOnly** (`SameSite=Lax`, `Secure` en prod).
* `csrf_token` : **non-httpOnly**, uniquement pour fournir le header aux requêtes mutantes.
* En cross-site « pur » (iframe / redirections), `SameSite=Lax` suffit souvent, sinon passer à un schéma double soumission + vérif `Origin/Referer` si nécessaire.

Si tu veux, je peux aussi ajouter une **vérif `Origin/Referer`** dans le middleware pour durcir encore.

Top. Voici la **version durcie** avec verif **Origin/Referer** en plus du CSRF.

### .env (exemple)

```
CSRF_ALLOWED_ORIGINS=https://ab-web.fr,https://admin.ab-web.fr,http://localhost:3000
```

### `server/middleware/csrf.global.ts` (remplace le precedent)

```ts
import {
  defineEventHandler,
  getMethod,
  getHeader,
  createError,
  getRequestHost,
} from 'h3'
import { ensureCsrfCookie } from '~/server/utils/csrf'

const MUTATING = new Set(['POST', 'PUT', 'PATCH', 'DELETE'])
const ALLOWED_ORIGINS = (process.env.CSRF_ALLOWED_ORIGINS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)

function isAllowedByOriginOrReferer(event: any) {
  const reqHost = getRequestHost(event, { xForwardedHost: true })

  const origin = (getHeader(event, 'origin') || '').trim()
  if (origin) {
    try {
      const u = new URL(origin)
      if (
        u.host === reqHost ||
        ALLOWED_ORIGINS.includes(u.origin) ||
        ALLOWED_ORIGINS.includes(u.host)
      ) return true
    } catch {}
  }

  const referer = (getHeader(event, 'referer') || '').trim()
  if (referer) {
    try {
      const u = new URL(referer)
      if (
        u.host === reqHost ||
        ALLOWED_ORIGINS.includes(u.origin) ||
        ALLOWED_ORIGINS.includes(u.host)
      ) return true
    } catch {}
  }

  return false
}

export default defineEventHandler((event) => {
  const method = getMethod(event)

  // preflight
  if (method === 'OPTIONS') return

  // GET/HEAD: depose le cookie CSRF si manquant (double soumission)
  if (method === 'GET' || method === 'HEAD') {
    ensureCsrfCookie(event)
    return
  }

  if (MUTATING.has(method)) {
    // 1) Verif Origin/Referer
    if (!isAllowedByOriginOrReferer(event)) {
      throw createError({ statusCode: 403, statusMessage: 'Origin/Referer non autorise' })
    }

    // 2) Verif CSRF header vs cookie
    const cookieToken = ensureCsrfCookie(event)
    const headerToken = getHeader(event, 'x-csrf-token')
    if (!headerToken || headerToken !== cookieToken) {
      throw createError({ statusCode: 403, statusMessage: 'CSRF token invalide ou manquant' })
    }
  }
})
```

### Rappel client (inchangé)

Plugin `$api` qui envoie le header et credentials:

```ts
// plugins/ofetch-csrf.client.ts
export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    onRequest({ options }) {
      options.credentials = 'include'
      const token = useCookie('csrf_token').value
      options.headers = { ...(options.headers || {}), 'x-csrf-token': token || '' }
    },
  })
  return { provide: { api } }
})
```

Cest tout. Si tu veux, je peux ajouter un **module cors** Nitro avec whitelist qui match `CSRF_ALLOWED_ORIGINS`.


Voici un **middleware CORS Nitro/H3** avec **whitelist** basee sur `CSRF_ALLOWED_ORIGINS`, compatible cookies (`credentials: include`) et a placer **avant** le middleware CSRF (prefixe le fichier par `00.` pour l’ordre).

### `server/middleware/00.cors.global.ts`

```ts
import {
  defineEventHandler,
  getHeader,
  getMethod,
  getRequestHost,
  appendHeader,
} from 'h3'

const ALLOWED_ORIGINS = (process.env.CSRF_ALLOWED_ORIGINS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)

function pickAllowedOrigin(event: any) {
  const origin = (getHeader(event, 'origin') || '').trim()
  if (!origin) return null
  try {
    const reqHost = getRequestHost(event, { xForwardedHost: true })
    const u = new URL(origin)
    // Autorise le meme host (meme domaine) ou un element de la whitelist
    if (u.host === reqHost || ALLOWED_ORIGINS.includes(u.origin) || ALLOWED_ORIGINS.includes(u.host)) {
      return u.origin
    }
  } catch {}
  return null
}

export default defineEventHandler((event) => {
  const method = getMethod(event)
  const origin = pickAllowedOrigin(event)

  // Toujours annoncer les entetes CORS pertinents si l'origine est autorisee
  if (origin) {
    // Important avec credentials: ne JAMAIS mettre '*'
    appendHeader(event, 'Access-Control-Allow-Origin', origin)
    appendHeader(event, 'Vary', 'Origin')
    appendHeader(event, 'Access-Control-Allow-Credentials', 'true')

    // Autorise les entetes demandes + notre header CSRF
    const reqHeaders = getHeader(event, 'access-control-request-headers') || ''
    const extra = ['x-csrf-token']
    const allowHeaders = Array.from(
      new Set(
        (reqHeaders ? reqHeaders.split(',') : [])
          .map(h => h.trim().toLowerCase())
          .concat(extra)
      )
    ).join(', ')
    if (allowHeaders) {
      appendHeader(event, 'Access-Control-Allow-Headers', allowHeaders)
    }

    appendHeader(event, 'Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS')
  }

  // Preflight
  if (method === 'OPTIONS') {
    // Si origine non autorisee, on ne renvoie pas d’entetes CORS -> le navigateur bloquera
    event.node.res.statusCode = 204
    event.node.res.end()
  }
})
```

**Notes rapides**

* Utilise `credentials: 'include'` cote client.
* Garde `SameSite=Lax` + `Secure` (prod) pour tes cookies.
* Place ce fichier **avant** `csrf.global.ts` (ex: `00.cors.global.ts`, puis `01.csrf.global.ts`), ainsi les entetes CORS sont poses avant la verif CSRF.

Courtement: **non, “parfaitement sécurisé” n’existe pas**.
Avec cookies httpOnly + CSRF (double cookie) + Origin/Referer + CORS, tu as **un très bon socle**. Pour un niveau prod solide, ajoute au minimum les points ci-dessous.

### A faire en prod (priorité)

1. **HTTPS partout + HSTS**
   Active HSTS (1 an, `includeSubDomains`, `preload`).

2. **Secrets JWT forts & rotation**
   Génére `JWT_*_SECRET` longs, rotate régulièrement.

3. **Refresh tokens “stateful” + rotation & révocation**

   * Donne un `jti` unique au refresh token.
   * Stocke **le hash** du refresh (DB/Redis) avec `userId`, `expiresAt`.
   * A chaque `/refresh`, **rotates** (nouveau jti, invalide l’ancien).
   * **Détection de réutilisation**: si un token déjà invalidé réapparaît ⇒ invalide toute la session de l’utilisateur.

4. **Révocation au logout / reset password**
   Supprime (ou marque `revokedAt`) tous les refresh actifs de l’utilisateur.

5. **Rate limiting & anti brute-force**
   Limite `/auth/login`, `/auth/refresh` (IP + compte), ajoute backoff et éventuellement captcha après N échecs.

6. **Cookies au plus strict**

   * `httpOnly`, `Secure` (prod), `SameSite=Lax` (ou `None; Secure` si cross-site requis).
   * Si possible, utilise le **préfixe `__Host-`** (pas de `Domain`, `Path=/`, `Secure`) pour `access_token`/`csrf_token` sur le même host.

7. **Entêtes de sécurité**
   `Content-Security-Policy` (au moins `default-src 'self'` + politiques adaptées),
   `X-Frame-Options: DENY` ou `SAMEORIGIN`,
   `Referrer-Policy: no-referrer-when-downgrade` (ou plus strict),
   `X-Content-Type-Options: nosniff`,
   `Permissions-Policy` minimaliste.

8. **Vérifs Origin/Referer** (deja ajoutées)
   Garde la whitelist **exacte** et valide correctement `X-Forwarded-*` derrière un proxy.

9. **Journalisation & alertes**
   Garde des logs d’audit (login, refresh, logout, échecs, rotation, réutilisation), avec alertes en cas d’anomalies.

10. **Durcissements optionnels**

* 2FA/TOTP sur comptes sensibles.
* Limiter l’access token à 10–15 min, scopes/claims minimaux.
* Sanitize et encoder tout contenu utilisateur, CSP stricte pour réduire le risque XSS (même si httpOnly aide).

---

### Exemples ultra-brefs (adaptables a ton code)

**Schema de table pour refresh “stateful”**

```sql
CREATE TABLE auth_refresh_token (
  jti        CHAR(36) PRIMARY KEY,
  user_id    BIGINT NOT NULL,
  token_hash VARBINARY(64) NOT NULL,
  created_at DATETIME NOT NULL,
  expires_at DATETIME NOT NULL,
  revoked_at DATETIME NULL,
  replaced_by CHAR(36) NULL,
  INDEX (user_id), INDEX (expires_at)
);
```

**Emission d’un refresh avec jti + stockage (pseudo-TS)**

```ts
import { randomUUID, createHash } from 'node:crypto'
function hashToken(t: string) { return createHash('sha256').update(t).digest('base64') }

const jti = randomUUID()
const refresh = signRefreshToken({ sub: user.id, jti }) // ajoute jti au JWT
await db.insert(authRefreshToken).values({
  jti, userId: user.id, tokenHash: hashToken(refresh),
  createdAt: new Date(), expiresAt: addDays(new Date(), 7)
})
```

**Rotation + détection de réutilisation (dans `/auth/refresh`)**

```ts
const payload = verifyRefreshToken(token) // recup jti
const row = await db.query.authRefreshToken.findFirst({ where: eq(t.jti, payload.jti) })
if (!row || row.revokedAt || row.tokenHash !== hashToken(token)) {
  // réutilisation ou token inconnu -> invalide toute la session utilisateur
  await db.update(authRefreshToken).set({ revokedAt: new Date() }).where(eq(t.userId, payload.sub))
  throw createError({ statusCode: 401, statusMessage: 'Refresh invalide' })
}
// rotation
const newJti = randomUUID()
const newRefresh = signRefreshToken({ sub: payload.sub, jti: newJti })
await db.transaction(async tx => {
  await tx.update(authRefreshToken).set({ revokedAt: new Date(), replacedBy: newJti }).where(eq(t.jti, payload.jti))
  await tx.insert(authRefreshToken).values({
    jti: newJti, userId: payload.sub, tokenHash: hashToken(newRefresh),
    createdAt: new Date(), expiresAt: addDays(new Date(), 7)
  })
})
setAuthCookies(event, signAccessToken({ sub: payload.sub }), newRefresh)
```

**Rate-limit H3 simple (mettre Redis en prod)**

```ts
// server/middleware/02.ratelimit.global.ts
import { defineEventHandler, getMethod, getRequestIP, createError } from 'h3'
const BUCKET = new Map<string, { count: number; reset: number }>()
const WINDOW_MS = 60_000, LIMIT = 10 // 10 req / min / IP sur endpoints sensibles

const SENSITIVE = [/^\/api\/auth\/login/, /^\/api\/auth\/refresh/]

export default defineEventHandler((event) => {
  const url = event.path || ''
  if (!SENSITIVE.some(rx => rx.test(url))) return
  const ip = getRequestIP(event) || 'unknown'
  const now = Date.now()
  const k = `${ip}:${getMethod(event)}`
  const b = BUCKET.get(k) ?? { count: 0, reset: now + WINDOW_MS }
  if (now > b.reset) { b.count = 0; b.reset = now + WINDOW_MS }
  b.count++; BUCKET.set(k, b)
  if (b.count > LIMIT) throw createError({ statusCode: 429, statusMessage: 'Too Many Requests' })
})
```

---

### Conclusion

Tu as déjà **90% du nécessaire**. En ajoutant **rotation/révocation des refresh**, **rate-limit**, **HSTS+CSP+headers**, et une **gestion rigoureuse des cookies**, tu atteins un niveau **très solide** pour de la prod.
Si tu veux, je t’intègre la rotation des refresh tokens dans tes fichiers actuels (version Drizzle MySQL).

