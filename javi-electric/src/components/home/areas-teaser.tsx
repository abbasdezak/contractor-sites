import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { serviceAreas, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";

export function AreasTeaser() {
  return (
    <section className="bg-background texture-grid-light relative py-20 sm:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Service areas"
            title="Proudly serving Mesa & the East Valley"
            lede="Based in Mesa and working across the East Valley. If you're nearby, chances are we can be there today."
          />
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {serviceAreas.map((a) => (
              <li
                key={a}
                className="bg-card flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold shadow-xs"
              >
                <MapPin className="text-brand-600 size-4" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl">
              <a href={site.phone.href}>
                <Phone /> Call {site.phone.display}
              </a>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/service-areas/">
                Service areas <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="dark bg-background text-foreground texture-grid relative isolate mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border shadow-2xl">
          <div className="bg-primary/20 absolute top-1/2 left-1/2 -z-10 size-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" aria-hidden="true" />
          <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" aria-hidden="true">
            {[60, 110, 160, 195].map((r, i) => (
              <circle
                key={r}
                cx="200"
                cy="200"
                r={r}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.22 - i * 0.04}
                strokeDasharray={i % 2 ? "4 6" : undefined}
                className="text-primary"
              />
            ))}
          </svg>
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="bg-primary text-primary-foreground shadow-primary/30 grid size-16 place-items-center rounded-full shadow-xl">
              <MapPin className="size-8" aria-hidden="true" />
            </span>
          </div>
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-center backdrop-blur">
            <p className="font-display text-2xl font-bold uppercase">
              Javi Electric · Mesa, AZ
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              {site.address.full}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
