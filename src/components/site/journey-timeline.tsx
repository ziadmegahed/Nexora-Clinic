import { journey } from "@/data/site";
import { Reveal } from "./reveal";

export function JourneyTimeline() {
  return (
    <ol className="relative grid gap-6 md:grid-cols-2">
      <span
        aria-hidden
        className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block"
      />
      {journey.map((item, i) => (
        <li key={item.step} className="relative">
          <Reveal delay={i * 60}>
            <div className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-brand font-display text-sm font-bold text-primary-foreground">
                {item.step}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
