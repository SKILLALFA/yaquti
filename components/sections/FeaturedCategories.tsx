import Image from "next/image";
import Link from "next/link";
import SectionShell from "@/components/ui/SectionShell";

const CATEGORIES = [
  { image: "/images/fc_whey_protein.png", label: "Whey Protein" },
  { image: "/images/fc_mens_health.png", label: "Men's Health" },
  { image: "/images/fc_womens_health.png", label: "Women's Health" },
  { image: "/images/fc_ashwagandha_hand.png", label: "Ashwagandha" },
  { image: "/images/fc_ashwagandha_bottle.png", label: "Ashwagandha" },
  { image: "/images/fc_beetroot.png", label: "Beetroot" },
  { image: "/images/fc_collagen.png", label: "Collagen" },
  { image: "/images/fc_skincare.png", label: "Skincare" },
];

function CategoryTile({ image, label }: { image: string; label: string }) {
  return (
    <Link href="#" className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-parchment">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-4 font-serif text-[1.35rem] leading-tight text-ink md:text-2xl">
        {label}
      </p>
    </Link>
  );
}

export default function FeaturedCategories() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="Featured categories" id="featured">
      <h2 className="font-serif text-[2rem] font-medium tracking-tight text-ink sm:text-[2.5rem] md:text-[3.25rem]">
        Featured Categories
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-8 md:grid-cols-4 md:gap-x-6 md:gap-y-12">
        {CATEGORIES.map((category, index) => (
          <CategoryTile
            key={`${category.label}-${index}`}
            image={category.image}
            label={category.label}
          />
        ))}
      </div>
    </SectionShell>
  );
}
