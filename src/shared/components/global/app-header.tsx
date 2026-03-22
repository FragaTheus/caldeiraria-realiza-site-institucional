import Image from "next/image";
import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";
import logo from "@/shared/assets/logo.png";
import { CtaButton } from "../ui/app-button";
import HeaderNavigation from "./navigation";

const AppHeaderContactInfo = ({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) => {
  return (
    <div className="w-full bg-muted text-white">
      <div className="w-full max-w-7xl mx-auto flex justify-end gap-4 py-2 px-4">
        <div className="flex items-center gap-1">
          <MdEmail />
          <small className="lg:text-p">{email}</small>
        </div>
        <div className="flex items-center gap-1">
          <MdPhone />
          <small>{phone}</small>
        </div>
      </div>
    </div>
  );
};

const AppHeaderToolbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div
        id="header-toolbar"
        className="w-full max-w-7xl h-full mx-auto py-3  grid grid-cols-2 lg:grid-cols-12 items-center px-6"
      >
        {children}
      </div>
    </div>
  );
};

const AppLogo = () => {
  return (
    <Image
      alt="Realiza Caldeiraria Logo"
      src={logo}
      className="max-h-13 lg:max-h-22 w-auto  lg:col-span-2 justify-self-start -ml-5.5 lg:-ml-8"
      priority
    />
  );
};

const HeaderCta = ({ ctaLabel }: { ctaLabel: string }) => {
  return (
    <CtaButton className="justify-self-end lg:order-last lg:col-span-2 flex items-center gap-2">
      <MdWhatsapp className="size-5 lg:size-6" />
      <small className="lg:text-p inline">{ctaLabel}</small>
    </CtaButton>
  );
};

const AppHeader = ({
  email,
  phone,
  ctaLabel,
  links,
}: {
  email: string;
  phone: string;
  ctaLabel: string;
  links: { label: string; href: string }[];
}) => {
  return (
    <header id="header" className="w-full min-h-5 flex flex-col">
      <AppHeaderContactInfo email={email} phone={phone} />
      <AppHeaderToolbar>
        <AppLogo />
        <HeaderNavigation links={links} />
        <HeaderCta ctaLabel={ctaLabel} />
      </AppHeaderToolbar>
    </header>
  );
};

export default AppHeader;
