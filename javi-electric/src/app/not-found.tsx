import type { Metadata } from "next";
import Link from "next/link";
import { Home, MessageSquareText, Phone, Wrench } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="dark bg-background text-foreground texture-grid relative isolate flex flex-1 items-center overflow-hidden">
      <div
        className="bg-primary/20 absolute -top-32 left-1/2 -z-10 size-[30rem] -translate-x-1/2 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site py-20 text-center sm:py-28">
        <p
          className="font-display text-primary text-8xl leading-none font-extrabold sm:text-9xl"
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold uppercase sm:text-5xl">
          Looks like a tripped breaker
        </h1>
        <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
          We couldn&apos;t find the page you were looking for. It may have moved
          or the link may be off. Let&apos;s get the power back on.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button asChild size="xl">
            <Link href="/">
              <Home /> Back to home
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="/services/">
              <Wrench /> Our services
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="/contact/">
              <MessageSquareText /> Contact us
            </Link>
          </Button>
        </div>

        <p className="text-muted-foreground mt-8 text-sm">
          Need an electrician right now?{" "}
          <a
            href={site.phone.href}
            className="text-primary inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
