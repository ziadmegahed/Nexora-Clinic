import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, Clock, MapPin, ShieldAlert, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { DoctorCard } from "@/components/site/doctor-card";
import { CtaSection } from "@/components/site/cta-section";
import { doctors, treatments } from "@/data/site";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = treatments.find((t) => t.slug === params.slug);
    if (!treatment) throw notFound();
    return { name: treatment.name, short: treatment.short, slug: treatment.slug };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Treatment not found — Nexora Clinic" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.name} in Turkey — Nexora Clinic`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/treatments/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/treatments/${params.slug}` }],
    };
  },
  component: TreatmentDetail,
});

function TreatmentDetail() {
  const { slug } = Route.useParams();
  const treatment = treatments.find((t) => t.slug === slug)!;
  const related = doctors.filter((d) => treatment.doctorSlugs.includes(d.slug));
  const gallery = treatment.gallery?.length ? treatment.gallery : treatments.filter((t) => t.category === treatment.category).slice(0, 3).map((t) => t.image);

  return (
    <>
      <PageHero
        eyebrow={treatment.category}
        title={treatment.name}
        description={treatment.short}
        breadcrumb={[{ label: "Treatments", to: "/treatments" }, { label: treatment.name }]}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-12">
            <Reveal>
              <img
                src={treatment.image}
                alt={`${treatment.name} at Nexora Clinic`}
                loading="lazy"
                width={900}
                height={700}
                className="w-full rounded-3xl border border-border object-cover shadow-soft"
              />
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Procedure overview</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{treatment.overview}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">What your consultation will discuss</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                During the consultation, the treating specialist reviews your medical history, treatment goals and any relevant photos or clinical notes. The discussion focuses on whether the procedure is clinically appropriate, what assessment is needed before treatment, and which options are suitable for your individual case.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  Your medical history, symptoms and treatment goals.
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  Clinical suitability, expected planning steps and any additional assessment required.
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  Treatment approach, likely support needs and follow-up arrangements after specialist review.
                </li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Assessment and planning process</h2>
              <ol className="mt-4 space-y-3">
                <li className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
                  <span className="block font-semibold text-foreground">1. Initial review</span>
                  Your information is reviewed by the coordination team and the relevant specialist.
                </li>
                <li className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
                  <span className="block font-semibold text-foreground">2. Clinical assessment</span>
                  The specialist confirms medical suitability, required checks and any treatment-specific planning.
                </li>
                <li className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
                  <span className="block font-semibold text-foreground">3. Written plan</span>
                  We prepare a clear treatment summary, relevant inclusions and any exclusions before a quotation is issued.
                </li>
                <li className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
                  <span className="block font-semibold text-foreground">4. Quotation and decision</span>
                  Once the plan is agreed, the written quotation sets out the scope, timing and payment terms.
                </li>
              </ol>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Indicative travel and recovery arrangements</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Travel, accommodation, follow-up timing and any recovery guidance are discussed only after the treating clinician reviews the case. Arrangements depend on the procedure, medical assessment, recovery status and the documented plan for each patient. We do not publish fixed return-to-flight or recovery timings copied from unrelated cases.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Package inclusions and exclusions</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Depending on your treatment and quotation, package items may include relevant medical fees, hospital and operational charges, surgeon and anaesthesia fees, accommodation arrangements, transfer support, interpreter assistance and follow-up coordination. Inclusions, exclusions and payment terms are confirmed in the written quotation.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  What is included is defined in the issued quote, not assumed from a standard package.
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  Flights, additional treatments, optional procedures and non-medical extras are excluded unless explicitly stated.
                </li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Verified outcomes</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{treatment.results}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Verified outcomes are individual and should be interpreted alongside elapsed time, baseline anatomy and the specialist's assessment. No result is guaranteed.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Quotation and payment</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Use Request a personalised quotation until current Nexora pricing is approved. Historical patient quotes and Medical Park employment quotes are not a public Nexora price list. When publishing prices, include currency, scope, exclusions and validity. Default quotation currency is EUR unless the actual quote specifies otherwise.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Deposits are made by bank transfer under the issued booking instructions. Hospital balance payment options must match the specific provider and the written quotation. We do not publish bank details from memory or promise a single universal balance-payment method. Approved cancellation and refund terms are shown before any booking payment.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Suitable candidates</h2>
              <ul className="mt-4 space-y-2">
                {treatment.whoFor.map((w) => (
                  <li key={w} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Benefits</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {treatment.benefits.map((b) => (
                  <div key={b} className="rounded-2xl border border-border bg-card p-4 text-sm">
                    {b}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Procedure steps</h2>
              <ol className="mt-4 space-y-3">
                {treatment.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-brand text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{s.title}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-bold">Recovery</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{treatment.recovery}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-bold">Expected results</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{treatment.results}</p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
                <ShieldAlert className="h-5 w-5 text-primary" aria-hidden />
                Risks to be aware of
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {treatment.risks.map((r) => (
                  <li key={r} className="rounded-xl bg-surface p-3 text-sm text-muted-foreground">{r}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Gallery</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {gallery.map((image, index) => (
                  <img
                    key={`${treatment.slug}-${index}`}
                    src={image}
                    alt={`${treatment.name} treatment at Nexora Clinic`}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Frequently asked questions</h2>
              <div className="mt-4">
                <FaqAccordion items={treatment.faqs} />
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h2 className="font-display text-lg font-bold">Need a personalised plan?</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A clinician-reviewed assessment helps confirm suitability, any necessary pre-treatment checks and a clear quotation for the planned care.
              </p>
              <Button asChild className="mt-6 w-full rounded-full font-semibold">
                <Link to="/consultation">Request a personalised quotation</Link>
              </Button>
            </div>

            {related.length ? (
              <div className="mt-6 space-y-4">
                <h2 className="font-display text-lg font-bold">Related doctors</h2>
                {related.map((d) => (
                  <DoctorCard key={d.slug} doctor={d} />
                ))}
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <CtaSection title={`Start your ${treatment.name.toLowerCase()} journey`} />
    </>
  );
}
