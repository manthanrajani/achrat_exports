import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO = {
  teal: "/images/brand/logo.webp",
  ivory: "/images/brand/logo-ivory.webp",
} as const;

/** Wordmark. Teal sits on ivory; ivory sits on navy, where the original teal disappears. */
export function BrandLogo({
  tone = "teal",
  className,
  priority = false,
}: {
  tone?: keyof typeof LOGO;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={LOGO[tone]}
      alt="Achrat Exports"
      width={813}
      height={279}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
