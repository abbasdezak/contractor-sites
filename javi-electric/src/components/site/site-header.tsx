"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, ShieldCheck, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar */}
      <div className="dark bg-navy-950 text-foreground hidden text-xs md:block">
        <div className="container-site flex h-9 items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="text-primary size-3.5" aria-hidden="true" />
              Licensed electrical contractor · {site.license.label}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="fill-primary text-primary size-3.5" aria-hidden="true" />
              {site.stats.rating.toFixed(1)} on Google · Family-owned in Mesa
            </span>
          </div>
          <a
            href={site.phone.href}
            className="hover:text-primary inline-flex items-center gap-1.5 font-semibold"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            Same-day service: {site.phone.display}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "bg-background/90 supports-[backdrop-filter]:bg-background/75 border-b backdrop-blur transition-shadow",
          scrolled ? "shadow-md" : "border-transparent"
        )}
      >
        <div className="container-site flex h-18 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                      isActive(item.href)
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="lg" className="hidden sm:inline-flex">
              <a href={site.phone.href}>
                <Phone /> {site.phone.display}
              </a>
            </Button>
            <Button asChild size="icon" className="sm:hidden" aria-label={`Call ${site.phone.display}`}>
              <a href={site.phone.href}>
                <Phone />
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                <SheetHeader className="border-b">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Site navigation and contact
                  </SheetDescription>
                  <Logo />
                </SheetHeader>
                <nav aria-label="Mobile" className="px-4">
                  <ul className="flex flex-col">
                    {[{ title: "Home", href: "/" }, ...mainNav].map((item) => (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "font-display flex items-center justify-between border-b py-4 text-xl font-bold uppercase",
                              isActive(item.href) && "text-brand-700"
                            )}
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto flex flex-col gap-3 p-4">
                  <Button asChild size="xl">
                    <a href={site.phone.href}>
                      <Phone /> Call {site.phone.display}
                    </a>
                  </Button>
                  <p className="text-muted-foreground text-center text-xs">
                    {site.license.label} · {site.address.city}, {site.address.state}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
