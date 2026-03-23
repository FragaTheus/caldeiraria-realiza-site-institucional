import { ContainerLayout, SectionLayout } from "../layouts/section-layout";
import contacts from "@/shared/text-content/footerContactsTextContent.json";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import AppFooter, { ContatosProps } from "../components/global/app-footer";

const FooterWrapper = () => {
  return (
    <SectionLayout className="bg-muted" id="footer">
      <ContainerLayout>
        <AppFooter pages={footerPages} contatos={footerContatos} />
      </ContainerLayout>
    </SectionLayout>
  );
};

const footerPages = [
  {
    title: "Home",
    links: [
      { href: "#header", label: "Início" },
      { href: "#hero", label: "Introdução" },
      { href: "#sobre", label: "Sobre" },
      { href: "#atuacao", label: "Atuação" },
      { href: "#como", label: "Como trabalhamos" },
    ],
  },
];

const footerContatos = {
  title: "Contatos",
  copy: contacts.copyright,
  dev: contacts.desenvolvidoPor,
  items: [
    {
      Icon: FaPhone,
      href: contacts.phone.link,
      label: contacts.phone.label,
    },
    {
      Icon: FaWhatsapp,
      href: contacts.whatsapp.link,
      label: contacts.whatsapp.label,
    },
    {
      Icon: FaInstagram,
      href: contacts.instagram.link,
      label: contacts.instagram.label,
    },
    {
      Icon: FaFacebook,
      href: contacts.facebook.link,
      label: contacts.facebook.label,
    },
    {
      Icon: FaEnvelope,
      href: contacts.email.link,
      label: contacts.email.label,
    },
  ],
} satisfies ContatosProps;

export default FooterWrapper;
