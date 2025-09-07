"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { CircleX, Menu as LucideMenu } from "lucide-react";
import { useState } from "react";
import { HEADER_ITEMS } from "./items";
import { cn } from "@/lib";
import { useSafeUrlHash } from "@/hook";

function useActiveIndexFromHash(items: { href: string }[]) {
  const hash = useSafeUrlHash();

  const clean = hash.startsWith("#") ? hash.slice(1) : hash;
  const idx = items.findIndex((i) => i.href.replace("#", "") === clean);
  return idx === -1 ? 0 : idx; // اگر هَش نبود → اولین آیتم (Intro)
}

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const lockedIndex = useActiveIndexFromHash(HEADER_ITEMS);

  return (
    <Drawer open={open} onClose={() => setOpen(false)} direction="right">
      <button
        onClick={() => setOpen((pre) => !pre)}
        aria-label="Open menu"
        aria-expanded={open}
        className="p-2"
      >
        <LucideMenu />
      </button>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex justify-center">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <CircleX />
            </button>
          </DrawerTitle>
        </DrawerHeader>

        <ul className="flex flex-col gap-2 list-none p-0 m-0">
          {HEADER_ITEMS.map((item, idx) => {
            const isActive = idx === lockedIndex;
            return (
              <li key={item.id} role="none" className="m-0 p-2">
                <a
                  role="menuitem"
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-center text-white px-4 py-2 rounded-md select-none transition-colors text-base outline-none",
                    isActive
                      ? " bg-primary/20 "
                      : " focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};
