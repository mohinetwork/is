"use client";

import { NAV_LINKS, Routes } from "@/constants";
import { cn } from "@/utils";
import Link from "next/link";
import { Button } from "../ui/button";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      )}
    >
      <div className="overflow-hidden border-t border-foreground/10 bg-background/70 backdrop-blur-md rounded-b-xl">
        <nav className="flex flex-col gap-3 px-4 py-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full justify-center" onClick={() => setIsOpen(false)}>
            <Link href={Routes.AnmixAI}>Launch ANMIX AI</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
