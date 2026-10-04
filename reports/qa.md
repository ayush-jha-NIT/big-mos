# QA — 4 October 2026

Verified against the local optimized production build, not a deployed Vercel site.

- `npm run verify`: lint, TypeScript, data tests and production build passed.
- Data: 70 menu items, 22 categories, unique IDs, valid prices/categories, vegetarian flags, exact ₹299 free-delivery boundary, 11 AM/9 PM IST boundaries, form validation, message formatting and persisted-cart sanitation passed.
- Browser: all twelve content/ordering routes at 390px, 768px and 1440px; no horizontal overflow. Bag persistence/quantities, pickup and delivery WhatsApp formatting, mobile navigation/counter, gallery, carousel five-second timer/pause, touch swipe, hold to pause, reduced motion, corrupted browser storage, canonical/OG metadata, sitemap and custom 404 passed. WhatsApp requests were intercepted; no order was sent.
- Axe: no WCAG 2 A/AA or 2.1 AA violations across home, menu, about, gallery, outlets, contact, populated bag/checkout and legal pages. Automated auditing does not replace human assistive-technology testing.
- Lighthouse 13.5, mobile simulated throttling, local production homepage: Performance **86**, Accessibility **100**, Best Practices **100**, SEO **100**. LCP 3.1s; TBT 350ms. First run was 83/96/96/100. Corrected link/button CSS, contrast, favicon, accessible bag label, logo sizing, image fetch priority and unnecessary animation-library loading. Scores vary with hardware/load and need rechecking on the final production domain.

## Remaining external requirements

- Vercel project creation rejected with HTTP 403 in the previously listed team and user scopes. The connected account must be reauthenticated with access to this repository before live deployment and production-domain checks can be completed.
- The original homepage visual reference is unavailable in this repository. Exact comparison requires it.
- Approved customer review quotations and the full Haldwani street address were not supplied or verified. The site uses supplied photos, location directions and direct Google Maps review links.
- No fee below ₹299 was supplied. The WhatsApp message requests confirmation instead of inventing a fee. Free delivery and pickup totals are exact.
