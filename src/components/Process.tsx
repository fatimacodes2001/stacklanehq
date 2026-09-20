import { demoWeeks, pocDeliverables, siteConfig } from "@/lib/content";
import { ContactModal } from "@/components/ContactModal";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Process() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="section-divider mx-auto mb-24 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="How it works"
            title={`$${siteConfig.demoPrice} USD until you're satisfied. Then we embed.`}
            description="In fourteen days our engineers work inside your team and go live with a PoC demo of your migrated stack. No discovery phase. No slide deck. Runnable infrastructure in your cloud account."
            align="center"
          />
        </Reveal>

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-2" stagger={0.15}>
          {demoWeeks.map((week) => (
            <StaggerItem key={week.week}>
              <div className="card-shine relative rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm">
                <div className="absolute -left-3 top-8 h-6 w-6 rounded-full bg-accent shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
                <div className="mb-6 flex items-center gap-4 pl-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-mono text-lg font-bold text-accent ring-1 ring-accent/30">
                    W{week.week}
                  </div>
                  <h3 className="text-xl font-semibold">{week.title}</h3>
                </div>
                <ul className="space-y-3 pl-4">
                  {week.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-accent/20 bg-surface/60 p-8 backdrop-blur-sm md:p-12">
            <p className="text-center text-lg font-medium">
              Your PoC demo deliverables after 14 days
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {pocDeliverables.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/20 bg-background/50 px-4 py-2 text-sm transition-colors hover:border-accent/40 hover:bg-accent/5"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <ContactModal
                triggerLabel="Have a chat"
                triggerClassName="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
