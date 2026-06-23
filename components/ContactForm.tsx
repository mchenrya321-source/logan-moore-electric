"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-xl border border-green-200 bg-green-50 p-6 text-center"
        role="status"
      >
        <p className="text-base font-semibold text-navy">
          Thanks, your message has been prepared.
        </p>
        <p className="mt-2 text-sm text-gray-muted">
          Please call for the fastest response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-gray-border bg-white px-3 py-2.5 text-navy transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 sm:mt-1.5 sm:px-4 sm:py-3"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-gray-border bg-white px-3 py-2.5 text-navy transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 sm:mt-1.5 sm:px-4 sm:py-3"
          placeholder="(318) 555-0123"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-gray-border bg-white px-3 py-2.5 text-navy transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 sm:mt-1.5 sm:px-4 sm:py-3"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="project-details"
          className="block text-sm font-medium text-navy"
        >
          Project Details
        </label>
        <textarea
          id="project-details"
          name="project-details"
          required
          rows={3}
          className="mt-1 w-full resize-y rounded-lg border border-gray-border bg-white px-3 py-2.5 text-navy transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 sm:mt-1.5 sm:px-4 sm:py-3"
          placeholder="Tell us about your electrical project or service need..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-navy px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        Send Message
      </button>
    </form>
  );
}
