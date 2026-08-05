import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const FACETS = [
  {
    number: "01",
    title: "Where it grows",
    description: "Region, altitude and soil. The reason this origin yields a different input.",
  },
  {
    number: "02",
    title: "How it is taken",
    description: "Harvest window, plant part, extraction method, standardisation.",
  },
  {
    number: "03",
    title: "Why there is not more",
    description: "The real constraint on volume. If none exists, this is removed.",
  },
];

export default function Origin() {
  return (
    <SectionShell
      variant="standard"
      background="bg-[#1f2933]"
      ariaLabel="Origin"
      id="origin"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <SectionIntro
          tone="dark"
          eyebrow="Origin"
          title={"Rarity is a supply chain,\nnot an adjective."}
          description="Where it grew, which part of the plant, what it was standardised to, and who grew it. Named, not implied."
        />

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card">
          <Image
            src="/images/science_ashwagandha_root.png"
            alt="Whole dried botanical root from a named single-origin grower"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/15 pt-8 md:mt-12 md:grid-cols-3 md:gap-0 md:pt-10">
        {FACETS.map((facet, i) => (
          <div
            key={facet.number}
            className={i > 0 ? "md:border-l md:border-white/15 md:pl-8 lg:pl-10" : "md:pr-8 lg:pr-10"}
          >
            <p className="font-serif text-[1.75rem] leading-none text-accent">{facet.number}</p>
            <h3 className="mt-4 text-[15px] font-medium text-white md:text-base">{facet.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/60 md:text-sm">
              {facet.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
