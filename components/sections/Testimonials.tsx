import SectionShell from "@/components/ui/SectionShell";
import SectionHeading from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Since switching to YAQUTI, I've noticed a real difference in my energy through the afternoon — no crash, no jitters. It's become part of my daily routine.",
    attribution: "Ava K.",
    role: "Founder",
  },
  {
    quote:
      "The transparency is what sold me. Every dose, every source, clearly listed. It's rare to find a supplement brand that treats you like an adult.",
    attribution: "Ben T.",
    role: "Design Director",
  },
  {
    quote:
      "I've tried a dozen collagen powders. This is the first one where I actually felt the difference within six weeks — skin, joints, all of it.",
    attribution: "Chloe S.",
    role: "Chief Strategy Officer",
  },
];

function QuoteCard({
  quote,
  attribution,
  role,
}: {
  quote: string;
  attribution: string;
  role: string;
}) {
  return (
    <div className="flex flex-col bg-[#eeebe0] p-8 lg:p-10">
      {/* Huge quote mark matching design */}
      <span
        aria-hidden="true"
        className="font-serif text-[4.5rem] leading-none text-ink/70"
      >
        “
      </span>
      <p className="mt-2 flex-1 text-[17px] leading-[1.6] text-ink/90">
        {quote}”
      </p>
      <p className="mt-8 text-[15px] text-ink/90">
        &ndash; {attribution} // &ndash; {role}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionShell variant="standard" background="bg-[#f8f7f5]" ariaLabel="Testimonials">
      <div className="flex flex-col items-start gap-8 md:gap-10">
        <SectionHeading title="Testimonials" />
        
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <QuoteCard
              key={t.attribution}
              quote={t.quote}
              attribution={t.attribution}
              role={t.role}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
