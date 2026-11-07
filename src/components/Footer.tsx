import { siteConfig } from "@/lib/content";
import { StacklaneLogo } from "@/components/StacklaneLogo";

const footerNav = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/80 bg-surface/30 py-14 backdrop-blur-sm">
      <div className="section-divider mx-auto mb-14 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <StacklaneLogo size="md" />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm text-muted">
              {siteConfig.locations.join(" · ")}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Navigate
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {footerNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                {siteConfig.contactPhoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-border/60 pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.footerCredit}.
        </p>
      </div>
    </footer>
  );
}
