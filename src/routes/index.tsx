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
import { Counter } from "@/components/site/counter";
import { SectionHeading } from "@/components/site/section-heading";
import { TreatmentCard } from "@/components/site/treatment-card";
import { DoctorCard } from "@/components/site/doctor-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { JourneyTimeline } from "@/components/site/journey-timeline";
import { BeforeAfterSlider } from "@/components/site/before-after-slider";
import { ConsultationForm } from "@/components/site/consultation-form";
import {
  beforeAfter,
  doctors,
  features,
  hospitals,
  stats,
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
              JCI & TÜRKAK accredited partner hospitals
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-balance lg:text-6xl">
              World-Class <span className="text-gradient-brand">Medical Care</span> in Turkey
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Helping international patients receive safe, affordable, and life-changing treatments
              with Turkey's top doctors and hospitals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7 font-semibold">
                <Link to="/consultation">
                  Get a Free Consultation
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 font-semibold">
                <Link to="/treatments">Explore Treatments</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold text-primary">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dd>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
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
            <div className="glass absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl p-4 shadow-soft lg:-left-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                <Star className="h-5 w-5 fill-accent" aria-hidden />
              </span>
              <span>
                <span className="block font-display text-lg font-bold">4.9 / 5</span>
                <span className="block text-xs text-muted-foreground">1,800+ patient reviews</span>
              </span>
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
            title="Why patients choose Nexora Clinic"
            description="We remove every obstacle between you and expert care — medical, logistical and linguistic."
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
            title="Eight guided steps, one dedicated coordinator"
            description="From your first message to a full year of follow-up care, you always know exactly what happens next."
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

      {/* Before & after */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Before & after"
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Patient stories" title="Patients from 40+ countries" />
          <Reveal className="mt-12">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {testimonials.map((t) => (
                  <CarouselItem key={t.name} className="sm:basis-1/2 lg:basis-1/3">
                    <TestimonialCard item={t} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* Consultation form */}
      <section className="section bg-surface">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Free consultation"
            title="Tell us about your case — we'll do the rest"
            description="Share a few details and receive a tailored clinical plan and doctor recommendation. Nothing to pay, nothing to commit to."
            className="lg:sticky lg:top-32"
          />
          <Reveal>
            <ConsultationForm compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
