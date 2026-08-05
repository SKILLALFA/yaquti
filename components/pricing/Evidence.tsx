import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const DOSES = [
  { name: "Ingredient one", trial: "000 mg", inProduct: "000 mg" },
  { name: "Ingredient two", trial: "000 mg", inProduct: "000 mg" },
  { name: "Ingredient three", trial: "000 mg", inProduct: "000 mg" },
];

export default function Evidence() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="Evidence">
      <SectionIntro
        eyebrow="Evidence"
        title="Dosed to the study, not to the label."
        description={'We do not say "clinically proven." The term is unregulated. We tell you the dose the trial used, and the dose in the capsule.'}
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:grid-cols-3 lg:gap-6">
        {DOSES.map((dose) => (
          <div key={dose.name} className="rounded-card border border-border bg-parchment p-6">
            <h3 className="text-[15px] font-medium text-ink md:text-base">{dose.name}</h3>
            <dl className="mt-4 flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[14px] text-taupe">Trial dose</dt>
                <dd className="text-[15px] font-medium text-ink">{dose.trial}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[14px] text-taupe">In YAQUTI</dt>
                <dd className="text-[15px] font-medium text-accent">{dose.inProduct}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
