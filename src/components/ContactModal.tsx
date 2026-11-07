"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/content";

type Props = {
  triggerClassName?: string;
  triggerLabel?: string;
};

export function ContactModal({
  triggerClassName,
  triggerLabel = "Have a chat",
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          "inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(34,211,238,0.4)]"
        }
      >
        {triggerLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close"
          />

          <div className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-1 text-muted transition-colors hover:text-foreground"
              aria-label="Close"
            >
              ✕
            </button>

            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Let&apos;s talk
            </p>
            <h2
              id="contact-modal-title"
              className="mt-2 text-2xl font-bold tracking-tight"
            >
              Start with a conversation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We charge{" "}
              <strong className="text-foreground">${siteConfig.demoPrice} USD</strong>{" "}
              for the 7-day proof until you&apos;re satisfied. You get an agentic
              slice with our engineers in your team. After that, an embedded team.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated p-4 transition-colors hover:border-accent/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  📞
                </span>
                <div>
                  <div className="text-xs text-muted">Phone</div>
                  <div className="font-semibold">{siteConfig.contactPhoneDisplay}</div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated p-4 transition-colors hover:border-accent/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  ✉️
                </span>
                <div className="min-w-0">
                  <div className="text-xs text-muted">Email</div>
                  <div className="truncate font-semibold">{siteConfig.contactEmail}</div>
                </div>
              </a>
            </div>

            <p className="mt-6 text-center text-xs text-muted">
              US · Australia · Dubai · Pakistan · We work in your timezone
            </p>
          </div>
        </div>
      )}
    </>
  );
}
