import { ChevronDown } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";

const FAQS = [
  {
    q: "Who actually manufactures this?",
    a: "A named, FDA-registered cGMP facility. The name and address are published above, not hidden behind a fulfilment brand.",
  },
  {
    q: "Can I see the certificate of analysis?",
    a: "Yes. Every lot has a third-party COA published on this page before the batch is released. Nothing ships without one.",
  },
  {
    q: "How long before I notice anything?",
    a: "Most reported changes begin around week four, with a consistent window from week eight. Weeks one and two are baseline.",
  },
  {
    q: "What is your return process?",
    a: "Finish the bottle. If it did not earn its place, write to us within 60 days and we return your money. The bottle stays with you.",
  },
  {
    q: "How does the subscription work, and how do I cancel?",
    a: "Reserving holds your allocation from each batch. Adjust the interval, skip, or cancel at any time from your account — no email required.",
  },
  {
    q: "Who should not take this?",
    a: "Anyone under 18, anyone pregnant or nursing, and anyone managing a condition without first speaking to their physician.",
  },
];

export default function Questions() {
  return (
    <SectionShell variant="standard" background="bg-parchment" ariaLabel="Questions" id="faq">
      <SectionIntro eyebrow="Questions" title="Before you reserve." />

      <div className="mt-8 md:mt-10">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[15px] text-ink transition-colors hover:text-accent md:text-[17px] [&::-webkit-details-marker]:hidden">
              {faq.q}
              <ChevronDown
                size={18}
                className="shrink-0 text-taupe transition-transform duration-200 group-open:-rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-3xl pb-5 text-[14px] leading-[1.6] text-taupe md:text-[15px]">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
