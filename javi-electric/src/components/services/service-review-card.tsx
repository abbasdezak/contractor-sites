import type { Review } from "@/lib/reviews";
import { formatReviewDate } from "@/lib/reviews";
import { Stars } from "@/components/site/stars";

/** Google review card on a dark (navy) section. Text is verbatim. */
export function ServiceReviewCard({ review }: { review: Review }) {
  return (
    <figure className="bg-card text-card-foreground flex h-full flex-col gap-4 rounded-2xl border p-6">
      <Stars rating={review.rating} />
      <blockquote className="flex-1 text-base leading-relaxed">
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
      <figcaption className="border-t pt-4 text-sm">
        <span className="font-semibold">{review.author}</span>
        <span className="text-muted-foreground">
          {" "}
          &middot; Google review &middot;{" "}
          <time dateTime={review.date}>{formatReviewDate(review.date)}</time>
        </span>
      </figcaption>
    </figure>
  );
}
