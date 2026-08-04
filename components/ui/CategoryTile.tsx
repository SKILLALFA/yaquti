import Image from "next/image";
import Link from "next/link";

export default function CategoryTile({
  image,
  label,
  href = "#",
}: {
  image: string;
  label: string;
  href?: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-tile bg-parchment">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <p className="mt-3 font-serif text-lg text-ink md:mt-4 md:text-xl">{label}</p>
    </Link>
  );
}
