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
              title="Your last vendor quoted half a year. We deliver a PoC in 14 days."
              description="Most firms sell roadmaps and rotate juniors at $150 to $350 per hour. We embed senior engineers in your team, use intelligent tooling to accelerate delivery, and prove value with a live PoC demo before you scale spend."
            />
            <p className="mt-6 text-lg text-muted">
              We are significantly more cost effective than local Australian,
              Dubai, and US consultancies. Same senior talent. Fraction of the
              rate. Your timezone. Your cloud account.
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
