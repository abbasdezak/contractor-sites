# Adding real photos

Until real photos are added, the site shows branded placeholders. Adding a
photo is two steps: drop the file in the right folder, then point to it from
the matching data file. No page code needs to change.

## Where to put files

| Folder                      | Used for                                   |
| --------------------------- | ------------------------------------------ |
| `public/images/projects/`   | Job photos on the Projects page (and before/after pairs) |
| `public/images/services/`   | One photo per service page and service card |
| `public/images/hero/`       | Home page hero / team photos               |

## Recommended sizes

- JPG or WebP, about **1600 px wide** (landscape, roughly 4:3 or 3:2).
- Keep each file **under 400 KB** (export at 75-85% quality).
- Use short, lowercase, dash-separated names: `1962-panel-after.jpg`.
- Crop tight on the work (the panel, the lights, the charger). Avoid photos
  that show customers' faces, house numbers or license plates.

## Which field to set

Paths start with `/images/...` (do not include `public`).

- **Projects** - `src/lib/projects.ts`, on each project:
  - `image: "/images/projects/1962-panel-after.jpg"` - the main photo.
  - `beforeImage: "/images/projects/1962-panel-before.jpg"` - optional; when
    set, the project pop-up shows Before and After side by side.
- **Services** - `src/lib/services.ts`, on each service:
  - `image: "/images/services/panel-upgrades.jpg"`
- **Hero / team** - set the path where the home page or About page uses the
  `<Photo src="/images/hero/...">` component.

Anything without an `image` keeps showing the branded placeholder, so you can
add photos one at a time.
