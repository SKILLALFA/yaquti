import Image from "next/image";
import Link from "next/link";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const PRODUCTS = [
  { image: "/images/fc_ashwagandha_bottle.png", name: "Product name", price: "$00" },
  { image: "/images/fc_collagen.png", name: "Product name", price: "$00" },
  { image: "/images/fc_mens_health.png", name: "Product name", price: "$00" },
  { image: "/images/fc_womens_health.png", name: "Product name", price: "$00" },
];

export default function CompleteRoutine() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="Complete your routine">
      <SectionIntro eyebrow="Complete your routine" title="Built to be taken together." />

      <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4 md:gap-6">
        {PRODUCTS.map((product, i) => (
          <Link key={i} href="/pricing" prefetch={false} className="group block">
            <div className="relative aspect-square w-full overflow-hidden rounded-card border border-border bg-cream">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-3 text-[15px] font-medium text-ink md:text-base">{product.name}</p>
            <p className="mt-0.5 text-[14px] text-taupe">
              {product.price}
              <span aria-hidden="true" className="mx-1.5 text-taupe/50">
                &middot;
              </span>
              30-day supply
            </p>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
