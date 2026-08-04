import Link from "next/link";
import { ReactNode } from "react";

const variantClasses = {
  dark: "text-black hover:opacity-70 focus-visible:ring-black focus-visible:ring-offset-milk",
  light: "text-white hover:opacity-80 focus-visible:ring-white focus-visible:ring-offset-ink",
};

export default function NavLink({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`text-sm font-medium transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
