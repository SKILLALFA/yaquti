"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import SectionShell from "@/components/ui/SectionShell";
import SectionIntro from "@/components/pricing/SectionIntro";
import { PRODUCTS, type CategoryProduct } from "./category-data";

const GOALS = [
  { v: "all", label: "All" },
  { v: "sleep", label: "Sleep" },
  { v: "stress", label: "Daytime stress" },
  { v: "training", label: "Training recovery" },
] as const;

const SPEEDS = [
  { v: 99, label: "Any" },
  { v: 4, label: "By week 4" },
  { v: 8, label: "By week 8" },
] as const;

const PRICES = [
  { v: 999, label: "Any" },
  { v: 60, label: "Under $60" },
  { v: 80, label: "Under $80" },
] as const;

function Opt({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap border px-4 py-2.5 text-[14px] transition-colors ${
        active
          ? "border-ink bg-ink text-white"
          : "border-border bg-parchment text-ink hover:border-taupe"
      }`}
    >
      {children}
    </button>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <fieldset className="min-w-0 border-0 p-0">
      <legend className="mb-3.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-taupe">
        {label}
      </legend>
      <div className="flex gap-2 overflow-x-auto pb-1.5 [scrollbar-width:thin]">{children}</div>
    </fieldset>
  );
}

function Card({ p }: { p: CategoryProduct }) {
  return (
    <article className="group relative flex flex-col gap-3.5 bg-cream p-6">
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-parchment">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width:768px) 100vw, 25vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        <span
          className={`absolute left-3 top-3 z-10 border px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] ${
            p.tagHot ? "border-accent bg-accent text-white" : "border-border bg-cream text-taupe"
          }`}
        >
          {p.tag}
        </span>
      </div>

      {/* Stretched link: covers the whole card without nesting the Reserve
          button inside an anchor, which would be invalid markup. */}
      <h3 className="font-serif text-[1.5rem] leading-tight text-ink">
        <Link
          href={p.href}
          className="transition-colors after:absolute after:inset-0 group-hover:text-accent"
        >
          {p.name}
        </Link>
      </h3>
      <p className="-mt-2 text-[13.5px] text-taupe">{p.use}</p>

      <dl className="mt-auto grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-t border-border pt-3.5 text-[13px]">
        <dt className="text-taupe">Dose</dt>
        <dd className="m-0 text-right tabular-nums text-ink">{p.dose}</dd>
        <dt className="text-taupe">Standardised</dt>
        <dd className="m-0 text-right text-ink">{p.standardised}</dd>
        <dt className="text-taupe">Per 100 mg active</dt>
        <dd className="m-0 text-right font-medium tabular-nums text-accent">{p.costPer100}</dd>
        <dt className="text-taupe">First change</dt>
        <dd className="m-0 text-right text-ink">{p.firstChange}</dd>
        <dt className="text-taupe">Lot</dt>
        <dd className="m-0 text-right tabular-nums text-ink">{p.lot}</dd>
      </dl>

      <div className="flex flex-wrap items-center justify-between gap-3.5 border-t border-border pt-4">
        <span className="font-serif text-[1.5rem] leading-none text-ink">
          ${p.price}
          <span className="mt-1 block font-sans text-[12px] tracking-normal text-taupe">
            30-day supply
          </span>
        </span>
        <button
          type="button"
          disabled={p.soldOut}
          className={`relative z-10 px-5 py-3 text-[11px] uppercase tracking-[0.16em] transition-colors ${
            p.soldOut
              ? "cursor-not-allowed border border-border text-taupe"
              : "bg-accent text-white hover:bg-[#73091f]"
          }`}
        >
          {p.soldOut ? "Join the list" : "Reserve"}
        </button>
      </div>
    </article>
  );
}

export default function CatalogBrowser() {
  const [goal, setGoal] = useState<string>("all");
  const [speed, setSpeed] = useState<number>(99);
  const [price, setPrice] = useState<number>(999);
  const [ledger, setLedger] = useState(false);
  const [compare, setCompare] = useState<string[]>([]);

  const shown = useMemo(
    () =>
      PRODUCTS.filter(
        (p) => (goal === "all" || p.goal === goal) && p.speed <= speed && p.price <= price
      ),
    [goal, speed, price]
  );

  const dirty = goal !== "all" || speed !== 99 || price !== 999;
  const reset = () => {
    setGoal("all");
    setSpeed(99);
    setPrice(999);
  };

  const toggleCompare = (name: string) =>
    setCompare((c) =>
      c.includes(name) ? c.filter((n) => n !== name) : c.length >= 3 ? c : [...c, name]
    );

  return (
    <>
      {/* ── Filters ── */}
      <SectionShell variant="standard" background="bg-cream" ariaLabel="Filter products">
        <SectionIntro eyebrow="Filter" title="Find the right one." className="mb-8" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr_1fr] lg:gap-10">
          <FilterGroup label="What you want it for">
            {GOALS.map((g) => (
              <Opt key={g.v} active={goal === g.v} onClick={() => setGoal(g.v)}>
                {g.label}
              </Opt>
            ))}
          </FilterGroup>
          <FilterGroup label="How soon it works">
            {SPEEDS.map((s) => (
              <Opt key={s.v} active={speed === s.v} onClick={() => setSpeed(s.v)}>
                {s.label}
              </Opt>
            ))}
          </FilterGroup>
          <FilterGroup label="Price">
            {PRICES.map((p) => (
              <Opt key={p.v} active={price === p.v} onClick={() => setPrice(p.v)}>
                {p.label}
              </Opt>
            ))}
          </FilterGroup>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
          <span aria-live="polite" className="text-[14.5px] text-ink">
            Showing <b className="font-semibold">{shown.length}</b> of {PRODUCTS.length}
          </span>
          {dirty && (
            <button
              type="button"
              onClick={reset}
              className="py-2 text-[13.5px] text-taupe underline underline-offset-4"
            >
              Clear filters
            </button>
          )}
        </div>
      </SectionShell>

      {/* ── Shelf / ledger ── */}
      <SectionShell variant="standard" background="bg-parchment" ariaLabel="The shelf">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
          <SectionIntro eyebrow="The shelf" title="Four bottles, compared honestly." />
          <div className="flex border border-border bg-cream" role="group" aria-label="View">
            {[
              { on: !ledger, label: "Shelf", fn: () => setLedger(false) },
              { on: ledger, label: "Spec ledger", fn: () => setLedger(true) },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                aria-pressed={b.on}
                onClick={b.fn}
                className={`px-5 py-2.5 text-[11.5px] uppercase tracking-[0.16em] transition-colors ${
                  b.on ? "bg-ink text-white" : "text-taupe hover:text-ink"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {!ledger ? (
          shown.length ? (
            /* gap-px over a border-coloured background = hairline rules, no gutters */
            <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
              {shown.map((p) => (
                <Card key={p.name} p={p} />
              ))}
            </div>
          ) : (
            <p className="py-14 text-center text-[15px] text-taupe">
              No product matches these filters. We would rather show you an empty shelf than a
              near-match.{" "}
              <button
                type="button"
                onClick={reset}
                className="text-taupe underline underline-offset-4"
              >
                Clear filters
              </button>
            </p>
          )
        ) : (
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-ink">
                  {["Product", "Dose", "Standardisation", "Actives per day", "Cost per 100 mg", "First change", "Capsules", "Price"].map(
                    (h, i) => (
                      <th
                        key={h}
                        scope="col"
                        className={`whitespace-nowrap px-5 py-4 text-[10.5px] font-medium uppercase tracking-[0.16em] text-taupe ${
                          i === 0 ? "text-left" : "text-right"
                        }`}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p) => {
                  const best = (k: NonNullable<CategoryProduct["best"]>[number]) =>
                    p.best?.includes(k) ? "font-medium text-accent" : "text-ink";
                  return (
                    <tr key={p.name} className="border-b border-border hover:bg-cream">
                      <th scope="row" className="px-5 py-4 text-left font-serif text-[1.1875rem] font-normal text-ink">
                        <Link href={p.href} className="transition-colors hover:text-accent">
                          {p.name}
                        </Link>
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 text-right tabular-nums text-ink">{p.dose}</td>
                      <td className={`whitespace-nowrap px-5 py-4 text-right tabular-nums ${best("standardised")}`}>
                        {p.standardised.split(" ")[0]}
                      </td>
                      <td className={`whitespace-nowrap px-5 py-4 text-right tabular-nums ${best("activesPerDay")}`}>
                        {p.activesPerDay}
                      </td>
                      <td className={`whitespace-nowrap px-5 py-4 text-right tabular-nums ${best("costPer100")}`}>
                        {p.costPer100}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-right text-ink">{p.firstChange}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-right tabular-nums text-ink">{p.capsules}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-right tabular-nums text-ink">${p.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-5 max-w-[80ch] text-[12.5px] text-taupe">
          {ledger
            ? "Ruby marks the best figure in each column. The $112 bottle is the cheapest per milligram of active in the category, and the $56 bottle is not the cheapest way to buy withanolides. Sticker price and value point in opposite directions here, which is the reason this table exists."
            : "Select up to three bottles to compare them side by side."}
        </p>

        {/* compare checkboxes live under the shelf so the cards stay uncluttered */}
        {!ledger && shown.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {shown.map((p) => (
              <label key={p.name} className="flex cursor-pointer items-center gap-2 py-1.5 text-[12.5px] text-taupe">
                <input
                  type="checkbox"
                  checked={compare.includes(p.name)}
                  onChange={() => toggleCompare(p.name)}
                  className="h-[18px] w-[18px] accent-[#8c0d2c]"
                />
                Compare {p.name}
              </label>
            ))}
          </div>
        )}
      </SectionShell>

      {/* ── Compare rail ── */}
      {compare.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-[70] flex flex-wrap items-center justify-between gap-4 bg-[#1f2933] px-4 py-3.5 text-white md:px-8 lg:px-16">
          <span className="text-[13.5px] text-white/75">
            <b className="font-medium text-white">{compare.length} selected</b> — {compare.join(" · ")}
          </span>
          <span className="flex flex-1 gap-2.5 sm:flex-none">
            <button
              type="button"
              onClick={() => setCompare([])}
              className="flex-1 border border-white/35 px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] sm:flex-none"
            >
              Clear
            </button>
            <button
              type="button"
              className="flex-1 border border-accent bg-accent px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] sm:flex-none"
            >
              Compare side by side
            </button>
          </span>
        </div>
      )}
    </>
  );
}
