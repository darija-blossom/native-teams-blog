"use client";

import { usePathname } from "next/navigation";
import FooterCta from "./FooterCta";
import FooterNewsletter from "./FooterNewsletter";
import FooterMain from "./FooterMain";

export default function Footer() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <footer className="w-full">
      {isHomePage && <FooterCta />}
      <FooterNewsletter />
      <FooterMain />
    </footer>
  );
}
