"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Serviços", href: "/servicos" },
];

const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="col-span-4 lg:col-span-8 items-center justify-items-center text-primary text-p font-medium order-last lg:order-2 mt-2 flex justify-between lg:justify-evenly w-full">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`hover:bg-primary/2 active:bg-primary/4 px-2 py-1 rounded transition-colors ${pathname === link.href ? "bg-primary/4" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
