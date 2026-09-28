import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Compact navy hero for inner pages, with breadcrumbs.
 * Home page uses its own full hero.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  crumbs?: { title: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="dark bg-background text-foreground texture-grid relative isolate overflow-hidden">
      <div
        className="bg-primary/20 absolute -top-40 right-0 -z-10 size-[32rem] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site py-14 sm:py-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="text-muted-foreground flex flex-wrap items-center gap-1 text-sm">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.title} className="flex items-center gap-1">
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-foreground">
                      {c.title}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-foreground">
                      {c.title}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-primary mb-3 text-xs font-bold tracking-[0.2em] uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-extrabold uppercase sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-relaxed">
            {lede}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
