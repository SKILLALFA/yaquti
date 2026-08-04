import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-4 md:px-8 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
