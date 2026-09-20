import type { ReactNode } from "react";
import { nichePillars } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const icons: Record<string, ReactNode> = {
  layers: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0 4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0-4.179 2.25" />
    </svg>
  ),
  pipeline: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  agent: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="section-divider mx-auto mb-24 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="Services"
            title="Three pillars. One niche. Deep expertise."
            description="We specialise in large-scale Databricks on AWS and GCP, custom MLOps tooling, and Agentic Ops. Every bottleneck below is something we have solved for enterprise clients."
          />
        </Reveal>

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-3" stagger={0.12}>
          {nichePillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <article className="card-shine group flex h-full flex-col rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_48px_rgba(34,211,238,0.12)]">
                <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent ring-1 ring-accent/20 transition-transform group-hover:scale-110">
                  {icons[pillar.icon]}
                </div>

                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{pillar.subtitle}</p>
                <p className="mt-4 flex-1 leading-relaxed text-muted">{pillar.description}</p>

                <div className="mt-6">
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                    Bottlenecks we fix
                  </p>
                  <ul className="space-y-2">
                    {pillar.bottlenecks.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted">
                        <span className="text-accent">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                  {pillar.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
