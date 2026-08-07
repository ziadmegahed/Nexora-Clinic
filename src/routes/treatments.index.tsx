import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { TreatmentCard } from "@/components/site/treatment-card";
import { CtaSection } from "@/components/site/cta-section";
import { treatmentCategories, treatments } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments in Turkey — Nexora Clinic" },
      { name: "description", content: "Hair transplant, dental implants, Hollywood smile, plastic surgery, bariatric surgery, IVF, orthopedics and dermatology in Turkey." },
      { property: "og:title", content: "Treatments in Turkey — Nexora Clinic" },
      { property: "og:description", content: "Browse all treatments with indicative pricing, duration and required stay." },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      treatments.filter(
        (t) =>
          (category === "All" || t.category === category) &&
          (t.name + t.short).toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query, category],
  );

  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Find the right treatment for you"
        description="Every treatment is delivered in an accredited hospital by a named consultant, with a fixed all-inclusive quote before you travel."
        breadcrumb={[{ label: "Treatments" }]}
      />

      <section className="section">
        <div className="container-page">
          <div className="flex flex-col gap-5">
            <div className="relative max-w-md">
              <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <label htmlFor="treatment-search" className="sr-only">Search treatments</label>
              <Input
                id="treatment-search"
                value={query}
                maxLength={60}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search treatments…"
                className="h-12 rounded-full bg-card pl-11"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", ...treatmentCategories].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    category === c
                      ? "gradient-brand text-primary-foreground"
                      : "border border-border bg-card text-muted-foreground hover:text-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 70}>
                <TreatmentCard treatment={t} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              No treatments match your search. Try another keyword or category.
            </p>
          ) : null}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
