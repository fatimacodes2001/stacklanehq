import type { ReactNode } from "react";
import { nichePillars } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const icons: Record<string, ReactNode> = {
  transform: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  mcp: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  ),
  org: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
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
            title="Three services. Built to run inside your org."
            description="AI-driven transformation, MCP lookup and wiring, and the org setup that makes agents stick. Skills, servers, repo access, and workflows live here, not in a strategy deck."
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
