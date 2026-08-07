import SectionShell from "@/components/ui/SectionShell";
import Breadcrumb from "@/components/pricing/Breadcrumb";
import { CATEGORY, METRICS } from "./category-data";

export default function CategoryHero() {
  return (
    <>
      <Breadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/action#featured" },
          { label: CATEGORY.name },
        ]}
      />
      <SectionShell variant="standard" background="bg-parchment" ariaLabel="Category">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-taupe md:text-xs">
              Category
            </p>
            <h1 className="font-serif text-[2.75rem] leading-[1.04] tracking-tight text-ink md:text-[4rem] lg:text-[4.75rem]">
              Four ways to take
              <br />
              one root. <span className="text-accent">No more.</span>
            </h1>
            <p className="mt-5 max-w-[62ch] text-base leading-[1.6] text-taupe md:text-[17px]">
              Every product here is <span className="text-ink">{CATEGORY.latin}</span>, standardised
              and named to the supplier. They differ by dose, by extract, and by what time of day
              they suit. Nothing here is a blend, and nothing is here because it sells.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-x-5 gap-y-6 border-t border-border pt-6 sm:grid-cols-2">
            {METRICS.map((m) => (
              <div key={m.label}>
                <dt className="mb-1.5 text-[11px] uppercase tracking-[0.14em] text-taupe">
                  {m.label}
                </dt>
                <dd className="m-0 font-serif text-[1.625rem] leading-[1.1] text-ink">
                  {m.value}
                  <span className="mt-1 block font-sans text-[12.5px] tracking-normal text-taupe">
                    {m.note}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionShell>
    </>
  );
}
