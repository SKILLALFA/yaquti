import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Lifestyle() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="Lifestyle">
      <SectionHeading
        title="Lifestyle"
        subtitle="Quiet confidence and environmental luxury"
        className="mb-5 md:mb-6"
      />

      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4 lg:gap-5">
          {/* House - Left */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] md:aspect-[4/3] md:col-span-5 lg:aspect-[16/11]">
            <Image
              src="/images/lifestyle_house_exterior.png"
              alt="Modern house exterior"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          {/* Kitchen - Right */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px] md:col-span-7 lg:aspect-[16/9]">
            <Image
              src="/images/lifestyle_kitchen_interior.png"
              alt="Minimalist kitchen"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4 lg:gap-5">
          {/* Gym - Left wide */}
          <div className="relative col-span-2 aspect-[16/9] w-full overflow-hidden rounded-[16px] md:col-span-6 lg:aspect-auto lg:h-[360px]">
            <Image
              src="/images/lifestyle_gym_interior.png"
              alt="Gym interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Woman - Middle portrait */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] md:col-span-3 lg:aspect-auto lg:h-[360px]">
            <Image
              src="/images/lifestyle_woman_portrait.png"
              alt="Woman portrait"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-top"
            />
          </div>
          {/* Man - Right portrait */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] md:col-span-3 lg:aspect-auto lg:h-[360px]">
            <Image
              src="/images/lifestyle_man_portrait.png"
              alt="Man portrait"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
