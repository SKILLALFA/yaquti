import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "@/components/pricing/SectionIntro";
import { BATCHES } from "./category-data";

export default function BatchBoard() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="Open lots">
      <SectionIntro
        eyebrow="Open lots"
        title="Every batch currently on a shelf."
        description="Including ours, our retailers', and yours. Find the lot code on the base of the bottle and read the same report we read before release."
      />

      <div className="relative mt-8 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-[14px]">
          <thead>
            <tr className="border-b border-ink">
              {["Lot", "Product", "Filled", "Withanolides", "Heavy metals", "Status", ""].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-5 py-4 text-left text-[10.5px] font-medium uppercase tracking-[0.16em] text-taupe"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BATCHES.map((b) => (
              <tr key={b.lot} className="border-b border-border">
                <td className="px-5 py-4 tracking-[0.06em] tabular-nums text-ink">{b.lot}</td>
                <td className="px-5 py-4 text-ink">{b.product}</td>
                <td className="whitespace-nowrap px-5 py-4 tabular-nums text-ink">{b.filled}</td>
                <td className="px-5 py-4 tabular-nums text-ink">{b.withanolides}</td>
                <td className="px-5 py-4 text-ink">{b.metals}</td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-block whitespace-nowrap border px-2.5 py-1 text-[10.5px] uppercase tracking-[0.12em] ${
                      b.live ? "border-[#2C4A35] text-[#2C4A35]" : "border-border text-taupe"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <a
                    href="/testing"
                    className="inline-block whitespace-nowrap py-1 text-accent underline underline-offset-4"
                  >
                    {b.action}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
