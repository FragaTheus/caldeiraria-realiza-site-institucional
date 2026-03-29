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
    <SectionLayout className="bg-muted bottom-0" id="footer">
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
      { href: "/#hero", label: "Início" },
      { href: "/#sobre", label: "Sobre" },
      { href: "/#atuacao", label: "Atuação" },
      { href: "/#como", label: "Como trabalhamos" },
    ],
  },
  {
    title: "Engenharia",
    links: [
      { href: "/engenharia#eng-intro", label: "Início" },
      { href: "/engenharia#capacity", label: "Capacidades" },
      { href: "/engenharia#eng-gallery", label: "Galeria" },
      { href: "/engenharia#eng-why", label: "Diferenciais" },
    ],
  },
  {
    title: "Qualidade",
    links: [
      { href: "/qualidade#quality-intro", label: "Início" },
      { href: "/qualidade#quality-about", label: "Sobre" },
      { href: "/qualidade#quality-certification", label: "Certificações" },
      { href: "/qualidade#quality-databook", label: "Databook" },
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
