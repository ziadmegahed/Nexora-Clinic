import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/treatments", key: "treatments" },
  { to: "/doctors", key: "doctors" },
  { to: "/before-after", key: "patientResults" },
  { to: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-foreground/95 py-2 text-xs text-background lg:block">
        <div className="container-page flex items-center justify-between">
          <p>{brand.tagline}</p>
          <div className="flex items-center gap-5">
            <a className="inline-flex items-center gap-1.5 hover:underline" href={`tel:${brand.phone}`}>
              <Phone className="h-3.5 w-3.5" aria-hidden /> {brand.phone}
            </a>
            <span aria-hidden>|</span>
            <a className="inline-flex items-center gap-1.5 hover:underline" href={`mailto:${brand.email}`}>
              <Mail className="h-3.5 w-3.5" aria-hidden /> {brand.email}
            </a>
          </div>
        </div>
      </div>

      <div className="glass shadow-soft">
        <nav aria-label="Main" className="container-page flex h-18 items-center gap-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/logo.png"
              alt={`${brand.name} logo`}
              className="h-11 w-11 shrink-0 rounded-2xl object-contain"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-base font-bold tracking-tight">
                {brand.name}
              </span>
              <span className="block truncate text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {brand.tagline}
              </span>
            </span>
          </Link>

          <ul className="mx-auto hidden items-center gap-1 xl:flex">
            {links.map((link) => {
              const active =
                link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary-soft text-primary"
                        : "text-foreground/75 hover:bg-muted hover:text-primary",
                    )}
                  >
                    {link.key === "home"
                      ? "Home"
                      : link.key === "about"
                        ? "About Nexora"
                        : link.key === "treatments"
                          ? "Treatments"
                          : link.key === "doctors"
                            ? "Doctors"
                            : link.key === "patientResults"
                              ? "Patient Results"
                              : "Contact Us"}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto flex items-center gap-2 xl:ml-0">
            <Button asChild className="hidden rounded-full font-semibold lg:inline-flex">
              <Link to="/consultation">Get a Free Consultation</Link>
            </Button>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Nexora Clinic on WhatsApp"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/15 text-accent transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border xl:hidden"
            >
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </nav>

        {open ? (
          <div id="mobile-nav" className="border-t border-border bg-card xl:hidden">
            <ul className="container-page flex flex-col py-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
                  >
                    {link.key === "home"
                      ? "Home"
                      : link.key === "about"
                        ? "About Nexora"
                        : link.key === "treatments"
                          ? "Treatments"
                          : link.key === "doctors"
                            ? "Doctors"
                            : link.key === "patientResults"
                              ? "Patient Results"
                              : "Contact Us"}
                  </Link>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 px-3 pb-4">
                <Button asChild className="w-full rounded-full font-semibold">
                  <Link to="/consultation" onClick={() => setOpen(false)}>
                    Get a Free Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link to="/faq" onClick={() => setOpen(false)}>
                    FAQ
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
