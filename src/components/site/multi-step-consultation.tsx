import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, CircleCheckBig, Upload } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { brand, countries, treatments } from "@/data/site";
import { sendConsultationSubmission } from "@/lib/form-submit";
import { cn } from "@/lib/utils";

const steps = ["About you", "Your treatment", "Medical details"];

const schemas = [
  z.object({
    name: z.string().trim().min(2, "Please enter your full name").max(100),
    email: z.string().trim().email("Enter a valid email address").max(255),
    whatsapp: z.string().trim().min(6, "Enter a reachable number").max(30),
    country: z.string().trim().min(2, "Please select your country"),
  }),
  z.object({
    treatment: z.string().trim().min(2, "Please choose a treatment"),
    date: z.string().trim().max(20).optional(),
    budget: z.string().trim().max(40).optional(),
  }),
  z.object({
    history: z.string().trim().max(1000, "Keep it under 1000 characters").optional(),
  }),
];

type Values = Record<string, string>;

export function MultiStepConsultation() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k: string, v: string) => setValues((prev) => ({ ...prev, [k]: v }));

  const validateAndGo = (next: number) => {
    if (next > step) {
      const parsed = schemas[step]!.safeParse(values);
      if (!parsed.success) {
        const e: Record<string, string> = {};
        for (const issue of parsed.error.issues) e[String(issue.path[0])] = issue.message;
        setErrors(e);
        return;
      }
    }
    setErrors({});
    setStep(Math.max(0, Math.min(steps.length - 1, next)));
  };

  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
          <CircleCheckBig className="h-8 w-8" aria-hidden />
        </span>
        <h2 className="mt-6 font-display text-2xl font-bold">Thank you, {values['name']?.split(" ")[0]}!</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your request has been received. A patient coordinator will contact you on{" "}
          {values['contactMethod']} within 24 hours with your treatment plan and a fixed quote.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full">
            <Link to="/treatments">Explore treatments</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/faq">Read patient FAQ</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft lg:p-9">
      <ol className="flex flex-wrap gap-2" aria-label="Consultation progress">
        {steps.map((label, i) => (
          <li key={label} className="flex-1 min-w-[130px]">
            <div
              className={cn(
                "rounded-full px-3 py-2 text-center text-xs font-semibold transition-colors",
                i < step && "bg-accent/15 text-accent",
                i === step && "gradient-brand text-primary-foreground",
                i > step && "bg-muted text-muted-foreground",
              )}
              aria-current={i === step ? "step" : undefined}
            >
              {i < step ? <Check className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : `${i + 1}. `}
              {label}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {step === 0 ? (
          <>
            <div>
              <Label htmlFor="s-name">Full name</Label>
              <Input id="s-name" className="mt-2 rounded-xl" maxLength={100} value={values['name'] ?? ""} onChange={(e) => set("name", e.target.value)} />
              {errors['name'] ? <p className="mt-1 text-xs text-destructive">{errors['name']}</p> : null}
            </div>
            <div>
              <Label htmlFor="s-email">Email</Label>
              <Input id="s-email" type="email" className="mt-2 rounded-xl" maxLength={255} value={values['email'] ?? ""} onChange={(e) => set("email", e.target.value)} />
              {errors['email'] ? <p className="mt-1 text-xs text-destructive">{errors['email']}</p> : null}
            </div>
            <div>
              <Label htmlFor="s-whatsapp">WhatsApp number</Label>
              <Input id="s-whatsapp" className="mt-2 rounded-xl" maxLength={30} value={values['whatsapp'] ?? ""} onChange={(e) => set("whatsapp", e.target.value)} />
              {errors['whatsapp'] ? <p className="mt-1 text-xs text-destructive">{errors['whatsapp']}</p> : null}
            </div>
            <div>
              <Label htmlFor="s-country">Country</Label>
              <select
                id="s-country"
                className="mt-2 h-10 w-full rounded-xl border border-input bg-card px-3 text-sm"
                value={values['country'] ?? ""}
                onChange={(e) => set("country", e.target.value)}
              >
                <option value="">Select your country</option>
                {countries.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              {errors['country'] ? <p className="mt-1 text-xs text-destructive">{errors['country']}</p> : null}
            </div>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <div>
              <Label htmlFor="s-treatment">Treatment interest</Label>
              <select
                id="s-treatment"
                className="mt-2 h-10 w-full rounded-xl border border-input bg-card px-3 text-sm"
                value={values['treatment'] ?? ""}
                onChange={(e) => set("treatment", e.target.value)}
              >
                <option value="">Select a treatment</option>
                {treatments.map((t) => (
                  <option key={t.slug}>{t.name}</option>
                ))}
                <option>Not sure yet</option>
              </select>
              {errors['treatment'] ? <p className="mt-1 text-xs text-destructive">{errors['treatment']}</p> : null}
            </div>
            <div>
              <Label htmlFor="s-date">Preferred travel date</Label>
              <Input id="s-date" type="date" className="mt-2 rounded-xl" value={values['date'] ?? ""} onChange={(e) => set("date", e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="s-budget">Approximate budget (optional)</Label>
              <Input id="s-budget" className="mt-2 rounded-xl" maxLength={40} placeholder="e.g. $2,000 – $4,000" value={values['budget'] ?? ""} onChange={(e) => set("budget", e.target.value)} />
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="sm:col-span-2">
              <Label htmlFor="s-history">Medical history & current medication</Label>
              <Textarea
                id="s-history"
                rows={5}
                maxLength={1000}
                className="mt-2 rounded-xl"
                placeholder="Chronic conditions, previous surgeries, allergies, medication…"
                value={values['history'] ?? ""}
                onChange={(e) => set("history", e.target.value)}
              />
              {errors['history'] ? <p className="mt-1 text-xs text-destructive">{errors['history']}</p> : null}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="s-files">Photos, reports or scans (optional)</Label>
              <label
                htmlFor="s-files"
                className="mt-2 flex cursor-pointer flex-col items-center gap-2 rounded-2xl border border-dashed border-border bg-surface px-6 py-8 text-center text-sm text-muted-foreground transition-colors hover:border-primary"
              >
                <Upload className="h-5 w-5 text-primary" aria-hidden />
                Drag files here or click to upload (JPG, PNG, PDF)
              </label>
              <input
                id="s-files"
                type="file"
                multiple
                accept="image/*,.pdf"
                className="sr-only"
                onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
              />
              {files.length ? (
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  {files.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <div className="sm:col-span-2">
            <p className="mt-6 rounded-2xl bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
              By submitting you agree that Nexora Clinic may contact you about your enquiry. Your
              medical information is handled confidentially and never shared without consent.
            </p>
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          className="rounded-full"
          disabled={step === 0}
          onClick={() => validateAndGo(step - 1)}
        >
          Back
        </Button>
        {step < steps.length - 1 ? (
          <Button type="button" className="rounded-full px-8 font-semibold" onClick={() => validateAndGo(step + 1)}>
            Continue
          </Button>
        ) : (
          <Button
            type="button"
            size="lg"
            className="rounded-full px-8 font-semibold"
            disabled={sending}
            onClick={async () => {
              const parsed = schemas[2]!.safeParse(values);
              if (!parsed.success) {
                const e: Record<string, string> = {};
                for (const issue of parsed.error.issues) e[String(issue.path[0])] = issue.message;
                setErrors(e);
                return;
              }

              setSending(true);
              try {
                await sendConsultationSubmission({ ...values, files });
                setDone(true);
                toast.success("Consultation request submitted.");
              } catch (error) {
                console.error(error);
                toast.error("Sorry, we couldn't send your request. Please try again later.");
              } finally {
                setSending(false);
              }
            }}
          >
            {sending ? "Sending…" : "Submit request"}
          </Button>
        )}
      </div>
    </div>
  );
}
