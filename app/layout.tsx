import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logan Moore Electric LLC | Rayville Electrician | Northeast Louisiana",
  description:
    "Trusted electrical services in Northeast Louisiana. Residential, commercial, new construction, remodels, panel upgrades, and service calls from Logan Moore Electric LLC in Rayville, LA. Call (318) 376-0484.",
  keywords: [
    "Logan Moore Electric",
    "Rayville electrician",
    "Northeast Louisiana electrical services",
    "Monroe electrician",
    "West Monroe electrician",
    "commercial electrician Louisiana",
    "residential electrician Rayville",
  ],
  openGraph: {
    title: "Logan Moore Electric LLC | Rayville Electrician",
    description:
      "Trusted electrical services in Northeast Louisiana. Residential, commercial, new construction, and service calls.",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-navy">
        {children}
      </body>
    </html>
  );
}
