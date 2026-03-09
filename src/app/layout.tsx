import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Realiza Caldeiraria - Caldeiraria em Itaquaquecetuba | Serviços de Caldeiraria SP",
  description:
    "Realiza Caldeiraria é uma empresa especializada em serviços de caldeiraria industrial e comercial em Itaquaquecetuba, SP. Soldas, estruturas metálicas, tubulações e mais. Entre em contato: (11) 4040-5589",
  keywords: [
    "caldeiraria",
    "caldeiraria Itaquaquecetuba",
    "caldeiraria SP",
    "serviços de caldeiraria",
    "solda industrial",
    "estruturas metálicas",
    "tubulações industriais",
    "caldeiraria industrial",
    "Realiza Caldeiraria",
  ],
  authors: [{ name: "Realiza Caldeiraria" }],
  creator: "Realiza Caldeiraria",
  publisher: "Realiza Caldeiraria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://realizacaldeiraria.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Realiza Caldeiraria - Caldeiraria em Itaquaquecetuba",
    description:
      "Empresa especializada em serviços de caldeiraria industrial e comercial em Itaquaquecetuba, SP. Qualidade e compromisso.",
    url: "https://realizacaldeiraria.com.br",
    siteName: "Realiza Caldeiraria",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realiza Caldeiraria - Caldeiraria em Itaquaquecetuba",
    description:
      "Empresa especializada em serviços de caldeiraria industrial e comercial em Itaquaquecetuba, SP.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Itaquaquecetuba" />
        <meta name="geo.position" content="-23.486389;-46.348611" />
        <meta name="ICBM" content="-23.486389, -46.348611" />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
