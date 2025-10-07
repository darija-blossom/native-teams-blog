"use client";

import * as React from "react";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import { MenuGroup } from "@/types/menu";

interface MobileDrawerProps {
  menuGroups: MenuGroup[];
}

export default function MobileDrawer({ menuGroups }: MobileDrawerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button
          aria-label="Open menu"
          className="text-2xl font-bold text-gray-700"
        >
          ☰
        </button>
      </DrawerTrigger>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
            <nav className="flex flex-col p-4">
              <button
                onClick={() => setOpen(false)}
                className="self-end mb-4 text-2xl text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>

              {menuGroups.map((group) => (
                <div key={group.title} className="mb-4">
                  <h3 className="font-medium text-gray-800 mb-2">
                    {group.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-blue-600"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </Drawer>
  );
}
