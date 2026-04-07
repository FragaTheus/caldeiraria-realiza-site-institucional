"use client";

import Image from "next/image";
import logo from "@/shared/assets/logo.svg";
import { CtaButton } from "../ui/app-button";
import HeaderNavigation from "./navigation";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FadeInLeft, FadeInRight } from "@/shared/components/animate";
import { AppP } from "../ui/app-p";
import { AppSmall } from "../ui/app-small";
import { usePathname } from "next/navigation";

const AppHeaderContactInfo = ({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) => {
  return (
    <div className="w-full bg-muted text-white hidden md:block">
      <div className="w-full max-w-7xl mx-auto flex justify-end gap-4 px-6 py-2">
        <div className="flex items-center gap-1">
          <FaEnvelope />
          <AppSmall className="lg:text-p">{email}</AppSmall>
        </div>
        <div className="flex items-center gap-1">
          <FaPhone />
          <AppSmall>{phone}</AppSmall>
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
        className="w-full max-w-7xl h-full mx-auto py-3 grid grid-cols-2 lg:grid-cols-12 items-center px-6 m-auto "
      >
        {children}
      </div>
    </div>
  );
};

const AppLogo = () => {
  return (
    <FadeInLeft className="order-1 lg:col-span-2 lg:order-first">
      <Image
        alt="Realiza Caldeiraria Logo"
        src={logo}
        className="max-h-13 lg:max-h-22 w-auto justify-self-start"
        priority
      />
    </FadeInLeft>
  );
};

const HeaderCta = ({ ctaLabel }: { ctaLabel: string }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <FadeInRight className="order-2 lg:col-span-2 lg:order-last ">
      <CtaButton
        className={`flex items-center gap-2 bg-surface group justify-self-end ${isHome ? "" : "bg-muted! text-white"} group`}
      >
        <FaWhatsapp
          className={`size-5 lg:size-6 text-muted group-hover:text-green-500 group-active:text-green-500 ${isHome ? "" : "text-white"}`}
        />
        <AppP
          className={`inline text-muted-light font-semibold ${isHome ? "" : "text-white"}`}
        >
          {ctaLabel}
        </AppP>
      </CtaButton>
    </FadeInRight>
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
    <header
      id="header"
      className="w-full min-h-5 flex flex-col absolute top-0 left-0 z-50 "
    >
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
