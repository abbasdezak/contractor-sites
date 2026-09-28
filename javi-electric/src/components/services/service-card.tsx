import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/lib/services";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/site/icon";

/** Linked service card used on the services index and "other services". */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="group bg-card focus-visible:ring-ring/50 hover:border-primary/60 relative flex h-full flex-col gap-4 rounded-2xl border p-6 shadow-sm transition-all outline-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-[3px]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="bg-navy-900 text-brand-400 group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-xl transition-colors">
          <Icon name={service.icon} className="size-6" />
        </span>
        {service.popular && <Badge>Popular</Badge>}
      </div>
      <h3 className="text-2xl leading-tight font-bold uppercase">
        {service.title}
      </h3>
      <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
        {service.summary}
      </p>
      <span className="text-brand-700 dark:text-primary inline-flex items-center gap-1.5 text-sm font-semibold">
        Learn more
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
