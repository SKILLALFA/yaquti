import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero"
      /* Matches the flat background baked into the hero artwork, so the image
         meets the section with no visible seam. */
      style={{ backgroundColor: "#F2EFE8" }}
    >
      {/* ── Desktop layout ── */}
      <div className="relative hidden lg:block">
        {/* Full-bleed artwork; its composition already leaves the left side
            clear for the headline, so no gradient scrim is needed. */}
        <div className="absolute inset-0">
          <Image
            src="/images/YAQUTI-hero-2560x967.png"
            alt="YAQUTI Whey Protein Isolate + Concentrate in vanilla"
            fill
            priority
            sizes="100vw"
            /* contain, not cover: the artwork's flat background is the same
               colour as the section, so letterboxing is invisible, and the
               product never gets clipped on wide or short viewports. */
            className="object-contain object-right"
          />
        </div>

        {/* Text content — left side, within Container */}
        <Container className="relative z-10">
          <div className="flex min-h-[520px] items-center py-14 xl:min-h-[580px] xl:py-16">
            <div className="max-w-[520px]">
              <h1 className="font-serif text-[4.5rem] font-bold leading-[1.02] text-accent xl:text-[5.5rem]">
                Be Rare.
              </h1>
              <p className="mt-6 max-w-[440px] text-[1.4rem] leading-[1.55] text-ink">
                Science-backed nutrition for those who choose quality over
                compromise.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="/products" variant="primary">
                  Shop Collection
                </Button>
                <Button href="/about" variant="secondary">
                  Learn More &rarr;
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Mobile / Tablet: stacked layout ── */}
      <div className="lg:hidden">
        {/* The tub sits at 66.25% across this wide artwork, so a plain centre
            crop leaves it right of centre. With object-cover the position that
            centres it depends only on the aspect ratio, not the width — hence a
            single fixed 3/2 box and one constant: 89% centres it at every
            mobile size. */}
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/YAQUTI-hero-2560x967.png"
            alt="YAQUTI Whey Protein Isolate + Concentrate in vanilla"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[89%_center]"
          />
        </div>

        <Container>
          <div className="pb-10 pt-4 sm:pb-12 md:pb-14">
            <h1 className="font-serif text-5xl font-bold leading-[1.05] text-accent sm:text-6xl">
              Be Rare.
            </h1>
            <p className="mt-4 max-w-[380px] text-base leading-relaxed text-ink sm:text-lg">
              Science-backed nutrition for those who choose quality over
              compromise.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button href="/products" variant="primary">
                Shop Collection
              </Button>
              <Button href="/about" variant="secondary">
                Learn More &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
