import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import SectionHeading from "@/components/ui/SectionHeading";

const ARTICLES = [
  {
    image: "/images/journal_bowl_food.png",
    alt: "Bowl of colorful, nutrient-dense grain salad",
    eyebrow: "NUTRITION",
    title: "Scientific Longevity.\nSummary. Macro Health.",
    description:
      "Our latest clinical summaries on optimal nutrient-density for longevity.",
  },
  {
    image: "/images/journal_yoga_woman.png",
    alt: "Woman in a seated yoga stretch",
    eyebrow: "RECOVERY",
    title: "Immunity, Wellness and\nRecovery.",
    description:
      "Understanding the interplay of rest, mindfulness, and cellular regeneration.",
  },
  {
    image: "/images/journal_flexing_woman.png",
    alt: "Woman flexing, fitness portrait",
    eyebrow: "PERFORMANCE",
    title: "Mitochondrial Performance &\nFunctional Recovery.",
    description:
      "New trials on improving metabolic efficiency and muscle tissue repair.",
  },
  {
    image: "/images/journal_man_portrait.png",
    alt: "Man, fitness portrait",
    eyebrow: "MEN'S HEALTH",
    title: "Health, Hormones & Longevity.\nMen's Protocols.",
    description:
      "A scientific look at male-specific nutrient needs and balance over time.",
  },
];

function ArticleCard({
  image,
  alt,
  eyebrow,
  title,
  description,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-parchment">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <p className="mt-4 text-[13px] uppercase tracking-wide text-ink">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-serif text-[1.35rem] leading-[1.15] text-ink whitespace-pre-line">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.4] text-ink/90 text-balance">
        {description}
      </p>
      <a
        href="/journal"
        className="mt-3 inline-flex items-center gap-1 text-[15px] text-ink hover:text-accent"
      >
        <span className="underline underline-offset-4">Learn More</span>
        <span>&rarr;</span>
      </a>
    </article>
  );
}

export default function Journal() {
  return (
    <SectionShell variant="standard" background="bg-[#ffffff]" ariaLabel="Journal" id="journal">
      <SectionHeading title="Journal" />

      <div className="mt-6 grid grid-cols-1 gap-10 md:mt-8 md:grid-cols-2 lg:gap-16">
        {/* Main feature article (left) */}
        <article className="flex flex-col">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-parchment">
            <Image
              src="/images/journal_main_nutrition_science.png"
              alt="Woman reaching for a YAQUTI supplement bottle on a table"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="mt-6 text-[13px] uppercase tracking-wide text-ink">
            SCIENCE-BACKED NUTRITION
          </p>
          <h3 className="mt-2 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-ink md:text-[3rem]">
            Nutrition, Science &amp; Longevity.<br/>Recovery Recovery
          </h3>
          <p className="mt-4 max-w-lg text-[17px] leading-[1.4] text-ink/90 text-balance">
            A detailed exploration into cellular repair mechanisms and optimized
            micronutrient absorption for systemic health.
          </p>
          <a
            href="/journal"
            className="mt-5 inline-flex items-center gap-1 text-[17px] text-ink hover:text-accent"
          >
            <span className="underline underline-offset-4">Learn More</span>
            <span>&rarr;</span>
          </a>
        </article>

        {/* 2x2 article grid (right) */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
