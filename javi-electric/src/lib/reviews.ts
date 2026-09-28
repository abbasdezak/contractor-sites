/**
 * Google reviews for Javi Electric (Google Business Profile, Mesa AZ).
 * Text is copied as written by each customer. Reviews that Google truncates
 * ("… More") end with an ellipsis and `truncated: true`; the full text lives
 * on Google (see site.links.googleReviews).
 *
 * `date` is the approximate month (YYYY-MM) derived from Google's relative
 * timestamp as of Sept 2026.
 */

export const reviewTopics = [
  { id: "quality", label: "Quality of work" },
  { id: "responsiveness", label: "Responsiveness" },
  { id: "punctuality", label: "Punctuality" },
  { id: "wiring-repair", label: "Electrical wiring repair" },
  { id: "recessed-lighting", label: "Recessed lighting" },
  { id: "family-business", label: "Family business" },
  { id: "clean-work", label: "Clean work" },
  { id: "fast-work", label: "Fast work" },
  { id: "ev-charger", label: "EV charger installation" },
] as const;

export type ReviewTopicId = (typeof reviewTopics)[number]["id"];

export type Review = {
  id: string;
  author: string;
  /** e.g. "Local Guide · 38 reviews" */
  meta?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  truncated?: boolean;
  ownerResponse?: string;
  topics: ReviewTopicId[];
  /** Service slugs (see services.ts) this review is relevant to. */
  services: string[];
  /** Hand-picked for home page / hero use. */
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    id: "elizabeth-lynch",
    author: "Elizabeth Lynch",
    meta: "2 reviews · 7 photos",
    rating: 5,
    date: "2026-09",
    text: "Javi & his son (also Javi) came initially because we had a burning smell coming from our panel. They came the same day and replaced a breaker but also agreed that the 1962 original panel for our home should be replaced. They came a few days …",
    truncated: true,
    ownerResponse: "Thank you!",
    topics: ["responsiveness", "family-business", "quality"],
    services: ["panel-upgrades", "emergency-electrical"],
    featured: true,
  },
  {
    id: "brendan-gallagher",
    author: "Brendan Gallagher",
    meta: "8 reviews",
    rating: 5,
    date: "2026-08",
    text: "I had an outlet powering my AC unit go out. I called at 1pm. It was fixed before 5pm same day. Great work and a good price.",
    ownerResponse: "Thank you!",
    topics: ["fast-work", "responsiveness", "wiring-repair"],
    services: ["troubleshooting-repair", "emergency-electrical", "outlets-switches"],
    featured: true,
  },
  {
    id: "cassandra-friday",
    author: "Cassandra Friday",
    meta: "5 reviews",
    rating: 5,
    date: "2026-06",
    text: "Arrived early, assessed the situation and corrected the issue. Fee was below the estimated amount and finished in half the time. The clean up was great, like he was never here. I highly recommend their services.",
    ownerResponse: "Thank you!",
    topics: ["punctuality", "clean-work", "fast-work"],
    services: ["troubleshooting-repair"],
    featured: true,
  },
  {
    id: "jack-beecher",
    author: "Jack Beecher",
    meta: "Local Guide · 38 reviews",
    rating: 5,
    date: "2026-06",
    text: "Did an amazing job on my home were very fast and efficient I need them day of for an emergency 👍",
    truncated: true,
    ownerResponse: "Thank you",
    topics: ["fast-work", "responsiveness"],
    services: ["emergency-electrical", "troubleshooting-repair"],
  },
  {
    id: "chris-hansen",
    author: "Chris Hansen",
    meta: "1 review",
    rating: 5,
    date: "2026-05",
    text: "Worked with Javi electric on a list of electrical issue from a home inspection. Gave them access to the house and provided the inspection report. Later that day received the quote and a very detailed scope of work that identified every …",
    truncated: true,
    ownerResponse:
      "Thank you Chris was great working for you let us know when you ever need us again",
    topics: ["responsiveness", "quality"],
    services: ["inspections-code-compliance", "troubleshooting-repair"],
    featured: true,
  },
  {
    id: "sandra-mitsis",
    author: "Sandra Mitsis",
    meta: "Local Guide · 18 reviews",
    rating: 5,
    date: "2026-05",
    text: "I called Javier Electric to inspect and repair some outlets at a rental property. He had a great attitude and got the job done. I found the repair cost reasonably priced and my tenant was happy with the service. Thank you Javi, I'll call you on future job sites!",
    ownerResponse: "Thank you!",
    topics: ["wiring-repair"],
    services: ["outlets-switches", "commercial-property", "troubleshooting-repair"],
  },
  {
    id: "jean-paul-santos",
    author: "Jean Paul Santos",
    meta: "6 reviews · 3 photos",
    rating: 5,
    date: "2026-05",
    text: "I want to say how amazing Javi was in getting my house installed with recessed lighting. He came to my house for a free consultation and within 3 days he came back and was able to install it within half a day. He was very professional, took …",
    truncated: true,
    ownerResponse: "Thank You",
    topics: ["recessed-lighting", "fast-work"],
    services: ["lighting-installation"],
    featured: true,
  },
  {
    id: "mark-kelso",
    author: "Mark Kelso",
    meta: "3 reviews",
    rating: 5,
    date: "2026-05",
    text: "Great to work with Javier is professional and does a great Job, I am a general contractor but also a 30 year electrician this company impressed me from day one. They are now my number one subcontractor and who I refer when a friend or previous client needs help",
    truncated: true,
    ownerResponse: "Thank you!",
    topics: ["quality"],
    services: ["commercial-property", "new-construction-remodels"],
    featured: true,
  },
  {
    id: "xonancy",
    author: "xonancy",
    meta: "2 reviews · 21 photos",
    rating: 5,
    date: "2026-05",
    text: "they came and fixed all my electrical issues, highly recommend",
    ownerResponse: "Thank you!",
    topics: ["wiring-repair"],
    services: ["troubleshooting-repair"],
  },
  {
    id: "john-purzycki",
    author: "John Purzycki",
    meta: "Local Guide · 15 reviews · 1 photo",
    rating: 5,
    date: "2026-05",
    text: "This company is fantastic one time clean work and very professional.",
    ownerResponse:
      "Thank you, John! We truly appreciate your kind words and support. We take pride in being on time, keeping the work clean, and delivering professional service every step of the way. It was a pleasure working with you, and we're here anytime you need us again. - Javi Electric",
    topics: ["clean-work", "punctuality"],
    services: [],
  },
  {
    id: "kurt-nacewicz",
    author: "Kurt Nacewicz",
    meta: "Local Guide · 20 reviews · 1 photo",
    rating: 5,
    date: "2026-05",
    text: "Great company to work with. Responsive, fast, & reasonably priced",
    ownerResponse: "Thank you Kurt",
    topics: ["responsiveness", "fast-work"],
    services: [],
  },
  {
    id: "haley-brinkmann",
    author: "Haley Brinkmann",
    meta: "Local Guide · 23 reviews · 9 photos",
    rating: 5,
    date: "2026-04",
    text: "Fast and professional work. very friendly and absolutely love that the company is family owned. Highly recommend",
    ownerResponse: "Thank you Haley",
    topics: ["family-business", "fast-work"],
    services: [],
  },
  {
    id: "jacqueline-andrade",
    author: "Jacqueline Andrade",
    meta: "6 reviews · 4 photos",
    rating: 5,
    date: "2026-02",
    text: "Great experience from start to finish! Responded quickly and answered all the questions I asked! Now I know who to call whenever I need any electrical work done! Thanks!",
    ownerResponse: "Thank you",
    topics: ["responsiveness"],
    services: [],
  },
  {
    id: "jaime-mazzeo",
    author: "Jaime Mazzeo",
    meta: "8 reviews · 1 photo",
    rating: 5,
    date: "2026-02",
    text: "Skilled work, easy scheduling and fair pricing. This is a nice family business, I will reach out to them again.",
    ownerResponse: "Thank you",
    topics: ["family-business", "quality"],
    services: [],
  },
  {
    id: "tyler-jones",
    author: "Tyler Jones",
    meta: "2 reviews · 1 photo",
    rating: 5,
    date: "2026-01",
    text: "I had an excellent experience with Javi Electric AZ. They were highly professional, always on time, and maintained a clean workspace throughout the entire process. They were responsive to all my questions and delivered some of the best quality work I've ever seen. I highly recommend their services for any electrical needs!",
    ownerResponse: "Thank you tyler",
    topics: ["quality", "punctuality", "clean-work", "responsiveness"],
    services: [],
    featured: true,
  },
  {
    id: "dawn-elkjer",
    author: "Dawn Elkjer",
    meta: "6 reviews",
    rating: 5,
    date: "2026-01",
    text: "Javi went out of his way to help us during an unexpected situation. His calm presence, willingness to step in, and genuine care stood out. Excellent human and someone worth recognizing. Thank you!",
    ownerResponse: "Thank You!",
    topics: [],
    services: ["emergency-electrical"],
  },
  {
    id: "chuck-reynolds",
    author: "Chuck Reynolds",
    meta: "6 reviews",
    rating: 5,
    date: "2025-12",
    text: "Javi and crew do excellent work! They keep their word, show up on time, are fast, conscientious, reasonably priced, and even clean up after themselves! They installed and wired two panels in my house. They have also done numerous jobs for my wife's business. I highly recommend them! Don't go with anyone else.",
    ownerResponse: "Thank you Chuck",
    topics: ["punctuality", "fast-work", "clean-work", "quality"],
    services: ["panel-upgrades", "commercial-property"],
    featured: true,
  },
  {
    id: "kelia-figueroa",
    author: "Kelia Figueroa",
    meta: "1 review",
    rating: 5,
    date: "2025-12",
    text: "javi and his crew did an excellent job installing new lights in my living room the price was fair they were on time and left everything looking good if your looking for electrician call javi",
    ownerResponse: "Thank you",
    topics: ["punctuality", "clean-work"],
    services: ["lighting-installation"],
  },
  {
    id: "lisa",
    author: "Lisa",
    meta: "Local Guide · 53 reviews · 3 photos",
    rating: 5,
    date: "2025-09",
    text: "Javi has done a few jobs for us. He is 100% trustworthy, honest and reliable. I dont know what we would do without him. From an EV charger to can lights. He stands behind his work and always makes sure to clean up after the job is over. I cant recommend him enough!",
    ownerResponse:
      "Thank You Lisa look forward to working with you again in the future.",
    topics: ["ev-charger", "recessed-lighting", "clean-work"],
    services: ["ev-charger-installation", "lighting-installation"],
    featured: true,
  },
  {
    id: "atl-garry",
    author: "Atl Garry",
    meta: "1 review · 1 photo",
    rating: 5,
    date: "2025-09",
    text: "Great service got my Panel upgrade last week and the customer service was amazing so was there work",
    ownerResponse: "Thank you Garry was a honor to work with you",
    topics: ["quality"],
    services: ["panel-upgrades"],
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);

export function reviewsForService(slug: string) {
  return reviews.filter((r) => r.services.includes(slug));
}

export function formatReviewDate(date: string) {
  const [y, m] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
