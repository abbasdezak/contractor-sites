import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { site, serviceAreas } from "@/lib/site";
import { popularServices } from "@/lib/services";
import { Icon } from "@/components/site/icon";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Service Areas: Mesa & the East Valley",
  description: `Javi Electric is a licensed electrician serving ${serviceAreas.join(", ")} and nearby East Valley communities.`,
  alternates: { canonical: "/service-areas/" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we work"
        title="Serving Mesa & the East Valley"
        lede="Based in Mesa and headed out to homes and businesses across the East Valley. Not sure if we cover you? Give us a call."
        crumbs={[{ title: "Service Areas" }]}
      />

      <section className="bg-background py-14 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Cities we serve"
            title="Your local electrician"
            lede="Tap a city to request an estimate."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((city) => {
              const home = city === site.address.city;
              return (
                <li key={city}>
                  <Link
                    href={`/contact/?city=${encodeURIComponent(city)}`}
                    className="border-border bg-card hover:border-primary/60 focus-visible:ring-ring/60 group flex h-full flex-col rounded-2xl border p-6 shadow-xs transition-all outline-none hover:shadow-lg focus-visible:ring-[3px]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="bg-primary/15 text-brand-700 dark:text-primary grid size-11 place-items-center rounded-lg">
                        <MapPin className="size-5" aria-hidden="true" />
                      </span>
                      {home && <Badge>Home base</Badge>}
                    </div>
                    <h2 className="mt-4 text-2xl font-bold uppercase">{city}</h2>
                    <p className="text-brand-700 dark:text-primary mt-1 text-sm font-semibold">
                      Electrician in {city}, AZ
                    </p>
                    <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                      {home
                        ? `Our shop is right here at ${site.address.street}. Licensed, family-owned electrical service for Mesa homes and businesses.`
                        : `Licensed, family-owned electrical service for ${city} homes and businesses.`}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:underline">
                      Request an estimate
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-muted/50 py-14 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="In every city"
            title="Popular services, everywhere we go"
            lede="The same licensed crew and the same standards, whichever city you call from."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="border-border bg-card hover:border-primary/60 focus-visible:ring-ring/60 flex h-full flex-col gap-3 rounded-xl border p-5 shadow-xs transition-all outline-none hover:shadow-md focus-visible:ring-[3px]"
                >
                  <span className="bg-primary/15 text-brand-700 dark:text-primary grid size-10 place-items-center rounded-lg">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="font-display text-xl leading-tight font-bold uppercase">
                    {s.short}
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {s.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/services/"
              className="text-brand-700 dark:text-primary inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
            >
              See all services <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Find us"
              title="Visit our Mesa shop"
              lede={`${site.name} is at ${site.address.full}.`}
            />
            <a
              href={site.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 dark:text-primary mt-5 inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
            >
              Open in Google Maps
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="border-border overflow-hidden rounded-2xl border shadow-xs">
            <iframe
              src={site.links.mapEmbed}
              title={`Map showing ${site.name} at ${site.address.full}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure we cover your area?"
        lede="Call or text and we'll let you know. Same-day service is often available."
      />
    </>
  );
}
