import { TRUST_BADGES } from "@/lib/constants";

export default function TrustStrip() {
  return (
    <section className="border-y border-gray-border bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:py-10">
          {TRUST_BADGES.map((badge) => (
            <li
              key={badge}
              className="flex items-center justify-center gap-3 text-center sm:justify-start lg:justify-center"
            >
              <CheckIcon />
              <span className="text-sm font-semibold leading-snug sm:text-base">
                {badge}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-brand-red"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
