import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/site";
import { Reveal } from "./reveal";

export function CtaSection({
  title = "Ready to start your treatment journey?",
  description = "Send us your medical details today and receive a tailored clinical plan from a Turkish consultant.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl gradient-brand px-6 py-14 text-center shadow-lift lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-primary-foreground/10 blur-2xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold text-balance text-primary-foreground lg:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">{description}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="rounded-full font-semibold">
              <Link to="/consultation">
                Get a Free Consultation
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/40 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={brand.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
