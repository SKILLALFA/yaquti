import Logo from "@/components/ui/Logo";

export default function ComingSoon() {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 py-16 text-center">
      <Logo variant="light" />

      <p className="mt-10 text-xs font-medium uppercase tracking-[0.25em] text-white/60 md:mt-12">
        Something rare is on its way
      </p>

      <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.05] text-cream sm:text-6xl md:text-7xl">
        Coming Soon
      </h1>

      <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
        Science-backed nutrition for those who choose quality over
        compromise. We&apos;re putting the finishing touches on it.
      </p>

      <div className="mt-12 md:mt-14">
        <span
          className="animate-glow-pulse inline-flex items-center gap-2.5 rounded-pill bg-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white"
          role="status"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Coming Soon
        </span>
      </div>

      <p className="mt-16 text-xs text-white/40 md:mt-20">
        &copy; {year} YAQUTI. All rights reserved.
      </p>
    </div>
  );
}
