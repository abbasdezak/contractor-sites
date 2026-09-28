import { site, serviceAreas } from "@/lib/site";
import { services } from "@/lib/services";

/** Renders a JSON-LD <script>. See Next docs: guides/json-ld. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phone.e164,
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: site.links.googleMaps,
  areaServed: serviceAreas.map((c) => ({
    "@type": "City",
    name: `${c}, AZ`,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${site.url}/services/${s.slug}/`,
      },
    })),
  },
  sameAs: [site.links.yelp],
};
