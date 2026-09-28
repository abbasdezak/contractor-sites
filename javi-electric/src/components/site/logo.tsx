import Link from "next/link";

import { cn } from "@/lib/utils";

/** Wordmark: amber bolt tile + "JAVI ELECTRIC". Inherits text color. */
export function Logo({
  className,
  withTagline = false,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Javi Electric — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="bg-primary text-primary-foreground grid size-10 place-items-center rounded-lg shadow-sm transition-transform group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path
            fill="currentColor"
            d="M13.2 2 4.5 13.4h6.1L9.4 22l9.1-12.1h-6.3L13.2 2Z"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-extrabold tracking-tight uppercase">
          Javi<span className="text-primary"> Electric</span>
        </span>
        {withTagline && (
          <span className="text-muted-foreground mt-1 text-[0.7rem] font-medium tracking-wide uppercase">
            Licensed · Family-owned · Mesa, AZ
          </span>
        )}
      </span>
    </Link>
  );
}
