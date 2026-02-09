"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n/types";

type FormValues = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ dictionary }: { dictionary: Dictionary }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    if (!values.name || !values.email || !values.message || !values.budget) {
      setError(dictionary.contact.validation.required);
      return;
    }

    if (!emailPattern.test(values.email)) {
      setError(dictionary.contact.validation.email);
      return;
    }

    if (values.message.trim().length < 20) {
      setError(dictionary.contact.validation.messageMin);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeader
          eyebrow={dictionary.contact.eyebrow}
          title={dictionary.contact.title}
          description={dictionary.contact.description}
        />
        <Card className="mx-auto max-w-3xl">
          <CardContent>
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
              <label className="text-sm text-[var(--text-secondary)]">
                {dictionary.contact.fields.name}
                <input
                  value={values.name}
                  onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                  className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-primary)]"
                  placeholder={dictionary.contact.placeholders.name}
                />
              </label>
              <label className="text-sm text-[var(--text-secondary)]">
                {dictionary.contact.fields.email}
                <input
                  type="email"
                  value={values.email}
                  onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                  className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-primary)]"
                  placeholder={dictionary.contact.placeholders.email}
                />
              </label>
              <label className="text-sm text-[var(--text-secondary)]">
                {dictionary.contact.fields.company}
                <input
                  value={values.company}
                  onChange={(event) => setValues((prev) => ({ ...prev, company: event.target.value }))}
                  className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-primary)]"
                  placeholder={dictionary.contact.placeholders.company}
                />
              </label>
              <label className="text-sm text-[var(--text-secondary)]">
                {dictionary.contact.fields.budget}
                <select
                  value={values.budget}
                  onChange={(event) => setValues((prev) => ({ ...prev, budget: event.target.value }))}
                  className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-primary)]"
                >
                  <option value="">-</option>
                  {dictionary.contact.budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-[var(--text-secondary)] sm:col-span-2">
                {dictionary.contact.fields.message}
                <textarea
                  value={values.message}
                  onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
                  className="mt-2 min-h-32 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-primary)]"
                  placeholder={dictionary.contact.placeholders.message}
                />
              </label>
              {error ? (
                <p className="sm:col-span-2 text-sm text-red-600" role="alert">
                  {error}
                </p>
              ) : null}
              {submitted ? (
                <p className="sm:col-span-2 text-sm text-green-600" role="status">
                  {dictionary.contact.success}
                </p>
              ) : null}
              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? dictionary.contact.submitting : dictionary.contact.submit}
                </Button>
                <p className="text-xs text-[var(--text-secondary)]">
                  {dictionary.contact.fallback}{" "}
                  <a href={`mailto:${dictionary.contact.fallbackLink}`} className="font-semibold text-[var(--accent-primary)]">
                    {dictionary.contact.fallbackLink}
                  </a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
