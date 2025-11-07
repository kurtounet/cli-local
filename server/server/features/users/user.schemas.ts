import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(120),
  email: z.string().email('Email invalide').max(190),
});

export const updateUserSchema = createUserSchema.partial().refine(
  (d) => Object.keys(d).length > 0,
  { message: 'Fournissez au moins un champ' }
);

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;