"use client";

import { NAV_LINKS, Routes } from "@/constants";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname, isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden flex-1 border-t border-white/10 px-4 pb-6 overflow-auto">
      <div className="flex flex-col gap-3 py-4">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="w-full rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Button asChild onClick={() => setIsOpen(false)}>
          <Link href={Routes.AnmixAI}>Start for free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
