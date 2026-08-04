import { ReactNode } from "react";
import Container from "./Container";

export type SectionVariant = "micro" | "standard" | "footer";

// Standard rhythm: each section owns only its top/bottom padding.
// `standard` uses symmetrical padding for balanced whitespace (py approach).
// `micro` is a thin utility strip that sits flush against adjacent sections.
// `footer` gets extra bottom padding for breathing room before page end.
const variantPadding: Record<SectionVariant, string> = {
  micro: "py-1 md:py-2",
  standard: "py-4 sm:py-5 md:py-6 lg:py-8",
  footer: "py-4 sm:py-5 md:py-6 lg:py-8 pb-4",
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
