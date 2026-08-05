import { Check, X } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";

const FOR = [
  "High-output professionals",
  "Long working weeks and travel",
  "Those who read the label first",
];

const NOT_FOR = ["Anyone under 18", "Pregnant or nursing", "Managing a condition without advice"];

export default function ForWhom() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="Who this is for">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
        {/* For you */}
        <div className="md:pr-10 lg:pr-16">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-accent md:text-xs">
            For you
          </p>
          <h2 className="font-serif text-[1.875rem] leading-tight tracking-tight text-ink md:text-[2.25rem]">
            Who it is for
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {FOR.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-ink md:text-[17px]">
                <Check
                  size={17}
                  strokeWidth={2.25}
                  className="mt-1 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Not for you */}
        <div className="md:border-l md:border-border md:pl-10 lg:pl-16">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-taupe md:text-xs">
            Not for you
          </p>
          <h2 className="font-serif text-[1.875rem] leading-tight tracking-tight text-ink md:text-[2.25rem]">
            Who it is not for
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {NOT_FOR.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-taupe md:text-[17px]">
                <X
                  size={17}
                  strokeWidth={2}
                  className="mt-1 shrink-0 text-taupe/50"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
