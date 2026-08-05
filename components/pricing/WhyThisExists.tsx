import { Check } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const PILLARS = [
  {
    title: "Clinically researched",
    description: "Standardised extract, studied at the dose we use.",
  },
  {
    title: "Optimal potency",
    description: "Stated actives, disclosed to the milligram.",
  },
  {
    title: "Purity assured",
    description: "Tested per lot for metals, microbes and identity.",
  },
];

export default function WhyThisExists() {
  return (
    <SectionShell
      variant="standard"
      background="bg-parchment"
      ariaLabel="Why this exists"
      id="why-this-exists"
    >
      <SectionIntro
        eyebrow="Why this exists"
        title={"The reason this product\nwas made at all."}
        description="Two or three sentences of founder-level honesty about the gap in the category and why the existing options were not good enough. This is the section every luxury brand has and every dropshipper skips."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:grid-cols-3 lg:gap-6">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-card border border-border bg-cream p-6 md:p-7"
          >
            <Check
              size={28}
              strokeWidth={1.75}
              className="mb-5 text-accent"
              aria-hidden="true"
            />
            <h3 className="text-[15px] font-medium leading-tight text-ink md:text-base">
              {pillar.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-taupe">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
