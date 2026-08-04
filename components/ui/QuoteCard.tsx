export default function QuoteCard({
  quote,
  attribution,
  role,
}: {
  quote: string;
  attribution: string;
  role?: string;
}) {
  return (
    <div className="rounded-card bg-parchment p-6 md:p-8">
      <span aria-hidden="true" className="font-serif text-5xl leading-none text-ink">
        &ldquo;
      </span>
      <p className="mt-4 text-[15px] text-taupe">{quote}</p>
      <p className="mt-4 text-sm font-medium text-ink">
        &mdash; {attribution}
        {role && <> &nbsp;//&nbsp; &mdash; {role}</>}
      </p>
    </div>
  );
}
