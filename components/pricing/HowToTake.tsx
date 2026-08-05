import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const STEPS = [
  { numeral: "I", title: "Morning", detail: "Two capsules, stated dose, same time each day." },
  { numeral: "II", title: "With food", detail: "Why it matters for absorption." },
  { numeral: "III", title: "Consistently", detail: "The window before anything changes." },
];

export default function HowToTake() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="How to take it">
      <SectionIntro eyebrow="How to take it" title="Three minutes, once a day." />

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-10 lg:gap-10">
        {STEPS.map((step) => (
          <div key={step.numeral}>
            <p className="font-serif text-[2rem] leading-none text-accent">{step.numeral}</p>
            <h3 className="mt-4 text-[15px] font-medium text-ink md:text-base">{step.title}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-taupe md:text-[15px]">
              {step.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-card border border-accent/20 bg-accent/[0.04] p-6 md:mt-10 md:p-7">
        <h3 className="text-[15px] font-medium text-accent md:text-base">
          What you should NOT expect
        </h3>
        <p className="mt-2 max-w-4xl text-[14px] leading-[1.6] text-taupe md:text-[15px]">
          Honest time-to-effect, the known side effects, what this will not do, and who should not
          take it at all. Saying this plainly is the reason the rest of the page is believed.
        </p>
      </div>
    </SectionShell>
  );
}
