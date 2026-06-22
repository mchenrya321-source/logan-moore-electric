import { BUSINESS } from "@/lib/constants";

export default function MapSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Service Area
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Proudly Serving Northeast Louisiana
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-muted">
            Based in Rayville and serving surrounding communities across
            Richland Parish, Ouachita Parish, and beyond.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-border bg-gray-light p-6 lg:col-span-1">
            <h3 className="text-lg font-bold text-navy">Areas We Serve</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-muted">
              {[
                "Rayville",
                "Delhi",
                "Monroe",
                "West Monroe",
                "Start",
                "Mangham",
                "Winnsboro",
                "Richland Parish",
                "Ouachita Parish",
                "Northeast Louisiana",
              ].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-navy">
              {BUSINESS.location}
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-border shadow-md lg:col-span-2">
            <iframe
              title="Map showing Rayville, Louisiana service area"
              src="https://maps.google.com/maps?q=Rayville,+Louisiana&output=embed"
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
