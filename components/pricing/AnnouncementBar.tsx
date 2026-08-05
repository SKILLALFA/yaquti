const ITEMS = [
  "Batch no. 001",
  "Released in full",
  "Complimentary shipping",
  "60-day returns",
];

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#1f2933]" role="region" aria-label="Store announcements">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-center gap-3 px-4 py-2.5 md:px-8 lg:px-16">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[11px] uppercase tracking-[0.14em] text-white/80 md:text-xs">
          {ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true" className="text-white/30">&middot;</span>}
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
