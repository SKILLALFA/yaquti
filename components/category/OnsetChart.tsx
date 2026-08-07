import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "@/components/pricing/SectionIntro";
import { ONSET } from "./category-data";

export default function OnsetChart() {
  return (
    <SectionShell variant="standard" background="bg-[#1f2933]" ariaLabel="Time to effect">
      <SectionIntro
        tone="dark"
        eyebrow="Time to effect"
        title="Nothing here works this week."
        description="Plotted from what buyers reported, not from what the studies hoped. The bar starts where people first noticed something and ends where reports stop changing."
      />

      <div className="mt-10">
        <div className="hidden grid-cols-[180px_1fr] items-center gap-5 border-b border-white/15 pb-3 text-[11px] uppercase tracking-[0.14em] text-white/55 md:grid">
          <span>Product</span>
          <span className="grid grid-cols-4 text-center">
            <span>Week 2</span>
            <span>Week 4</span>
            <span>Week 8</span>
            <span>Week 12</span>
          </span>
        </div>

        {ONSET.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-1 items-center gap-2.5 border-b border-white/15 py-5 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-5"
          >
            <span className="font-serif text-[1.1875rem] text-white">
              {row.name}
              <span className="block font-sans text-[11.5px] tracking-[0.04em] text-white/55">
                {row.when}
              </span>
            </span>
            <span className="relative block h-[34px]">
              <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
              <span
                className="absolute top-1/2 h-[9px] -translate-y-1/2 bg-accent/90"
                style={{ left: `${row.left}%`, width: `${row.width}%` }}
              >
                <span className="absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap text-[11px] text-white/75 md:text-[12px]">
                  {row.range}
                </span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
