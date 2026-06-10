"use client";

import { useMutation } from "@tanstack/react-query";
import { api, EmailRequest } from "../api/api";
import { ContactFormData } from "@/shared/schemas/contact-schema";

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () =>
      resolve((reader.result as string).split(",")[1]);

    reader.onerror = reject;
  });

export const useSendEmail = () => {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const file =
        data.anexo instanceof FileList
          ? data.anexo[0]
          : data.anexo;

      let attachmentBase64: string | undefined;
      let attachmentName: string | undefined;

      if (file) {
        attachmentBase64 = await fileToBase64(file);
        attachmentName = file.name;
      }

      const payload: EmailRequest = {
        name: data.nome,
        company: data.empresa ?? "",
        phone: data.telefone ?? "",
        email: data.email,
        message: data.mensagem,
        attachmentBase64,
        attachmentName,
      };

      return api.post("/api/v1/mail", payload);
    },
  });
};