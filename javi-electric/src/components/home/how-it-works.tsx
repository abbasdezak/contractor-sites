import Link from "next/link";
import { MessageSquareText, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/icon";
import { SectionHeading } from "@/components/site/section-heading";

const steps = [
  {
    icon: "Phone",
    title: "Call or text",
    body: "Reach Javi directly. Customers say he responds quickly and answers every question. Same-day service is often available.",
  },
  {
    icon: "ClipboardCheck",
    title: "Free estimate, clear quote",
    body: "Get a free consultation and a detailed written scope of work, so you know exactly what you're paying for before we start.",
  },
  {
    icon: "Sparkles",
    title: "Done right, cleaned up",
    body: "We show up on time, work efficiently, protect your home and leave the space looking like we were never there.",
  },
  {
    icon: "ShieldCheck",
    title: "We stand behind it",
    body: "Family-owned means our name is on every job. Many customers now call Javi first for every electrical need.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-secondary/60 relative py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="Simple from the first call"
          lede="No runaround, no pressure. Four steps from problem to powered."
        />

        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="border-primary/50 absolute top-8 right-[12.5%] left-[12.5%] hidden border-t-2 border-dashed lg:block"
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="bg-card relative rounded-2xl border p-6 shadow-xs"
            >
              <div className="flex items-center gap-4">
                <span className="bg-navy-900 text-primary ring-secondary relative grid size-14 place-items-center rounded-2xl ring-8">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <span
                  className="font-display text-primary/70 text-5xl leading-none font-extrabold"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold uppercase">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="xl">
            <a href={site.phone.href}>
              <Phone /> Call {site.phone.display}
            </a>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="/contact/">
              <MessageSquareText /> Request an estimate
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
