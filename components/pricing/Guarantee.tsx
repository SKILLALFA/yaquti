import SectionShell from "@/components/ui/SectionShell";

export default function Guarantee() {
  return (
    <SectionShell
      variant="standard"
      background="bg-[#1f2933]"
      ariaLabel="Guarantee"
      containerClassName="text-center"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55 md:text-xs">
        Assurance
      </p>
      <h2 className="mt-4 font-serif text-[2.5rem] leading-none tracking-tight text-white md:text-[3.25rem]">
        Sixty days.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.6] text-white/70 md:text-[17px]">
        Finish the bottle. If it did not earn its place, write to us and we will return your money.
        The bottle stays with you.
      </p>
    </SectionShell>
  );
}
