import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  HardHat,
  House,
  KeyRound,
  MapPin,
  Store,
} from "lucide-react";

import { promises, serviceAreas, site } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { Photo } from "@/components/site/photo";
import { PullQuote } from "@/components/about/pull-quote";
import { AudienceCard } from "@/components/about/audience-card";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} is a licensed, family-owned electrician in Mesa, AZ. Founded by ${site.owner}, and built on honest work and word of mouth. ${site.license.label}.`,
  alternates: { canonical: "/about/" },
};

function authorOf(id: string) {
  return reviews.find((r) => r.id === id)?.author ?? "";
}

/** Verbatim excerpts from lib/reviews.ts (each must appear in that review's text). */
const audiences = [
  {
    icon: <House aria-hidden="true" />,
    title: "Homeowners",
    description:
      "Panel upgrades, lighting, EV chargers and repairs for houses across the Valley.",
    reviewId: "brendan-gallagher",
    quote:
      "I had an outlet powering my AC unit go out. I called at 1pm. It was fixed before 5pm same day.",
  },
  {
    icon: <KeyRound aria-hidden="true" />,
    title: "Landlords & property managers",
    description:
      "Inspections and repairs for rental properties, handled with a good attitude.",
    reviewId: "sandra-mitsis",
    quote:
      "I found the repair cost reasonably priced and my tenant was happy with the service.",
  },
  {
    icon: <HardHat aria-hidden="true" />,
    title: "General contractors",
    description:
      "A dependable electrical subcontractor for remodels and new construction.",
    reviewId: "mark-kelso",
    quote:
      "They are now my number one subcontractor and who I refer when a friend or previous client needs help",
  },
  {
    icon: <Store aria-hidden="true" />,
    title: "Small businesses",
    description:
      "Electrical service for commercial properties and the businesses that run in them.",
    reviewId: "chuck-reynolds",
    quote: "They have also done numerous jobs for my wife's business.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A family business built on word of mouth"
        lede="Javi Electric is a licensed, family-owned electrician in Mesa, AZ, and the name on the truck is the name on the work."
        crumbs={[{ title: "About" }]}
      />

      {/* Story */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Honest work you can rely on"
            />
            <div className="text-muted-foreground mt-6 space-y-5 text-lg leading-relaxed">
              <p>
                {site.name} was founded by {site.owner} with a simple goal: to
                provide honest, high-quality electrical work customers can rely
                on.
              </p>
              <p>
                What began as a small local service grew through word-of-mouth
                and repeat business from homeowners, contractors and property
                managers across the Valley.
              </p>
              <p>
                Today Javi works alongside his son, also named Javi. Call{" "}
                {site.phone.display} and you&apos;ll talk to the family that
                does the work.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="bg-primary/20 absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-3xl"
              aria-hidden="true"
            />
            <Photo
              alt="Javier Carcamo and his son Javi, the family behind Javi Electric"
              label="Javi & Javi"
              icon="Users"
              className="aspect-[4/3] rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="dark bg-background text-foreground texture-grid py-16 sm:py-24">
        <div className="container-site">
          <PullQuote
            className="mx-auto max-w-4xl"
            quote="He is 100% trustworthy, honest and reliable."
            author={authorOf("lisa")}
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we stand for"
            title="The promises behind every job"
            lede="These aren't slogans. They're what customers keep telling us in their reviews."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p) => (
              <li
                key={p.title}
                className="bg-card rounded-xl border p-6 shadow-sm"
              >
                <span className="bg-primary/15 text-brand-700 grid size-12 place-items-center rounded-xl">
                  <Icon name={p.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold uppercase">{p.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Who we work with"
            title="Trusted by homes, landlords and builders"
            lede="In their own words."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {audiences.map((a) => (
              <li key={a.title}>
                <AudienceCard
                  icon={a.icon}
                  title={a.title}
                  description={a.description}
                  quote={a.quote}
                  author={authorOf(a.reviewId)}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* License & credentials */}
      <section className="dark bg-background text-foreground texture-grid py-16 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="License & credentials"
              title="Licensed in Arizona"
              lede="Check our license yourself. It only takes a minute."
            />
            <Button asChild size="xl" className="mt-8">
              <a
                href={site.license.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify with the Arizona ROC <ArrowUpRight />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Button>
          </div>
          <dl className="bg-card/60 divide-y rounded-2xl border backdrop-blur">
            <div className="flex items-start gap-4 p-6">
              <BadgeCheck
                className="text-primary mt-0.5 size-6 shrink-0"
                aria-hidden="true"
              />
              <div>
                <dt className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  License
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  {site.license.label}
                </dd>
                <dd className="text-muted-foreground text-sm">
                  {site.legalName}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6">
              <Building2
                className="text-primary mt-0.5 size-6 shrink-0"
                aria-hidden="true"
              />
              <div>
                <dt className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  Address
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  {site.address.full}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6">
              <MapPin
                className="text-primary mt-0.5 size-6 shrink-0"
                aria-hidden="true"
              />
              <div>
                <dt className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  Service area
                </dt>
                <dd className="mt-1 text-lg font-semibold">
                  {serviceAreas.join(", ")}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
