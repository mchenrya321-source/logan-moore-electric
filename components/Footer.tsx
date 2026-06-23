import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import FacebookLink from "./FacebookLink";

export default function Footer() {
  return (
    <footer className="border-t border-gray-border bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logan Moore Electric LLC logo"
                width={56}
                height={56}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
              <div>
                <p className="font-bold leading-tight">{BUSINESS.name}</p>
                <p className="text-sm text-white/70">{BUSINESS.locationShort}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm sm:mt-4 sm:space-y-3">
              <li>
                <a
                  href={BUSINESS.phoneTel}
                  className="transition-colors hover:text-brand-red"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-brand-red"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-red"
                >
                  {BUSINESS.facebook}
                </a>
              </li>
            </ul>
            <div className="mt-3 sm:mt-4">
              <FacebookLink variant="icon-light" />
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Service Area
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4">
              {BUSINESS.serviceArea}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 sm:mt-10 sm:flex-row sm:gap-4 sm:pt-8">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">Website by Bottomland Labs</p>
        </div>
      </div>
    </footer>
  );
}
