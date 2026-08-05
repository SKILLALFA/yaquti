import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

export default function WhoMakesThis() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="Who makes this">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 lg:gap-12">
        {/* Source image is a wide 1.88:1 frame with the subject right of centre,
            so it stays landscape here — a portrait crop would cut him out. */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-card md:col-span-5">
          <Image
            src="/images/founder_image.png"
            alt="The founder of YAQUTI addressing an audience from a stage"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-center"
          />
        </div>

        <div className="md:col-span-7">
          <SectionIntro
            eyebrow="Who makes this"
            title={"A name, a face,\nand an address."}
            description="The founder, the cGMP facility, its FDA registration, and where it sits. Anonymity is the single loudest scam signal in this category — so we remove it."
          />

          <div className="mt-8">
            <p className="font-serif text-[1.5rem] leading-none text-ink">Signature</p>
            <p className="mt-2 text-[14px] text-taupe md:text-[15px]">Founder, YAQUTI</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
