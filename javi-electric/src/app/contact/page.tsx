import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { EstimateForm } from "@/components/contact/estimate-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { EmergencyNote } from "@/components/contact/emergency-note";

export const metadata: Metadata = {
  title: "Contact & Free Estimate",
  description:
    "Request a free electrical estimate from Javi Electric in Mesa, AZ. Call, text or send a message. Same-day service often available for urgent issues.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free estimate"
        lede="Tell us what you need and Javi will get back to you. Prefer to talk? Call or text anytime."
        crumbs={[{ title: "Contact" }]}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="container-site space-y-8">
          <EmergencyNote />
          <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
            <EstimateForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
