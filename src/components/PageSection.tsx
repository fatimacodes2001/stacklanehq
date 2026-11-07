import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  tone?: "default" | "raised";
  className?: string;
};

export function PageSection({ id, children, tone = "default", className = "" }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 md:py-24 ${
        tone === "raised" ? "border-y border-border/70 bg-surface/50" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
