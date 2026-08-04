import { FlaskConical, Leaf, ShieldCheck, Globe2 } from "lucide-react";
import SectionShell from "@/components/ui/SectionShell";
import Badge from "@/components/ui/Badge";

const BADGES = [
  { icon: FlaskConical, label: "Clinically Formulated" },
  { icon: Leaf, label: "Premium Ingredients" },
  { icon: ShieldCheck, label: "Third-Party Tested" },
  { icon: Globe2, label: "Worldwide Shipping" },
];

export default function TrustBadges() {
  return (
    <SectionShell
      as="div"
      variant="micro"
      background="border-t border-b border-border bg-milk"
      containerClassName="flex gap-8 overflow-x-auto lg:justify-between lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      ariaLabel="Trust indicators"
    >
      {BADGES.map((badge) => (
        <Badge key={badge.label} icon={badge.icon} label={badge.label} />
      ))}
    </SectionShell>
  );
}
