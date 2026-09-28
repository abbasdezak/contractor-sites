import Link from "next/link";
import { BadgeCheck, MessageSquareText, Phone, ShieldCheck, Users, Zap } from "lucide-react";

import { site } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/site/photo";
import { Stars } from "@/components/site/stars";

const heroReview = reviews.find((r) => r.id === "brendan-gallagher")!;

const chips = [
  { icon: ShieldCheck, label: site.license.label },
  { icon: Zap, label: "Same-day service" },
  { icon: Users, label: "Family-owned" },
];

export function Hero() {
  return (
    <section className="dark bg-background text-foreground texture-grid relative isolate overflow-hidden">
      <div
        className="bg-primary/25 absolute -top-48 -right-24 -z-10 size-[36rem] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-navy-600/30 absolute -bottom-56 -left-40 -z-10 size-[34rem] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div>
          <p className="text-primary inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
            <span className="bg-primary h-0.5 w-6 rounded-full" aria-hidden="true" />
            Licensed electrician · Mesa, AZ
          </p>
          <h1 className="mt-5 text-5xl font-extrabold uppercase sm:text-6xl lg:text-7xl">
            Mesa&apos;s trusted{" "}
            <span className="text-primary">family electricians</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">
            Javi and his son Javi show up on time, quote it in writing, fix it
            right and clean up like they were never there. Panel upgrades, EV
            chargers, lighting and repairs across the East Valley.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" className="shadow-primary/20 shadow-lg">
              <a href={site.phone.href}>
                <Phone /> Call {site.phone.display}
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact/">
                <MessageSquareText /> Get a free estimate
              </Link>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
            <li className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 py-1.5 pr-4 pl-3 text-sm font-semibold">
              <Stars rating={site.stats.rating} size="size-4" />
              <span>
                {site.stats.rating.toFixed(1)}
                <span className="text-muted-foreground font-medium">
                  {" "}
                  · {site.stats.reviewCount} Google reviews
                </span>
              </span>
            </li>
            {chips.map(({ icon: I, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 py-1.5 pr-4 pl-3 text-sm font-semibold"
              >
                <I className="text-primary size-4" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="border-primary/30 absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-3xl border" aria-hidden="true" />
          <Photo
            alt="Javi and Javi, father and son electricians, on the job in Mesa"
            label="Javi & Javi on the job"
            icon="Zap"
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="aspect-[4/5] w-full rounded-3xl border border-white/10 shadow-2xl shadow-black/40"
          />
          <div className="bg-primary text-primary-foreground absolute top-4 right-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide uppercase shadow-lg">
            <BadgeCheck className="size-4" aria-hidden="true" />
            Licensed electricians
          </div>
          <figure className="bg-card text-card-foreground absolute right-4 -bottom-6 left-4 rounded-2xl border border-white/10 p-5 shadow-2xl shadow-black/40 sm:right-auto sm:-left-6 sm:max-w-[22rem] lg:-left-10">
            <div className="flex items-center justify-between gap-3">
              <Stars rating={heroReview.rating} />
              <span className="text-muted-foreground text-xs font-medium">
                Google review
              </span>
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed">
              &ldquo;{heroReview.text}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              {heroReview.author}
              <span className="text-muted-foreground font-normal">
                {" "}
                · via Google
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
