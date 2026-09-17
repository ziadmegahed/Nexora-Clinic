import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { MultiStepConsultation } from "@/components/site/multi-step-consultation";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Free Medical Consultation — Nexora Healthcare Turkey" },
      { name: "description", content: "Request a free, no-obligation consultation. Share your case and receive a tailored clinical plan." },
      { property: "og:title", content: "Free Medical Consultation — Nexora Healthcare" },
      { property: "og:description", content: "Four quick steps, with a responsive consultant review of your case." },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
  }),
  component: ConsultationPage,
});

function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Evaluation request"
        title="Request your personalised treatment evaluation"
        description="It takes about two minutes. A coordinator reviews your case and arranges the next step with the relevant clinical team."
        breadcrumb={[{ label: "Evaluation Request" }]}
      />
      <section className="section pt-0">
        <div className="container-page max-w-3xl">
          <MultiStepConsultation />
        </div>
      </section>
    </>
  );
}
