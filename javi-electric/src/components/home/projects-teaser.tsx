import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects, type ProjectCategory } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/site/photo";
import { SectionHeading } from "@/components/site/section-heading";

const categoryIcon: Record<ProjectCategory, string> = {
  Panels: "CircuitBoard",
  Lighting: "Lightbulb",
  "EV Charging": "PlugZap",
  Repairs: "Wrench",
  "Remodel & Commercial": "HardHat",
};

const featuredSlugs = [
  "1962-panel-replacement",
  "recessed-lighting-half-day",
  "ev-charger-and-can-lights",
];

const featured = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p));

export function ProjectsTeaser() {
  return (
    <section className="dark bg-background text-foreground bg-grid relative isolate overflow-hidden py-20 sm:py-28">
      <div className="bg-primary/15 absolute -right-40 -bottom-40 -z-10 size-[30rem] rounded-full blur-3xl" aria-hidden="true" />
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Recent work"
            title="Jobs our neighbors trusted us with"
            lede="A look at recent projects around Mesa and the East Valley, each one backed by a customer's Google review."
          />
          <Button
            asChild
            size="lg"
            variant="outline"
            className="shrink-0 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/projects/">
              See all projects <ArrowRight />
            </Link>
          </Button>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <li key={p.slug} className="flex">
              <Link
                href="/projects/"
                className="group bg-card focus-visible:ring-ring/60 hover:border-primary/50 flex w-full flex-col overflow-hidden rounded-2xl border transition-all outline-none hover:-translate-y-1 focus-visible:ring-4"
              >
                <div className="relative overflow-hidden">
                  <Photo
                    alt={`${p.title}, project photo`}
                    label={p.category}
                    icon={categoryIcon[p.category]}
                    className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="secondary" className="self-start">
                    {p.category}
                  </Badge>
                  <h3 className="mt-3 text-2xl leading-tight font-bold uppercase">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
                    {p.summary}
                  </p>
                  <span className="text-primary mt-5 inline-flex items-center gap-1.5 text-sm font-bold">
                    View projects
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
