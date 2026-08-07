import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { MultiStepConsultation } from "@/components/site/multi-step-consultation";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Free Medical Consultation — Nexora Clinic Turkey" },
      { name: "description", content: "Request a free, no-obligation consultation. Share your case and receive a treatment plan and fixed quote within 24 hours." },
      { property: "og:title", content: "Free Medical Consultation — Nexora Clinic" },
      { property: "og:description", content: "Four quick steps, a reply from an Turkish consultant within 24 hours." },
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
        eyebrow="Free consultation"
        title="Get your personalised treatment plan"
        description="It takes about two minutes. A coordinator and the relevant consultant review your case and reply within 24 hours."
        breadcrumb={[{ label: "Free Consultation" }]}
      />
      <section className="section pt-0">
        <div className="container-page max-w-3xl">
          <MultiStepConsultation />
        </div>
      </section>
    </>
  );
}
