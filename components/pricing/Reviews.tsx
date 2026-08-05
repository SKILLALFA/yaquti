import { ArrowRight } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "./SectionIntro";
import Stars from "./Stars";
import { PRODUCT } from "./product";

const DISTRIBUTION = [
  { stars: 5, percent: 72 },
  { stars: 4, percent: 17 },
  { stars: 3, percent: 6 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 },
];

const FILTERS = [
  { label: "Verified only", options: ["Verified only", "All reviews"] },
  { label: "Most recent", options: ["Most recent", "Most helpful"] },
  { label: "Lowest rating first", options: ["Lowest rating first", "Highest rating first"] },
];

const REVIEWS = [
  {
    rating: 5,
    body: "A specific, verified review that names an outcome and a timeframe. Vague praise reads as fake to this buyer.",
    name: "Name",
    meta: "38 · Chicago · 4 months of use",
  },
  {
    rating: 3,
    body: "A three-star review, shown deliberately. It says what the product did not do. Leaving it out is what costs trust.",
    name: "Name",
    meta: "41 · Austin · 6 weeks of use",
  },
];

export default function Reviews() {
  return (
    <SectionShell variant="standard" background="bg-cream" ariaLabel="Reviews" id="reviews">
      <SectionIntro
        eyebrow="Owners"
        title={`${PRODUCT.reviewCount} reviews. Including the bad ones.`}
      />

      <div className="mt-8 grid grid-cols-1 items-start gap-8 md:mt-10 lg:grid-cols-12 lg:gap-10">
        {/* Score */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-4 lg:flex-col lg:items-start">
            <p className="font-serif text-[3.5rem] leading-none text-ink">{PRODUCT.rating}</p>
            <div>
              <Stars rating={PRODUCT.rating} size={16} />
              <p className="mt-1 text-[14px] text-taupe">
                {PRODUCT.reviewCount} verified purchases
              </p>
            </div>
          </div>
        </div>

        {/* Distribution */}
        <div className="flex flex-col gap-2 lg:col-span-5">
          {DISTRIBUTION.map((row) => (
            <div key={row.stars} className="flex items-center gap-3">
              <span className="w-3 text-right text-[13px] text-taupe">{row.stars}</span>
              <Stars rating={1} size={11} className="w-3" />
              <span className="h-1.5 flex-1 overflow-hidden rounded-pill bg-parchment">
                <span
                  className="block h-full rounded-pill bg-accent"
                  style={{ width: `${row.percent}%` }}
                />
              </span>
              <span className="w-9 text-right text-[13px] text-taupe">{row.percent}%</span>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 lg:col-span-4 lg:justify-end">
          {FILTERS.map((filter) => (
            <label key={filter.label} className="relative">
              <span className="sr-only">{filter.label}</span>
              <select
                defaultValue={filter.label}
                className="cursor-pointer appearance-none rounded-card border border-border bg-parchment py-2.5 pl-4 pr-9 text-[14px] text-ink focus-visible:border-accent focus-visible:outline-none"
              >
                {filter.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </label>
          ))}
        </div>
      </div>

      {/* Review cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {REVIEWS.map((review) => (
          <article
            key={review.meta}
            className="flex flex-col rounded-card border border-border bg-parchment p-6 md:p-7"
          >
            <Stars rating={review.rating} size={14} />
            <p className="mt-4 flex-1 font-serif text-[17px] leading-[1.5] text-ink md:text-[19px]">
              {review.body}
            </p>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[15px] font-medium text-ink">{review.name}</p>
                <p className="mt-0.5 text-[13px] text-taupe">{review.meta}</p>
              </div>
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                Verified
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <a
          href="/reviews"
          className="group inline-flex items-center gap-2 text-[15px] font-medium text-accent"
        >
          Read all {PRODUCT.reviewCount} reviews
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </SectionShell>
  );
}
