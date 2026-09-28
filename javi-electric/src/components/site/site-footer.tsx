import Link from "next/link";
import { MapPin, Phone, ShieldCheck, Star } from "lucide-react";

import { mainNav, serviceAreas, site } from "@/lib/site";
import { services } from "@/lib/services";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/site/logo";

export function SiteFooter() {
  return (
    <footer className="dark bg-navy-950 text-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo withTagline />
          <p className="text-muted-foreground mt-5 max-w-sm text-sm leading-relaxed">
            Honest, high-quality electrical work for homeowners, landlords and
            contractors across the Valley. Founded by {site.owner} and run by
            the Carcamo family.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a href={site.phone.href} className="hover:text-primary inline-flex items-center gap-2 font-semibold">
              <Phone className="text-primary size-4" aria-hidden="true" />
              {site.phone.display}
            </a>
            <a
              href={site.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
            >
              <MapPin className="text-primary size-4" aria-hidden="true" />
              {site.address.full}
            </a>
            <span className="text-muted-foreground inline-flex items-center gap-2">
              <ShieldCheck className="text-primary size-4" aria-hidden="true" />
              {site.license.label}
            </span>
            <a
              href={site.links.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
            >
              <Star className="fill-primary text-primary size-4" aria-hidden="true" />
              {site.stats.rating.toFixed(1)} stars on Google
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-bold tracking-[0.18em] uppercase">Services</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="text-muted-foreground hover:text-foreground">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold tracking-[0.18em] uppercase">Company</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-bold tracking-[0.18em] uppercase">Service areas</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {serviceAreas.map((city) => (
              <li
                key={city}
                className="text-muted-foreground rounded-md border px-2.5 py-1"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="container-site text-muted-foreground flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
        <p>
          Licensed Arizona electrical contractor · {site.license.label}
        </p>
      </div>
    </footer>
  );
}
