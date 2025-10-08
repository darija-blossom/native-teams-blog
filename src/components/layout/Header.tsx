"use client";

import Image from "next/image";

import Menu from "../menu/Menu";
import { Button } from "../ui/button";
import Link from "next/link";

const menuGroups = [
  {
    title: "Links Group 1",
    items: [
      { name: "Overview", href: "/overview" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Links Group 2",
    items: [
      { name: "Resources", href: "/resources" },
      { name: "Docs", href: "/docs" },
      { name: "Community", href: "/community" },
    ],
  },
];

export default function Header() {
  return (
    <header className="static top-0 z-50 w-full bg-white px-[20px] md:px-8 lg:px-[120px]">
      <div className="flex items-center justify-between h-14 md:h-20 ">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Native Teams" width={158} height={29} />
        </Link>
        <Menu menuGroups={menuGroups} />
        <Button className="hidden md:block relative rounded-full bg-[#5152FB] hover:bg-[#1E40AF] text-white">
          Get Started
        </Button>
      </div>
    </header>
  );
}
