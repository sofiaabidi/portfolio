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

## Content and assets

- Résumé: `public/resume/Sofia_Abidi_Resume.pdf`
- Portfolio content: `src/lib/portfolio-data.ts`
- Project screenshots: see `docs/ADDING_PROJECT_IMAGES.md`
- Navigation uses shareable `?view=` and `?id=` query parameters.

## License

This project includes software distributed under the included MIT License. See `LICENSE` for the legally required copyright notice and terms.
