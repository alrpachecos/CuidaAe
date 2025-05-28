import { z } from 'zod';

export const FormSchemaLogin = z.object({
    email: z
        .string()
        .min(1, 'Email é obrigatório')
        .email('E-mail inválido'),
    password: z
        .string()
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~-]{8,}$/, 'Senha inválida'),
});

export const FormSchemaForgotPassword = z.object({
    email: z
        .string()
        .email('E-mail inválido')
        .min(1, 'Email é obrigatório')
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail inválido'),
});

export type FormSchemaLogin = z.infer<typeof FormSchemaLogin>;
export type FormSchemaForgotPassword = z.infer<typeof FormSchemaForgotPassword>;
