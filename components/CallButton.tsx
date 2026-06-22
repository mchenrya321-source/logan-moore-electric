import { BUSINESS } from "@/lib/constants";

type CallButtonProps = {
  size?: "default" | "large";
  className?: string;
};

export default function CallButton({
  size = "default",
  className = "",
}: CallButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-lg sm:text-xl"
      : "px-5 py-2.5 text-sm sm:text-base";

  return (
    <a
      href={BUSINESS.phoneTel}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red font-semibold text-white shadow-md transition-all duration-200 hover:bg-brand-red-hover hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${sizeClasses} ${className}`}
    >
      <PhoneIcon />
      Call Now
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.952l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.952-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
