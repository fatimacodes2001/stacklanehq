import type { ReactNode } from "react";
import { engineeringSurface, servicePillars } from "@/lib/content";
import { PageSection } from "@/components/PageSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const icons: Record<string, ReactNode> = {
  agents: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>
  ),
  product: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  data: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  org: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 0 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  ),
};

export function Services() {
  return (
    <PageSection id="services" tone="raised">
      <Reveal>
        <SectionHeader
          label="Services"
          title="Agents, then the system they need."
          description="We build agentic products and the platforms under them. Agents come first. The app, the data platform, and the operating model exist so those agents can run after we leave."
        />
      </Reveal>

      <div className="mt-12 space-y-6">
        {servicePillars.map((pillar) => {
          const lead = pillar.id === "agents" || pillar.id === "agentic-products";
          return (
            <article
              key={pillar.id}
              id={pillar.id}
              className={`scroll-mt-24 rounded-2xl border bg-background/40 p-6 md:p-8 ${
                lead ? "border-accent/40" : "border-border"
              }`}
            >
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent ring-1 ring-accent/20">
                    {icons[pillar.icon]}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{pillar.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{pillar.subtitle}</p>
                  <p className="mt-4 leading-relaxed text-muted">{pillar.description}</p>
                  <ul className="mt-5 space-y-2">
                    {pillar.bottlenecks.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted">
                        <span className="text-accent">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pillar.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">What we ship</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {pillar.delivers.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-border bg-surface/80 p-4 text-sm leading-relaxed text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl border border-border bg-background/40 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Engineering surface</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            What the agents and the products run on.
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            Frontend, backend, cloud, CI/CD, environments, and monitoring MCPs.
            Same quality bar on every layer: review, a pipeline, and a person who owns production.
            Over 10 projects have shipped this way.
          </p>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {engineeringSurface.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-border bg-surface/80 p-5">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>
    </PageSection>
  );
}
