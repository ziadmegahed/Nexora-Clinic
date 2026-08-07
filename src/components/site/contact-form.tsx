import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactSubmission } from "@/lib/form-submit";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Please tell us a little more").max(1000),
});

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-soft lg:p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form).entries()));

        if (!parsed.success) {
          const next: Record<string, string> = {};
          for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
          setErrors(next);
          return;
        }

        setErrors({});
        setSubmitting(true);

        try {
          await sendContactSubmission(parsed.data);
          form.reset();
          toast.success("Message sent — we usually reply within a few hours.");
        } catch (error) {
          const message = error instanceof Error ? error.message : "Unable to send your message. Please try again later.";
          toast.error(message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <h2 className="font-display text-2xl font-bold">Send us a message</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" name="name" maxLength={100} required className="mt-2 rounded-xl" />
          {errors['name'] ? <p className="mt-1 text-xs text-destructive">{errors['name']}</p> : null}
        </div>
        <div>
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" name="email" type="email" maxLength={255} required className="mt-2 rounded-xl" />
          {errors['email'] ? <p className="mt-1 text-xs text-destructive">{errors['email']}</p> : null}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="c-subject">Subject</Label>
          <Input id="c-subject" name="subject" maxLength={120} required className="mt-2 rounded-xl" />
          {errors['subject'] ? <p className="mt-1 text-xs text-destructive">{errors['subject']}</p> : null}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="c-message">Message</Label>
          <Textarea id="c-message" name="message" rows={5} maxLength={1000} required className="mt-2 rounded-xl" />
          {errors['message'] ? <p className="mt-1 text-xs text-destructive">{errors['message']}</p> : null}
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-6 rounded-full font-semibold" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
