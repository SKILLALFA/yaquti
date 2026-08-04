import { ReactNode } from "react";
import Container from "./Container";

export type SectionVariant = "micro" | "standard" | "footer";

// Standard rhythm: each section owns only its top/bottom padding.
// `standard` uses symmetrical padding for balanced whitespace (py approach).
// `micro` is a thin utility strip that sits flush against adjacent sections.
// `footer` gets extra bottom padding for breathing room before page end.
const variantPadding: Record<SectionVariant, string> = {
  micro: "py-2 md:py-3 lg:py-4",
  standard: "py-6 sm:py-8 md:py-10 lg:py-12",
  footer: "py-6 sm:py-8 md:py-10 lg:py-12 pb-6",
};

export default function SectionShell({
  children,
  variant = "standard",
  background,
  className = "",
  containerClassName = "",
  as = "section",
  ariaLabel,
  id,
}: {
  children: ReactNode;
  variant?: SectionVariant;
  background?: string;
  className?: string;
  containerClassName?: string;
  as?: "section" | "header" | "footer" | "div";
  ariaLabel?: string;
  id?: string;
}) {
  const Tag = as;
  return (
    <Tag
      className={`w-full ${background ?? ""} ${variantPadding[variant]} ${className}`}
      aria-label={ariaLabel}
      id={id}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
