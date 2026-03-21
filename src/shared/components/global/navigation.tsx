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
    <nav className="col-span-4 lg:col-span-8 items-center justify-items-center text-p font-medium order-last lg:order-2 mt-2 flex justify-between lg:justify-evenly w-full">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`hover:scale-101 transition-all ${pathname === link.href ? "text-muted scale-101" : "text-muted-light"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
