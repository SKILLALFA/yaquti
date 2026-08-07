"use client";

import { useState } from "react";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "@/components/pricing/SectionIntro";
import { STACK_OPTIONS, VERDICTS } from "./category-data";

export default function StackBuilder() {
  const [picked, setPicked] = useState<string[]>([]);

  // Keep at most two; oldest drops out so a third click always works.
  const toggle = (k: string) =>
    setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k].slice(-2)));

  const verdict = picked.length === 2 ? VERDICTS[[...picked].sort().join("+")] : undefined;
  const tone = verdict?.tone;

  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="Taken together">
      <SectionIntro
        eyebrow="Taken together"
        title="Two at once, or neither."
        description="Pick any two. We will tell you when the answer is don't — including when it costs us the second sale."
      />

      <div className="mt-9 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
        <div className="bg-cream p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-taupe md:text-xs">
            Select two
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {STACK_OPTIONS.map((o) => {
              const on = picked.includes(o.key);
              return (
                <button
                  key={o.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(o.key)}
                  className={`border px-4 py-2.5 text-[13px] transition-colors ${
                    on ? "border-ink bg-ink text-cream" : "border-border text-ink hover:border-taupe"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-cream p-6">
          <div
            aria-live="polite"
            className={`min-h-[120px] border-l-2 pl-5 ${
              tone === "ok" ? "border-[#2C4A35]" : tone === "warn" ? "border-accent" : "border-border"
            }`}
          >
            {verdict && (
              <span
                className={`mb-3 inline-block border border-current px-2.5 py-0.5 text-[10.5px] uppercase tracking-[0.14em] ${
                  tone === "ok" ? "text-[#2C4A35]" : "text-accent"
                }`}
              >
                {verdict.flag}
              </span>
            )}
            <h3 className="font-serif text-[1.375rem] leading-snug text-ink">
              {verdict
                ? verdict.title
                : picked.length === 2
                  ? "No guidance yet."
                  : "Pick two to see the verdict."}
            </h3>
            <p className="mt-2 max-w-[52ch] text-[14px] leading-[1.6] text-taupe">
              {verdict
                ? verdict.body
                : picked.length === 2
                  ? "We have not seen enough of this combination to say anything useful, so we will not guess."
                  : "Most pairings in this category are redundant rather than dangerous — you end up paying twice for the same withanolides. That is worth knowing before checkout, not after."}
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
