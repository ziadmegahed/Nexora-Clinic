import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/site";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
      <Quote className="h-7 w-7 text-primary/25" aria-hidden />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
        “{item.text}”
      </blockquote>
      <div
        className="mt-5 flex items-center gap-1"
        aria-label={`Rated ${item.rating} out of 5`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden
            className={
              i < item.rating ? "h-4 w-4 fill-accent text-accent" : "h-4 w-4 text-muted-foreground/40"
            }
          />
        ))}
      </div>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
        <span
          aria-hidden
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft font-semibold text-primary"
        >
          {item.initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold">{item.name}</span>
          <span className="block truncate text-xs text-muted-foreground">
            {item.country} • {item.treatment}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
