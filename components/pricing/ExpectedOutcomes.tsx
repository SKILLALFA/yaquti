import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const STAGES = [
  { label: "Week 1–2", note: "Baseline. Nothing yet.", filled: true },
  { label: "Week 4", note: "First reported change.", filled: true },
  { label: "Week 8", note: "Consistent effect window.", filled: true },
  { label: "Week 12+", note: "Full effect, if it suits you.", filled: false },
];

function Dot({ filled }: { filled: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent ${
        filled ? "bg-accent" : "bg-cream"
      }`}
    />
  );
}

export default function ExpectedOutcomes() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="Expected outcomes">
      <SectionIntro
        eyebrow="Expected outcomes"
        title="What changes, and when."
        description="Stated honestly. Over-promising here is what drives refunds and one-star reviews."
      />

      {/* Mobile: vertical timeline */}
      <ol className="mt-8 flex flex-col md:hidden">
        {STAGES.map((stage, i) => (
          <li key={stage.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <Dot filled={stage.filled} />
              {i < STAGES.length - 1 && <span className="w-px flex-1 bg-border" aria-hidden="true" />}
            </div>
            <div className={i < STAGES.length - 1 ? "pb-7" : ""}>
              <p className="-mt-1 text-[15px] font-medium text-ink">{stage.label}</p>
              <p className="mt-1 text-[14px] text-taupe">{stage.note}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal timeline. The rail spans dot-centre to dot-centre,
          i.e. half a column in from each edge of the 4-column grid. */}
      <ol className="relative mt-10 hidden grid-cols-4 md:grid">
        <span
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-[calc(1.75rem+0.4375rem)] h-px -translate-y-1/2 bg-border"
        />
        {STAGES.map((stage) => (
          <li key={stage.label} className="relative flex flex-col items-center px-2 text-center">
            <p className="h-7 text-[15px] font-medium text-ink">{stage.label}</p>
            <Dot filled={stage.filled} />
            <p className="mt-4 text-[14px] text-taupe">{stage.note}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
