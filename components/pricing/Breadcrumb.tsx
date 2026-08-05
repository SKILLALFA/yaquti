import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Breadcrumb({
  trail,
}: {
  trail: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-parchment pt-5 md:pt-6">
      <Container>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-taupe">
          {trail.map((crumb, i) => (
            <li key={crumb.label} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-taupe/50">
                  /
                </span>
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  prefetch={false}
                  className="transition-colors hover:text-accent"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-ink">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
