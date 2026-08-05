import { Check } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import { TRUST_STRIP } from "./product";

export default function TrustStrip() {
  return (
    <SectionShell
      as="div"
      variant="micro"
      background="border-t border-b border-border bg-cream"
      // Stays scrollable at every width. These five labels are longer than the
      // landing page's four badges, so flipping to overflow-visible at lg pushed
      // the whole page into horizontal scroll at ~1024px.
      containerClassName="flex gap-6 overflow-x-auto lg:justify-between xl:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      ariaLabel="Purchase assurances"
    >
      {TRUST_STRIP.map((item) => (
        <span
          key={item}
          className="flex shrink-0 items-center gap-2.5 py-2 text-[15px] text-ink"
        >
          <Check size={16} strokeWidth={2.5} className="shrink-0 text-accent" aria-hidden="true" />
          {item}
        </span>
      ))}
    </SectionShell>
  );
}
