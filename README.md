# (re)engineered — personal business site

Vite + React + TypeScript marketing site for **(re)engineered**. Includes a contact form with a Netlify Function email sender, Tailwind-based styling, and i18n via i18next.

## Quick start

```bash
npm install
npm run dev
```

Open the dev server URL printed in your terminal (typically `http://localhost:5173`).

## Commands

```bash
npm run dev          # local dev
npm run build        # typecheck + production build to dist/
npm run preview      # serve the production build locally

npm run test         # run unit tests (Vitest)
npm run test:watch   # watch mode
npm run test:coverage

npm run lint         # ESLint
npm run check        # build + test (what CI should run)
```

## Project structure

- `src/App.tsx` — page composition (Hero → About → Services → Recommendations → Contact → Footer)
- `src/components/*` — page sections and UI components
- `src/components/ui/*` — shared UI primitives (e.g. `Button`, `Logo`)
- `src/locales/en.json` — copy for all sections (i18next)
- `src/i18n.ts` — i18next setup
- `src/index.css` — design tokens + Tailwind utilities (CSS variables drive theme colors)

## Styling

- Tailwind CSS is configured in `tailwind.config.js` using CSS variables:
  - `--color-primary`, `--color-background`, `--color-text`, `--color-secondary`, `--color-muted`, `--color-accent`
- For accessible small label text on light backgrounds, use `text-accent-strong` (backed by `--color-accent-strong`) instead of `text-accent`.

## Internationalization (i18n)

- All user-facing strings are sourced from `src/locales/en.json`.
- Components use `t(...)` for plain strings and `<Trans />` for rich text.

To add another language:
- Create `src/locales/<lang>.json`
- Update `src/i18n.ts` to load it and configure language detection/fallbacks

## Contact form + email delivery

The contact form (`src/components/Contact.tsx`) supports two paths:

- **Production (Netlify):** posts to `/.netlify/functions/send-email` (Netlify Function)
- **Fallback:** posts as a Netlify Form submission (`POST /` with `form-name=contact`)

### Netlify Function (recommended for production)

The function lives at `netlify/functions/send-email.js` and uses Nodemailer. Configure these environment variables in Netlify (or in your local environment when invoking the function):

| Variable | Required | Description |
| --- | --- | --- |
| `EMAIL_USER` | yes | SMTP/service username (often your email address) |
| `EMAIL_PASS` | yes | SMTP/service password (use an app password where applicable) |
| `EMAIL_SERVICE` | no | Nodemailer service name (e.g. `gmail`) |
| `EMAIL_HOST` | if no `EMAIL_SERVICE` | SMTP host (custom SMTP) |
| `EMAIL_PORT` | if no `EMAIL_SERVICE` | SMTP port (e.g. `587`) |
| `EMAIL_SECURE` | if no `EMAIL_SERVICE` | `true` for 465, `false` for 587 |
| `EMAIL_FROM` | no | From address (defaults to `EMAIL_USER`) |
| `EMAIL_TO` | no | Destination address (defaults to `EMAIL_USER`) |

### Local email server (optional)

There is also an Express server at `server/index.js` that exposes:

- `POST /api/send-email`

Run it with:

```bash
node server/index.js
```

It uses the same email environment variables as the Netlify Function.

## Deployment

This repo is set up for Netlify:

- Build: `npm run build`
- Publish directory: `dist`
- SPA routing redirect: `/* -> /index.html` (see `netlify.toml`)

## Notes

- Do not commit real credentials. Use `.env` locally and set variables in your hosting provider for production.
- Tests are written with Vitest + Testing Library (see `src/components/*.test.tsx`).
