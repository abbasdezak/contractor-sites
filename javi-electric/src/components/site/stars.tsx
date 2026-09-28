import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function Stars({
  rating = 5,
  className,
  size = "size-4",
}: {
  rating?: number;
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            size,
            i < Math.round(rating)
              ? "fill-brand-500 text-brand-500"
              : "fill-muted text-muted"
          )}
        />
      ))}
    </span>
  );
}
