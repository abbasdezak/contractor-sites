import Image from "next/image";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/site/icon";

/**
 * Photo slot used everywhere a job/team photo belongs.
 *
 * - With `src`: renders the real photo (object-cover).
 * - Without `src`: renders a branded navy placeholder with a circuit grid,
 *   an icon and a label, so layouts look intentional until the client's
 *   photos are dropped into /public/images and referenced in lib/*.ts.
 *
 * The parent controls size; pass an aspect class (e.g. "aspect-[4/3]").
 */
export function Photo({
  src,
  alt,
  label,
  icon = "Zap",
  className,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  src?: string;
  alt: string;
  label?: string;
  icon?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-navy-900", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "bg-navy-900 texture-grid relative isolate overflow-hidden",
        className
      )}
    >
      <div className="from-brand-500/25 absolute -top-1/3 -right-1/4 -z-10 size-3/4 rounded-full bg-radial to-transparent blur-2xl" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="border-brand-400/30 bg-brand-400/10 text-brand-300 grid size-14 place-items-center rounded-2xl border">
            <Icon name={icon} className="size-7" />
          </span>
          {label && (
            <span className="text-navy-200 px-4 text-xs font-semibold tracking-[0.18em] uppercase">
              {label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
