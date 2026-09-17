import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { BeforeAfterSlider } from "@/components/site/before-after-slider";
import { CtaSection } from "@/components/site/cta-section";
import { beforeAfter, beforeAfterCategories, beforeAfterTreatments } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/before-after")({
  head: () => ({
    meta: [
      { title: "Patient Results — Nexora Clinic Turkey" },
      { name: "description", content: "Compare real before and after results for hair transplant, dental, plastic surgery and weight loss patients treated in Turkey." },
      { property: "og:title", content: "Patient Results — Nexora Clinic" },
      { property: "og:description", content: "Drag-to-compare patient results, published with written consent." },
      { property: "og:url", content: "/before-after" },
    ],
    links: [{ rel: "canonical", href: "/before-after" }],
  }),
  component: BeforeAfterPage,
});

function BeforeAfterPage() {
  const [filter, setFilter] = useState<string>(beforeAfterCategories[0]);
  const [topic, setTopic] = useState<string>(beforeAfterTreatments["Aesthetic Operations"][0]);
  const isAestheticOperations = filter === "Aesthetic Operations";
  const items = beforeAfter.filter(
    (item) => item.category === filter && (!isAestheticOperations || item.treatment === topic),
  );

  return (
    <>
      <PageHero
        eyebrow="Patient Results"
        title="Results you can compare for yourself"
        description="Every image is published with written patient consent and shows unretouched clinical documentation."
        breadcrumb={[{ label: "Patient Results" }]}
      />

      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {beforeAfterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setFilter(category);
                  if (category === "Aesthetic Operations") {
                    setTopic(beforeAfterTreatments["Aesthetic Operations"][0]);
                  }
                }}
                aria-pressed={filter === category}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  filter === category
                    ? "gradient-brand text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-primary",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-bold">{filter} treatments</h2>
            {beforeAfterTreatments[filter as keyof typeof beforeAfterTreatments].length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {beforeAfterTreatments[filter as keyof typeof beforeAfterTreatments].map((treatment) => (
                  <button
                    key={treatment}
                    type="button"
                    onClick={() => setTopic(treatment)}
                    aria-pressed={isAestheticOperations && topic === treatment}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-sm transition-colors",
                      isAestheticOperations && topic === treatment
                        ? "gradient-brand text-primary-foreground"
                        : "border border-border bg-card text-muted-foreground hover:text-primary",
                    )}
                  >
                    {treatment}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">No treatments are listed for this category yet.</p>
            )}
          </div>

          {items.length ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 70}>
                  <figure className="overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-soft">
                    <BeforeAfterSlider before={item.before} after={item.after} alt={`${item.title} ${item.id}`} />
                    <figcaption className="flex items-end justify-between gap-3 px-1 pt-4 pb-1">
                      <span>
                        <span className="text-xs font-semibold tracking-wide text-primary uppercase">{item.category}</span>
                        <span className="mt-1 block font-display text-base font-bold">{item.title}</span>
                      </span>
                      <Dialog>
                        <DialogTrigger className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted">
                          Enlarge
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogTitle className="font-display">{item.title}</DialogTitle>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <img src={item.before} alt={`${item.title} before`} loading="lazy" width={800} height={800} className="w-full rounded-2xl" />
                            <img src={item.after} alt={`${item.title} after`} loading="lazy" width={800} height={800} className="w-full rounded-2xl" />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-10 text-center shadow-soft">
              <h2 className="font-display text-xl font-bold">No patient results published yet</h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Results for {filter} will appear here as new patient cases are published with written consent.
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaSection title="Could these be your results?" />
    </>
  );
}
