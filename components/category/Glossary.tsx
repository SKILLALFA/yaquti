import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "@/components/pricing/SectionIntro";
import { GLOSSARY } from "./category-data";

export default function Glossary() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="Before you compare">
      <SectionIntro eyebrow="Before you compare" title="Three numbers that decide this category." />

      <dl className="mt-9 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
        {GLOSSARY.map((g) => (
          <div key={g.term} className="bg-cream p-6">
            <dt className="mb-2.5 font-serif text-[1.4375rem] leading-tight text-ink">{g.term}</dt>
            <dd className="m-0 text-[14px] leading-[1.6] text-taupe">
              {g.body}
              <span className="mt-3.5 block border-t border-border pt-3.5 text-[13px] text-ink">
                Ask a brand: <b className="font-medium text-accent">{g.ask}</b>
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
