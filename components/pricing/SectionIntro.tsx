import { ReactNode } from "react";

/**
 * Shared eyebrow + headline block used by every section on the product page.
 * `title` accepts newlines so headlines can break exactly where the design does.
 */
export default function SectionIntro({
  eyebrow,
  eyebrowTone = "muted",
  title,
  description,
  className = "",
  tone = "light",
}: {
  eyebrow?: string;
  eyebrowTone?: "muted" | "accent";
  title: ReactNode;
  description?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const bodyColor = tone === "dark" ? "text-white/70" : "text-taupe";
  const eyebrowColor =
    eyebrowTone === "accent"
      ? "text-accent"
      : tone === "dark"
        ? "text-white/55"
        : "text-taupe";

  return (
    <div className={className}>
      {eyebrow && (
        <p
          className={`mb-3 text-[11px] font-medium uppercase tracking-[0.12em] md:text-xs ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      {/* Newlines in `title` are hard breaks from the design, but only from md up —
          on narrow screens they collapse to spaces so the headline wraps naturally
          instead of stranding a short orphan line. */}
      <h2
        className={`whitespace-normal font-serif text-[2.25rem] leading-[1.12] tracking-tight md:whitespace-pre-line md:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-3xl text-base leading-[1.6] md:text-[17px] ${bodyColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
