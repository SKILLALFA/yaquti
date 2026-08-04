import Image from "next/image";
import { FlaskConical, Leaf, ShieldCheck, Cog, Globe2, Recycle } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import SectionHeading from "@/components/ui/SectionHeading";

const USPS = [
  {
    icon: FlaskConical,
    title: "Clinically Formulated",
    description: "Formulated by wellness experts based on peer-reviewed research.",
  },
  {
    icon: Leaf,
    title: "Premium Ingredients",
    description: "Sourced with extreme care for purity, potency, and biodiversity.",
  },
  {
    icon: ShieldCheck,
    title: "Third-Party Tested",
    description: "Independent verification ensures compliance with highest quality standards.",
  },
  {
    icon: Cog,
    title: "Manufactured with Precision",
    description: "Produced in state-of-the-art cGMP facilities for consistency.",
  },
  {
    icon: Globe2,
    title: "Transparent Sourcing",
    description: "Full visibility into origin, farming practices, and certification.",
  },
  {
    icon: Recycle,
    title: "Sustainable Packaging",
    description: "Recycled and recyclable materials for minimal environmental footprint.",
  },
];

function USPCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof FlaskConical;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)] md:p-6">
      <Icon
        size={32}
        strokeWidth={1.5}
        className="text-ink mb-4"
        aria-hidden="true"
      />
      <h3 className="mb-2 text-[15px] font-medium leading-tight text-ink md:text-base">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-ink/70 text-balance">
        {description}
      </p>
    </div>
  );
}

export default function WhyYaquti() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="Why YAQUTI" id="why-yaquti">
      <SectionHeading
        title="Why YAQUTI"
        subtitle="Science-backed wellness. Quiet luxury. Radical transparency."
      />

      <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-12 lg:gap-8">
        {/* Left: Science Meets Nature image card */}
        <div className="flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)] md:col-span-5">
          <div className="px-6 py-8 text-center md:px-8 md:py-10">
            <h3 className="font-serif text-[1.75rem] font-medium text-ink md:text-3xl">
              Science Meets Nature
            </h3>
          </div>
          <div className="relative w-full flex-1 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
            <Image
              src="/images/science_ingredient_flatlay.png"
              alt="Annotated flatlay of ashwagandha root, hydrolyzed collagen, and beetroot extract"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>

        {/* Right: 3x2 USP cards grid + Collage */}
        <div className="flex flex-col gap-6 md:col-span-7 lg:gap-8">
          {/* 3x2 USP cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
            {USPS.map((usp) => (
              <USPCard
                key={usp.title}
                icon={usp.icon}
                title={usp.title}
                description={usp.description}
              />
            ))}
          </div>

          {/* Bottom lifestyle collage */}
          <div className="relative w-full flex-1 overflow-hidden rounded-3xl border border-black/[0.06] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_24px_-4px_rgba(0,0,0,0.06)] min-h-[200px] md:min-h-[250px] lg:min-h-[300px]">
            <Image
              src="/images/why_yaquti_lifestyle_collage.png"
              alt="Collage of modern architecture, professional kitchen, gym, and professionals"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
