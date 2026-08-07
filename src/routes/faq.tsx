import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { CtaSection } from "@/components/site/cta-section";
import { faqCategories, faqs } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Travel, Treatment & Payments | Nexora Clinic" },
      { name: "description", content: "Answers about visas, hospitals, accommodation, payments, recovery and choosing your doctor for treatment in Turkey." },
      { property: "og:title", content: "Nexora Clinic FAQ" },
      { property: "og:description", content: "Everything international patients ask before travelling to Turkey for treatment." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [category, setCategory] = useState<string>("Travel");
  const items = faqs.filter((f) => f.category === category);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything patients ask before they fly"
        description="Still unsure about something? Message us on WhatsApp — real people, not bots."
        breadcrumb={[{ label: "FAQ" }]}
      />
      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((c) => (
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
          <div className="mt-8">
            <FaqAccordion items={items.map(({ q, a }) => ({ q, a }))} />
          </div>
        </div>
      </section>
      <CtaSection title="Still have a question?" description="Send it to our patient team and get a clear answer as soon as possible." />
    </>
  );
}
