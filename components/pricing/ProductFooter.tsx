import Link from "next/link";
import SectionShell from "@/components/ui/SectionShell";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All products", href: "/action#featured" },
      { label: "Reserve", href: "/pricing" },
      { label: "Bundles", href: "/pricing" },
      { label: "Gifting", href: "/pricing" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Origin", href: "#origin" },
      { label: "Formula", href: "#formula" },
      { label: "Testing", href: "#testing" },
      { label: "Journal", href: "/action#journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping", href: "/support/shipping" },
      { label: "Returns", href: "/support/returns" },
      { label: "Guarantee", href: "#faq" },
    ],
  },
];

export default function ProductFooter() {
  const year = new Date().getFullYear();

  return (
    <SectionShell as="footer" variant="footer" background="bg-[#1f2933]" ariaLabel="Footer">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="font-serif text-[1.5rem] tracking-[0.15em] text-white">YAQUTI</p>
          <p className="mt-3 font-serif text-[1.5rem] text-accent">Be Rare.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55 md:text-xs">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
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

      <div className="mt-10 border-t border-white/15 pt-8 md:mt-12">
        <p className="text-[13px] leading-relaxed text-white/50">
          *These statements have not been evaluated by the Food and Drug Administration. This
          product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
        <div className="mt-3 flex flex-col gap-1 text-[13px] text-white/40 md:flex-row md:items-center md:gap-3">
          <span>Consult your physician before use. Not for use by persons under 18.</span>
          <span aria-hidden="true" className="hidden text-white/20 md:inline">
            &middot;
          </span>
          <span>Distributed by [legal entity, full address].</span>
          <span aria-hidden="true" className="hidden text-white/20 md:inline">
            &middot;
          </span>
          <span>&copy; {year} YAQUTI.</span>
        </div>
      </div>
    </SectionShell>
  );
}
