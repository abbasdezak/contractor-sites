import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  MessageSquareText,
  Phone,
  TriangleAlert,
} from "lucide-react";

import { site, serviceAreas } from "@/lib/site";
import { getService, popularServices, services } from "@/lib/services";
import { reviewsForService } from "@/lib/reviews";
import { projects } from "@/lib/projects";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import { SectionHeading } from "@/components/site/section-heading";
import { Stars } from "@/components/site/stars";
import { ServiceCard } from "@/components/services/service-card";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceReviewCard } from "@/components/services/service-review-card";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${slug}/` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceReviews = reviewsForService(slug);
  const serviceProjects = projects.filter((p) => p.service === slug);
  const others = [
    ...popularServices.filter((s) => s.slug !== slug),
    ...services.filter((s) => s.slug !== slug && !s.popular),
  ].slice(0, 3);

  const url = `${site.url}/services/${slug}/`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.summary,
    url,
    serviceType: service.short,
    provider: { "@id": `${site.url}/#business` },
    areaServed: serviceAreas.map((c) => ({
      "@type": "City",
      name: `${c}, AZ`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      {service.faqs.length > 0 && <JsonLd data={faqJsonLd} />}

      <PageHero
        eyebrow="Mesa, AZ electrician"
        title={service.title}
        lede={service.summary}
        crumbs={[
          { title: "Services", href: "/services/" },
          { title: service.title },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl">
            <a href={site.phone.href}>
              <Phone /> Call {site.phone.display}
            </a>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href={`/contact/?service=${slug}`}>
              <MessageSquareText /> Request an estimate
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Body */}
      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="space-y-14">
            <div className="space-y-5">
              {service.intro.map((p) => (
                <p
                  key={p}
                  className="text-foreground/85 text-lg leading-relaxed first:text-xl first:font-medium"
                >
                  {p}
                </p>
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-bold uppercase sm:text-4xl">
                What&rsquo;s included
              </h2>
              <ul className="mt-6 grid gap-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="bg-card flex items-start gap-3 rounded-xl border p-4"
                  >
                    <span className="bg-primary text-primary-foreground mt-0.5 grid size-6 shrink-0 place-items-center rounded-full">
                      <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.signs && service.signs.length > 0 && (
              <div className="border-brand-500/40 bg-brand-50 text-navy-950 rounded-2xl border p-6 sm:p-8">
                <h2 className="flex items-center gap-3 text-2xl font-bold uppercase sm:text-3xl">
                  <TriangleAlert
                    className="text-brand-700 size-7 shrink-0"
                    aria-hidden="true"
                  />
                  Signs you need this
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <span
                        className="bg-brand-600 mt-2.5 size-2 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{sign}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-medium">
                  Noticing one of these? Call{" "}
                  <a
                    href={site.phone.href}
                    className="font-bold underline underline-offset-4"
                  >
                    {site.phone.display}
                  </a>{" "}
                  and we&rsquo;ll take a look.
                </p>
              </div>
            )}
          </div>

          <aside aria-label="Contact and details" className="lg:pt-1">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="bg-card overflow-hidden rounded-2xl border shadow-sm">
                <Photo
                  src={service.image}
                  alt={`${service.title} by Javi Electric`}
                  label={service.photoLabel}
                  icon={service.icon}
                  className="aspect-[16/10]"
                  sizes="(min-width: 1024px) 24rem, 100vw"
                />
                <div className="space-y-5 p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <Stars rating={site.stats.rating} />
                    <a
                      href={site.links.googleReviews}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      {site.stats.rating.toFixed(1)} &middot;{" "}
                      {site.stats.reviewCount} Google reviews
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Free estimates. Same-day service is often available.
                  </p>
                  <div className="grid gap-3">
                    <Button asChild size="xl" className="w-full">
                      <a href={site.phone.href}>
                        <Phone /> Call {site.phone.display}
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="xl"
                      variant="outline"
                      className="w-full"
                    >
                      <Link href={`/contact/?service=${slug}`}>
                        <MessageSquareText /> Request an estimate
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 border-t pt-4 text-sm font-semibold">
                    <BadgeCheck
                      className="text-brand-700 dark:text-primary size-5"
                      aria-hidden="true"
                    />
                    Licensed &middot; {site.license.label}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Reviews */}
      {serviceReviews.length > 0 && (
        <section className="dark bg-background text-foreground bg-grid py-16 sm:py-24">
          <div className="container-site">
            <SectionHeading
              eyebrow="Customer reviews"
              title={`What customers say about ${service.short.toLowerCase()}`}
              lede="Real Google reviews from homeowners and businesses across the East Valley."
            />
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceReviews.slice(0, 3).map((r) => (
                <li key={r.id}>
                  <ServiceReviewCard review={r} />
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm">
              <Link
                href="/reviews/"
                className="text-primary inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
              >
                Read all reviews <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Projects */}
      {serviceProjects.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Recent work"
                title={`Recent ${service.short.toLowerCase()} jobs`}
              />
              <Button asChild variant="outline" size="lg">
                <Link href="/projects/">
                  View all projects <ArrowRight />
                </Link>
              </Button>
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviceProjects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href="/projects/"
                    className="group bg-card focus-visible:ring-ring/50 block h-full overflow-hidden rounded-2xl border shadow-sm transition-shadow outline-none hover:shadow-lg focus-visible:ring-[3px]"
                  >
                    <Photo
                      src={p.image}
                      alt={p.title}
                      label={p.category}
                      icon={service.icon}
                      className="aspect-[4/3]"
                    />
                    <div className="space-y-3 p-5">
                      <h3 className="text-xl leading-tight font-bold uppercase group-hover:underline">
                        {p.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {p.summary}
                      </p>
                      {p.details.length > 0 && (
                        <ul className="flex flex-wrap gap-2">
                          {p.details.map((d) => (
                            <li
                              key={d}
                              className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-xs font-medium"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-muted/50 border-y py-16 sm:py-24">
          <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions"
              lede={`Straight answers about ${service.short.toLowerCase()}. Don't see yours? Call or text and we'll help.`}
            />
            <ServiceFaq faqs={service.faqs} />
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="More from Javi Electric" title="Other services" />
            <Button asChild variant="outline" size="lg">
              <Link href="/services/">
                All services <ArrowRight />
              </Link>
            </Button>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Need ${service.short.toLowerCase()}?`}
        lede="Call or text Javi for a free estimate. Same-day service is often available."
      />
    </>
  );
}
