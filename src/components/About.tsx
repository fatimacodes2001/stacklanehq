import { aboutStats, credentials, siteConfig } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-divider mx-auto mb-24 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            label="About us"
            title="Senior engineers. Global reach. Local rates."
            description="We are a 10+ person consulting team with 5+ years across Australian and US Data and ML industries. We embed in your team across your timezone, from hubs in the US, Australia, Dubai, and Pakistan."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.08}>
          {aboutStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-2xl border border-border bg-surface/80 p-6 text-center backdrop-blur-sm">
                <div className="font-mono text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-2 text-sm text-muted">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Global delivery hubs
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteConfig.locations.map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-sm font-medium"
                >
                  {loc}
                </span>
              ))}
            </div>
            <p className="mt-4 text-muted">
              We work embedded in your Slack, your standups, and your timezone.
              Same senior talent as top-tier consultancies at a fraction of the cost.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.06}>
          {credentials.map((cred) => (
            <StaggerItem key={cred}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface-elevated/80 p-5 backdrop-blur-sm">
                <span className="mt-0.5 text-accent">✓</span>
                <span className="text-muted">{cred}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
