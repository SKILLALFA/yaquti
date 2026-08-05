import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const ARTICLES = [
  {
    image: "/images/journal_bowl_food.png",
    alt: "Bowl of nutrient-dense grain salad",
    category: "Category",
    title: "An article headline that earns the reader's attention without selling.",
  },
  {
    image: "/images/journal_yoga_woman.png",
    alt: "Woman in a seated yoga stretch",
    category: "Category",
    title: "An article headline that earns the reader's attention without selling.",
  },
  {
    image: "/images/journal_main_nutrition_science.png",
    alt: "Woman reaching for a YAQUTI supplement bottle",
    category: "Category",
    title: "An article headline that earns the reader's attention without selling.",
  },
];

export default function FromTheJournal() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="From the journal">
      <SectionIntro eyebrow="From the journal" title="Tradition, science and restraint." />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-3 lg:gap-10">
        {ARTICLES.map((article, i) => (
          <article key={i} className="flex flex-col">
            <a href="/journal" className="group block">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card bg-parchment">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-accent md:text-xs">
                {article.category}
              </p>
              <h3 className="mt-2 font-serif text-[1.25rem] leading-[1.35] text-ink transition-colors group-hover:text-accent md:text-[1.375rem]">
                {article.title}
              </h3>
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
