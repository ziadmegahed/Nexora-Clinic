import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { brand, faqs } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nexora Clinic — Istanbul, Turkey" },
      { name: "description", content: "Contact Nexora Clinic by phone, email or WhatsApp. Istanbul office address, business hours and patient enquiry form." },
      { property: "og:title", content: "Contact Nexora Clinic" },
      { property: "og:description", content: "Our patient line is open 24/7 for international enquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: brand.phone, href: `tel:${brand.phone}` },
    { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: brand.whatsapp, href: brand.whatsappUrl },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to a patient coordinator today"
        description="Message us in English, Turkish, Italian, German or French — someone is always on the patient line."
        breadcrumb={[{ label: "Contact Us" }]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_380px]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="space-y-6">
            <Reveal>
              <ul className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wide text-muted-foreground uppercase">{label}</span>
                      {href ? (
                        <a href={href} className="block text-sm font-medium break-words hover:text-primary">{value}</a>
                      ) : (
                        <span className="block text-sm font-medium">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Quick answers</h2>
          <div className="mt-6">
            <FaqAccordion items={faqs.slice(0, 6).map(({ q, a }) => ({ q, a }))} />
          </div>
        </div>
      </section>
    </>
  );
}
