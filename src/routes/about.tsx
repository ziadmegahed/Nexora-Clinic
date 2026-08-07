import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, Eye, HeartHandshake, Target } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { Counter } from "@/components/site/counter";
import { CtaSection } from "@/components/site/cta-section";
import { hospitals, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nexora Clinic — Medical Tourism in Turkey" },
      { name: "description", content: "Our mission, values and story: how Nexora Clinic guides international patients through treatment in Turkey's accredited hospitals." },
      { property: "og:title", content: "About Nexora Clinic" },
      { property: "og:description", content: "10,000+ patients from 40+ countries treated with Turkey's leading specialists." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: HeartHandshake, title: "Patients first", text: "Every recommendation must be the one we would give our own family." },
  { icon: Eye, title: "Radical transparency", text: "Fixed quotes, named doctors, honest expectations about results." },
  { icon: Target, title: "Clinical excellence", text: "Accredited hospitals, audited outcomes, no compromise on safety." },
  { icon: Compass, title: "Effortless journeys", text: "Visas, transfers, hotels and interpreters handled end to end." },
];

const milestones = [
  { year: "2015", text: "Nexora founded in Istanbul with three partner surgeons." },
  { year: "2018", text: "Dedicated international patient department opens." },
  { year: "2020", text: "Remote consultation platform launched during the pandemic." },
  { year: "2023", text: "10,000th patient treated; JCI hospital partnerships expanded." },
  { year: "2026", text: "Coordinators serving patients in 40+ countries and 5 languages." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A patient-first bridge between the world and Turkey's best medicine"
        description="Nexora Clinic was founded by Turkish physicians who saw international patients arriving unprepared, unsupported and overcharged. We built the company we wished existed."
        breadcrumb={[{ label: "About Us" }]}
      />

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            { title: "Our Mission", text: "To make world-class medical treatment accessible, transparent and stress-free for patients travelling to Turkey." },
            { title: "Our Vision", text: "To be the most trusted medical tourism partner in the Middle East and Africa by 2030." },
            { title: "Our Story", text: "From three surgeons in Istanbul to a team of coordinators, nurses and interpreters serving patients across four continents." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <article className="card-lift h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h2 className="font-display text-xl font-bold">{b.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Why Turkey" title="Expert medicine at a fraction of European prices" description="Turkey trains one of the largest medical workforces in the region, its private hospitals hold international accreditation, and living costs make treatment 50–70% cheaper than Western Europe — without any compromise in clinical standards." />
          <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-4xl font-bold text-gradient-brand">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dd>
                  <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Our values" title="What we hold ourselves to" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 70}>
                <article className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Book your consultation with a Nexora specialist" />
    </>
  );
}
