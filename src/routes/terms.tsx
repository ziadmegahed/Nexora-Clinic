import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { brand } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Nexora Clinic" },
      { name: "description", content: "The terms that apply to Nexora Clinic's coordination services for international patients travelling to Turkey for treatment." },
      { property: "og:title", content: "Terms & Conditions — Nexora Clinic" },
      { property: "og:description", content: "Scope of services, quotations, cancellations and medical responsibility." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  { title: "Our role", body: "Nexora Clinic coordinates medical treatment between patients and independent doctors and hospitals in Turkey. Clinical decisions, procedures and their outcomes remain the responsibility of the treating physician and facility." },
  { title: "Quotations", body: "Quotes are issued after medical review and remain valid for 60 days. They cover the items listed in your plan. Additional treatment identified during pre-operative assessment is quoted separately and requires your approval." },
  { title: "Bookings and deposits", body: "A deposit confirms your surgery date and travel arrangements. The balance is settled on arrival. Deposits are transferable to a new date once, subject to availability." },
  { title: "Cancellations", body: "Cancellations more than 14 days before arrival are refundable minus non-recoverable booking costs. Later cancellations may be non-refundable where theatre time and accommodation have been reserved." },
  { title: "Medical information", body: "You agree to disclose your full medical history and current medication. Withheld information may make treatment unsafe and can lead to a procedure being cancelled on medical grounds." },
  { title: "Results", body: "No medical result can be guaranteed. Expected outcomes described on this site are typical ranges, not promises, and vary between individuals." },
];

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="These terms are maintained by Nexora Clinic and apply to our coordination services." breadcrumb={[{ label: "Terms & Conditions" }]} />
      <section className="section">
        <div className="container-page max-w-3xl space-y-8">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
          <p className="rounded-2xl bg-surface p-5 text-sm text-muted-foreground">
            Questions? Contact us at <a className="text-primary hover:underline" href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
