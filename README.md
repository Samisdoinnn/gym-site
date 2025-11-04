# FitLife Next.js Starter

Minimal Next.js + TypeScript + Tailwind starter with Firebase and DodoPayments integration stubs.

What’s included
- Next.js (App Router) scaffold in `src/app`
- TailwindCSS + PostCSS
- Firebase client init stub (`src/services/firebase.ts`)
- DodoPayments server/client stubs
- Dockerfile for Cloud Run
- GitHub Actions workflow skeleton
- `.env.local.example` with placeholder variables

Quick start (Windows PowerShell):

```powershell
# install deps
npm install

# run dev
npm run dev
```

New pages added:
- `/auth` — client-side sign-in (Email + Google) using Firebase client SDK (stub).
- `/classes` — lists sample classes pulled from `/api/classes` mock endpoint.

Note: The Firebase and DodoPayments integrations are stubs. To use them you must:

1. Copy `.env.local.example` to `.env.local` and set your real values (do NOT commit `.env.local`).
2. For DodoPayments, set `DODO_PAYMENTS_API_KEY` and update the API endpoint in `src/app/api/checkout/route.ts` to the real DodoPayments URL.
3. Run `npm install` before starting the dev server so TypeScript/Next.js and Tailwind packages are available.

If you want, I can now run `npm install` and `npm run build` here to validate everything (requires network). Say “run validate” to proceed.
