import { siteConfig } from "@/lib/content";
import { ContactModal } from "@/components/ContactModal";
import { PageSection } from "@/components/PageSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Pricing() {
  return (
    <PageSection id="pricing">
      <Reveal>
        <SectionHeader
          label="Engagement"
          title="A 7-day proof. Then an embedded team."
          description={`$${siteConfig.demoPrice} USD until you are satisfied. After you accept the proof, we embed. We agree that engagement with you. There is no rate card by role.`}
        />
      </Reveal>

      <Stagger className="mt-10 grid gap-6 md:grid-cols-2" stagger={0.1}>
        <StaggerItem className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Start here</p>
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
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li className="flex gap-2"><span className="text-accent">✓</span> Proof go-live in 7 days</li>
              <li className="flex gap-2"><span className="text-accent">✓</span> Embedded in your team</li>
              <li className="flex gap-2"><span className="text-accent">✓</span> Your timezone</li>
            </ul>
          </div>
        </StaggerItem>
        <StaggerItem className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/80 p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">After the proof</p>
            <p className="mt-3 text-3xl font-bold tracking-tight">Embedded team</p>
            <p className="mt-2 text-sm font-medium">Platform, product, and agents</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The people who built the proof stay on. They keep shipping the agent
              workflows, the product, and the data platform. Scope is agreed for that
              engagement, with you.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li className="flex gap-2"><span className="text-accent">✓</span> Same team as the proof</li>
              <li className="flex gap-2"><span className="text-accent">✓</span> Agents, product, and platform</li>
              <li className="flex gap-2"><span className="text-accent">✓</span> Handover when you want to run it</li>
            </ul>
          </div>
        </StaggerItem>
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-8">
          <ContactModal
            triggerLabel="Have a chat"
            triggerClassName="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(34,211,238,0.35)]"
          />
        </div>
      </Reveal>
    </PageSection>
  );
}
