import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const INGREDIENTS = [
  { name: "Ingredient one", latin: "Latin binomial, root", spec: "Standardised to X% · Supplier · Country", amount: "000 mg" },
  { name: "Ingredient two", latin: "Latin binomial, aerial", spec: "Standardised to X% · Supplier · Country", amount: "000 mg" },
  { name: "Ingredient three", latin: "Latin binomial, rhizome", spec: "Standardised to X% · Supplier · Country", amount: "000 mg" },
  { name: "Ingredient four", latin: "Latin binomial, fruit", spec: "Standardised to X% · Supplier · Country", amount: "00 mg" },
];

export default function Formula() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="Formula" id="formula">
      <SectionIntro
        eyebrow="Formula"
        title="Every milligram, disclosed."
        description="Proprietary blends exist to hide underdosing. Buyers who read labels already know that."
      />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 lg:grid-cols-12 lg:gap-10">
        {/* Ingredient table. min-w-0 lets this grid/flex item shrink below its
            content width so the wrapper below can actually scroll, instead of
            the table forcing the whole page wide on small screens. */}
        <div className="min-w-0 lg:col-span-8">
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-taupe">
                    Ingredient
                  </th>
                  <th className="pb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-taupe">
                    Standardisation, supplier &amp; origin
                  </th>
                  <th className="pb-3 text-right text-[11px] font-medium uppercase tracking-[0.1em] text-taupe">
                    Per serving
                  </th>
                </tr>
              </thead>
              <tbody>
                {INGREDIENTS.map((row) => (
                  <tr key={row.name} className="border-b border-border">
                    <td className="py-5 pr-4 align-top">
                      <span className="block text-[15px] font-medium text-ink md:text-base">
                        {row.name}
                      </span>
                      <span className="mt-0.5 block font-serif text-[13px] italic text-taupe md:text-sm">
                        {row.latin}
                      </span>
                    </td>
                    <td className="py-5 pr-4 align-top text-[14px] text-taupe md:text-[15px]">
                      {row.spec}
                    </td>
                    <td className="whitespace-nowrap py-5 text-right align-top text-[15px] font-medium text-ink md:text-[17px]">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[14px] text-taupe md:text-[15px]">
            No fillers, binders, flow agents or artificial colours.
          </p>
        </div>

        {/* Supplement facts panel */}
        <div className="min-w-0 lg:col-span-4">
          <div className="border-2 border-ink bg-cream p-5">
            <h3 className="font-serif text-[1.5rem] leading-none text-ink">Supplement Facts</h3>
            <p className="mt-2 text-[13px] text-ink">
              Serving size: 2 capsules
              <span aria-hidden="true" className="mx-1.5 text-taupe">
                &middot;
              </span>
              Servings per container: 30
            </p>

            <table className="mt-3 w-full border-collapse text-left">
              <thead>
                <tr className="border-y-[3px] border-ink">
                  <th className="py-1.5 text-[13px] font-semibold text-ink">Amount per serving</th>
                  <th className="py-1.5 text-right text-[13px] font-semibold text-ink">% DV</th>
                </tr>
              </thead>
              <tbody>
                {INGREDIENTS.map((row) => (
                  <tr key={row.name} className="border-b border-ink/25">
                    <td className="py-1.5 text-[13px] text-ink">
                      {row.name}
                      <span className="ml-2">{row.amount}</span>
                    </td>
                    <td className="py-1.5 text-right text-[13px] text-ink">*</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-2 border-t-[3px] border-ink pt-3">
              <p className="text-[12px] text-taupe">* Daily Value not established.</p>
              <p className="mt-1.5 text-[12px] text-taupe">
                Other ingredients: capsule material only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
