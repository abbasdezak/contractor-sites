/**
 * Recent jobs / project gallery.
 *
 * Each entry is based on a real job described by a customer review.
 * PHOTOS: drop the client's photos into /public/images/projects/ and set
 * `image` (e.g. "/images/projects/1962-panel.jpg"). Until then the <Photo>
 * component renders a branded placeholder, so the layout is final either way.
 */

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Service slug from services.ts */
  service: string;
  summary: string;
  /** Short facts shown as chips. */
  details: string[];
  /** Review id from reviews.ts backing this job. */
  reviewId?: string;
  image?: string;
  /** Optional before photo for before/after pairs. */
  beforeImage?: string;
};

export const projectCategories = [
  "Panels",
  "Lighting",
  "EV Charging",
  "Repairs",
  "Remodel & Commercial",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    slug: "1962-panel-replacement",
    title: "1962 original panel replacement",
    category: "Panels",
    service: "panel-upgrades",
    summary:
      "Called out same-day for a burning smell at the panel. We replaced the failing breaker immediately, then returned a few days later to replace the home's original 1962 panel.",
    details: ["Same-day response", "Breaker replacement", "Full panel swap"],
    reviewId: "elizabeth-lynch",
  },
  {
    slug: "two-panel-install",
    title: "Two new panels, installed & wired",
    category: "Panels",
    service: "panel-upgrades",
    summary:
      "Installed and wired two panels for a longtime customer — on schedule, and cleaned up after ourselves.",
    details: ["2 panels", "Repeat customer"],
    reviewId: "chuck-reynolds",
  },
  {
    slug: "panel-upgrade-east-valley",
    title: "Residential panel upgrade",
    category: "Panels",
    service: "panel-upgrades",
    summary:
      "Complete panel upgrade with permit and inspection, plus a customer-service experience the homeowner called amazing.",
    details: ["Permit & inspection", "Service upgrade"],
    reviewId: "atl-garry",
  },
  {
    slug: "recessed-lighting-half-day",
    title: "Recessed lighting in half a day",
    category: "Lighting",
    service: "lighting-installation",
    summary:
      "Free consultation, back within three days, and a full recessed-lighting install finished in half a day.",
    details: ["Free consultation", "Installed in ½ day"],
    reviewId: "jean-paul-santos",
  },
  {
    slug: "living-room-lighting",
    title: "Living room lighting refresh",
    category: "Lighting",
    service: "lighting-installation",
    summary:
      "New living-room light fixtures installed at a fair price, on time, with the room left looking good.",
    details: ["New fixtures", "Clean install"],
    reviewId: "kelia-figueroa",
  },
  {
    slug: "ev-charger-and-can-lights",
    title: "EV charger + can lights",
    category: "EV Charging",
    service: "ev-charger-installation",
    summary:
      "Level 2 EV charger on a dedicated circuit for a repeat customer, followed by recessed can lighting.",
    details: ["Level 2 charger", "Dedicated circuit", "Can lights"],
    reviewId: "lisa",
  },
  {
    slug: "ac-outlet-same-day",
    title: "AC outlet — fixed in under 4 hours",
    category: "Repairs",
    service: "emergency-electrical",
    summary:
      "The outlet powering the homeowner's AC unit failed. Called at 1pm — repaired before 5pm the same day.",
    details: ["Called 1pm", "Fixed by 5pm", "Arizona summer"],
    reviewId: "brendan-gallagher",
  },
  {
    slug: "home-inspection-repairs",
    title: "Home-inspection repair list",
    category: "Repairs",
    service: "inspections-code-compliance",
    summary:
      "Received the inspection report and house access — delivered a same-day quote with a detailed scope of work covering every item.",
    details: ["Same-day quote", "Itemized scope"],
    reviewId: "chris-hansen",
  },
  {
    slug: "rental-outlet-repairs",
    title: "Rental property outlet repairs",
    category: "Repairs",
    service: "outlets-switches",
    summary:
      "Inspected and repaired outlets at a rental property, coordinating with the tenant. Landlord and tenant both happy.",
    details: ["Rental property", "Tenant coordination"],
    reviewId: "sandra-mitsis",
  },
  {
    slug: "gc-subcontract",
    title: "General-contractor subcontract work",
    category: "Remodel & Commercial",
    service: "new-construction-remodels",
    summary:
      "Electrical subcontracting for a general contractor (and 30-year electrician) who now calls us his number-one sub.",
    details: ["GC partner", "Remodels"],
    reviewId: "mark-kelso",
  },
  {
    slug: "small-business-service",
    title: "Small-business electrical service",
    category: "Remodel & Commercial",
    service: "commercial-property",
    summary:
      "Numerous service calls and improvements for a local small business — the same crew, the same standards.",
    details: ["Ongoing service", "Commercial"],
    reviewId: "chuck-reynolds",
  },
  {
    slug: "whole-home-repairs",
    title: "Whole-home electrical fixes",
    category: "Repairs",
    service: "troubleshooting-repair",
    summary:
      "A full list of electrical issues diagnosed and fixed in one visit.",
    details: ["Multiple issues", "One visit"],
    reviewId: "xonancy",
  },
];
