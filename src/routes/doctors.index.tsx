import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { DoctorCard } from "@/components/site/doctor-card";
import { CtaSection } from "@/components/site/cta-section";
import { doctors, treatmentCategories } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/doctors/")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Nexora Clinic Turkey" },
      { name: "description", content: "Meet the Turkish consultants behind Nexora Clinic: surgeons, dentists, fertility and dermatology specialists with international training." },
      { property: "og:title", content: "Our Doctors — Nexora Clinic Turkey" },
      { property: "og:description", content: "Browse specialists by field, experience, languages and patient rating." },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const filtered = useMemo(
    () =>
      doctors.filter(
        (d) =>
          (specialty === "All" || d.category === specialty) &&
          (d.name + d.specialty).toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query, specialty],
  );

  return (
    <>
      <PageHero
        eyebrow="Doctors"
        title="Meet the specialists who will treat you"
        description="You always know who is operating, what they have trained in and how many procedures they have performed."
        breadcrumb={[{ label: "Doctors" }]}
      />

      <section className="section">
        <div className="container-page">
          <div className="relative max-w-md">
            <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <label htmlFor="doctor-search" className="sr-only">Search doctors</label>
            <Input
              id="doctor-search"
              value={query}
              maxLength={60}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search doctors…"
              className="h-12 rounded-full bg-card pl-11"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["All", ...treatmentCategories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSpecialty(c)}
                aria-pressed={specialty === c}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  specialty === c
                    ? "gradient-brand text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 4) * 70}>
                <DoctorCard doctor={d} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              No doctors match this filter — try another specialty.
            </p>
          ) : null}
        </div>
      </section>

      <CtaSection title="Request a specific consultant" />
    </>
  );
}
