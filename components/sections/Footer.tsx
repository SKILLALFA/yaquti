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

        {/* Newsletter & Bottom */}
        <div className="mt-10 flex flex-col gap-12 border-t border-white/20 pt-10 md:mt-14 md:flex-row md:items-start md:justify-between md:pt-14 pb-8">
          {/* Left: Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-[17px] text-white">Newsletter Signup</h3>
            <div className="mx-auto mt-5 max-w-[28rem] md:mx-0">
              <NewsletterForm />
            </div>
          </div>

          {/* Right: Socials, Copyright, Locales */}
          <div className="flex flex-col items-center gap-6 md:items-end">
            <SocialLinks className="text-white" />

            <div className="flex flex-col items-center gap-1 text-[14px] text-white/80 md:items-end">
              <p>Copyright &copy; {year} YAQUTI. All rights reserved.</p>
              <p>
                Created by{" "}
                <a
                  href="https://studiorare.com"
                  className="underline hover:text-white"
                >
                  Studio Rare
                </a>
              </p>
            </div>

            <div className="flex gap-6 text-[14px] text-white/80">
              <span>United States</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
