"use client";

import { clients } from "@/lib/content";
import { ClientLogo } from "@/components/ClientLogo";

export function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="scroll-mt-20 border-y border-border/80 bg-surface/60 py-8">
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted">
        Clients include PrevHealth, CHI Technologies, and Dubai Health Authority
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />
        <div className="marquee-track flex w-max items-center gap-10 px-8 md:gap-16">
          {doubled.map((client, i) => (
            <div key={`${client.id}-${i}`} className="flex h-16 items-center">
              <ClientLogo client={client} size="md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
