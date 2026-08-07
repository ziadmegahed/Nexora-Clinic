import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingCard({
  name,
  price,
  note,
  features,
  slug,
  featured,
}: {
  name: string;
  price: string;
  note: string;
  features: string[];
  slug: string;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "card-lift flex h-full flex-col rounded-3xl border p-7 shadow-soft",
        featured ? "border-primary bg-primary-soft/50" : "border-border bg-card",
      )}
    >
      {featured ? (
        <span className="mb-4 w-fit rounded-full gradient-brand px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
          Most requested
        </span>
      ) : null}
      <h3 className="font-display text-lg font-bold">{name}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{note}</p>
      <p className="mt-5 font-display text-3xl font-bold text-primary">{price}</p>
      <p className="text-xs text-muted-foreground">all-inclusive, fixed before you fly</p>
      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant={featured ? "default" : "outline"} className="mt-7 w-full rounded-full">
        <Link to="/treatments/$slug" params={{ slug }}>
          Learn More
        </Link>
      </Button>
    </article>
  );
}
