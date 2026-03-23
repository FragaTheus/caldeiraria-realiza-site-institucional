import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => {
  return (
    <Link href={href} className="text-muted-light hover:text-muted-light/90">
      {label}
    </Link>
  );
};

interface FooterGridProps {
  title: string;
  links: FooterLinkProps[];
}

const FooterGrid = ({ title, links }: FooterGridProps) => {
  return (
    <div className="flex flex-col">
      <p className="font-semibold text-white">{title}</p>
      <div className="flex flex-col gap-2 mt-2">
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
};

interface ContatoItemProps {
  href: string;
  label: string;
  Icon?: React.ElementType;
}

const ContatoItem = ({ href, label, Icon }: ContatoItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center text-muted-light gap-2 hover:text-muted-light/90"
    >
      {Icon && <Icon className="size-4 lg:size-6 text-white" />}
      <p className="whitespace-pre-line">{label}</p>
    </Link>
  );
};

export interface ContatosProps {
  title: string;
  copy: string;
  dev: string;
  items: ContatoItemProps[];
}

const Contatos = ({ title, copy, dev, items }: ContatosProps) => {
  return (
    <div className="flex flex-col order-last">
      <p className="font-semibold text-white">{title}</p>
      <div className="flex flex-col gap-2 mt-2">
        {items.map((item) => (
          <ContatoItem key={item.href} {...item} />
        ))}
        <p className="whitespace-pre-line text-muted-light">{copy}</p>
        <small className="whitespace-pre-line text-muted-light">{dev}</small>
      </div>
    </div>
  );
};

interface AppFooterProps {
  pages: FooterGridProps[];
  contatos: ContatosProps;
}

const AppFooter = ({ pages, contatos }: AppFooterProps) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8">
      {pages.map((sections) => (
        <FooterGrid key={sections.title} {...sections} />
      ))}
      <Contatos {...contatos} />
    </div>
  );
};

export default AppFooter;
