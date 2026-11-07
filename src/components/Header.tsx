"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { serviceNav } from "@/lib/content";
import { ContactModal } from "@/components/ContactModal";
import { StacklaneLogo } from "@/components/StacklaneLogo";

const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Why us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const chatClass =
  "rounded-full bg-accent px-3 py-2 text-sm font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] sm:px-4";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/80 bg-background/95 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#" className="shrink-0 transition-opacity hover:opacity-90" onClick={close}>
          <StacklaneLogo size="sm" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          <div className="group relative">
            <a href="#services" className="text-sm text-muted transition-colors hover:text-accent">
              Services
            </a>
            <div className="invisible absolute left-0 top-full z-50 min-w-52 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-xl border border-border bg-surface p-2 shadow-xl">
                {serviceNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-elevated hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "✕" : "☰"}
          </button>
          <ContactModal triggerLabel="Have a chat" triggerClassName={chatClass} />
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 py-4 xl:hidden">
          <a href="#services" onClick={close} className="block py-2 text-sm font-medium">
            Services
          </a>
          <div className="mb-2 ml-3 border-l border-border pl-3">
            {serviceNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="block py-1.5 text-sm text-muted"
              >
                {item.label}
              </a>
            ))}
          </div>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="block py-2 text-sm text-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </motion.header>
  );
}
