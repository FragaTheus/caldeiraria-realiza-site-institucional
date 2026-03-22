"use client"

export const openWhatsApp = (message?: string) => {
  const number = "5511953319812";
  const text = encodeURIComponent(
    message ?? "Olá, gostaria de saber mais sobre os serviços da Realiza.",
  );
  window.open(`https://wa.me/${number}?text=${text}`, "_blank");
};
