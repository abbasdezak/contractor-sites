/**
 * Services offered by Javi Electric. Drives /services, /services/[slug],
 * the home page grid, footer links and the contact form's service select.
 *
 * `icon` is a lucide-react icon name, resolved via components/site/icon.tsx.
 */

export type Service = {
  slug: string;
  title: string;
  /** Short name for menus / chips. */
  short: string;
  icon: string;
  /** One-line summary for cards. */
  summary: string;
  /** Opening paragraph(s) on the detail page. */
  intro: string[];
  /** What's included — bullet list on the detail page. */
  includes: string[];
  /** Signs you need this service. */
  signs?: string[];
  faqs: { q: string; a: string }[];
  /** Label for the photo slot (see components/site/photo.tsx). */
  photoLabel: string;
  /** Path under /public once real photos are added, e.g. "/images/services/panel.jpg". */
  image?: string;
  popular?: boolean;
};

export const services: Service[] = [
  {
    slug: "panel-upgrades",
    title: "Panel Upgrades & Breaker Replacement",
    short: "Panel Upgrades",
    icon: "CircuitBoard",
    popular: true,
    summary:
      "Replace outdated or overloaded panels, upgrade service capacity, and swap failing breakers — done safely and to code.",
    intro: [
      "Your electrical panel is the heart of your home. Many Valley homes still run on original panels from the 1960s–80s that were never designed for today's AC units, kitchens, pool equipment and EV chargers.",
      "We replace and upgrade main panels and subpanels, increase service capacity, and replace worn or tripping breakers. We handle permits and utility coordination (SRP / APS) so you don't have to.",
    ],
    includes: [
      "Main panel replacement & service upgrades (100A → 200A and up)",
      "Subpanels for garages, casitas, shops and additions",
      "Breaker replacement, including AFCI / GFCI breakers",
      "Whole-home surge protection at the panel",
      "Permits, inspections and SRP / APS coordination",
      "Labeling and a clean, organized panel when we're done",
    ],
    signs: [
      "Burning smell or warmth near the panel",
      "Breakers that trip often or won't reset",
      "An original, recalled or obsolete panel brand",
      "Adding an EV charger, AC, pool, or remodel",
      "Flickering or dimming lights when big appliances start",
    ],
    faqs: [
      {
        q: "How long does a panel upgrade take?",
        a: "Most residential panel swaps are completed in a single day. Power is typically off for a portion of that day; we'll schedule it with you in advance.",
      },
      {
        q: "Do you pull the permit?",
        a: "Yes. We pull the required permits, schedule the city inspection, and coordinate with SRP or APS for the disconnect and reconnect.",
      },
      {
        q: "My panel smells like it's burning — what should I do?",
        a: "Call us right away. If you can safely do so, switch off the affected breaker. A burning smell is never normal — we treat it as a same-day priority.",
      },
    ],
    photoLabel: "Panel upgrade",
  },
  {
    slug: "ev-charger-installation",
    title: "EV Charger Installation",
    short: "EV Chargers",
    icon: "PlugZap",
    popular: true,
    summary:
      "Level 2 home charging for Tesla, Rivian, Ford, Chevy and every other EV — installed on a dedicated circuit, permitted and tested.",
    intro: [
      "A Level 2 charger can add 20–40 miles of range per hour — enough to start every morning with a full battery. We install hardwired wall connectors and NEMA 14-50 outlets for any make of EV.",
      "We'll check your panel's capacity first and recommend the right circuit size. If your panel is maxed out, we'll explain your options honestly, including load management and panel upgrades.",
    ],
    includes: [
      "Tesla Wall Connector, ChargePoint, Emporia, Grizzl-E and more",
      "NEMA 14-50 / 6-50 outlet installation",
      "Dedicated 40A–60A circuits sized to your charger",
      "Load calculation and panel capacity check",
      "Garage, carport and exterior installs",
      "Permit and inspection handled for you",
    ],
    faqs: [
      {
        q: "Do I need a panel upgrade for an EV charger?",
        a: "Not always. Many homes have enough capacity for a 40A or 48A charger. We'll run a load calculation before recommending anything.",
      },
      {
        q: "Can you install a charger I already bought?",
        a: "Absolutely. We install customer-supplied chargers, or we can recommend one that fits your car and panel.",
      },
    ],
    photoLabel: "EV charger install",
  },
  {
    slug: "lighting-installation",
    title: "Recessed & Interior Lighting",
    short: "Lighting",
    icon: "Lightbulb",
    popular: true,
    summary:
      "Recessed can lights, fixtures, under-cabinet and exterior lighting — designed with you and installed cleanly, often in half a day.",
    intro: [
      "Good lighting transforms a room. We install recessed (can) lighting, pendants, chandeliers, under-cabinet LEDs, and exterior security and landscape lighting.",
      "Start with a free in-home consultation — we'll help plan the layout, then come back and install with minimal drywall disruption and a thorough clean-up.",
    ],
    includes: [
      "Recessed / can light installation & LED retrofits",
      "Chandeliers, pendants and fixture swaps",
      "Dimmer and smart-switch installation",
      "Under-cabinet and accent lighting",
      "Exterior, security and motion lighting",
      "Free in-home lighting consultation",
    ],
    faqs: [
      {
        q: "How long does recessed lighting take to install?",
        a: "A typical living room of recessed lights is often installed in about half a day, depending on attic access and the number of fixtures.",
      },
      {
        q: "Will you have to cut a lot of drywall?",
        a: "We use remodel-style housings and careful routing to minimize cuts, and we clean up thoroughly before we leave.",
      },
    ],
    photoLabel: "Recessed lighting",
  },
  {
    slug: "troubleshooting-repair",
    title: "Electrical Troubleshooting & Repair",
    short: "Troubleshooting & Repair",
    icon: "Wrench",
    popular: true,
    summary:
      "Dead outlets, tripping breakers, flickering lights, buzzing switches — we find the root cause and fix it right the first time.",
    intro: [
      "Electrical problems rarely fix themselves. We diagnose issues methodically, explain what we find in plain language, and give you a clear price before any repair.",
      "From a single dead outlet to a house full of mysterious problems, we'll track it down — often the same day you call.",
    ],
    includes: [
      "Dead or partially-working outlets and circuits",
      "Tripping breakers and GFCIs",
      "Flickering, dimming or buzzing lights",
      "Warm outlets, switches or cover plates",
      "Burning smells and scorch marks",
      "Storm and surge damage repair",
    ],
    faqs: [
      {
        q: "Can you come out today?",
        a: "Often, yes. Call us — for urgent issues we do our best to get someone out the same day.",
      },
      {
        q: "Do you charge to diagnose?",
        a: "Call us for current pricing. We'll always explain the cost of diagnosis and repair before starting work.",
      },
    ],
    photoLabel: "Troubleshooting",
  },
  {
    slug: "emergency-electrical",
    title: "Same-Day & Emergency Service",
    short: "Emergency Service",
    icon: "Siren",
    summary:
      "Burning smell, sparking outlet, or AC without power in an Arizona summer? Call now — we respond fast.",
    intro: [
      "Some electrical problems can't wait. When you smell burning, see sparks, or lose power to critical equipment like your AC, call us immediately.",
      "Our customers regularly tell us we were at their door the same afternoon — like the homeowner whose AC outlet failed at 1pm and was fixed before 5pm.",
    ],
    includes: [
      "Burning smells from panels, outlets or fixtures",
      "Sparking or smoking outlets and switches",
      "Loss of power to AC, fridge or critical circuits",
      "Failed breakers and main disconnects",
      "Storm, water and surge damage",
      "Make-safe and temporary power",
    ],
    signs: [
      "Any burning or hot-plastic smell",
      "Visible sparks, smoke or scorch marks",
      "A breaker that trips immediately after reset",
      "Buzzing or crackling from the panel",
    ],
    faqs: [
      {
        q: "What should I do while I wait?",
        a: "If it's safe, turn off the affected breaker (or the main if you're unsure). Don't touch damaged equipment. If there's active fire or smoke, call 911 first.",
      },
    ],
    photoLabel: "Emergency call",
  },
  {
    slug: "outlets-switches",
    title: "Outlet & Switch Installation",
    short: "Outlets & Switches",
    icon: "Plug",
    summary:
      "New outlets, GFCIs, USB outlets, dimmers, smart switches and dedicated circuits for appliances and AC units.",
    intro: [
      "We install and replace outlets, switches, GFCIs, dimmers and other devices for homes, rentals and businesses throughout Mesa and the East Valley.",
      "Need an outlet where there isn't one? We add new locations and dedicated circuits cleanly, with minimal wall repair.",
    ],
    includes: [
      "GFCI / AFCI protection for kitchens, baths, garages and outdoors",
      "New outlet locations and dedicated circuits",
      "240V outlets for dryers, ranges, tools and EVs",
      "USB, smart and tamper-resistant outlets",
      "Dimmers, 3-way/4-way and smart switches",
      "Replacing warm, loose or damaged devices",
    ],
    faqs: [
      {
        q: "Can you add an outlet on a wall that has none?",
        a: "Yes. We fish wiring through walls to add new outlets with minimal drywall work.",
      },
    ],
    photoLabel: "Outlet install",
  },
  {
    slug: "wiring-rewiring",
    title: "Wiring & Rewiring",
    short: "Wiring & Rewiring",
    icon: "Cable",
    summary:
      "Whole-home and partial rewires, aluminum-wiring remediation, and new circuits for additions and upgrades.",
    intro: [
      "Older homes often have wiring that's undersized, damaged, or simply past its service life. We rewire safely and neatly, room by room or whole-home.",
      "We also run new circuits for kitchens, bathrooms, workshops, pools and spas.",
    ],
    includes: [
      "Whole-home and partial rewiring",
      "Aluminum wiring remediation",
      "New dedicated circuits",
      "Kitchen, bath and laundry circuits",
      "Pool, spa and outdoor wiring",
      "Low-voltage and data runs",
    ],
    faqs: [
      {
        q: "How do I know if my home needs rewiring?",
        a: "Frequent tripping, warm outlets, two-prong outlets throughout, or aluminum branch wiring are common signs. We can inspect and give you honest recommendations.",
      },
    ],
    photoLabel: "Wiring",
  },
  {
    slug: "ceiling-fans-appliances",
    title: "Ceiling Fans & Appliance Wiring",
    short: "Fans & Appliances",
    icon: "Fan",
    summary:
      "Ceiling fan installs on properly-rated boxes, plus wiring for ranges, dryers, water heaters, mini-splits and more.",
    intro: [
      "In the Arizona heat, a well-installed ceiling fan earns its keep. We install fans on fan-rated boxes with proper bracing, and add wall controls or remotes.",
      "We also wire major appliances — ranges, cooktops, dryers, water heaters, mini-splits and pool equipment.",
    ],
    includes: [
      "Ceiling fan installation & replacement",
      "Fan-rated boxes and bracing",
      "Range, cooktop and oven circuits",
      "Dryer and water heater circuits",
      "Mini-split and AC disconnects",
      "Garbage disposal & dishwasher wiring",
    ],
    faqs: [
      {
        q: "Can you replace a light fixture with a ceiling fan?",
        a: "Usually, yes. We'll verify the box is fan-rated and add bracing if needed — an important safety step that's often skipped.",
      },
    ],
    photoLabel: "Ceiling fan",
  },
  {
    slug: "inspections-code-compliance",
    title: "Inspections & Code Compliance",
    short: "Inspections",
    icon: "ClipboardCheck",
    summary:
      "Fix every electrical item on your home inspection report with a detailed written scope — ideal for buyers, sellers and landlords.",
    intro: [
      "Buying or selling a home? Send us your inspection report. We'll review every electrical item, walk the property, and send a detailed quote and scope of work — often the same day.",
      "We also perform safety inspections for older homes, rentals and insurance requirements.",
    ],
    includes: [
      "Home-inspection report repairs",
      "Detailed written scope of work & quote",
      "Safety inspections for older homes",
      "Code corrections and GFCI/AFCI upgrades",
      "Smoke & CO detector installation",
      "Rental and property-manager turnovers",
    ],
    faqs: [
      {
        q: "Can you work from the inspector's report?",
        a: "Yes — that's one of our specialties. Send us the report and property access and we'll provide an itemized quote addressing every electrical item.",
      },
    ],
    photoLabel: "Inspection",
  },
  {
    slug: "new-construction-remodels",
    title: "New Construction & Remodels",
    short: "Remodels",
    icon: "Hammer",
    summary:
      "Kitchen and bath remodels, additions, casitas and new builds — the electrical sub general contractors call first.",
    intro: [
      "From a kitchen remodel to a full addition, we handle design, rough-in, trim-out and inspection. We coordinate closely with homeowners, designers and general contractors to keep your project on schedule.",
      "A 30-year electrician turned general contractor calls us his \"number one subcontractor\" — we take that seriously.",
    ],
    includes: [
      "Kitchen and bathroom remodels",
      "Room additions, casitas and ADUs",
      "Garage and workshop build-outs",
      "Rough-in, trim-out and final inspection",
      "Load calcs and service sizing",
      "GC and builder subcontracting",
    ],
    faqs: [
      {
        q: "Do you work with general contractors?",
        a: "Yes. We're a trusted electrical sub for general contractors across the Valley and communicate proactively to keep schedules on track.",
      },
    ],
    photoLabel: "Remodel",
  },
  {
    slug: "surge-protection",
    title: "Whole-Home Surge Protection",
    short: "Surge Protection",
    icon: "ShieldCheck",
    summary:
      "Protect your AC, appliances and electronics from monsoon lightning and grid surges with a panel-mounted surge protector.",
    intro: [
      "Monsoon season brings lightning and utility switching surges that can quietly damage HVAC boards, appliances and electronics. A whole-home surge protective device (SPD) at your panel is the first line of defense.",
      "We install SPDs on new and existing panels — often in under an hour.",
    ],
    includes: [
      "Panel-mounted whole-home surge protectors",
      "Point-of-use protection recommendations",
      "Grounding and bonding checks",
      "Required SPDs for service upgrades (NEC 230.67)",
    ],
    faqs: [
      {
        q: "Isn't a power strip enough?",
        a: "Power strips help at the outlet, but whole-home protection stops larger surges at the panel before they reach your AC, appliances and wiring.",
      },
    ],
    photoLabel: "Surge protector",
  },
  {
    slug: "commercial-property",
    title: "Commercial & Property Management",
    short: "Commercial",
    icon: "Building2",
    summary:
      "Reliable electrical service for small businesses, landlords and property managers — tenants included.",
    intro: [
      "We keep small businesses and rental properties running. Landlords and property managers rely on us for fast turnarounds, fair pricing and happy tenants.",
      "Whether it's a tenant repair, a make-ready, or a tenant improvement, we communicate clearly and show up when we say we will.",
    ],
    includes: [
      "Rental repairs & make-readies",
      "Small commercial tenant improvements",
      "Lighting retrofits and exterior lighting",
      "Dedicated equipment circuits",
      "Ongoing service for property managers",
      "Coordination directly with tenants",
    ],
    faqs: [
      {
        q: "Can you coordinate directly with my tenant?",
        a: "Yes. Give us the tenant's contact and we'll schedule, complete the work and report back to you.",
      },
    ],
    photoLabel: "Commercial",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const popularServices = services.filter((s) => s.popular);
