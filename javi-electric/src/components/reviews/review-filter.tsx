"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { reviewTopics, type Review } from "@/lib/reviews";
import { ReviewCard } from "@/components/reviews/review-card";

type Sort = "newest" | "oldest";

const sortOptions: { id: Sort; label: string }[] = [
  { id: "newest", label: "Newest" },
  { id: "oldest", label: "Oldest" },
];

function chipClass(active: boolean) {
  return cn(
    "focus-visible:ring-ring/50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors outline-none focus-visible:ring-[3px]",
    active
      ? "bg-navy-900 border-navy-900 text-white dark:bg-primary dark:border-primary dark:text-primary-foreground"
      : "bg-card hover:border-primary hover:bg-brand-50 text-foreground",
  );
}

/**
 * Google-style review browser: topic chips with counts + newest/oldest sort.
 * Reviews are passed in as props so the counts always match the data.
 */
export function ReviewFilter({ reviews }: { reviews: Review[] }) {
  const [topic, setTopic] = useState<string>("all");
  const [sort, setSort] = useState<Sort>("newest");

  const topics = useMemo(
    () =>
      reviewTopics
        .map((t) => ({
          ...t,
          count: reviews.filter((r) => r.topics.includes(t.id)).length,
        }))
        .filter((t) => t.count > 0),
    [reviews],
  );

  const visible = useMemo(() => {
    // Stable newest-first; "oldest" is the exact reverse of that order.
    const newest = reviews
      .filter((r) => topic === "all" || r.topics.some((t) => t === topic))
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    return sort === "newest" ? newest : newest.reverse();
  }, [reviews, topic, sort]);

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div
          role="group"
          aria-label="Filter reviews by topic"
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={topic === "all"}
            onClick={() => setTopic("all")}
            className={chipClass(topic === "all")}
          >
            All
            <span className="text-xs opacity-70">{reviews.length}</span>
          </button>
          {topics.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={topic === t.id}
              onClick={() => setTopic(t.id)}
              className={chipClass(topic === t.id)}
            >
              {t.label}
              <span className="text-xs opacity-70">{t.count}</span>
            </button>
          ))}
        </div>

        <div
          role="group"
          aria-label="Sort reviews"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="text-muted-foreground text-sm font-medium">
            Sort by
          </span>
          <div className="bg-muted inline-flex rounded-lg p-1">
            {sortOptions.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={sort === o.id}
                onClick={() => setSort(o.id)}
                className={cn(
                  "focus-visible:ring-ring/50 rounded-md px-3.5 py-1.5 text-sm font-semibold transition-colors outline-none focus-visible:ring-[3px]",
                  sort === o.id
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-muted-foreground mt-6 text-sm" role="status">
        Showing {visible.length} of {reviews.length} reviews
      </p>

      <ul className="mt-4 columns-1 gap-6 md:columns-2 lg:columns-3">
        {visible.map((review) => (
          <li key={review.id} className="mb-6 break-inside-avoid">
            <ReviewCard review={review} showOwnerResponse />
          </li>
        ))}
      </ul>
    </div>
  );
}
