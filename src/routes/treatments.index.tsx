import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { TreatmentCard } from "@/components/site/treatment-card";
import { CtaSection } from "@/components/site/cta-section";
import { treatments } from "@/data/site";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments in Turkey — Nexora Clinic" },
      { name: "description", content: "Hair transplant, aesthetics operations, obesity treatments, Dental Treatments and Check-Ups in Turkey." },
      { property: "og:title", content: "Treatments in Turkey — Nexora Clinic" },
      { property: "og:description", content: "Browse all treatments with clinical details, recovery expectations and care pathways." },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      treatments.filter(
        (t) => (t.name + t.short).toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  );

  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Find the right treatment for you"
        description="Every treatment is delivered in an accredited hospital by a named consultant, with a clear clinical plan before you travel."
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
