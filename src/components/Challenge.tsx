import { aboutStats, challengePoints } from "@/lib/content";
import { PageSection } from "@/components/PageSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Challenge() {
  return (
    <PageSection id="why-us">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <Reveal>
          <SectionHeader
            label="Why Stacklane"
            title="A working agentic proof in 7 days. Then we embed."
            description="Most firms leave a roadmap. We leave something you can run: an agent in a real workflow, on a product and a platform your team can keep."
          />
          <p className="mt-5 max-w-xl text-muted">
            Senior review stays on the work. Your timezone. Your tools.
            The data platform and the app are there because the agents need them.
          </p>
        </Reveal>

        <Stagger className="grid content-start gap-3" stagger={0.06}>
          <StaggerItem>
            <div className="grid grid-cols-2 gap-3 px-1 text-xs font-medium uppercase tracking-widest text-muted">
              <span>Usual path</span>
              <span className="text-accent">With us</span>
            </div>
          </StaggerItem>
          {challengePoints.map((point) => (
            <StaggerItem key={point.traditional}>
              <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-surface/80 p-4">
                <p className="text-sm text-muted">{point.traditional}</p>
                <p className="text-sm font-medium">{point.ours}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
        {aboutStats.map((stat) => (
          <div key={stat.label} className="bg-surface/90 px-4 py-5 text-center">
            <dt className="font-mono text-2xl font-bold text-accent">{stat.value}</dt>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </PageSection>
  );
}
