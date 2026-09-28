/**
 * Single source of truth for Javi Electric's business details.
 * Update values here and every page, the footer, metadata and JSON-LD follow.
 */

export const site = {
  name: "Javi Electric",
  legalName: "Javi Electric Service LLC",
  tagline: "Licensed, family-owned electricians serving Mesa & the East Valley",
  description:
    "Javi Electric is a licensed, family-owned electrical contractor in Mesa, AZ. Panel upgrades, EV chargers, recessed lighting, troubleshooting and repairs — on time, fairly priced, and cleaned up like we were never there.",
  url: "https://www.javielectric.com",
  owner: "Javier Carcamo",
  phone: {
    display: "(480) 809-8927",
    href: "tel:+14808098927",
    sms: "sms:+14808098927",
    e164: "+14808098927",
  },
  address: {
    street: "310 N 26th St",
    city: "Mesa",
    state: "AZ",
    zip: "85213",
    full: "310 N 26th St, Mesa, AZ 85213",
  },
  geo: { lat: 33.4211612, lng: -111.7749523 },
  license: {
    label: "AZ ROC #313648",
    number: "313648",
    verifyUrl: "https://roc.az.gov/",
  },
  links: {
    googleMaps:
      "https://www.google.com/maps/place/Javi+Electric/@33.4211612,-111.7749523,17z/data=!4m8!3m7!1s0x2388e640fa3a260b:0xdaab97dd1b4e917e!8m2!3d33.4211612!4d-111.7749523!9m1!1b1!16s%2Fg%2F11xtkm73hb",
    googleReviews:
      "https://www.google.com/maps/place/Javi+Electric/@33.4211612,-111.7749523,17z/data=!4m8!3m7!1s0x2388e640fa3a260b:0xdaab97dd1b4e917e!8m2!3d33.4211612!4d-111.7749523!9m1!1b1!16s%2Fg%2F11xtkm73hb",
    mapEmbed:
      "https://www.google.com/maps?q=Javi+Electric,+310+N+26th+St,+Mesa,+AZ+85213&z=14&output=embed",
    yelp: "https://www.yelp.com/biz/javi-electric-mesa",
  },
  /** Headline trust numbers shown in hero / trust bar. */
  stats: {
    rating: 5.0,
    reviewCount: 20,
  },
  /**
   * Optional form backend (Formspree, Basin, Web3Forms, ...). When unset the
   * contact form falls back to opening a pre-filled text message to the shop.
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
} as const;

export const serviceAreas = [
  "Mesa",
  "Gilbert",
  "Chandler",
  "Tempe",
  "Scottsdale",
  "Phoenix",
  "Queen Creek",
  "San Tan Valley",
  "Apache Junction",
  "Gold Canyon",
] as const;

export const mainNav = [
  { title: "Services", href: "/services/" },
  { title: "Projects", href: "/projects/" },
  { title: "Reviews", href: "/reviews/" },
  { title: "About", href: "/about/" },
  { title: "Service Areas", href: "/service-areas/" },
  { title: "Contact", href: "/contact/" },
] as const;

/** The promises customers repeat in reviews — reused across pages. */
export const promises = [
  {
    title: "Same-day response",
    description:
      "Burning smell at the panel or an outlet that died on the AC? Call before lunch and we're often there the same afternoon.",
    icon: "Zap",
  },
  {
    title: "On time, every time",
    description:
      "We show up when we say we will — customers regularly tell us we arrived early.",
    icon: "Clock",
  },
  {
    title: "Clean job sites",
    description:
      "We protect your home while we work and clean up after — \"like he was never here.\"",
    icon: "Sparkles",
  },
  {
    title: "Honest, fair pricing",
    description:
      "Clear, detailed written quotes before we start. Many customers tell us the final bill came in under the estimate.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Licensed & family-owned",
    description:
      "Arizona ROC licensed. Javi and his son Javi run every job — the name on the truck is the name on the work.",
    icon: "ShieldCheck",
  },
  {
    title: "Trusted by contractors",
    description:
      "General contractors and property managers use us as their go-to electrical sub for a reason.",
    icon: "HardHat",
  },
] as const;
