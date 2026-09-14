import { Link, createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Compass, Eye, HeartHandshake, Target } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CtaSection } from "@/components/site/cta-section";
import { hospitals } from "@/data/site";
import aboutImage from "@/assets/about.jpg";

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
  { icon: Eye, title: "Personalized Care", text: "Every patient is different. We help create a medical journey based on individual needs and treatment goals." },
  { icon: Target, title: "Transparent Communication", text: "We believe patients deserve clear information about their treatment, expectations, and costs before making a decision." },
  { icon: Compass, title: "Complete Journey Support", text: "From medical consultation and appointment coordination to airport transfers, accommodation, interpretation, and follow-up, we make the process easier from start to finish." },
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
      <section className="relative overflow-hidden pt-32 pb-16 text-white lg:pt-40 lg:pb-24">
        <div className="absolute inset-0">
          <img src={aboutImage} alt="Nexora Healthcare lobby" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/45" />
        </div>

        <div className="container-page relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/80">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                <span className="font-medium text-white">About Nexora</span>
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-sm">
            NEXORA HEALTHCARE
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold text-balance lg:text-6xl">
            Personal support at every step
          </h1>

          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-white/90">
            <p>
              Nexora Health helps international patients organise their treatment journey in Türkiye.
              We coordinate communication with treating doctors, treatment arrangements and travel support,
              with clear package details and a dedicated point of contact.
            </p>
            <p>
              Medical decisions and treatment remain the responsibility of the treating healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            { title: "Our Mission", text: "To simplify access to trusted healthcare in Turkey by connecting patients with the right medical professionals and healthcare providers, while providing clear guidance and support throughout their healthcare journey." },
            { title: "Our Vision", text: "To become a leading and trusted name in healthcare consultancy in Turkey, setting a new standard for how international patients discover, access, and experience healthcare." },
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

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Our values" title="Why Patients Choose Nexora" />
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
