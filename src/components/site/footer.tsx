import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone, MessageSquareText } from "lucide-react";
import { brand, treatments } from "@/data/site";

const quickLinks = [
  { to: "/about", label: "About Nexora" },
  { to: "/treatments", label: "Treatments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/before-after", label: "Patient Results" },
  { to: "/faq", label: "FAQ" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nexorahealth.care/?hl=en" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-11 w-11 place-items-center rounded-2xl gradient-brand text-lg font-bold text-primary-foreground"
            >
              N
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-bold">Nexora Healthcare</span>
              <span className="block text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Nexora — Next Aurora
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Nexora Health coordinates treatment arrangements and patient support with doctors and hospitals in Türkiye. Medical assessment and treatment are provided by the treating healthcare professionals.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`Nexora Clinic on ${label}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-bold tracking-[0.16em] uppercase">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Treatments">
          <h2 className="font-display text-sm font-bold tracking-[0.16em] uppercase">Treatments</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {treatments.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <Link
                  to="/treatments/$slug"
                  params={{ slug: t.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.16em] uppercase">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={`tel:${brand.phone}`} className="hover:text-primary">
                {brand.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={`mailto:${brand.email}`} className="hover:text-primary">
                {brand.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary">
                WhatsApp {brand.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexora Healthcare. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
