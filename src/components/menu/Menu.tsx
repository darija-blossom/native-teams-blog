"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";
import { MenuGroup } from "@/types/menu";

interface MobileDrawerProps {
  menuGroups: MenuGroup[];
}

export default function Menu({ menuGroups }: MobileDrawerProps) {
  return (
    <>
      <NavigationMenu className="hidden md:block relative">
        <NavigationMenuList className="flex gap-4">
          {menuGroups.map((group) => (
            <NavigationMenuItem key={group.title}>
              <NavigationMenuTrigger>{group.title}</NavigationMenuTrigger>

              <NavigationMenuContent className="p-4 bg-white shadow-lg rounded-md">
                <ul className="flex flex-col gap-2 w-68">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block px-2 py-1.5 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="block md:hidden">
        <MobileDrawer menuGroups={menuGroups} />
      </div>
    </>
  );
}
