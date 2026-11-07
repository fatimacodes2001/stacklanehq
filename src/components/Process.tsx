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
            description="Seven days with our engineers in your team. The proof is an agentic slice: a workflow, a product path, or the platform under it. You accept it before an embedded engagement starts."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-accent/20 bg-surface/80 p-8 text-center backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Why seven days
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              We build with internal tooling and an AI-powered harness on Cursor and Claude Code.
              The harness holds repo context, scaffolding, checks, and the repetitive path.
              The week goes into your agents, your product, and the platform under them.
              That is what makes development seamless. Senior engineers still review the work.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-2" stagger={0.15}>
          {demoWeeks.map((week) => (
            <StaggerItem key={week.label}>
              <div className="card-shine relative rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm">
                <div className="absolute -left-3 top-8 h-6 w-6 rounded-full bg-accent shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
                <div className="mb-6 flex items-center gap-4 pl-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10 px-2 text-center font-mono text-[11px] font-bold leading-tight text-accent ring-1 ring-accent/30">
                    Days {week.label}
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
              What you have after 7 days
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
