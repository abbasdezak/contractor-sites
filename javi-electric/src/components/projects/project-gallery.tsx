"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import { getService } from "@/lib/services";
import { reviews } from "@/lib/reviews";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import { Photo } from "@/components/site/photo";
import { Stars } from "@/components/site/stars";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", ...projectCategories];

function reviewFor(project: Project) {
  return project.reviewId
    ? reviews.find((r) => r.id === project.reviewId)
    : undefined;
}

/** Verbatim excerpt: whole text if short, otherwise cut at a word boundary. */
function excerpt(text: string, max = 150) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max).replace(/\s+\S*$/, "").replace(/[,;:\s]+$/, "");
  return `${cut}…`;
}

export function ProjectGallery() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [openSlug, setOpenSlug] = React.useState<string | null>(null);

  const visible = projects.filter(
    (p) => filter === "All" || p.category === filter
  );
  const active = projects.find((p) => p.slug === openSlug);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const selected = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(f)}
              className={cn(
                "focus-visible:ring-ring/50 rounded-full border px-4 py-2 text-sm font-semibold transition-colors outline-none focus-visible:ring-[3px]",
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/60 hover:bg-accent"
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p className="text-muted-foreground mt-4 text-sm" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter !== "All" ? ` in ${filter}` : ""}
      </p>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => {
          const service = getService(project.service);
          const review = reviewFor(project);
          return (
            <li key={project.slug} className="flex">
              <article className="bg-card group border-border hover:border-primary/50 flex w-full flex-col overflow-hidden rounded-2xl border shadow-xs transition-all hover:shadow-lg">
                <button
                  type="button"
                  onClick={() => setOpenSlug(project.slug)}
                  aria-haspopup="dialog"
                  className="focus-visible:ring-ring/60 block w-full text-left outline-none focus-visible:ring-[3px] focus-visible:ring-inset"
                >
                  <Photo
                    src={project.image}
                    alt={project.title}
                    label={project.category}
                    icon={service?.icon}
                    className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="block px-5 pt-5">
                    <span className="text-brand-700 dark:text-primary block text-xs font-bold tracking-[0.16em] uppercase">
                      {project.category}
                    </span>
                    <span className="font-display mt-1.5 block text-2xl leading-tight font-bold uppercase">
                      {project.title}
                    </span>
                    <span className="text-muted-foreground mt-2 block text-sm leading-relaxed">
                      {project.summary}
                    </span>
                    <span className="text-brand-700 dark:text-primary mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                      View project <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </span>
                </button>

                <div className="flex flex-1 flex-col gap-4 px-5 pt-3 pb-5">
                  <ul className="flex flex-wrap gap-1.5" aria-label="Project details">
                    {project.details.map((d) => (
                      <li key={d}>
                        <Badge variant="secondary">{d}</Badge>
                      </li>
                    ))}
                  </ul>

                  {review && (
                    <figure className="border-primary/60 border-l-2 pl-3">
                      <blockquote className="text-sm leading-relaxed italic">
                        &ldquo;{excerpt(review.text)}&rdquo;
                      </blockquote>
                      <figcaption className="text-muted-foreground mt-1.5 text-xs font-semibold">
                        {review.author}
                      </figcaption>
                    </figure>
                  )}

                  {service && (
                    <Link
                      href={`/services/${service.slug}/`}
                      className="text-foreground hover:text-brand-700 dark:hover:text-primary focus-visible:ring-ring/60 mt-auto inline-flex items-center gap-1.5 self-start rounded-sm pt-1 text-sm font-semibold underline-offset-4 outline-none hover:underline focus-visible:ring-[3px]"
                    >
                      {service.short}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <Dialog
        open={Boolean(active)}
        onOpenChange={(open) => {
          if (!open) setOpenSlug(null);
        }}
      >
        {active && <ProjectLightbox project={active} />}
      </Dialog>
    </div>
  );
}

function ProjectLightbox({ project }: { project: Project }) {
  const service = getService(project.service);
  const review = reviewFor(project);
  const hasBefore = Boolean(project.beforeImage);

  return (
    <DialogContent className="max-h-[92vh] gap-5 overflow-y-auto sm:max-w-3xl">
      <DialogHeader>
        <p className="text-brand-700 dark:text-primary text-xs font-bold tracking-[0.16em] uppercase">
          {project.category}
        </p>
        <DialogTitle className="font-display pr-6 text-3xl leading-tight font-bold uppercase">
          {project.title}
        </DialogTitle>
        <DialogDescription className="text-foreground/80 text-base leading-relaxed">
          {project.summary}
        </DialogDescription>
      </DialogHeader>

      {hasBefore ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <figure>
            <Photo
              src={project.beforeImage}
              alt={`${project.title}, before`}
              label="Before"
              icon={service?.icon}
              className="aspect-[4/3] rounded-xl"
              sizes="(min-width: 768px) 384px, 100vw"
            />
            <figcaption className="text-muted-foreground mt-1.5 text-xs font-bold tracking-wider uppercase">
              Before
            </figcaption>
          </figure>
          <figure>
            <Photo
              src={project.image}
              alt={`${project.title}, after`}
              label="After"
              icon={service?.icon}
              className="aspect-[4/3] rounded-xl"
              sizes="(min-width: 768px) 384px, 100vw"
            />
            <figcaption className="text-muted-foreground mt-1.5 text-xs font-bold tracking-wider uppercase">
              After
            </figcaption>
          </figure>
        </div>
      ) : (
        <Photo
          src={project.image}
          alt={project.title}
          label={project.category}
          icon={service?.icon}
          className="aspect-[16/10] rounded-xl"
          sizes="(min-width: 768px) 768px, 100vw"
        />
      )}

      <ul className="flex flex-wrap gap-1.5" aria-label="Project details">
        {project.details.map((d) => (
          <li key={d}>
            <Badge variant="secondary">{d}</Badge>
          </li>
        ))}
      </ul>

      {review && (
        <figure className="bg-muted/60 rounded-xl p-5">
          <div className="flex items-center gap-2">
            <Quote
              className="text-primary size-5 fill-current"
              aria-hidden="true"
            />
            <Stars rating={review.rating} />
          </div>
          <blockquote className="mt-3 text-sm leading-relaxed sm:text-base">
            &ldquo;{review.text}&rdquo;
          </blockquote>
          <figcaption className="text-muted-foreground mt-3 text-sm font-semibold">
            {review.author}
            <span className="font-normal"> &middot; Google review</span>
          </figcaption>
        </figure>
      )}

      {service && (
        <Link
          href={`/services/${service.slug}/`}
          className="text-brand-700 dark:text-primary focus-visible:ring-ring/60 inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-semibold underline-offset-4 outline-none hover:underline focus-visible:ring-[3px]"
        >
          Learn about {service.short.toLowerCase()}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </DialogContent>
  );
}
