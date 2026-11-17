# The Space Concierge

Website for The Space Concierge (Britt Tucker). Static HTML/CSS/JS. No build step.

- `index.html` — the page (Home, About, Experiences, Business Advisory, Contact)
- `assets/css/style.css` — styles
- `assets/js/main.js` — mobile menu, nav state, fade-in
- `assets/img/` — WebP images (logo, headshot, Earth), icons, OG image
- `assets/logos/` — client logos
- `assets/fonts/` — self-hosted fonts (Cormorant Garamond, Jost)
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `404.html` — SEO and site files

High-res source images (transparent PNG logo etc.) are kept outside the repo in `../space_concierge_source_assets/`.

## If the domain changes

Replace `https://thespaceconcierge.github.io/space_concierge/` in `index.html`, `robots.txt` and `sitemap.xml`.

## Run locally

    python3 -m http.server 8000

## Deploy

GitHub Pages serves the `main` branch root.
