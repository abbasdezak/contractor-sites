import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, MessageSquareText, Sparkles } from "lucide-react";

import { reviews } from "@/lib/reviews";
import { services } from "@/lib/services";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { ServiceReviewCard } from "@/components/services/service-review-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Electrical Services in Mesa, AZ",
  description:
    "Panel upgrades, EV chargers, lighting, troubleshooting, repairs and more from a licensed, family-owned Mesa electrician serving the East Valley.",
  alternates: { canonical: "/services/" },
};

const steps = [
  {
    icon: MessageSquareText,
    title: "Tell us about the job",
    text: "Call, text or send a request. Share photos or an inspection report if you have one — the more we know, the better the quote.",
  },
  {
    icon: ClipboardCheck,
    title: "Get a clear written quote",
    text: "You receive a detailed scope of work before any work begins, often the same day, so you know exactly what is being done and what it costs.",
  },
  {
    icon: Sparkles,
    title: "We do it right and clean up",
    text: "Licensed electricians on your schedule, work done to code, and the job site left clean when we leave.",
  },
];

export default function ServicesPage() {
  const chris = reviews.find((r) => r.id === "chris-hansen");

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical services for home & business"
        lede="From a single dead outlet to a full panel upgrade, Javi and his son handle it all — licensed, on time and fairly priced."
        crumbs={[{ title: "Services" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we do"
            title="Every service we offer"
            lede="Tap a service to see what is included, signs you may need it, and answers to common questions."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dark bg-background text-foreground texture-grid py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How quotes work"
              title="A clear written quote before any work starts"
              lede="No guessing and no surprises. We spell out the scope in writing first, so you can decide with all the information."
            />
            <ol className="mt-10 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="bg-primary text-primary-foreground grid size-12 shrink-0 place-items-center rounded-xl">
                    <s.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold uppercase">
                      <span className="text-primary">{i + 1}.</span> {s.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Button asChild size="xl" className="mt-10">
              <Link href="/contact/">Request an estimate</Link>
            </Button>
          </div>
          {chris && (
            <div>
              <p className="text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase">
                What a customer said
              </p>
              <ServiceReviewCard review={chris} />
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
