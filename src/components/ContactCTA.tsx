import { siteConfig } from "@/lib/content";
import { ContactModal } from "@/components/ContactModal";
import { PageSection } from "@/components/PageSection";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <PageSection id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface/80 px-6 py-12 text-center md:px-16 md:py-16">
          <div className="shimmer-border absolute inset-x-0 top-0 h-px" />
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Get started</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Start with an agentic proof.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            A conversation first. ${siteConfig.demoPrice} USD for the 7-day proof,
            until you are satisfied. Then an embedded team.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ContactModal
              triggerLabel="Have a chat"
              triggerClassName="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(34,211,238,0.35)]"
            />
            <a
              href={`tel:${siteConfig.contactPhone}`}
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-base font-medium transition-colors hover:border-accent/40 hover:bg-surface-elevated"
            >
              {siteConfig.contactPhoneDisplay}
            </a>
          </div>
          <p className="relative mt-6 text-sm text-muted">
            {siteConfig.contactEmail} · {siteConfig.locations.join(" · ")}
          </p>
        </div>
      </Reveal>
    </PageSection>
  );
}
