import { siteConfig } from "@/lib/content";
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
            title="A 7-day proof. Then an embedded team."
            description={`$${siteConfig.demoPrice} USD until you are satisfied. After you accept the proof, we embed. We agree that engagement with you. There is no rate card by role.`}
            align="center"
          />
        </Reveal>

        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2" stagger={0.1}>
          <StaggerItem>
            <div className="card-shine h-full rounded-2xl border border-accent/30 bg-accent/5 p-8 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Start here
              </p>
              <div className="mt-3 font-mono text-4xl font-bold">
                ${siteConfig.demoPrice}
                <span className="text-lg text-muted"> USD</span>
              </div>
              <p className="mt-2 text-sm font-medium">7 days, until you&apos;re satisfied</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Flat fee for the proof. Our engineers embed with yours and leave an
                agentic slice you can run: a workflow, the product path, or the platform
                under it. You accept it before an embedded engagement starts.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex gap-2"><span className="text-accent">✓</span> Proof go-live in 7 days</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Embedded in your team</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Your timezone</li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card-shine h-full rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                After the proof
              </p>
              <p className="mt-3 text-3xl font-bold tracking-tight">Embedded team</p>
              <p className="mt-2 text-sm font-medium">Platform, product, and agents</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The people who built the proof stay on. They keep shipping the agent
                workflows, the product, and the data platform. Scope is agreed for that
                engagement, with you.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex gap-2"><span className="text-accent">✓</span> Same team as the proof</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Agents, product, and platform</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Handover when you want to run it</li>
              </ul>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.2}>
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
