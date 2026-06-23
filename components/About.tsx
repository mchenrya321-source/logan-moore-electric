import { BUSINESS } from "@/lib/constants";
import CallButton from "./CallButton";

export default function About() {
  return (
    <section id="about" className="bg-white py-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              About Us
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:mt-3 sm:text-4xl">
              Your Local Rayville Electrical Company
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-muted sm:mt-6 sm:space-y-4 sm:text-lg">
              <p>
                Logan Moore Electric LLC is a locally owned electrical company
                based in Rayville, Louisiana. We serve homeowners and businesses
                throughout Northeast Louisiana with dependable electrical work
                you can trust.
              </p>
              <p>
                We are committed to quality electrical service, clear
                communication, and getting the job done right. Whether you need
                a quick repair, a panel upgrade, or wiring for a new build, we
                treat every project with the same level of care and
                professionalism.
              </p>
              <p>
                Serving {BUSINESS.serviceArea}.
              </p>
            </div>
            <div className="mt-5 sm:mt-8">
              <CallButton className="w-full shadow-lg sm:w-auto sm:shadow-md" />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-border bg-gray-light p-5 sm:p-8 lg:p-10">
            <h3 className="text-lg font-bold text-navy sm:text-xl">What We Stand For</h3>
            <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
              {[
                "Dependable work you can count on",
                "Clear communication from start to finish",
                "Quality electrical service for every project",
                "Local knowledge of Northeast Louisiana communities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
