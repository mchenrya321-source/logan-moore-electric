import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-border bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logan Moore Electric LLC logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
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
            <ul className="mt-4 space-y-3 text-sm">
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
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Service Area
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {BUSINESS.serviceArea}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
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
