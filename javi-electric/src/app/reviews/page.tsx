import type { Metadata } from "next";
import { ExternalLink, PenLine } from "lucide-react";

import { site } from "@/lib/site";
import { reviews, reviewTopics } from "@/lib/reviews";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Stars } from "@/components/site/stars";
import { ReviewFilter } from "@/components/reviews/review-filter";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Read what Mesa and East Valley neighbors say about ${site.name}: ${site.stats.rating.toFixed(1)} stars across ${site.stats.reviewCount} Google reviews for on-time, clean, fairly priced electrical work.`,
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  const topTopics = reviewTopics
    .map((t) => ({
      ...t,
      count: reviews.filter((r) => r.topics.includes(t.id)).length,
    }))
    .filter((t) => t.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our neighbors say"
        lede="Every review below is a real Google review from a Mesa-area customer, shown exactly as they wrote it."
        crumbs={[{ title: "Reviews" }]}
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <p
              className="font-display text-primary text-7xl leading-none font-extrabold sm:text-8xl"
              aria-label={`${site.stats.rating.toFixed(1)} out of 5`}
            >
              {site.stats.rating.toFixed(1)}
            </p>
            <div className="flex flex-col gap-1.5">
              <Stars rating={site.stats.rating} size="size-6" />
              <p className="text-sm font-semibold">
                {site.stats.reviewCount} Google reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:ml-auto sm:flex-row">
            <Button asChild size="xl">
              <a
                href={site.links.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Google <ExternalLink />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href={site.links.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PenLine /> Leave us a review
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Button>
          </div>
        </div>
      </PageHero>

      <section className="bg-background py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Google reviews"
            title="Every review, unfiltered"
            lede="Filter by what customers mention, or sort by date."
            className="mb-10"
          />
          <ReviewFilter reviews={reviews} />
        </div>
      </section>

      <section className="dark bg-background text-foreground bg-grid py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Patterns"
            title="What reviewers mention most"
            lede="The same things come up again and again, so we keep doing them."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topTopics.map((t) => (
              <li
                key={t.id}
                className="bg-card/60 rounded-xl border p-6 backdrop-blur"
              >
                <p className="font-display text-primary text-6xl leading-none font-extrabold">
                  {t.count}
                </p>
                <p className="mt-3 text-lg font-bold uppercase">{t.label}</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  mentioned in {t.count} of {reviews.length} reviews
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
