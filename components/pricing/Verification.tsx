import { ArrowRight, Check } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const PANELS = [
  { title: "Heavy metals", detail: "Lead, arsenic, cadmium, mercury" },
  { title: "Microbiological", detail: "Plate count, yeast, mould, pathogens" },
  { title: "Identity & potency", detail: "Confirms species and actives" },
  { title: "Allergens", detail: "Full panel, every batch" },
];

export default function Verification() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="Verification" id="testing">
      <SectionIntro eyebrow="Verification" title={"Tested by someone\nwho is not paid by us."} />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:grid-cols-4 lg:gap-5">
        {PANELS.map((panel) => (
          <div key={panel.title} className="rounded-card border border-border bg-cream p-6">
            <Check size={24} strokeWidth={1.75} className="mb-4 text-accent" aria-hidden="true" />
            <h3 className="text-[15px] font-medium text-ink md:text-base">{panel.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-taupe">{panel.detail}</p>
          </div>
        ))}
      </div>

      <a
        href="/testing"
        className="group mt-4 flex flex-col items-start justify-between gap-3 rounded-card border border-border bg-cream px-6 py-5 transition-colors hover:border-accent/40 sm:flex-row sm:items-center lg:mt-5"
      >
        <span className="text-[15px] text-ink md:text-base">
          Certificate of analysis &mdash; batch no. 001
        </span>
        <span className="inline-flex items-center gap-2 text-[15px] font-medium text-accent">
          View the full report
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </a>
    </SectionShell>
  );
}
