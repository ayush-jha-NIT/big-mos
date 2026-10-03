# Cafe Big Mo's

Next.js storefront for Cafe Big Mo's.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

Or run all checks:

```bash
npm run verify
```

## Implementation status

- Part 0: project foundation — complete
- Part 1: assets + brand design system — complete
- Part 2 onward: global layout, data, home, menu, cart, checkout and production pages

## Part 1 assets

Real supplied photography is organized by outlet:

```text
public/
├── branding/logo.webp
└── outlets/
    ├── prayagraj/
    └── haldwani/
```

Images are optimized to WebP for production use. The original supplied source images are not duplicated inside the repository.
