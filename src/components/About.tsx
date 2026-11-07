import { aboutStats, credentials, siteConfig } from "@/lib/content";
import { PageSection } from "@/components/PageSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <PageSection id="about" tone="raised">
      <Reveal>
        <SectionHeader
          label="About us"
          title="A product studio with four delivery hubs."
          description="We build agentic products and the platforms they need. Over 10 projects delivered. 10+ people, with 5+ years across Australian and US data, ML, and product work. PrevHealth, CHI Technologies, and Dubai Health Authority are among the teams we have worked with. We embed from the US, Australia, Dubai, and Pakistan."
        />
      </Reveal>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
        {aboutStats.map((stat) => (
          <div key={stat.label} className="bg-background/60 px-4 py-5 text-center">
            <dt className="font-mono text-2xl font-bold text-accent">{stat.value}</dt>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl border border-border bg-background/40 p-6 md:p-8">
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
          <p className="mt-4 max-w-3xl text-muted">
            We work in your Slack, your standups, and your timezone.
            Senior review stays on the agents, the product, and the platform.
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-6 grid gap-3 sm:grid-cols-2" stagger={0.05}>
        {credentials.map((cred) => (
          <StaggerItem key={cred} className="h-full">
            <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-background/40 p-4">
              <span className="mt-0.5 text-accent">✓</span>
              <span className="text-sm leading-relaxed text-muted">{cred}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
