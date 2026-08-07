import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "@/components/pricing/SectionIntro";
import { NOT_STOCKED } from "./category-data";

export default function NotStocked() {
  return (
    <SectionShell variant="standard" background="bg-[#1f2933]" ariaLabel="Not on this shelf">
      <SectionIntro
        tone="dark"
        eyebrow="Not on this shelf"
        title="What we removed from this category."
      />

      <ul className="mt-9 grid list-none grid-cols-1 gap-x-14 p-0 md:grid-cols-2">
        {NOT_STOCKED.map((item) => (
          <li
            key={item}
            className="break-inside-avoid py-2 font-serif text-[1.25rem] text-white/45 line-through decoration-1 md:text-[1.5rem] lg:text-[1.875rem]"
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-9 max-w-[56ch] border-l-2 border-accent pl-5 text-[14.5px] leading-[1.6] text-white/70">
        <b className="font-medium text-white">Nine products in 2025, four now.</b> Each of these was
        either impossible to dose honestly or sold on a claim we could not put a number against. The
        gummies were the hardest to drop — they were the best sellers.
      </p>
    </SectionShell>
  );
}
