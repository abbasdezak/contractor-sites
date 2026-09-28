import { Phone } from "lucide-react";

import { promises, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/icon";
import { SectionHeading } from "@/components/site/section-heading";
import { Stars } from "@/components/site/stars";

export function WhyChoose() {
  return (
    <section className="dark bg-background text-foreground bg-grid relative isolate overflow-hidden py-20 sm:py-28">
      <div className="bg-primary/15 absolute top-1/3 -left-40 -z-10 size-[28rem] rounded-full blur-3xl" aria-hidden="true" />
      <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why homeowners choose Javi"
            title="The name on the truck is the name on the work"
            lede="Customers tell us the same things again and again. Here is what you can expect when you call."
          />
          <figure className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <Stars rating={5} />
            <blockquote className="font-display mt-4 text-2xl leading-snug font-bold uppercase">
              &ldquo;He is 100% trustworthy, honest and reliable.&rdquo;
            </blockquote>
            <figcaption className="text-muted-foreground mt-3 text-sm">
              Lisa, Google review
            </figcaption>
          </figure>
          <Button asChild size="xl" className="mt-8 w-full sm:w-auto">
            <a href={site.phone.href}>
              <Phone /> Call {site.phone.display}
            </a>
          </Button>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {promises.map((p) => (
            <li
              key={p.title}
              className="group hover:border-primary/40 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
            >
              <span className="bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-xl transition-colors">
                <Icon name={p.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold uppercase">{p.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {p.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
