"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContactModal } from "@/components/ContactModal";
import { StacklaneLogo } from "@/components/StacklaneLogo";

const nav = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/90 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="transition-opacity hover:opacity-90">
          <StacklaneLogo size="sm" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ContactModal
          triggerLabel="Have a chat"
          triggerClassName="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
        />
      </div>
    </motion.header>
  );
}
