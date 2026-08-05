"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Stars from "./Stars";
import { PRODUCT } from "./product";

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reveal once the main buy box has scrolled out of reach.
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-[60] border-b border-border bg-cream/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="flex items-center justify-between gap-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative hidden h-11 w-11 shrink-0 overflow-hidden rounded-[8px] bg-parchment sm:block">
            <Image
              src={PRODUCT.gallery[0].src}
              alt=""
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[15px] font-medium text-ink">{PRODUCT.name}</p>
            <p className="truncate text-[13px] text-taupe">
              {PRODUCT.count} &middot; {PRODUCT.supply}
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Stars rating={PRODUCT.rating} size={14} />
          <span className="text-[14px] text-taupe">
            {PRODUCT.rating} ({PRODUCT.reviewCount})
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <span className="text-[17px] font-medium text-ink">
            ${PRODUCT.subscriptionPrice}
          </span>
          <button
            type="button"
            tabIndex={visible ? 0 : -1}
            className="rounded-button bg-accent px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:px-7"
          >
            Add to cart
          </button>
        </div>
      </Container>
    </div>
  );
}
