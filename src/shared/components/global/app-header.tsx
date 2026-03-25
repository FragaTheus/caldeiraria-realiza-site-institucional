"use client";

import Image from "next/image";
import logo from "@/shared/assets/logo.svg";
import { CtaButton } from "../ui/app-button";
import HeaderNavigation from "./navigation";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import AnimateLogo from "@/shared/animate/animate-logo";
import AnimateCtaHeader from "@/shared/animate/animate-cta";

const AppHeaderContactInfo = ({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) => {
  return (
    <div className="w-full bg-muted text-white hidden md:block">
      <div className="w-full max-w-7xl mx-auto flex justify-center lg:justify-end gap-4 p-4">
        <div className="flex items-center gap-1">
          <FaEnvelope />
          <small className="lg:text-p">{email}</small>
        </div>
        <div className="flex items-center gap-1">
          <FaPhone />
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
    <AnimateLogo>
      <Image
        alt="Realiza Caldeiraria Logo"
        src={logo}
        className="max-h-13 lg:max-h-22 w-auto  lg:col-span-2 justify-self-start"
        priority
      />
    </AnimateLogo>
  );
};

const HeaderCta = ({ ctaLabel }: { ctaLabel: string }) => {
  return (
    <AnimateCtaHeader>
      <CtaButton className="flex items-center gap-2 bg-surface group">
        <FaWhatsapp className="size-5 lg:size-6 text-muted group-hover:text-green-500 group-active:text-green-500" />
        <p className="inline text-muted-light font-semibold">{ctaLabel}</p>
      </CtaButton>
    </AnimateCtaHeader>
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
      className="w-full min-h-5 flex flex-col absolute top-0 left-0 z-50"
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
