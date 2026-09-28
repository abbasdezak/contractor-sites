# Javi Electric — website

Marketing site for **Javi Electric**, a licensed, family-owned electrician in Mesa, AZ
(AZ ROC #313648 · (480) 809-8927 · 310 N 26th St, Mesa, AZ 85213).

**Stack:** Next.js 16 (App Router, static export) · React 19 · Tailwind CSS v4 · shadcn/ui (new-york) · Radix · lucide-react · Embla carousel.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out — upload to any static host
npm run lint
```

## Pages

| Route | What |
| --- | --- |
| `/` | Home: hero, services, why us, process, review carousel, projects, areas |
| `/services/` + `/services/[slug]/` | 12 service pages with FAQs, related reviews, JSON-LD |
| `/projects/` | Filterable recent-jobs gallery with lightbox |
| `/reviews/` | All Google reviews with topic filter + sort |
| `/about/` | Family story, values, credentials |
| `/service-areas/` | Cities served |
| `/contact/` | Estimate form, map, contact info |

`sitemap.xml`, `robots.txt`, `Electrician` JSON-LD and per-page metadata are generated at build time.

## Editing content

Everything lives in plain TypeScript data files — edit and rebuild:

| File | Contents |
| --- | --- |
| `src/lib/site.ts` | Name, phone, address, license, map links, service areas, nav, "why us" promises |
| `src/lib/services.ts` | Services: copy, checklists, FAQs, icon, photo |
| `src/lib/reviews.ts` | Google reviews (verbatim) and topic tags |
| `src/lib/projects.ts` | Recent jobs / gallery |

### Photos

No client photos are committed yet. Every image slot renders a branded placeholder via
`<Photo>` until a real file is set. See [`public/images/README.md`](public/images/README.md).

### Contact form

The form posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. a Formspree / Web3Forms / Basin URL)
if set at build time. Without it, submitting opens a pre-filled text message to the shop's phone.

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx npm run build
```

## Design system

- Tokens in `src/app/globals.css` use the shadcn/ui variable contract (`--primary`, `--background`, …).
  Brand: **electric amber** (`brand-*`) on **circuit navy** (`navy-*`); headings in Barlow Condensed, body in Inter.
- Add `className="dark"` to any section to switch it to the navy palette — shadcn components follow automatically.
- UI primitives: `src/components/ui/` (shadcn). Site-level building blocks: `src/components/site/`
  (`PageHero`, `SectionHeading`, `CtaBand`, `Photo`, `Stars`, `Icon`, header/footer).
- `components.json` is present, so `npx shadcn add <component>` works when the registry is reachable.
