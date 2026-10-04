# Cafe Big Mo’s

Next.js 16, TypeScript and Tailwind storefront for the Prayagraj and Haldwani cafes.

## Run and verify

```
npm ci
npm run dev
npm run verify
npm run start
```

Implemented: responsive home carousel (5-second slides, pause/hold/swipe, reduced motion), full supplied menu with search/categories, persistent Zustand bag, quantity editing, validated delivery/pickup checkout, WhatsApp order formatter, about/timeline, filtered gallery/lightbox, outlet pages, contact/FAQ, privacy/terms, metadata, restaurant/menu/FAQ/breadcrumb JSON-LD, robots and sitemap.

Checkout opens a prepared message to +91 79061 23442. It does not send a message automatically or collect payment. Orders require cafe confirmation. Free delivery starts at a food subtotal of ₹299; fees below that are confirmed by the cafe because no fee was supplied. Delivery requests are for 11 AM–9 PM IST and the local service area.

## Browser QA

Install Playwright in your tooling environment and run `scripts/browser-qa.cjs` against a production server. Set `PLAYWRIGHT_MODULE` to its package path if it is not locally installed, `QA_URL` for the server URL, and `QA_BROWSER_CHANNEL` for an installed browser (default: msedge). The script checks all routes at 390/768/1440px, cart persistence/quantities, invalid checkout, intercepted WhatsApp order contents, gallery and the ₹299 delivery boundary. No order is sent during QA.

## Production / Vercel

Import `ayush-jha-NIT/big-mos` into Vercel as a Next.js project; install `npm ci`, build `npm run build`. Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS domain before building so canonical URLs, sitemap and structured data use it. Vercel’s production URL environment variable is used when available; local builds fall back to localhost. Public pages are statically rendered. Bag and checkout are excluded from indexing.

Vercel project creation was attempted and rejected with HTTP 403 for both available scopes. Reconnect the integration with repository access to finish live deployment. Local mobile Lighthouse scored 86 performance and 100 accessibility/best practices/SEO; see [QA results](reports/qa.md). No customer quotations or current ratings are fabricated: home links to the two outlets’ Google Maps reviews. Exact Haldwani street address, delivery fee below ₹299 and social links were not supplied. The original visual reference is not present in this repository; the site follows the existing brand palette and supplied cafe photography.

## Automated checks

`npm run test:data` runs ordering/data boundary tests. `npm run test:browser` runs responsive and ordering interactions, including timer/pause, touch swipe and reduced motion. `npm run test:accessibility` uses Playwright and axe-core; `npm run test:performance` uses Playwright and Lighthouse. Browser tooling must be installed or resolved via `PLAYWRIGHT_MODULE`, `AXE_SCRIPT` and `LIGHTHOUSE_CLI`. CI runs build/data, browser and accessibility checks on pushes and pull requests.
