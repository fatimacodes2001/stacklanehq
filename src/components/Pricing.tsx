import { pricingTiers, siteConfig } from "@/lib/content";
import { ContactModal } from "@/components/ContactModal";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="section-divider mx-auto mb-24 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="Pricing"
            title="AI agency rates. A fraction of local firms."
            description="Australian, Dubai, and US consultancies often bill $150 to $350 per hour. Embedded AI work starts at $30 AUD/hr after a $100 USD proof of concept."
            align="center"
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-4" stagger={0.1}>
          <StaggerItem>
            <div className="card-shine h-full rounded-2xl border border-accent/30 bg-accent/5 p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Start here
              </p>
              <div className="mt-3 font-mono text-4xl font-bold">
                ${siteConfig.demoPrice}
                <span className="text-lg text-muted"> USD</span>
              </div>
              <p className="mt-2 text-sm font-medium">Until you&apos;re satisfied</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Flat fee for the 14-day PoC. You get a working AI setup with
                our engineers embedded alongside yours. You approve it before
                any hourly work begins.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex gap-2"><span className="text-accent">✓</span> PoC go-live in 14 days</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Embedded in your team</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Your timezone</li>
              </ul>
            </div>
          </StaggerItem>

          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.level}>
              <div className="card-shine h-full rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/20">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {tier.level}
                </p>
                <div className="mt-3 font-mono text-3xl font-bold text-accent">
                  ${tier.rate}
                  <span className="text-base text-muted"> AUD/hr</span>
                </div>
                <p className="mt-2 text-sm font-medium">{tier.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{tier.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted">
            Compare: typical AU/US senior consultancy rate $200+ AUD/hr · Stacklane
            senior $40 AUD/hr · Principal $70 AUD/hr
          </p>
          <div className="mt-8 flex justify-center">
            <ContactModal
              triggerLabel="Have a chat"
              triggerClassName="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
