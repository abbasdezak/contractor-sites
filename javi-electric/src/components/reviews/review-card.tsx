import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { formatReviewDate, type Review } from "@/lib/reviews";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Stars } from "@/components/site/stars";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const letters =
    parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
  return letters.toUpperCase();
}

/** Small "G" badge used as a "posted on Google" source label. */
function GoogleMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid place-items-center rounded-full bg-white text-[11px] leading-none font-bold text-[#4285F4] ring-1 ring-black/10",
        className,
      )}
    >
      G
    </span>
  );
}

/**
 * A single Google review, quoted verbatim from lib/reviews.ts.
 * Server-component safe (no hooks) and usable inside client trees.
 */
export function ReviewCard({
  review,
  showOwnerResponse = false,
  className,
}: {
  review: Review;
  showOwnerResponse?: boolean;
  className?: string;
}) {
  return (
    <Card
      className={cn("gap-4 p-6 transition-shadow hover:shadow-md", className)}
    >
      <article className="flex flex-col gap-4">
        <header className="flex items-start gap-3">
          <Avatar className="size-11">
            <AvatarFallback className="bg-navy-900 text-brand-300 text-sm font-bold">
              {initials(review.author)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold">{review.author}</p>
            {review.meta && (
              <p className="text-muted-foreground truncate text-xs">
                {review.meta}
              </p>
            )}
          </div>
          <span
            className="text-muted-foreground inline-flex shrink-0 items-center gap-1.5 text-xs font-medium"
            title="Posted on Google"
          >
            <GoogleMark className="size-4" />
            Google
          </span>
        </header>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Stars rating={review.rating} />
          <time
            dateTime={review.date}
            className="text-muted-foreground text-xs"
          >
            {formatReviewDate(review.date)}
          </time>
        </div>

        <blockquote className="text-foreground/90 leading-relaxed">
          {review.text}
        </blockquote>

        {review.truncated && (
          <a
            href={site.links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-700 hover:text-brand-600 focus-visible:ring-ring/50 inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-semibold underline-offset-4 outline-none hover:underline focus-visible:ring-[3px]"
          >
            Read full review on Google
            <ExternalLink className="size-3.5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}

        {showOwnerResponse && review.ownerResponse && (
          <div className="bg-muted/60 border-primary rounded-lg border-l-4 p-4">
            <p className="text-xs font-bold tracking-wide uppercase">
              Response from {site.name}
            </p>
            <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
              {review.ownerResponse}
            </p>
          </div>
        )}
      </article>
    </Card>
  );
}
