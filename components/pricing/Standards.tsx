import { Check, Minus, X } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

type Mark = "yes" | "partial" | "no";

const COLUMNS = ["YAQUTI", "Typical premium", "Mass market"];

const ROWS: { label: string; marks: [Mark, Mark, Mark] }[] = [
  { label: "Full dosage disclosed", marks: ["yes", "partial", "no"] },
  { label: "Named single origin", marks: ["yes", "no", "no"] },
  { label: "Per-lot third-party COA", marks: ["yes", "partial", "no"] },
  { label: "Clinical dose matched", marks: ["yes", "partial", "no"] },
  { label: "No proprietary blends", marks: ["yes", "yes", "no"] },
  { label: "Batch-limited release", marks: ["yes", "no", "no"] },
];

function MarkIcon({ mark, emphasised }: { mark: Mark; emphasised: boolean }) {
  const label = mark === "yes" ? "Yes" : mark === "partial" ? "Sometimes" : "No";
  const tone = emphasised ? "text-white" : "text-white/35";

  return (
    <span className="inline-flex items-center justify-center" title={label}>
      <span className="sr-only">{label}</span>
      {mark === "yes" && <Check size={18} strokeWidth={2} className={tone} aria-hidden="true" />}
      {mark === "partial" && <Minus size={18} strokeWidth={2} className={tone} aria-hidden="true" />}
      {mark === "no" && <X size={18} strokeWidth={2} className={tone} aria-hidden="true" />}
    </span>
  );
}

export default function Standards() {
  return (
    <SectionShell
      variant="standard"
      background="bg-[#1f2933]"
      ariaLabel="How this compares"
    >
      <SectionIntro tone="dark" eyebrow="Final purchase confidence" title="Uncompromising standards." />

      {/* `relative` makes this the containing block for the absolutely-positioned
          sr-only labels inside the cells. Without it they resolve against the
          initial containing block, escape this scroll container's clipping, and
          drag the whole page into horizontal scroll on narrow screens. */}
      <div className="relative mt-8 overflow-x-auto md:mt-10">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <caption className="sr-only">
            YAQUTI compared with typical premium and mass-market supplements
          </caption>
          <thead>
            <tr className="border-b border-white/15">
              <th className="w-2/5 pb-4" />
              {COLUMNS.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={`pb-4 text-center text-[13px] font-medium md:text-sm ${
                    i === 0
                      ? "bg-white/[0.06] tracking-[0.12em] text-white"
                      : "text-white/60"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label} className="border-b border-white/10">
                <th
                  scope="row"
                  className="py-4 pr-4 text-left text-[14px] font-normal text-white/90 md:text-[15px]"
                >
                  {row.label}
                </th>
                {row.marks.map((mark, i) => (
                  <td
                    key={COLUMNS[i]}
                    className={`py-4 text-center ${i === 0 ? "bg-white/[0.06]" : ""}`}
                  >
                    <MarkIcon mark={mark} emphasised={i === 0} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
