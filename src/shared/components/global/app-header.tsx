import Image from "next/image";
import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";
import logo from "@/shared/assets/logo.png";
import { CtaButton } from "../ui/app-button";
import HeaderNavigation from "./navigation";

const AppHeaderContactInfo = () => {
  const email = "realiza@caldeiraria.com.br";
  const phone = "(11) 99999-9999";

  return (
    <div className="w-full bg-muted text-white">
      <div className="w-full max-w-7xl mx-auto flex justify-end gap-4 py-2 px-6">
        <div className="flex items-center gap-1">
          <MdEmail />
          <small className="md:text-p">{email}</small>
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
      className="max-h-13 lg:max-h-22 w-auto  lg:col-span-2 justify-self-start -ml-5.5 md:-ml-8"
      priority
    />
  );
};

const HeaderCta = () => {
  return (
    <CtaButton className="justify-self-end lg:order-last lg:col-span-2 flex items-center bg-green-500! gap-2">
      <MdWhatsapp className="size-6" />
      <small className="md:text-p hidden md:inline">Fale conosco</small>
    </CtaButton>
  );
};

const AppHeader = () => {
  return (
    <header id="header" className="w-full min-h-5 flex flex-col">
      <AppHeaderContactInfo />
      <AppHeaderToolbar>
        <AppLogo />
        <HeaderNavigation />
        <HeaderCta />
      </AppHeaderToolbar>
    </header>
  );
};

export default AppHeader;
