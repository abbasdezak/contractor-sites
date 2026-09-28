import { Stars } from "@/components/site/stars";
import { cn } from "@/lib/utils";

/** Large display pull quote attributed to a real reviewer. */
export function PullQuote({
  quote,
  author,
  source = "Google review",
  className,
}: {
  quote: string;
  author: string;
  source?: string;
  className?: string;
}) {
  return (
    <figure className={cn("relative", className)}>
      <span
        aria-hidden="true"
        className="font-display text-primary/30 absolute -top-6 -left-1 text-9xl leading-none font-extrabold select-none"
      >
        &ldquo;
      </span>
      <blockquote className="font-display relative text-3xl leading-tight font-bold uppercase sm:text-4xl lg:text-5xl">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-center gap-3 text-sm">
        <Stars rating={5} />
        <span className="font-semibold">{author}</span>
        <span className="text-muted-foreground">{source}</span>
      </figcaption>
    </figure>
  );
}
