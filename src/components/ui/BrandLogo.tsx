import Image from "next/image";
import { brandLogoHorizontal } from "@/data/brand";

const sizeStyles = {
  sm: { image: "h-5 w-auto", pad: "px-2 py-1 rounded-lg" },
  md: { image: "h-10 w-auto", pad: "px-3 py-1.5 rounded-xl" },
  lg: { image: "h-11 w-auto", pad: "px-4 py-2 rounded-xl" },
  xl: { image: "h-12 w-auto", pad: "px-4 py-2 rounded-xl" },
} as const;

type BrandLogoSize = keyof typeof sizeStyles;

interface BrandLogoProps {
  size?: BrandLogoSize;
  alt?: string;
  priority?: boolean;
  ariaHidden?: boolean;
  className?: string;
}

export function BrandLogo({
  size = "xl",
  alt = "BharatPe Capital",
  priority,
  ariaHidden,
  className = "",
}: BrandLogoProps) {
  const { image, pad } = sizeStyles[size];

  return (
    <span
      className={`inline-flex items-center justify-center bg-white/95 ring-1 ring-white/90 ${pad} shadow-[0_0_22px_rgba(255,255,255,0.65),0_0_44px_rgba(255,255,255,0.35),0_4px_18px_rgba(255,255,255,0.2)] ${className}`}
    >
      <Image
        src={brandLogoHorizontal}
        alt={ariaHidden ? "" : alt}
        width={737}
        height={97}
        className={image}
        priority={priority}
        aria-hidden={ariaHidden}
      />
    </span>
  );
}
