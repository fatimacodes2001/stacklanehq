import { siteConfig } from "@/lib/content";
import { ContactModal } from "@/components/ContactModal";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="section-divider mx-auto mb-24 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface/80 p-10 text-center backdrop-blur-sm md:p-16">
            <div className="shimmer-border absolute inset-x-0 top-0 h-px" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />

            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Get started
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Start with an agentic proof.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              A conversation first. ${siteConfig.demoPrice} USD for the 7-day proof,
              until you are satisfied. Then an embedded team.
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ContactModal
                triggerLabel="Have a chat"
                triggerClassName="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              />
              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="inline-flex items-center justify-center rounded-full border border-border px-10 py-4 text-lg font-medium transition-colors hover:border-accent/40 hover:bg-surface-elevated"
              >
                {siteConfig.contactPhoneDisplay}
              </a>
            </div>

            <p className="relative mt-6 text-sm text-muted">
              {siteConfig.contactEmail} · {siteConfig.locations.join(" · ")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
