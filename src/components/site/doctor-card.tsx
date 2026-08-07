import { Link } from "@tanstack/react-router";
import { Languages, Star, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Doctor } from "@/data/site";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="relative aspect-[7/8] overflow-hidden bg-muted">
        <img
          src={doctor.photo}
          alt={`Portrait of ${doctor.name}, ${doctor.specialty}`}
          loading="lazy"
          width={700}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute right-4 bottom-4 inline-flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
          {doctor.rating.toFixed(1)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold">{doctor.name}</h3>
        <p className="mt-1 text-sm text-primary">{doctor.specialty}</p>
        <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <Stethoscope className="h-3.5 w-3.5 text-primary" aria-hidden />
            {doctor.years} years of experience
          </li>
          <li className="flex items-center gap-2">
            <Languages className="h-3.5 w-3.5 text-primary" aria-hidden />
            {doctor.languages.join(", ")}
          </li>
        </ul>
        <Button asChild variant="outline" className="mt-6 w-full rounded-full">
          <Link to="/doctors/$slug" params={{ slug: doctor.slug }}>
            View Profile
          </Link>
        </Button>
      </div>
    </article>
  );
}
