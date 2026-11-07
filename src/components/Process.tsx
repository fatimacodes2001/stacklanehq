import { demoWeeks, pocDeliverables, siteConfig } from "@/lib/content";
import { ContactModal } from "@/components/ContactModal";
import { PageSection } from "@/components/PageSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Process() {
  return (
    <PageSection id="how-it-works">
      <Reveal>
        <SectionHeader
          label="How it works"
          title={`$${siteConfig.demoPrice} USD until you're satisfied. Then we embed.`}
          description="Seven days with our engineers in your team. The proof is an agentic slice: a workflow, a product path, or the platform under it. You accept it before an embedded engagement starts."
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 grid gap-6 rounded-2xl border border-accent/25 bg-surface/70 p-6 md:grid-cols-[200px_minmax(0,1fr)] md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Why seven days</p>
          <p className="leading-relaxed text-muted">
            We build with internal tooling and an AI-powered harness on Cursor and Claude Code.
            The harness holds repo context, scaffolding, checks, and the repetitive path.
            The week goes into your agents, your product, and the platform under them.
            That is what makes development seamless. Senior engineers still review the work.
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-8 grid gap-6 lg:grid-cols-2" stagger={0.12}>
        {demoWeeks.map((week) => (
          <StaggerItem key={week.label} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/80 p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Days {week.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{week.title}</h3>
              <ul className="mt-5 space-y-3">
                {week.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.12}>
        <div className="mt-8 rounded-2xl border border-border bg-surface/60 p-6 md:p-8">
          <p className="font-medium">What you have after 7 days</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {pocDeliverables.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ContactModal
              triggerLabel="Have a chat"
              triggerClassName="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(34,211,238,0.35)]"
            />
          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}
