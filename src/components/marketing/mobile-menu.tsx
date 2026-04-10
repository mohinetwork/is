"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { NAV_LINKS, Routes } from "@/constants";
import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex flex-col flex-1 overflow-y-auto px-4 pb-4"
                >
                    <nav className="flex flex-col gap-1 mt-2">
                        {NAV_LINKS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors px-3 py-2.5 rounded-lg hover:bg-white/5"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-4 pt-4 border-t border-white/10">
                        <a href={Routes.AnmixAI} onClick={() => setIsOpen(false)}>
                            <Button variant="white" className="w-full" type="button">
                                Start for free
                            </Button>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
