import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { brand, treatments } from "@/data/site";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/treatments", label: "Treatments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/before-after", label: "Before & After" },
  { to: "/faq", label: "FAQ" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nexorahealth.care/?hl=en" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

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
              <span className="block font-display text-base font-bold">NEXORA CLINIC</span>
              <span className="block text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {brand.tagline}
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Nexora Clinic guides international patients through safe, affordable and expertly
            delivered treatment in Turkey's accredited hospitals — from first message to final
            follow-up.
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
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {brand.address}
            </li>
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
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {brand.hours}
            </li>
          </ul>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
                toast.error("Please enter a valid email address.");
                return;
              }
              toast.success("Subscribed — patient guides are on the way.");
              setEmail("");
            }}
          >
            <label htmlFor="newsletter" className="text-sm font-medium text-foreground">
              Patient newsletter
            </label>
            <div className="mt-2 flex gap-2">
              <Input
                id="newsletter"
                type="email"
                maxLength={255}
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full bg-card"
              />
              <Button type="submit" className="rounded-full">
                Join
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexora Clinic. All rights reserved.</p>
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
