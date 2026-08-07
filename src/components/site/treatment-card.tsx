import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import type { Treatment } from "@/data/site";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const Icon = treatment.icon;
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={treatment.image}
          alt={`${treatment.name} at Nexora Clinic in Turkey`}
          loading="lazy"
          width={900}
          height={700}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
          {treatment.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="font-display text-lg font-bold">{treatment.name}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{treatment.short}</p>
        <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Tag className="h-3.5 w-3.5 text-accent" aria-hidden />
            <dt className="sr-only">Price from</dt>
            <dd className="font-semibold text-foreground">from {treatment.priceFrom}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" aria-hidden />
            <dt className="sr-only">Stay</dt>
            <dd>{treatment.stay}</dd>
          </div>
        </dl>
        <Link
          to="/treatments/$slug"
          params={{ slug: treatment.slug }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:gap-2.5 hover:text-brand-blue"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
