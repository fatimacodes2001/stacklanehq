import { caseStudies, getClientById } from "@/lib/content";
import { ClientLogo } from "@/components/ClientLogo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24">
      <div className="section-divider mx-auto mb-24 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="Case studies"
            title="Real PoC migrations. Real timelines. Real demos."
            description="How we helped enterprise teams go live with a PoC demo of their migrated stack in under two weeks, with our engineers embedded alongside theirs."
          />
        </Reveal>

        <Stagger className="mt-16 space-y-16" stagger={0.2}>
          {caseStudies.map((study, index) => {
            const client = getClientById(study.clientId);
            const reversed = index % 2 === 1;

            return (
              <StaggerItem key={study.id}>
                <article className="overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
                    <div
                      className={`border-border p-8 lg:p-10 ${reversed ? "lg:[direction:ltr] lg:border-l" : "lg:border-r"} border-b lg:border-b-0`}
                    >
                      {client && (
                        <div className="mb-6">
                          <ClientLogo client={client} size="lg" />
                        </div>
                      )}

                      <div className="mb-4 flex flex-wrap gap-2">
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

                      <h3 className="text-2xl font-bold tracking-tight">{study.headline}</h3>
                      <p className="mt-4 leading-relaxed text-muted">{study.problem}</p>
                      <p className="mt-4 text-sm text-muted/70">{study.contact}</p>

                      <div className="mt-8">
                        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                          Outcomes
                        </p>
                        <ul className="space-y-2">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start gap-2 text-sm">
                              <span className="text-accent">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`bg-surface-elevated/50 p-8 lg:p-10 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                      <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
                        How we did it
                      </p>
                      <ol className="space-y-6">
                        {study.approach.map((step, stepIndex) => (
                          <li key={step.phase} className="flex gap-4">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-sm font-bold text-accent ring-1 ring-accent/30">
                              {stepIndex + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold">{step.phase}</h4>
                              <p className="mt-1 text-sm leading-relaxed text-muted">
                                {step.detail}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
