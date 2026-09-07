"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Tell me your name."),
  email: z.string().trim().email("Enter a valid email address."),
  project: z.string().trim().min(2, "What are we building?"),
  message: z.string().trim().min(20, "Give me at least a sentence or two."),
  website: z.string().max(0).optional(),
});

type Inquiry = z.infer<typeof inquirySchema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Inquiry>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", project: "", message: "", website: "" },
  });

  async function onSubmit(values: Inquiry) {
    setServerError(null);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "The message could not be sent.");
      }
      reset();
      setSent(true);
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "The message could not be sent.");
    }
  }

  if (sent) {
    return (
      <div className="success-panel" role="status">
        <span><Check aria-hidden="true" /></span>
        <p className="overline">Message received</p>
        <h3>Good. The first move is made.</h3>
        <p>Your project note is stored safely. I&apos;ll pick up from here.</p>
        <Button type="button" variant="outline" onClick={() => setSent(false)}>Send another note</Button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field-grid">
        <label>
          <span>Your name</span>
          <Input {...register("name")} autoComplete="name" placeholder="Name" aria-invalid={!!errors.name} />
          {errors.name && <small>{errors.name.message}</small>}
        </label>
        <label>
          <span>Email address</span>
          <Input {...register("email")} type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!errors.email} />
          {errors.email && <small>{errors.email.message}</small>}
        </label>
      </div>
      <label>
        <span>What are we building?</span>
        <Input {...register("project")} placeholder="Website, product, system…" aria-invalid={!!errors.project} />
        {errors.project && <small>{errors.project.message}</small>}
      </label>
      <label>
        <span>The useful version</span>
        <Textarea {...register("message")} rows={7} placeholder="What should it do, who is it for, and what would make it worth building?" aria-invalid={!!errors.message} />
        {errors.message && <small>{errors.message.message}</small>}
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Website</span><Input {...register("website")} tabIndex={-1} autoComplete="off" />
      </label>
      {serverError && <p className="form-error" role="alert">{serverError} Your note is still here—please try again.</p>}
      <Button className="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send project note"}<ArrowUpRight aria-hidden="true" />
      </Button>
      <p className="form-footnote">No pitch deck required. A clear paragraph is plenty.</p>
    </form>
  );
}
