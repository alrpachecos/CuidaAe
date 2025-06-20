import { z } from 'zod';

export const FormSchemaSignIn = z.object({
    email: z
        .string()
        .min(1, 'Email é obrigatório')
        .email('E-mail inválido'),
    password: z
        .string()
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~-]{8,}$/, 'Senha inválida'),
});

export const FormSchemaSignUp = z.object({
    name: z
        .string()
        .min(1, 'Nome completo é obrigatório'),
    email: z
        .string()
        .min(1, 'Email é obrigatório')
        .email('E-mail inválido'),
    password: z
        .string()
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~-]{8,}$/, 'Senha inválida'),
    role: z.enum(['patient', 'professional'], {
        required_error: 'Selecione o tipo de usuário',
        invalid_type_error: 'Selecione o tipo de usuário',
    }),
});

export const FormSchemaForgotPassword = z.object({
    email: z
        .string()
        .email('E-mail inválido')
        .min(1, 'Email é obrigatório')
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail inválido'),
});

export type FormSchemaSignIn = z.infer<typeof FormSchemaSignIn>;
export type FormSchemaSignUp = z.infer<typeof FormSchemaSignUp>;
export type FormSchemaForgotPassword = z.infer<typeof FormSchemaForgotPassword>;
