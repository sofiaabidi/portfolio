# Sofia Abidi — Portfolio

A neo-brutalist student portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS 4 and Framer Motion, featuring Sofia Abidi's profile, projects, writing and experience.

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. Production checks are `npx tsc --noEmit`, `npm run lint` and `npm run build`; run the production output with `npm start`.

## Environment

Copy `.env.example` to `.env.local` as needed. `NEXT_PUBLIC_SITE_URL` controls canonical URLs. Analytics and Web3Forms remain inactive unless their variables are configured. Without a Web3Forms key, the form is honestly disabled and offers a direct email link.

## Deploy to Vercel

Import the GitHub repository into Vercel and use the native Next.js defaults:

- Production branch: `main`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave unset (Next.js automatic default)

Set `NEXT_PUBLIC_SITE_URL` to the final production origin, including `https://`. The optional `NEXT_PUBLIC_WEB3FORMS_KEY`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, and `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` variables can be added when those services are enabled. Redeploy after changing any `NEXT_PUBLIC_` value because Next.js includes public variables in the browser bundle at build time.

## Content and assets

- Résumé: `public/resume/Sofia_Abidi_Resume.pdf`
- Portfolio content: `src/lib/portfolio-data.ts`
- Project screenshots: see `docs/ADDING_PROJECT_IMAGES.md`
- Navigation uses shareable `?view=` and `?id=` query parameters.

## License

This project includes software distributed under the included MIT License. See `LICENSE` for the legally required copyright notice and terms.
