import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

// Placeholder lifestyle imagery until real customer photos land. Alt text
// describes what each shot actually shows rather than claiming a bottle is
// visible in it.
const SHOTS = [
  { src: "/images/yaquti_lifestyle_01.png", alt: "Modern home exterior at golden hour" },
  { src: "/images/yaquti_lifestyle_02.png", alt: "Minimalist kitchen with a marble island" },
  { src: "/images/yaquti_lifestyle_04.png", alt: "Man leaning against a wall in dark knitwear" },
  { src: "/images/lifestyle_kitchen_interior.png", alt: "Open-plan kitchen and dining room" },
];

export default function Community() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="From the community">
      <SectionIntro eyebrow="From the community" title="Real bottles, real shelves." />

      <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4 md:gap-6 lg:gap-8">
        {SHOTS.map((shot) => (
          <div
            key={shot.src}
            className="relative aspect-square w-full overflow-hidden rounded-card bg-cream"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
