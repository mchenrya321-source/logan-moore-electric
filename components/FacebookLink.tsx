import { BUSINESS } from "@/lib/constants";
import FacebookIcon from "./FacebookIcon";

const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

type FacebookLinkProps = {
  variant?: "icon" | "icon-light" | "button";
  className?: string;
};

export default function FacebookLink({
  variant = "icon",
  className = "",
}: FacebookLinkProps) {
  const ariaLabel = `Follow ${BUSINESS.name} on Facebook`;

  if (variant === "button") {
    return (
      <a
        href={BUSINESS.facebookUrl}
        {...EXTERNAL_LINK_PROPS}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy px-6 py-3 text-base font-semibold text-navy transition-all duration-200 hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${className}`}
      >
        <FacebookIcon className="h-5 w-5" />
        Follow us on Facebook
      </a>
    );
  }

  const colorClasses =
    variant === "icon-light"
      ? "text-white/80 hover:text-white hover:bg-white/10"
      : "text-navy hover:text-brand-red hover:bg-gray-light";

  return (
    <a
      href={BUSINESS.facebookUrl}
      {...EXTERNAL_LINK_PROPS}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${colorClasses} ${className}`}
    >
      <FacebookIcon className="h-5 w-5" />
    </a>
  );
}
