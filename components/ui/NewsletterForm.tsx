"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full items-stretch"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter your email"
        className="h-12 w-full min-w-0 border border-white/30 bg-transparent px-4 text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white"
      />
      <button
        type="submit"
        className="h-12 shrink-0 bg-[#eeebe0] px-6 text-[15px] font-medium text-ink transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
      >
        Sign Up
      </button>
    </form>
  );
}
