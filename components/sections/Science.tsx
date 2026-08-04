import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

export default function Science() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="Science" id="science">
      <h2 className="font-serif text-[2.75rem] font-medium tracking-tight text-ink md:text-[3.25rem]">
        Science
      </h2>

      <div className="mt-6 grid grid-cols-1 items-start gap-x-8 gap-y-12 md:mt-8 md:grid-cols-2 xl:grid-cols-3">
        {/* Column 1: Ashwagandha root photo + text */}
        <div className="flex flex-col gap-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/[0.06] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/science_ashwagandha_root.png"
              alt="Whole dried ashwagandha root"
              fill
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)]">
            <h3 className="font-serif text-2xl text-ink">
              Ashwagandha root
            </h3>
            <p className="mt-3 text-base leading-[1.6] text-ink/80">
              A centuries-old adaptogen studied for its role in supporting stress
              resilience, sustained energy, and restful sleep — sourced from select
              farms and standardized for potency.
            </p>
            <a
              href="/science"
              className="mt-5 inline-block text-[15px] font-medium text-ink underline underline-offset-4 hover:text-accent"
            >
              Clinical claims &rarr;
            </a>
          </div>
        </div>

        {/* Column 2: Collagen powder photos stacked */}
        <div className="flex flex-col gap-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-black/[0.06] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/science_collagen_powder_dish.png"
              alt="Collagen powder in a glass dish"
              fill
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-black/[0.06] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/science_collagen_powder_pile.png"
              alt="Loose collagen peptide powder"
              fill
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Column 3: Collagen peptides + Collagen text blocks with botanical illustrations */}
        <div className="flex flex-col gap-10">
          {/* Collagen peptides block */}
          <div className="flex items-center gap-6 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)]">
            <div className="flex-1">
              <h3 className="font-serif text-2xl text-ink">
                Collagen peptides
              </h3>
              <p className="mt-3 text-base leading-[1.6] text-ink/80">
                Hydrolyzed for rapid absorption, our collagen peptides support
                skin elasticity, joint comfort, and connective tissue health from
                within.
              </p>
              <a
                href="/science"
                className="mt-5 inline-block text-[15px] font-medium text-ink underline underline-offset-4 hover:text-accent"
              >
                Clinical claims &rarr;
              </a>
            </div>
            <div className="relative h-48 w-32 shrink-0">
              <Image
                src="/images/collagen_peptides_illustration_clear.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 128px, 128px"
                className="object-contain object-right"
              />
            </div>
          </div>

          {/* Collagen block */}
          <div className="flex items-center gap-6 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)]">
            <div className="flex-1">
              <h3 className="font-serif text-2xl text-ink">
                Collagen
              </h3>
              <p className="mt-3 text-base leading-[1.6] text-ink/80">
                Type I and III collagen — the primary structural proteins in
                skin, hair, and nails — formulated to replenish what the body
                naturally loses with age.
              </p>
              <a
                href="/science"
                className="mt-5 inline-block text-[15px] font-medium text-ink underline underline-offset-4 hover:text-accent"
              >
                Clinical claims &rarr;
              </a>
            </div>
            <div className="relative h-56 w-32 shrink-0">
              <Image
                src="/images/collagen_illustration_clear.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 128px, 128px"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
