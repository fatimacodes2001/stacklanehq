"use client";

import { clients } from "@/lib/content";
import { ClientLogo } from "@/components/ClientLogo";
import { Reveal } from "@/components/Reveal";

export function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative border-y border-border/80 bg-surface/40 py-12 backdrop-blur-sm">
      <Reveal>
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-widest text-muted">
          Trusted by teams at
        </p>
      </Reveal>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex w-max items-center gap-20 px-8">
          {doubled.map((client, i) => (
            <ClientLogo key={`${client.id}-${i}`} client={client} size="md" />
          ))}
        </div>
      </div>
    </section>
  );
}
