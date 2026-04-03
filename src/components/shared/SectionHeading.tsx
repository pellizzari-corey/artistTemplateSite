/*
 * SECTION HEADING — Reusable bold heading with geometric accent.
 * Used across all pages for consistent section titles.
 */

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accentColor?: "coral" | "yellow" | "slate";
}

const accentClasses = {
  coral: "bg-coral",
  yellow: "bg-yellow",
  slate: "bg-slate-brand",
};

export default function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  accentColor = "coral",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      {tag && (
        <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <div className={`w-3 h-3 ${accentClasses[accentColor]}`} />
          <span className="font-[var(--font-display)] font-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-muted-foreground text-base md:text-lg leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
