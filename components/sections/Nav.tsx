"use client";

import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import NavLink from "@/components/ui/NavLink";

const NAV_LINKS = [
  { label: "Products", href: "#featured" },
  { label: "Science", href: "#science" },
  { label: "About", href: "#why-yaquti" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#footer" },
];

const UTILITY_LINKS = [
  { label: "Search", href: "/search", icon: Search },
  { label: "Account", href: "/account", icon: User },
  { label: "Cart", href: "/cart", icon: ShoppingBag },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-milk">
      <Container className="flex items-center justify-between py-3 md:py-4">
        <a href="/" aria-label="YAQUTI home" className="shrink-0">
          <Logo variant="dark" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          {UTILITY_LINKS.map(({ label, href, icon: Icon }) => (
            <NavLink key={href} href={href} className="flex items-center gap-2">
              <Icon size={18} strokeWidth={2} aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <NavLink href="/cart" className="flex items-center">
            <ShoppingBag size={20} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">Cart</span>
          </NavLink>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center justify-center text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-milk"
          >
            {menuOpen ? (
              <X size={24} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={24} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-border lg:hidden">
          <Container className="flex flex-col gap-6 py-6">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} className="text-base">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 border-t border-border pt-4">
              {UTILITY_LINKS.filter((l) => l.label !== "Cart").map(
                ({ label, href, icon: Icon }) => (
                  <NavLink key={href} href={href} className="flex items-center gap-3">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                    {label}
                  </NavLink>
                ),
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
