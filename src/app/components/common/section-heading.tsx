import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 max-w-3xl text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}