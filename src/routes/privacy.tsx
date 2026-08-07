import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { brand } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nexora Clinic" },
      { name: "description", content: "How Nexora Clinic collects, stores and protects the personal and medical information of international patients." },
      { property: "og:title", content: "Privacy Policy — Nexora Clinic" },
      { property: "og:description", content: "Our commitments on medical data, consent and retention." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  { title: "Information we collect", body: "We collect the details you submit through our consultation and contact forms: name, email, phone or WhatsApp number, country, treatment interest, preferred dates and any medical information, photographs or reports you choose to share." },
  { title: "How we use your information", body: "Your information is used only to assess your case medically, prepare a treatment plan and quote, arrange your travel and accommodation, and follow up on your care. We do not sell or rent personal data." },
  { title: "Medical data and consent", body: "Medical information is shared only with the consultants and hospital teams involved in your care. Before and after photographs are published only where you have given separate written consent, which you may withdraw at any time." },
  { title: "Data retention", body: "Enquiry data is kept for the appropriate period required by medical record regulations, and treatment records are retained by the hospital." },
  { title: "Your rights", body: "You may request access to, correction of, or deletion of your personal data, and you may object to marketing communications at any time." },
  { title: "Cookies and analytics", body: "This website uses essential cookies to function and may use privacy-respecting analytics to understand which pages are useful. No advertising profiles are built from medical enquiries." },
];

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="This page is maintained by Nexora Clinic to explain how we handle your personal and medical information." breadcrumb={[{ label: "Privacy Policy" }]} />
      <section className="section">
        <div className="container-page max-w-3xl space-y-8">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
          <p className="rounded-2xl bg-surface p-5 text-sm text-muted-foreground">
            Questions about this policy? Email <a className="text-primary hover:underline" href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
