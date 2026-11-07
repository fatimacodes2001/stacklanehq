import { getClientById, testimonials } from "@/lib/content";
import { ClientLogo } from "@/components/ClientLogo";
import { PageSection } from "@/components/PageSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
  return (
    <PageSection id="reviews" tone="raised">
      <Reveal>
        <SectionHeader
          label="Reviews"
          title="A client quote, and a case note."
          description="CHI Technologies, in their words. Dubai Health Authority, as our case-study summary. We do not print a name a client did not give us."
        />
      </Reveal>

      <Stagger className="mt-10 grid items-stretch gap-6 md:grid-cols-2" stagger={0.12}>
        {testimonials.map((t) => {
          const client = getClientById(t.companyId);
          const isQuote = t.kind === "quote";
          return (
            <StaggerItem key={t.companyId} className="h-full">
              <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-background/40 p-6 md:p-8">
                {client ? (
                  <div className="mb-5">
                    <ClientLogo client={client} size="sm" />
                  </div>
                ) : null}
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {isQuote ? "Client quote" : "Case-study summary"}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted md:text-lg">
                  {isQuote ? `“${t.body}”` : t.body}
                </p>
                <footer className="mt-6 border-t border-border pt-5">
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
    </PageSection>
  );
}
