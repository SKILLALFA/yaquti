import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-button bg-ink text-white text-sm py-3 px-8 hover:bg-accent focus-visible:ring-offset-cream",
  secondary: "text-ink text-sm hover:text-accent focus-visible:ring-offset-cream",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
