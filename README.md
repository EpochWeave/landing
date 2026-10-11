# EpochWeave landing site

Nuxt 4 + Tailwind 4 marketing site for https://www.epochweave.com. Every route
(including each blog post) is prerendered to static HTML at build time.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run generate   # static site in .output/public (deploy this folder)
npx serve .output/public   # preview the static output locally
```

`npm run build` also prerenders every route, and outputs a Node server in
`.output/` (`node .output/server/index.mjs` to preview it).

## Configuration

Site-wide identity lives in `app/utils/site.ts`: canonical URL, owner name
(used in the legal pages, blog bylines, and founder section), founder bio,
email, booking link, and social links. Change values there, not in pages.

### Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_WEB3FORMS_KEY` | Optional. Access key from [web3forms.com](https://web3forms.com). The contact section uses the HubSpot embedded form; if that can't load (e.g. blocked by an ad blocker), a fallback form is shown. With this key set, the fallback posts to Web3Forms. Without it, the fallback opens the visitor's email app addressed to the site email. |

Because the site is prerendered, set environment variables **before** running
`npm run generate` / `npm run build`.

## Content

- Blog posts: metadata in `app/utils/blog.ts`, article bodies in
  `app/assets/blog/<slug>.md`. Add both when publishing a post; the sitemap and
  prerender routes pick it up automatically.
- Page SEO (title, description, canonical, Open Graph) is set per page with
  `usePageSeo()` from `app/composables/usePageSeo.ts`.
