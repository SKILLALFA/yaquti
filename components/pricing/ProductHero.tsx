"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import Stars from "./Stars";
import { PRODUCT } from "./product";

type Plan = "subscribe" | "once";

export default function ProductHero() {
  const [activeImage, setActiveImage] = useState(0);
  const [plan, setPlan] = useState<Plan>("subscribe");
  const [qty, setQty] = useState(1);

  const total = plan === "subscribe" ? PRODUCT.subscriptionPrice : PRODUCT.price;

  return (
    <section className="w-full bg-parchment pb-4 pt-5 sm:pb-5 md:pb-6 md:pt-6 lg:pb-8" aria-label="Product">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* ── Gallery ── */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[12px] border border-border bg-gradient-to-br from-white to-parchment">
              <Image
                src={PRODUCT.gallery[activeImage].src}
                alt={PRODUCT.gallery[activeImage].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 right-4 rounded-pill bg-white/90 px-4 py-1.5 text-[13px] text-ink shadow-sm">
                360&deg;
              </span>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3 md:gap-4">
              {PRODUCT.gallery.map((shot, i) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-current={i === activeImage}
                  className={`relative aspect-square overflow-hidden rounded-[10px] border transition-colors ${
                    i === activeImage
                      ? "border-accent"
                      : "border-border hover:border-taupe/50"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── Buy box ── */}
          <div>
            <div className="flex items-center gap-3">
              <Stars rating={PRODUCT.rating} size={16} />
              <span className="text-[15px] font-medium text-ink">{PRODUCT.rating}</span>
              <span aria-hidden="true" className="text-taupe/50">
                &middot;
              </span>
              <span className="text-[15px] text-taupe">
                {PRODUCT.reviewCount} verified reviews
              </span>
            </div>

            <h1 className="mt-4 whitespace-pre-line font-serif text-[2.5rem] font-bold leading-[1.08] tracking-tight text-ink md:text-[3rem]">
              {PRODUCT.headline}
            </h1>

            <p className="mt-3 max-w-xl text-base leading-[1.6] text-taupe md:text-[17px]">
              {PRODUCT.summary}
            </p>

            <div className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-serif text-[2.75rem] leading-none text-ink">
                ${PRODUCT.price}
              </span>
              <span className="text-[15px] text-taupe">
                {PRODUCT.perServing}
                <span aria-hidden="true" className="mx-2 text-taupe/50">
                  &middot;
                </span>
                {PRODUCT.count}
                <span aria-hidden="true" className="mx-2 text-taupe/50">
                  &middot;
                </span>
                {PRODUCT.supply}
              </span>
            </div>

            {/* Purchase options */}
            <fieldset className="mt-6">
              <legend className="sr-only">Purchase options</legend>

              <label
                className={`flex cursor-pointer items-start gap-3 rounded-[10px] border p-4 transition-colors ${
                  plan === "subscribe"
                    ? "border-accent bg-white"
                    : "border-border bg-white/60 hover:border-taupe/40"
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  value="subscribe"
                  checked={plan === "subscribe"}
                  onChange={() => setPlan("subscribe")}
                  className="mt-1 h-4 w-4 shrink-0 accent-accent"
                />
                <span className="flex-1">
                  <span className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="text-[17px] text-ink">Reserve monthly</span>
                      <span className="rounded-[4px] bg-accent px-2 py-0.5 text-[11px] uppercase tracking-[0.1em] text-white">
                        Allocated
                      </span>
                    </span>
                    <span className="text-[17px] text-ink">${PRODUCT.subscriptionPrice}</span>
                  </span>
                  <span className="mt-1 block text-[15px] text-taupe">
                    Held for you each batch. Adjust or cancel anytime.
                  </span>
                </span>
              </label>

              <label
                className={`mt-3 flex cursor-pointer items-start gap-3 rounded-[10px] border p-4 transition-colors ${
                  plan === "once"
                    ? "border-accent bg-white"
                    : "border-border bg-white/60 hover:border-taupe/40"
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  value="once"
                  checked={plan === "once"}
                  onChange={() => setPlan("once")}
                  className="mt-1 h-4 w-4 shrink-0 accent-accent"
                />
                <span className="flex-1">
                  <span className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[17px] text-ink">Single bottle</span>
                    <span className="text-[17px] text-ink">${PRODUCT.price}</span>
                  </span>
                  <span className="mt-1 block text-[15px] text-taupe">One-time purchase.</span>
                </span>
              </label>
            </fieldset>

            {/* Quantity + CTA */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center justify-between gap-2 rounded-button border border-border bg-white px-2 py-2 sm:w-[132px]">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:text-accent disabled:opacity-40"
                  disabled={qty <= 1}
                >
                  <Minus size={16} aria-hidden="true" />
                </button>
                <span aria-live="polite" className="min-w-[1.5rem] text-center text-[15px] text-ink">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  aria-label="Increase quantity"
                  className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:text-accent"
                >
                  <Plus size={16} aria-hidden="true" />
                </button>
              </div>

              <button
                type="button"
                className="flex-1 rounded-button bg-accent px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-parchment"
              >
                Add to cart
              </button>
            </div>

            <p className="mt-4 text-center text-[15px] text-taupe sm:text-left">
              {`$${total * qty} total — shipping included`}
              <span aria-hidden="true" className="mx-2 text-taupe/50">
                &middot;
              </span>
              60-day money-back guarantee
            </p>

            {/* Assurances */}
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-2">
              {PRODUCT.assurances.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[15px] font-medium text-ink">{item.title}</p>
                    <p className="text-[13px] text-taupe">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
