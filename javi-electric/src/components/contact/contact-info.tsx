import { Clock, MapPin, MessageSquareText, Phone, ShieldCheck } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-border bg-card flex gap-4 rounded-xl border p-5 shadow-xs">
      <span className="bg-primary/15 text-brand-700 dark:text-primary grid size-11 shrink-0 place-items-center rounded-lg [&_svg]:size-5">
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="text-xl font-bold uppercase">{title}</h3>
        <div className="text-muted-foreground mt-1 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <InfoCard icon={<Phone aria-hidden="true" />} title="Call or text">
        <a
          href={site.phone.href}
          className="text-foreground text-lg font-semibold underline-offset-4 hover:underline"
        >
          {site.phone.display}
        </a>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button asChild size="sm">
            <a href={site.phone.href}>
              <Phone /> Call now
            </a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href={site.phone.sms}>
              <MessageSquareText /> Send a text
            </a>
          </Button>
        </div>
      </InfoCard>

      <InfoCard icon={<MapPin aria-hidden="true" />} title="Find us">
        <address className="text-foreground not-italic">{site.address.full}</address>
        <a
          href={site.links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-700 dark:text-primary mt-1 inline-block font-semibold underline-offset-4 hover:underline"
        >
          Open in Google Maps
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </InfoCard>

      <InfoCard icon={<ShieldCheck aria-hidden="true" />} title="Licensed">
        <p className="text-foreground font-semibold">{site.license.label}</p>
        <p>
          Family-owned and licensed by the Arizona Registrar of Contractors.{" "}
          <a
            href={site.license.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-700 dark:text-primary font-semibold underline-offset-4 hover:underline"
          >
            Verify our license
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </InfoCard>

      <InfoCard icon={<Clock aria-hidden="true" />} title="Urgent issue?">
        <p>Same-day service often available for urgent issues. Call and tell us what&apos;s happening.</p>
      </InfoCard>

      <div className="border-border overflow-hidden rounded-xl border shadow-xs">
        <iframe
          src={site.links.mapEmbed}
          title={`Map showing ${site.name} at ${site.address.full}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] w-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
