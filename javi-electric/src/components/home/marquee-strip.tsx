import { Zap } from "lucide-react";

/** Short verbatim snippets from real Google reviews (see lib/reviews.ts). */
const snippets = [
  { text: "Fixed before 5pm same day.", author: "Brendan Gallagher" },
  { text: "The clean up was great, like he was never here.", author: "Cassandra Friday" },
  { text: "Responsive, fast, & reasonably priced.", author: "Kurt Nacewicz" },
  { text: "Skilled work, easy scheduling and fair pricing.", author: "Jaime Mazzeo" },
  { text: "They are now my number one subcontractor.", author: "Mark Kelso, general contractor" },
  { text: "He stands behind his work.", author: "Lisa" },
  { text: "Absolutely love that the company is family owned.", author: "Haley Brinkmann" },
  { text: "They keep their word, show up on time, are fast.", author: "Chuck Reynolds" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={
        "flex shrink-0 items-center gap-10 pr-10 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0" +
        (hidden ? " motion-reduce:hidden" : "")
      }
    >
      {snippets.map((s) => (
        <li key={s.text} className="flex items-center gap-10 whitespace-nowrap motion-reduce:whitespace-normal">
          <span className="text-sm sm:text-base">
            <span className="font-display text-lg font-bold tracking-wide uppercase sm:text-xl">
              &ldquo;{s.text}&rdquo;
            </span>{" "}
            <span className="text-muted-foreground">{s.author}</span>
          </span>
          <Zap
            className="text-primary size-4 shrink-0 fill-current motion-reduce:hidden"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

export function MarqueeStrip() {
  return (
    <section
      aria-label="What Mesa customers say about Javi Electric"
      className="bg-secondary border-y"
    >
      <div className="group relative overflow-hidden py-5">
        <div className="animate-marquee flex w-max motion-reduce:w-full motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
