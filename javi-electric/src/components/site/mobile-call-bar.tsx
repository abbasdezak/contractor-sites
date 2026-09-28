import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { site } from "@/lib/site";

/** Fixed bottom bar on phones: one-tap call + estimate. */
export function MobileCallBar() {
  return (
    <div className="bg-background/95 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <a
        href={site.phone.href}
        className="bg-primary text-primary-foreground flex h-12 items-center justify-center gap-2 rounded-lg text-sm font-bold"
      >
        <Phone className="size-4" aria-hidden="true" /> Call now
      </a>
      <Link
        href="/contact/"
        className="bg-navy-900 flex h-12 items-center justify-center gap-2 rounded-lg text-sm font-bold text-white"
      >
        <CalendarCheck className="size-4" aria-hidden="true" /> Free estimate
      </Link>
    </div>
  );
}
