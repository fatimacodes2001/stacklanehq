import { getClientById, testimonials } from "@/lib/content";
import { ClientLogo } from "@/components/ClientLogo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24">
      <div className="section-divider mx-auto mb-24 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="Reviews"
            title="A client quote, and a case note."
            description="CHI Technologies, in their words. Dubai Health Authority, as our case-study summary. We do not print a name a client did not give us."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.15}>
          {testimonials.map((t) => {
            const client = getClientById(t.companyId);
            const isQuote = t.kind === "quote";
            return (
              <StaggerItem key={t.companyId}>
                <blockquote className="card-shine flex h-full flex-col rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/20">
                  {client && (
                    <div className="mb-5">
                      <ClientLogo client={client} size="sm" />
                    </div>
                  )}
                  {isQuote ? (
                    <div className="mb-4 text-accent" aria-hidden="true">★★★★★</div>
                  ) : (
                    <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                      Case-study summary
                    </p>
                  )}
                  <p className="flex-1 text-lg leading-relaxed text-muted">
                    {isQuote ? `“${t.body}”` : t.body}
                  </p>
                  <footer className="mt-6 border-t border-border pt-6">
                    <cite className="not-italic">
                      <div className="font-semibold">{t.name}</div>
                      <div className="mt-0.5 text-sm text-muted">
                        {t.role}
                        {t.company !== t.role ? ` · ${t.company}` : ""}
                      </div>
                      {t.note ? (
                        <p className="mt-3 text-xs leading-relaxed text-muted">{t.note}</p>
                      ) : null}
                    </cite>
                  </footer>
                </blockquote>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
