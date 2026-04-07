import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppHeader from "@/shared/components/global/app-header";
import headerContent from "@/shared/text-content/headerTextContent.json";
import FooterWrapper from "@/shared/wrapper/footer-wrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Realiza Caldeiraria - Caldeiraria, Usinagem e Metais em Itaquaquecetuba SP | Estruturas Metálicas",
  description:
    "Realiza Caldeiraria é especializada em caldeiraria industrial, usinagem de precisão, estruturas metálicas, solda industrial e serviços em metais. Atendemos Itaquaquecetuba, Guarulhos, Mogi das Cruzes, Suzano, Poá, Ferraz de Vasconcelos, Arujá e toda região metropolitana de São Paulo. Entre em contato: (11) 4040-5589",
  keywords: [
    "caldeiraria",
    "caldeiraria Itaquaquecetuba",
    "caldeiraria SP",
    "caldeiraria São Paulo",
    "caldeiraria Guarulhos",
    "caldeiraria Mogi das Cruzes",
    "caldeiraria Suzano",
    "caldeiraria zona leste",
    "serviços de caldeiraria",
    "solda industrial",
    "estruturas metálicas",
    "estruturas metálicas Itaquaquecetuba",
    "tubulações industriais",
    "caldeiraria industrial",
    "usinagem",
    "usinagem de precisão",
    "usinagem Itaquaquecetuba",
    "usinagem SP",
    "serviços em metais",
    "fabricação de estruturas metálicas",
    "metalurgia",
    "serralheria industrial",
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
    title:
      "Realiza Caldeiraria - Caldeiraria, Usinagem e Estruturas Metálicas em Itaquaquecetuba SP",
    description:
      "Empresa especializada em caldeiraria industrial, usinagem de precisão e estruturas metálicas em Itaquaquecetuba e região metropolitana de São Paulo. Qualidade, resistência e compromisso com prazos.",
    url: "https://realizacaldeiraria.com.br",
    siteName: "Realiza Caldeiraria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Realiza Caldeiraria - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realiza Caldeiraria - Caldeiraria e Usinagem em Itaquaquecetuba SP",
    description:
      "Empresa especializada em caldeiraria industrial, usinagem de precisão e estruturas metálicas em Itaquaquecetuba e região de São Paulo.",
    images: ["/logo.png"],
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
      <body
        className={`${poppins.className} antialiased max-w-screen overflow-x-hidden bg-background`}
      >
        <AppHeader
          phone={headerContent.header.contactInfo.phone}
          email={headerContent.header.contactInfo.email}
          ctaLabel={headerContent.header.headerCta.label}
          links={headerContent.header.navLinks}
        />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
