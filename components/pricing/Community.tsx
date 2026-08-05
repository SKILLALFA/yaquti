import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const SHOTS = [
  { src: "/images/yaquti_lifestyle_01.png", alt: "A YAQUTI bottle on a kitchen shelf" },
  { src: "/images/yaquti_lifestyle_02.png", alt: "A YAQUTI bottle beside a morning routine" },
  { src: "/images/yaquti_lifestyle_03.png", alt: "A YAQUTI bottle held in hand" },
  { src: "/images/yaquti_lifestyle_04.png", alt: "A YAQUTI bottle on a bathroom counter" },
  { src: "/images/lifestyle_kitchen_interior.png", alt: "A YAQUTI bottle in a home interior" },
];

export default function Community() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="From the community">
      <SectionIntro eyebrow="From the community" title="Real bottles, real shelves." />

      <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-5 md:gap-4">
        {SHOTS.map((shot) => (
          <div
            key={shot.src}
            className="relative aspect-square w-full overflow-hidden rounded-card bg-cream"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
