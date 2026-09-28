import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { ProjectGallery } from "@/components/projects/project-gallery";

export const metadata: Metadata = {
  title: "Recent Projects",
  description:
    "Recent electrical jobs by Javi Electric in Mesa and the East Valley: panel upgrades, recessed lighting, EV chargers, repairs and remodel work, backed by real customer reviews.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Recent projects"
        lede="A look at the kind of jobs we handle every week across Mesa and the East Valley, each one backed by what the customer had to say."
        crumbs={[{ title: "Projects" }]}
      />

      <section className="bg-background py-14 sm:py-20">
        <div className="container-site">
          <ProjectGallery />
        </div>
      </section>

      <CtaBand
        title="Have a project in mind?"
        lede="Tell us what you need and get a clear, written estimate. Call or text anytime."
      />
    </>
  );
}
