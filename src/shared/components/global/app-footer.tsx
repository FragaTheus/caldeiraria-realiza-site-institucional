import Link from "next/link";
import { AppSmall } from "../ui/app-small";
import { AppP } from "../ui/app-p";

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
      <AppSmall className="font-semibold text-white">{title}</AppSmall>
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
      className="flex items-center text-muted-light gap-2 hover:text-muted-light/90 justify-center"
    >
      <AppP className="whitespace-pre-line">{label}</AppP>
    </Link>
  );
};

export interface ContatosProps {
  title: string;
  items: ContatoItemProps[];
}

const Contatos = ({ title, items }: ContatosProps) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <AppP className="font-semibold text-white">{title}</AppP>
      <div className="flex flex-col gap-2 mt-2">
        {items.map((item) => (
          <ContatoItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
};

interface AppFooterProps {
  pages: FooterGridProps[];
  contatos: ContatosProps;
  copy: string;
  dev: string;
}

const AppFooter = ({ pages, contatos, copy, dev }: AppFooterProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        {pages.map((sections) => (
          <FooterGrid key={sections.title} {...sections} />
        ))}
      </div>
      <Contatos {...contatos} />

      <AppSmall className="whitespace-pre-line text-muted-light">
        {copy}
      </AppSmall>
      <AppSmall className="whitespace-pre-line text-muted-light/50">
        {dev}
      </AppSmall>
    </div>
  );
};

export default AppFooter;
