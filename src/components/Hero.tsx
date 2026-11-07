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

const loop = [
  { n: "01", title: "The product", detail: "A person starts the job in the app, not in a side chat." },
  { n: "02", title: "The agent", detail: "It reads the repo, the docs, and what production is doing." },
  { n: "03", title: "The review", detail: "A person approves before a reply, a doc, or a change lands." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <StacklaneLogo size="lg" />
        </motion.div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              {siteConfig.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-2 text-sm text-muted"
            >
              {siteConfig.locations.join(" · ")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl"
            >
              {siteConfig.heroTitle}
              <span className="mt-2 block animated-gradient-text">{siteConfig.heroAccent}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
            >
              {siteConfig.heroDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <ContactModal triggerLabel="Have a chat" />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-base font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-surface-elevated"
              >
                See how it works →
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-accent/30 bg-surface/80 p-5 shadow-[0_0_48px_rgba(34,211,238,0.1)] backdrop-blur-sm md:p-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Agent in the loop
            </p>
            <ol className="mt-4 space-y-3">
              {loop.map((step, index) => (
                <li key={step.n}>
                  <div className="rounded-xl border border-border bg-background/70 p-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-accent">{step.n}</span>
                      <p className="font-semibold">{step.title}</p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
                  </div>
                  {index < loop.length - 1 ? (
                    <div className="flex justify-center py-1 text-accent" aria-hidden="true">
                      ↓
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </motion.aside>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface/90 px-5 py-5">
              <dt className="font-mono text-2xl font-bold text-accent md:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
