import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { popularServices, services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/icon";
import { SectionHeading } from "@/components/site/section-heading";

const otherServices = services.filter((s) => !s.popular);

export function ServicesGrid() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Electrical work done right, start to finish"
            lede="From a burning smell at the panel to a full lighting refresh, Javi and his son handle it with fair, detailed quotes and no surprises."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/services/">
              All services <ArrowRight />
            </Link>
          </Button>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popularServices.map((s) => (
            <li key={s.slug} className="flex">
              <Link
                href={`/services/${s.slug}/`}
                className="group bg-card focus-visible:ring-ring/60 hover:border-primary/60 relative flex w-full flex-col overflow-hidden rounded-2xl border p-6 shadow-xs transition-all outline-none hover:-translate-y-1 hover:shadow-xl focus-visible:ring-4"
              >
                <span className="bg-primary/0 group-hover:bg-primary/10 absolute -top-16 -right-16 size-40 rounded-full transition-colors" aria-hidden="true" />
                <span className="bg-navy-900 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-xl transition-colors">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-2xl leading-tight font-bold uppercase">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                  {s.summary}
                </p>
                <span className="text-brand-700 mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center">
          <p className="text-muted-foreground shrink-0 text-sm font-semibold tracking-wide uppercase">
            Also
          </p>
          <ul className="flex flex-wrap gap-2">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground focus-visible:ring-ring/60 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors outline-none focus-visible:ring-4"
                >
                  <Icon name={s.icon} className="size-4" />
                  {s.short}
                  <ArrowUpRight className="size-3.5 opacity-50" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
