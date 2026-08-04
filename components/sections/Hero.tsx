import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero"
      style={{ backgroundColor: "#f3f0ea" }}
    >
      {/* ── Desktop layout ── */}
      <div className="relative hidden lg:block">
        {/* Product image — right-aligned, extends to viewport edge */}
        <div className="absolute inset-y-0 right-0 w-[58%] xl:w-[55%]">
          <Image
            src="/images/hero_product_bottle.png"
            alt="YAQUTI supplement bottle suspended above a stone pedestal"
            fill
            priority
            sizes="58vw"
            className="object-cover object-[center_20%]"
          />
          {/* Smooth left-edge gradient so the image blends seamlessly into the background */}
          <div
            className="absolute inset-y-0 left-0 w-40"
            style={{
              background:
                "linear-gradient(to right, #f3f0ea 0%, #f3f0eacc 40%, transparent 100%)",
            }}
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
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] md:max-w-[440px]">
          <Image
            src="/images/hero_product_bottle.png"
            alt="YAQUTI supplement bottle suspended above a stone pedestal"
            fill
            priority
            sizes="(max-width: 1023px) 85vw, 58vw"
            className="object-cover object-top"
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
