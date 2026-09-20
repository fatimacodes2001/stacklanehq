"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-bg absolute inset-0 opacity-50" />

      {/* Floating gradient orbs */}
      <div className="orb orb-1 absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/25 blur-[120px]" />
      <div className="orb orb-2 absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="orb orb-3 absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/15 blur-[100px]" />
      <div className="orb orb-1 absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[80px]" />

      {/* Animated beam */}
      <motion.div
        className="absolute left-1/2 top-0 h-[600px] w-px -translate-x-1/2 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scan line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(6,8,15,0.9))]" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(34,211,238, 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
