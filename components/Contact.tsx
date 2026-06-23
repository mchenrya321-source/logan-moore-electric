import { BUSINESS } from "@/lib/constants";
import CallButton from "./CallButton";
import ContactForm from "./ContactForm";
import FacebookLink from "./FacebookLink";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-light py-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Contact Us
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:mt-3 sm:text-4xl">
              Need Electrical Work Done?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-muted sm:mt-4 sm:text-lg">
              Call now for the fastest response, or send us a message with
              details about your project. We serve Rayville and communities
              throughout Northeast Louisiana.
            </p>

            <div className="mt-5 space-y-4 sm:mt-8 sm:space-y-5">
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

            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <CallButton
                size="large"
                className="w-full shadow-lg sm:w-auto sm:shadow-md"
              />
              <FacebookLink variant="button" className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-border bg-white p-5 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-navy sm:text-xl">
              Request a Free Estimate
            </h3>
            <p className="mt-1.5 text-sm text-gray-muted sm:mt-2">
              Fill out the form below and we&apos;ll get back to you. For urgent
              needs, please call directly.
            </p>
            <div className="mt-4 sm:mt-6">
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
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy sm:h-10 sm:w-10">
        <span className="text-xs font-bold uppercase">{label[0]}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-muted">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-base font-semibold text-navy transition-colors hover:text-brand-red sm:text-lg"
          >
            {value}
          </a>
        ) : (
          <p className="text-base font-semibold text-navy sm:text-lg">{value}</p>
        )}
      </div>
    </div>
  );
}
