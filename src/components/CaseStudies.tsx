import { caseStudies, getClientById } from "@/lib/content";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ClientLogo } from "@/components/ClientLogo";
import { PageSection } from "@/components/PageSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function CaseStudies() {
  return (
    <PageSection id="case-studies" tone="raised">
      <Reveal>
        <SectionHeader
          label="Case studies"
          title="Beagle first. Then the platform. Then the product."
          description="The flagship is Beagle: Claude connected to Slack, Confluence, GitHub, and observability. Next, the Databricks platform delivered with CHI Technologies, drawn as it shipped. Then the full stack an agentic product needs."
        />
      </Reveal>

      <div className="mt-12 space-y-10">
        {caseStudies.map((study) => {
          const client = study.clientId ? getClientById(study.clientId) : undefined;
          return (
            <article
              key={study.id}
              className={`overflow-hidden rounded-2xl border bg-background/40 ${
                study.flagship ? "border-accent/40" : "border-border"
              }`}
            >
              <div className="border-b border-border p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-4">
                  {client ? (
                    <ClientLogo client={client} size="sm" />
                  ) : (
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">
                      {study.flagship ? "Flagship" : study.client}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-xs text-muted">
                      {study.industry}
                    </span>
                    <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
                      {study.cloud}
                    </span>
                    <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-xs text-muted">
                      {study.duration}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 max-w-3xl text-2xl font-bold tracking-tight md:text-3xl">
                  {study.headline}
                </h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">{study.problem}</p>
              </div>

              <div className="border-b border-border bg-surface/40 p-6 md:p-8">
                <ArchitectureDiagram kind={study.diagram} />
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">Outcomes</p>
                  <ul className="mt-4 space-y-3">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-2 text-sm leading-relaxed">
                        <span className="mt-0.5 text-accent">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">How we did it</p>
                  <ol className="mt-4 space-y-5">
                    {study.approach.map((step, stepIndex) => (
                      <li key={step.phase} className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-sm font-bold text-accent ring-1 ring-accent/30">
                          {stepIndex + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold">{step.phase}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}
