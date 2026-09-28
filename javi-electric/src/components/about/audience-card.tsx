import { Card } from "@/components/ui/card";

/** "Who we work with" card: audience, what we do for them, and a verbatim review line. */
export function AudienceCard({
  icon,
  title,
  description,
  quote,
  author,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  quote: string;
  author: string;
}) {
  return (
    <Card className="h-full gap-5 p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <span className="bg-primary/15 text-brand-700 grid size-12 shrink-0 place-items-center rounded-xl [&_svg]:size-6">
          {icon}
        </span>
        <h3 className="text-2xl font-bold uppercase">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <figure className="border-primary mt-auto border-l-4 pl-4">
        <blockquote className="text-foreground/90 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption className="text-muted-foreground mt-2 text-sm font-semibold">
          {author}, Google review
        </figcaption>
      </figure>
    </Card>
  );
}
