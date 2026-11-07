"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/content";
import { ContactModal } from "@/components/ContactModal";
import { StacklaneLogo } from "@/components/StacklaneLogo";

const stats = [
  { value: "7 days", label: "PoC demo go-live" },
  { value: "$100", label: "Until you're satisfied" },
  { value: "10+", label: "Projects delivered" },
  { value: "4 hubs", label: "US · AU · Dubai · PK" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <StacklaneLogo size="xl" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-widest text-accent"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-2 text-sm text-muted"
        >
          {siteConfig.locations.join(" · ")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl md:leading-[1.08]"
        >
          {siteConfig.heroTitle}
          <br />
          <span className="animated-gradient-text">{siteConfig.heroAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {siteConfig.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <ContactModal triggerLabel="Have a chat" />
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-surface-elevated"
          >
            See how it works →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-2xl font-bold text-accent md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
