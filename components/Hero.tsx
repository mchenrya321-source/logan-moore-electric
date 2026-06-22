import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import CallButton from "./CallButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-light via-white to-white" />
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 pb-16 pt-8 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-12">
          <div className="animate-fade-in-up text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-red">
              Rayville, Louisiana
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              Trusted Electrical Services in Northeast Louisiana
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-muted sm:text-lg lg:mx-0">
              Residential, commercial, new construction, remodels, and service
              calls from a local Rayville electrical company.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <CallButton size="large" />
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-8 py-4 text-base font-semibold text-navy transition-all duration-200 hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:text-lg"
              >
                Free Estimate
              </Link>
            </div>

            <a
              href={BUSINESS.phoneTel}
              className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-navy transition-colors hover:text-brand-red sm:text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-brand-red"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.952l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.952-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>

          <div className="animate-fade-in-up animate-delay-200 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-navy/10 to-brand-red/10 blur-sm" />
              <div className="relative rounded-2xl border border-gray-border bg-white p-8 shadow-xl">
                <Image
                  src="/logo.png"
                  alt="Logan Moore Electric LLC"
                  width={400}
                  height={400}
                  className="mx-auto h-auto w-full max-w-[280px] object-contain sm:max-w-[320px]"
                  priority
                />
                <div className="mt-6 border-t border-gray-border pt-6 text-center">
                  <p className="text-sm font-medium text-gray-muted">
                    Serving Northeast Louisiana
                  </p>
                  <p className="mt-1 text-sm text-navy">
                    Residential &amp; Commercial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
