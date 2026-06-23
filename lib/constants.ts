export const BUSINESS = {
  name: "Logan Moore Electric LLC",
  phone: "(318) 376-0484",
  phoneTel: "tel:3183760484",
  email: "loganmooreelectric@gmail.com",
  location: "Rayville, Louisiana",
  locationShort: "Rayville, LA",
  facebook: "Logan Moore Electric LLC",
  facebookUrl:
    "https://www.facebook.com/p/Logan-Moore-Electric-LLC-61574066243461/",
  serviceArea:
    "Rayville, Delhi, Monroe, West Monroe, Start, Mangham, Winnsboro, Richland Parish, Ouachita Parish, and Northeast Louisiana",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const TRUST_BADGES = [
  "Locally Owned & Operated",
  "Residential & Commercial",
  "Free Estimates",
  "Northeast Louisiana Service Area",
] as const;

export const SERVICES = [
  {
    title: "Residential Electrical",
    description:
      "Reliable wiring, outlets, circuits, and home electrical solutions tailored to your property.",
  },
  {
    title: "Commercial Electrical",
    description:
      "Professional electrical work for businesses, offices, and commercial facilities.",
  },
  {
    title: "New Construction Wiring",
    description:
      "Complete electrical systems for new builds, from rough-in to final connections.",
  },
  {
    title: "Remodels & Additions",
    description:
      "Electrical updates and expansions for kitchen remodels, room additions, and renovations.",
  },
  {
    title: "Panel Upgrades",
    description:
      "Upgrade outdated panels to meet modern power demands and improve safety.",
  },
  {
    title: "Lighting Installation",
    description:
      "Indoor and outdoor lighting design, installation, and upgrades for any space.",
  },
  {
    title: "Generator Hookups",
    description:
      "Transfer switches and generator connections to keep your home or business powered.",
  },
  {
    title: "Ceiling Fans",
    description:
      "Expert ceiling fan installation, replacement, and wiring for comfort and efficiency.",
  },
  {
    title: "Troubleshooting & Repairs",
    description:
      "Diagnose and fix electrical issues quickly to restore safe, reliable power.",
  },
  {
    title: "Service Calls",
    description:
      "Prompt on-site service for urgent electrical needs and routine maintenance.",
  },
] as const;

export const MOBILE_SERVICE_TITLES = [
  "Residential Electrical",
  "Commercial Electrical",
  "Panel Upgrades",
  "Lighting Installation",
  "Troubleshooting & Repairs",
  "Service Calls",
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Fast Response",
    description:
      "When you need an electrician, you shouldn't wait. We respond promptly to calls and service requests.",
  },
  {
    title: "Clean Professional Work",
    description:
      "Every job is completed with attention to detail, neat workmanship, and respect for your property.",
  },
  {
    title: "Honest Communication",
    description:
      "Clear explanations, upfront expectations, and straightforward answers about your project.",
  },
  {
    title: "Local Northeast Louisiana Service",
    description:
      "Based in Rayville and serving communities across Northeast Louisiana you know and trust.",
  },
  {
    title: "Residential & Commercial Experience",
    description:
      "From home repairs to commercial projects, we bring versatile experience to every job.",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/gallery/2.jpg", alt: "Commercial electrical work" },
  { src: "/gallery/1.jpg", alt: "Electrical panel and wiring installation" },
  { src: "/gallery/3.jpg", alt: "Lighting and fixture installation" },
  { src: "/gallery/4.jpg", alt: "Residential electrical project" },
  { src: "/gallery/5.jpg", alt: "Professional electrical service work" },
] as const;
