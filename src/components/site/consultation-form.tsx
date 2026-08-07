import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { countries, treatments } from "@/data/site";
import { sendConsultationSubmission } from "@/lib/form-submit";

export const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  whatsapp: z.string().trim().min(6, "Enter a reachable WhatsApp number").max(30),
  country: z.string().trim().min(2, "Please select your country").max(60),
  treatment: z.string().trim().min(2, "Please choose a treatment").max(80),
  date: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional(),
});

export type ConsultationValues = z.infer<typeof consultationSchema>;

const fieldClass = "mt-2 rounded-xl bg-card";

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  return (
    <form
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-soft lg:p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        const parsed = consultationSchema.safeParse(data);
        if (!parsed.success) {
          const next: Record<string, string> = {};
          for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
          setErrors(next);
          toast.error("Please check the highlighted fields.");
          return;
        }
        setErrors({});
        setSending(true);
        try {
          await sendConsultationSubmission(parsed.data);
          toast.success("Request received — a patient coordinator will reply within 24 hours.");
          e.currentTarget.reset();
        } catch (error) {
          console.error(error);
          toast.error("Sorry, we couldn't send your request. Please try again later.");
        } finally {
          setSending(false);
        }
      }}
    >
      {!compact ? (
        <>
          <h2 className="font-display text-2xl font-bold">Request your free consultation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            No obligation. A coordinator replies within 24 hours with a plan and fixed quote.
          </p>
        </>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" maxLength={100} required className={fieldClass} placeholder="Jane Doe" />
          {errors['name'] ? <p className="mt-1 text-xs text-destructive">{errors['name']}</p> : null}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" maxLength={255} required className={fieldClass} placeholder="you@email.com" />
          {errors['email'] ? <p className="mt-1 text-xs text-destructive">{errors['email']}</p> : null}
        </div>
        <div>
          <Label htmlFor="whatsapp">WhatsApp number</Label>
          <Input id="whatsapp" name="whatsapp" maxLength={30} required className={fieldClass} placeholder="+44 7700 900000" />
          {errors['whatsapp'] ? <p className="mt-1 text-xs text-destructive">{errors['whatsapp']}</p> : null}
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className="mt-2 h-10 w-full rounded-xl border border-input bg-card px-3 text-sm"
          >
            <option value="" disabled>
              Select your country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors['country'] ? <p className="mt-1 text-xs text-destructive">{errors['country']}</p> : null}
        </div>
        <div>
          <Label htmlFor="treatment">Treatment interest</Label>
          <select
            id="treatment"
            name="treatment"
            required
            defaultValue=""
            className="mt-2 h-10 w-full rounded-xl border border-input bg-card px-3 text-sm"
          >
            <option value="" disabled>
              Select a treatment
            </option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {errors['treatment'] ? <p className="mt-1 text-xs text-destructive">{errors['treatment']}</p> : null}
        </div>
        <div>
          <Label htmlFor="date">Preferred date</Label>
          <Input id="date" name="date" type="date" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            className={fieldClass}
            placeholder="Tell us about your goals, medical history or questions."
          />
          {errors['message'] ? <p className="mt-1 text-xs text-destructive">{errors['message']}</p> : null}
        </div>
      </div>

      <Button type="submit" size="lg" disabled={sending} className="mt-6 w-full rounded-full font-semibold">
        {sending ? "Sending…" : "Request Free Consultation"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your details stay confidential and are used only to prepare your medical plan.
      </p>
    </form>
  );
}
