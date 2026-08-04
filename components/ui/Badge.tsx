import { LucideIcon } from "lucide-react";

export default function Badge({
  icon: Icon,
  label,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex shrink-0 items-center gap-3 ${className}`}>
      <Icon size={28} strokeWidth={1.5} className="shrink-0 text-ink" aria-hidden="true" />
      <span className="max-w-[9rem] text-sm leading-tight text-ink">{label}</span>
    </div>
  );
}
