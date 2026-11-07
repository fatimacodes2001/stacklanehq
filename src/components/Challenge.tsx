import { challengePoints } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Challenge() {
  return (
    <section id="why-us" className="relative py-24">
      <div className="section-divider mx-auto mb-24 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              label="Why Stacklane"
              title="A working proof of concept in 14 days. Then we embed."
              description="Most firms sell a roadmap and staff it at $150 to $350 per hour. We embed with your team, wire the setup, and show it working before you scale spend."
            />
            <p className="mt-6 text-lg text-muted">
              We cost less than local Australian, Dubai, and US consultancies.
              Senior oversight stays on the work. Your timezone. Your tools.
            </p>
          </Reveal>

          <Stagger className="space-y-3" stagger={0.08}>
            {challengePoints.map((point) => (
              <StaggerItem key={point.traditional}>
                <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-surface/80 p-4 backdrop-blur-sm transition-colors hover:border-accent/20">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400/80">✕</span>
                    <span className="text-sm text-muted line-through decoration-red-400/40">
                      {point.traditional}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span className="text-sm font-medium">{point.ours}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
