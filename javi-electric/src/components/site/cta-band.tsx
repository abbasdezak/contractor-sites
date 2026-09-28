import Link from "next/link";
import { MessageSquareText, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

/** Amber call-to-action band placed near the bottom of most pages. */
export function CtaBand({
  title = "Need an electrician you can trust?",
  lede = "Call or text Javi for a free estimate. Same-day service is often available.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground relative isolate overflow-hidden">
      <svg
        className="text-navy-900/10 absolute -right-10 -bottom-16 -z-10 h-80 w-80"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M13.2 2 4.5 13.4h6.1L9.4 22l9.1-12.1h-6.3L13.2 2Z"
        />
      </svg>
      <div className="container-site flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg font-medium opacity-80">{lede}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="xl"
            className="bg-navy-900 hover:bg-navy-800 text-white"
          >
            <a href={site.phone.href}>
              <Phone /> Call {site.phone.display}
            </a>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-navy-900/30 text-navy-900 hover:bg-navy-900/10 bg-transparent"
          >
            <Link href="/contact/">
              <MessageSquareText /> Request an estimate
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
