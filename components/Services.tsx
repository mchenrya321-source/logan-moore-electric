import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-gray-light py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Electrical Services You Can Count On
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-muted sm:text-lg">
            From everyday repairs to full-scale projects, Logan Moore Electric
            LLC provides dependable electrical work for homes and businesses
            across Northeast Louisiana.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl border border-gray-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10 text-navy transition-colors group-hover:bg-brand-red/10 group-hover:text-brand-red">
                <BoltIcon />
              </div>
              <h3 className="text-lg font-bold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
