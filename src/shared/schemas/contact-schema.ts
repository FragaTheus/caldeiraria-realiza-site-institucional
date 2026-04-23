import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "application/acad",
  "application/dxf",
  "application/octet-stream",
];

export const contactSchema = z.object({
  nome: z.string().min(2, "Informe seu nome completo."),

  empresa: z.string().min(2, "Informe o nome da empresa."),

  telefone: z.string().min(10, "Informe um telefone válido."),

  email: z.string().email("Informe um e-mail válido."),

  mensagem: z.string().max(300, "A mensagem deve ter no máximo 300 caracteres."),

  anexo: z
    .custom<FileList | File>()
    .optional()
    .refine((file) => {
      if (!file) return true;
      const f = file instanceof FileList ? file[0] : file;
      return f.size <= MAX_FILE_SIZE;
    }, "O arquivo deve ter no máximo 5MB.")
    .refine((file) => {
      if (!file) return true;
      const f = file instanceof FileList ? file[0] : file;
      return ACCEPTED_TYPES.includes(f.type);
    }, "Formato inválido. Envie PDF, DWG, DXF, JPG ou PNG."),
});

export type ContactFormData = z.infer<typeof contactSchema>;