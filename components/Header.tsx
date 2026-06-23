"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import CallButton from "./CallButton";
import FacebookLink from "./FacebookLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-border bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hidden h-16 items-center justify-between lg:flex">
          <Link href="#home" className="flex shrink-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logan Moore Electric LLC logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
            <span className="text-base font-bold leading-tight text-navy">
              Logan Moore
              <span className="block text-sm font-semibold text-brand-red">
                Electric LLC
              </span>
            </span>
          </Link>

          <nav className="flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <FacebookLink />
            <CallButton />
          </div>
        </div>

        <div className="grid h-[4.25rem] grid-cols-[2.75rem_1fr_2.75rem] items-center lg:hidden">
          <div aria-hidden="true" />
          <Link
            href="#home"
            className="flex justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Logan Moore Electric LLC logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center justify-self-end rounded-lg p-2 text-navy transition-colors hover:bg-gray-light"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-border bg-white lg:hidden"
        >
          <nav className="flex flex-col px-4 py-3" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-navy transition-colors hover:bg-gray-light hover:text-brand-red"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 px-3">
              <CallButton className="w-full shadow-lg" />
              <p className="mt-1.5 text-center text-sm text-gray-muted">
                {BUSINESS.phone}
              </p>
              <div className="mt-3 flex justify-center">
                <FacebookLink />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
