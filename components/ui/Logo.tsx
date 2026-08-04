import Image from "next/image";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Image
      src="/images/yaquti-logo.png"
      alt="YAQUTI"
      width={956}
      height={277}
      priority
      className={`h-auto w-[120px] lg:w-[136px] ${variant === "light" ? "invert" : ""} ${className}`}
    />
  );
}
