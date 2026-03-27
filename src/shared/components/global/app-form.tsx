"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
} from "@/shared/schemas/contact-schema";
import FormField, {
  FormTextArea,
  FormFileField,
  FormFieldProps,
} from "./form-field";
import { FaCircleNotch } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const ContactForm = ({ ctaText }: { ctaText: string }) => {
  const pathname = usePathname();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-sm w-full"
    >
      {CONTACT_FIELDS.map((field) => (
        <FormField
          key={field.name}
          {...field}
          {...register(
            field.name as keyof Omit<ContactFormData, "anexo" | "mensagem">,
          )}
          error={errors[field.name as keyof ContactFormData]?.message}
        />
      ))}

      <FormTextArea
        placeholder="Envie uma mensagem breve sobre seu projeto ou dúvida"
        rows={4}
        error={errors.mensagem?.message}
        {...register("mensagem")}
      />

      <Controller
        name="anexo"
        control={control}
        render={({ field: { onChange, ref } }) => (
          <FormFileField
            ref={ref}
            accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf"
            onChange={onChange}
            error={errors.anexo?.message}
          />
        )}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`p-2 w-full rounded-sm font-semibold hover:bg-muted-surface/95 group cursor-pointer ${pathname !== "/" ? "bg-primary text-white hover:bg-primary/80" : "bg-surface text-muted-light"}`}
      >
        {isSubmitting ? (
          <div className="flex gap-2 justify-center">
            <FaCircleNotch
              className={`animate-spin size-5 ${pathname !== "/" ? "text-white" : "text-muted"}`}
            />
            <span className="text-sm">Enviando...</span>
          </div>
        ) : (
          <div className="flex gap-2 justify-center">
            <span className="text-sm">{ctaText}</span>
          </div>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

export const CONTACT_FIELDS: FormFieldProps[] = [
  { name: "nome", type: "text", placeholder: "Nome completo" },
  { name: "empresa", type: "text", placeholder: "Nome da empresa" },
  { name: "telefone", type: "tel", placeholder: "(11) 99999-9999" },
  { name: "email", type: "email", placeholder: "email@empresa.com.br" },
];
