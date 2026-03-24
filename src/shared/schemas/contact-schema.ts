import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "image/dwg",
  "application/dxf",
];

export const contactSchema = z.object({
  nome: z
    .string()
    .min(2, "Informe seu nome completo."),

  empresa: z
    .string()
    .min(2, "Informe o nome da empresa."),

  telefone: z
    .string()
    .min(10, "Informe um telefone válido."),

  email: z
  .string()
  .regex(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Informe um e-mail válido."
  ),

  mensagem: z
    .string()
    .max(300, "A mensagem deve ter no máximo 300 caracteres."),

  anexo: z
  .custom<FileList>()
  .optional()
  .refine(
    (files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE,
    "O arquivo deve ter no máximo 5MB."
  )
  .refine(
    (files) => !files || files.length === 0 || ACCEPTED_TYPES.includes(files[0].type),
    "Formato inválido. Envie PDF, DWG, DXF, JPG ou PNG."
  ),
});

export type ContactFormData = z.infer<typeof contactSchema>;