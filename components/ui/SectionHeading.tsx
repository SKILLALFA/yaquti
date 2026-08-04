import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.08em] text-taupe">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-base text-taupe text-balance md:text-lg">{subtitle}</p>}
      {description && (
        <p className="mt-4 max-w-2xl text-sm text-taupe md:text-base">{description}</p>
      )}
    </div>
  );
}
