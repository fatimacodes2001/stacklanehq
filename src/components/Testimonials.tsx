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
            title="What clients say after the PoC demo"
            description="Real feedback from engineering and digital leaders who worked with our embedded team."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.15}>
          {testimonials.map((t) => {
            const client = getClientById(t.companyId);
            return (
              <StaggerItem key={t.name}>
                <blockquote className="card-shine flex h-full flex-col rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/20">
                  {client && (
                    <div className="mb-5">
                      <ClientLogo client={client} size="sm" />
                    </div>
                  )}
                  <div className="mb-4 text-accent" aria-hidden="true">★★★★★</div>
                  <p className="flex-1 text-lg leading-relaxed text-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-border pt-6">
                    <cite className="not-italic">
                      <div className="font-semibold">{t.name}</div>
                      <div className="mt-0.5 text-sm text-muted">
                        {t.role} · {t.company}
                      </div>
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
