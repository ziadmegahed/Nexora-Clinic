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
  const gallery = treatments.filter((t) => t.category === treatment.category).slice(0, 3);

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
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{treatment.overview}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Who is it for?</h2>
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
                {gallery.map((g) => (
                  <img
                    key={g.slug}
                    src={g.image}
                    alt={`${g.name} treatment at Nexora Clinic`}
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
                This page explains the treatment approach, recovery and results. A free consultation confirms the right clinical plan for you.
              </p>
              <Button asChild className="mt-6 w-full rounded-full font-semibold">
                <Link to="/consultation">Get a Free Consultation</Link>
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
