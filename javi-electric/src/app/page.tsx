import type { Metadata } from "next";

import { site } from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";
import { AreasTeaser } from "@/components/home/areas-teaser";
import { FeaturedReviews } from "@/components/home/featured-reviews";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { ProjectsTeaser } from "@/components/home/projects-teaser";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyChoose } from "@/components/home/why-choose";

export const metadata: Metadata = {
  title: { absolute: "Javi Electric | Licensed Electrician in Mesa, AZ" },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ServicesGrid />
      <WhyChoose />
      <HowItWorks />
      <FeaturedReviews />
      <ProjectsTeaser />
      <AreasTeaser />
      <CtaBand />
    </>
  );
}
