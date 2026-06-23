import { BUSINESS } from "@/lib/constants";
import CallButton from "./CallButton";
import ContactForm from "./ContactForm";
import FacebookLink from "./FacebookLink";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-light py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Need Electrical Work Done?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-muted sm:text-lg">
              Call now for the fastest response, or send us a message with
              details about your project. We serve Rayville and communities
              throughout Northeast Louisiana.
            </p>

            <div className="mt-8 space-y-5">
              <ContactItem
                label="Phone"
                href={BUSINESS.phoneTel}
                value={BUSINESS.phone}
              />
              <ContactItem
                label="Email"
                href={`mailto:${BUSINESS.email}`}
                value={BUSINESS.email}
              />
              <ContactItem label="Location" value={BUSINESS.locationShort} />
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <CallButton size="large" />
              <FacebookLink variant="button" />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-border bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-navy">Request a Free Estimate</h3>
            <p className="mt-2 text-sm text-gray-muted">
              Fill out the form below and we&apos;ll get back to you. For urgent
              needs, please call directly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
        <span className="text-xs font-bold uppercase">{label[0]}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-muted">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-lg font-semibold text-navy transition-colors hover:text-brand-red"
          >
            {value}
          </a>
        ) : (
          <p className="text-lg font-semibold text-navy">{value}</p>
        )}
      </div>
    </div>
  );
}
