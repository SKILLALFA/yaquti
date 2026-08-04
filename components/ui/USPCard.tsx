import { LucideIcon } from "lucide-react";

export default function USPCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-card border border-border bg-cream p-5">
      <Icon size={24} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
      <h3 className="mt-3 text-base font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm text-taupe">{description}</p>
    </div>
  );
}
