import { Flame, Phone } from "lucide-react";

import { site } from "@/lib/site";

export function EmergencyNote() {
  return (
    <div
      role="note"
      className="border-destructive/40 bg-destructive/10 flex flex-col gap-3 rounded-xl border p-5 sm:flex-row sm:items-center sm:gap-5"
    >
      <span className="bg-destructive grid size-11 shrink-0 place-items-center rounded-lg text-white">
        <Flame className="size-5" aria-hidden="true" />
      </span>
      <p className="flex-1 text-sm leading-relaxed sm:text-base">
        <strong className="font-semibold">Smell burning or see sparks?</strong>{" "}
        Don&apos;t wait on a form. Call us now at{" "}
        <a
          href={site.phone.href}
          className="inline-flex items-center gap-1 font-semibold underline underline-offset-4"
        >
          <Phone className="size-4" aria-hidden="true" />
          {site.phone.display}
        </a>
        . If there is a fire, call <strong className="font-semibold">911</strong>.
      </p>
    </div>
  );
}
