import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Hotel,
  Languages,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
  UserRound,
  Wallet,
} from "lucide-react";

import heroImage from "@/assets/hero-patient-doctor.jpg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { TreatmentCard } from "@/components/site/treatment-card";
import { DoctorCard } from "@/components/site/doctor-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { JourneyTimeline } from "@/components/site/journey-timeline";
import { BeforeAfterSlider } from "@/components/site/before-after-slider";
import {
  brand,
  beforeAfter,
  doctors,
  features,
  hospitals,
  testimonials,
  treatments,
} from "@/data/site";

const featureIcons = [UserRound, BadgeCheck, ShieldCheck, Plane, Hotel, Languages, Wallet, Sparkles];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Clinic — World-Class Medical Care in Turkey" },
      {
        name: "description",
        content:
          "Safe, affordable hair transplant, dental, plastic, bariatric and fertility treatment in Turkey with top doctors, accredited hospitals and full travel support.",
      },
      { property: "og:title", content: "Nexora Clinic — World-Class Medical Care in Turkey" },
      {
        property: "og:description",
        content:
          "Helping international patients receive life-changing treatment with Turkey's leading doctors and accredited hospitals.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-soft pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Personalised healthcare coordination in Türkiye
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-balance lg:text-6xl">
              Your next chapter starts with a clear plan.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Explore body contouring, facial surgery and weight-loss treatments with Nexora Health. We coordinate your medical evaluation, treatment arrangements and travel support around your individual needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7 font-semibold">
                <Link to="/consultation">
                  Request an Evaluation
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 font-semibold" target="_blank" rel="noreferrer">
                <a href={brand.whatsappUrl}>Chat on WhatsApp</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-lift">
              <img
                src={heroImage}
                alt="International patient smiling with her doctor at Nexora Clinic in Turkey"
                width={1200}
                height={1408}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular treatments */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Popular treatments"
            title="Treatments international patients travel to Turkey for"
            description="Every plan is prepared with a fully itemised clinical pathway and support package."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 4) * 70}>
                <TreatmentCard treatment={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Nexora"
            title="Clear information. Coordinated care. Personal support."
            description=""
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = featureIcons[i] ?? Sparkles;
              return (
                <Reveal key={f.title} delay={(i % 4) * 70}>
                  <article className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Your journey"
            title="From your first message to your follow-up"
            description=""
          />
          <div className="mt-12">
            <JourneyTimeline />
          </div>
        </div>
      </section>

      {/* Doctors + hospitals */}
      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Doctors & hospitals"
            title="Consultants selected on outcomes, not marketing"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 4) * 70}>
                <DoctorCard doctor={d} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hospitals.map((h) => (
              <div key={h.name} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
                <Building2 className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{h.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {h.accreditation} • {h.city}
                  </span>
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Patient Results */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient Results"
            title="Real results from real patients"
            description="Drag the handle to compare. All photos published with written patient consent."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beforeAfter.slice(0, 3).map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <figure className="overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-soft">
                  <BeforeAfterSlider before={item.before} after={item.after} alt={item.title} />
                  <figcaption className="px-1 pt-4 pb-1">
                    <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                      {item.category}
                    </span>
                    <p className="mt-1 font-display text-base font-bold">{item.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/before-after">See the full gallery</Link>
            </Button>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">Know what your plan includes</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Depending on your treatment and quotation, your package may include hospital and operational fees, surgeon and anaesthesia fees, hotel accommodation, transfers, interpreter support and post-operative follow-up. Your written quotation specifies the inclusions, exclusions and payment terms.
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">Flights are excluded unless explicitly stated otherwise.</p>
          </div>
        </div>
      </section>

    </>
  );
}
