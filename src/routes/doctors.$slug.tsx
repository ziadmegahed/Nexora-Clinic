import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Award, Building2, GraduationCap, Languages, Star, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { CtaSection } from "@/components/site/cta-section";
import { doctors, testimonials, treatments } from "@/data/site";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }) => {
    const doctor = doctors.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { name: doctor.name, specialty: doctor.specialty };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Doctor not found — Nexora Clinic" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.name} — ${loaderData.specialty} | Nexora Clinic`;
    return {
      meta: [
        { title },
        { name: "description", content: `${loaderData.name} is a ${loaderData.specialty} consultant at Nexora Clinic in Turkey.` },
        { property: "og:title", content: title },
        { property: "og:description", content: `Profile, education and patient reviews for ${loaderData.name}.` },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: `/doctors/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/doctors/${params.slug}` }],
    };
  },
  component: DoctorProfile,
});

function DoctorProfile() {
  const { slug } = Route.useParams();
  const doctor = doctors.find((d) => d.slug === slug)!;
  const gallery = treatments.filter((t) => t.category === doctor.category).slice(0, 3);
  const reviews = testimonials.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={doctor.specialty}
        title={doctor.name}
        breadcrumb={[{ label: "Doctors", to: "/doctors" }, { label: doctor.name }]}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[320px_1fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <img
              src={doctor.photo}
              alt={`Portrait of ${doctor.name}`}
              loading="lazy"
              width={700}
              height={800}
              className="w-full rounded-3xl border border-border object-cover shadow-soft"
            />
            <ul className="mt-5 space-y-3 rounded-3xl border border-border bg-card p-6 text-sm shadow-soft">
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-accent text-accent" aria-hidden />
                {doctor.rating.toFixed(1)} from {doctor.reviews} reviews
              </li>
              <li className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-primary" aria-hidden />
                {doctor.years} years of experience
              </li>
              <li className="flex items-center gap-2">
                <Languages className="h-4 w-4 text-primary" aria-hidden />
                {doctor.languages.join(", ")}
              </li>
              <li className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" aria-hidden />
                {doctor.hospital}
              </li>
            </ul>
            <Button asChild className="mt-5 w-full rounded-full font-semibold">
              <Link to="/consultation">Book a consultation</Link>
            </Button>
          </aside>

          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-2xl font-bold">Biography</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{doctor.bio}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Specialties</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {doctor.specialties.map((s) => (
                  <span key={s} className="rounded-full bg-primary-soft px-4 py-2 text-sm font-medium text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold">
                  <GraduationCap className="h-5 w-5 text-primary" aria-hidden /> Education
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {doctor.education.map((e) => <li key={e}>{e}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold">
                  <Award className="h-5 w-5 text-accent" aria-hidden /> Certificates
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {doctor.certificates.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Experience</h2>
              <ul className="mt-4 space-y-3">
                {doctor.experience.map((e) => (
                  <li key={e} className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">{e}</li>
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
                    alt={`${g.name} performed at Nexora Clinic`}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold">Patient reviews</h2>
              <div className="mt-4 grid gap-5 md:grid-cols-3">
                {reviews.map((t) => <TestimonialCard key={t.name} item={t} />)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection title={`Book a consultation with ${doctor.name}`} />
    </>
  );
}
