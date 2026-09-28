import { cn } from "@/lib/utils";

/** Eyebrow + title + optional lede. Used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-brand-700 dark:text-primary inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
          <span className="bg-primary h-0.5 w-6 rounded-full" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag className="text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {lede && (
        <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
          {lede}
        </p>
      )}
    </div>
  );
}
