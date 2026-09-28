import { featuredReviews } from "@/lib/reviews";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/site/section-heading";
import { Stars } from "@/components/site/stars";
import { ReviewsCarousel } from "@/components/home/reviews-carousel";

export function FeaturedReviews() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Customer reviews"
            title="Don't take our word for it"
            lede="Real words from real Mesa and East Valley customers, straight from Google."
          />
          <div className="bg-card flex items-center gap-4 rounded-2xl border px-5 py-4 shadow-xs">
            <span className="font-display text-5xl leading-none font-extrabold">
              {site.stats.rating.toFixed(1)}
            </span>
            <span className="flex flex-col gap-1">
              <Stars rating={site.stats.rating} size="size-5" />
              <span className="text-muted-foreground text-sm">
                {site.stats.reviewCount} Google reviews
              </span>
            </span>
          </div>
        </div>
        <ReviewsCarousel reviews={featuredReviews} />
      </div>
    </section>
  );
}
