import Link from "next/link";
import SectionShell from "@/components/ui/SectionShell";
import NewsletterForm from "@/components/ui/NewsletterForm";
import SocialLinks from "@/components/ui/SocialLinks";

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "All Products", href: "#featured" },
      { label: "Science", href: "#science" },
      { label: "Journal", href: "#journal" },
      { label: "Featured", href: "#featured" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Be Rare", href: "#why-yaquti" },
      { label: "Science-backed", href: "#science" },
      { label: "Transparency", href: "#why-yaquti" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping", href: "/support/shipping" },
      { label: "FAQ", href: "/support/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <SectionShell
      as="footer"
      variant="footer"
      background="bg-[#1f2933]"
      ariaLabel="Footer"
      id="footer"
    >
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        {/* Be Rare. tagline */}
        <h2 className="text-center font-serif text-[4rem] text-[#f8f7f5] md:text-[5.5rem] lg:text-[7rem] leading-none">
          Be Rare.
        </h2>

        {/* Link columns */}
        <div className="mt-10 border-t border-white/20 pt-10 md:mt-14 md:pt-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:gap-x-12">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-[17px] text-white">
                  {column.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        prefetch={false}
                        className="text-[15px] text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter & Socials */}
        <div className="mt-10 flex flex-col items-center gap-8 border-t border-white/20 pt-10 md:mt-14 md:flex-row md:items-center md:justify-between md:pt-14">
          <div className="text-center md:text-left">
            <h3 className="text-[17px] text-white">Newsletter Signup</h3>
            <div className="mx-auto mt-5 max-w-[28rem] md:mx-0">
              <NewsletterForm />
            </div>
          </div>

          <SocialLinks className="text-white" />
        </div>

        {/* Legal bar */}
        <div className="mt-10 border-t border-white/10 pt-8 pb-4 md:mt-14">
          {/* YAQUTI wordmark */}
          <div className="mb-6 flex justify-center">
            <span className="font-serif text-[1.5rem] tracking-[0.15em] text-white/25">
              YAQUTI
            </span>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col items-center gap-4 text-[13px] text-white/50 md:flex-row md:justify-between">
            {/* Left — copyright + attribution */}
            <div className="flex flex-col items-center gap-1 text-center md:flex-row md:gap-2 md:text-left">
              <span>Copyright &copy; {year} YAQUTI. All rights reserved.</span>
              <span className="hidden text-white/30 md:inline">&middot;</span>
              <span>
                Created by{" "}
                <a
                  href="https://studiorare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white/50"
                >
                  Studio Rare
                </a>
              </span>
            </div>

            {/* Right — region + language */}
            <div className="flex items-center gap-2 text-white/40">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
              </svg>
              <span>United States</span>
              <span className="text-white/20">|</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
