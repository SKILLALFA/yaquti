export type Goal = "sleep" | "stress" | "training";

export interface CategoryProduct {
  name: string;
  /** All four point at the single product page for now. */
  href: string;
  image: string;
  tag: string;
  /** Ruby tag — scarce/allocated stock. */
  tagHot?: boolean;
  use: string;
  goal: Goal;
  /** Week the first change is typically reported; used by the speed filter. */
  speed: 4 | 8;
  price: number;
  dose: string;
  standardised: string;
  costPer100: string;
  firstChange: string;
  lot: string;
  soldOut?: boolean;
  /** Ledger-only figures. */
  activesPerDay: string;
  capsules: number;
  best?: ("standardised" | "activesPerDay" | "costPer100")[];
}

export const CATEGORY = {
  name: "Ashwagandha",
  latin: "Withania somnifera",
  rating: 4.6,
  reviewCount: 412,
  nextBatch: "14 Sep",
};

export const PRODUCTS: CategoryProduct[] = [
  {
    name: "Root Extract 600",
    href: "/pricing",
    image: "/images/fc_ashwagandha_bottle.png",
    tag: "Allocated",
    tagHot: true,
    use: "Evening. The one most people should start with.",
    goal: "sleep",
    speed: 4,
    price: 78,
    dose: "600 mg",
    standardised: "5% withanolides",
    costPer100: "$2.40",
    firstChange: "Week 4",
    lot: "YQ-A240",
    activesPerDay: "30.0 mg",
    capsules: 30,
  },
  {
    name: "Root Extract 300",
    href: "/pricing",
    image: "/images/hero_product_bottle.png",
    tag: "In stock",
    use: "Twice daily. For steady load, not for sleep.",
    goal: "stress",
    speed: 8,
    price: 56,
    dose: "300 mg ×2",
    standardised: "5% withanolides",
    costPer100: "$1.87",
    firstChange: "Week 8",
    lot: "YQ-A238",
    activesPerDay: "30.0 mg",
    capsules: 60,
  },
  {
    name: "Root + Magnesium",
    href: "/pricing",
    image: "/images/fc_mens_health.png",
    tag: "Ships 14 Sep",
    use: "Two capsules, two actives, both disclosed.",
    goal: "training",
    speed: 8,
    price: 94,
    dose: "600 mg + 400 mg",
    standardised: "5% · glycinate",
    costPer100: "$2.90",
    firstChange: "Week 8",
    lot: "YQ-B112",
    soldOut: true,
    activesPerDay: "30.0 mg",
    capsules: 60,
  },
  {
    name: "Reserve Lot 12:1",
    href: "/pricing",
    image: "/images/fc_ashwagandha_hand.png",
    tag: "42 left",
    use: "One harvest, one farm, one pressing. Then gone.",
    goal: "sleep",
    speed: 4,
    price: 112,
    dose: "600 mg",
    standardised: "10% withanolides",
    costPer100: "$1.72",
    firstChange: "Week 4",
    lot: "YQ-R007",
    activesPerDay: "60.0 mg",
    capsules: 30,
    best: ["standardised", "activesPerDay", "costPer100"],
  },
];

export const METRICS = [
  { label: "In this category", value: "4", note: "Down from 9 in 2025" },
  { label: "Batches published", value: "31", note: "Every lot, since launch" },
  { label: "Cost per 100 mg active", value: "$2.40", note: "Range across the four" },
  { label: "Median time to effect", value: "Wk 4", note: "Self-reported, 412 buyers" },
];

/** left/width are percentages across a week 0–14 track. */
export const ONSET = [
  { name: "Root Extract 600", when: "Evening", left: 25, width: 38, range: "Wk 4 → 8" },
  { name: "Root Extract 300", when: "Split dose", left: 50, width: 30, range: "Wk 8 → 11" },
  { name: "Root + Magnesium", when: "Evening", left: 37, width: 34, range: "Wk 6 → 10" },
  { name: "Reserve Lot 12:1", when: "Evening", left: 12, width: 40, range: "Wk 2 → 7" },
];

export const NOT_STOCKED = [
  "Ashwagandha gummies",
  "Leaf-and-root blends",
  'Proprietary "calm complex"',
  "2,000 mg unstandardised",
  "Testosterone claims",
  "Ashwagandha + caffeine",
];

export const BATCHES = [
  { lot: "YQ-A240", product: "Root Extract 600", filled: "04 Jun 2026", withanolides: "5.4%", metals: "Pass", status: "Shipping", live: true, action: "Report" },
  { lot: "YQ-A238", product: "Root Extract 300", filled: "22 Feb 2026", withanolides: "5.1%", metals: "Pass", status: "Shipping", live: true, action: "Report" },
  { lot: "YQ-R007", product: "Reserve Lot 12:1", filled: "19 May 2026", withanolides: "10.6%", metals: "Pass", status: "42 left", action: "Report" },
  { lot: "YQ-B112", product: "Root + Magnesium", filled: "—", withanolides: "Pending", metals: "Pending", status: "Releases 14 Sep", action: "Notify me" },
  { lot: "YQ-A236", product: "Root Extract 600", filled: "08 Nov 2025", withanolides: "5.2%", metals: "Pass", status: "Sold out", action: "Report" },
];

export const GLOSSARY = [
  {
    term: "Standardisation",
    body: "The percentage of the extract that is actually withanolides, the compound the trials measured. Without it, milligrams mean nothing.",
    ask: "what percentage, verified by whom?",
  },
  {
    term: "Root versus leaf",
    body: "Leaf is cheaper and raises the withanolide percentage on paper. The clinical work was done on root.",
    ask: "which part of the plant?",
  },
  {
    term: "Cost per 100 mg active",
    body: "Price divided by the actives you actually receive per day. It reorders this entire category, and rarely in the cheap bottle's favour.",
    ask: "what is your real unit price?",
  },
];

export const STACK_OPTIONS = [
  { key: "a600", label: "Root Extract 600" },
  { key: "a300", label: "Root Extract 300" },
  { key: "mag", label: "Root + Magnesium" },
  { key: "res", label: "Reserve Lot 12:1" },
  { key: "creat", label: "Creatine (other category)" },
];

type Verdict = { tone: "ok" | "warn"; flag: string; title: string; body: string };

/** Keyed by the two selections sorted alphabetically and joined with "+". */
export const VERDICTS: Record<string, Verdict> = {
  "a300+a600": { tone: "warn", flag: "Don't", title: "Same extract, same actives", body: "You would be paying twice for identical withanolides. Pick the schedule that fits your day — 600 mg at night, or 300 mg twice — and buy one of them." },
  "a600+res": { tone: "warn", flag: "Don't", title: "Redundant, and expensive", body: "Reserve is the same root at double the standardisation. Running both puts you at 90 mg of actives a day, well past where the trials stop showing more benefit." },
  "a300+res": { tone: "warn", flag: "Don't", title: "Redundant", body: "Two ashwagandha products in one window means you cannot tell which one did anything. Run them in separate 8-week blocks instead." },
  "a600+mag": { tone: "warn", flag: "Overlapping", title: "Root + Magnesium already contains this", body: "The combination bottle has the same 600 mg inside it. Buy that one on its own, or buy the magnesium separately if you want to control the dose." },
  "a300+mag": { tone: "warn", flag: "Overlapping", title: "Doubling the root", body: "Root + Magnesium carries 600 mg of the same extract. Adding the 300 mg on top takes you to 900 mg with no evidence behind it." },
  "mag+res": { tone: "warn", flag: "Overlapping", title: "Doubling the root", body: "Both bottles carry ashwagandha. Take the Reserve for the extract and buy magnesium on its own if you want it." },
  "a600+creat": { tone: "ok", flag: "Good pairing", title: "Different mechanisms, no interaction", body: "Creatine does more for training recovery than any adaptogen. Take both, and expect the creatine to be the larger effect." },
  "a300+creat": { tone: "ok", flag: "Good pairing", title: "Different mechanisms, no interaction", body: "No interaction concern. Morning creatine, split ashwagandha — this is the most common repeat order we see." },
  "creat+mag": { tone: "ok", flag: "Good pairing", title: "No overlap", body: "Evening root and magnesium, morning creatine. Nothing here competes for the same pathway." },
  "creat+res": { tone: "ok", flag: "Good pairing", title: "No overlap", body: "Fine together. Start the Reserve first so you can attribute any change to it before adding anything else." },
};
