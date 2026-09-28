"use client";

import Link from "next/link";
import { ExternalLink, Quote } from "lucide-react";

import { formatReviewDate, type Review } from "@/lib/reviews";
import { site } from "@/lib/site";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/site/stars";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  return (
    <Carousel
      opts={{ align: "start" }}
      aria-label="Featured customer reviews"
      className="mt-12"
    >
      <CarouselContent>
        {reviews.map((r) => (
          <CarouselItem key={r.id} className="md:basis-1/2 lg:basis-1/3">
            <figure className="bg-card relative flex h-full flex-col rounded-2xl border p-6 shadow-xs sm:p-7">
              <Quote
                className="text-primary/30 absolute top-5 right-5 size-10 fill-current"
                aria-hidden="true"
              />
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              {r.truncated && (
                <a
                  href={site.links.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 hover:text-foreground mt-3 inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
                >
                  Read more on Google
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                <Avatar className="size-11">
                  <AvatarFallback className="bg-navy-900 text-primary text-sm font-bold">
                    {initials(r.author)}
                  </AvatarFallback>
                </Avatar>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">
                    {r.author}
                  </span>
                  <span className="text-muted-foreground block text-xs">
                    {formatReviewDate(r.date)} · Google
                  </span>
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <CarouselPrevious className="static size-11 translate-y-0" />
        <CarouselNext className="static size-11 translate-y-0" />
        <Button asChild variant="link" className="ml-auto">
          <Link href="/reviews/">Read all reviews</Link>
        </Button>
      </div>
    </Carousel>
  );
}
