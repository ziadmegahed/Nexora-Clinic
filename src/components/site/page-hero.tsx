import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden gradient-soft pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container-page relative">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              {breadcrumb.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  {crumb.to ? (
                    <Link to={crumb.to} className="transition-colors hover:text-primary">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold text-balance lg:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
