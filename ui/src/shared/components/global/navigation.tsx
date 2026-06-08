"use client";

import { FadeInWithIndex } from "@/shared/components/animate";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavigation = ({
  links,
}: {
  links: { label: string; href: string }[];
}) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="col-span-4 lg:col-span-8 items-center justify-items-center text-p font-medium order-last lg:order-2 mt-4 lg:mt-2 flex justify-between lg:justify-evenly w-full">
      {links.map((link, index) => (
        <FadeInWithIndex key={index} index={index}>
          <Link
            href={link.href}
            className={`hover:scale-101 transition-all text-muted text-sm md:text-base ${isHome ? "text-white" : ""} ${pathname === link.href ? "scale-101" : "opacity-50"}`}
          >
            {link.label}
          </Link>
        </FadeInWithIndex>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
