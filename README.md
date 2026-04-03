# BidSquire marketing site

Next.js (App Router) marketing site for **bidsquire.com**: shared header/footer, env-based CTAs to onboarding and the app, and routes aligned with the previous Canva structure.

## Environment variables

Set these in Vercel (or `.env.local` for local dev). All are optional; defaults match production URLs.

| Variable | Purpose | Default |
|----------|---------|---------|
| `NEXT_PUBLIC_ONBOARDING_SIGNUP_URL` | Primary “Start free” / signup CTA | `https://onboarding.bidsquire.com/signup` |
| `NEXT_PUBLIC_APP_SIGNIN_URL` | Header “Sign in” | `https://app.bidsquire.com/auth/login` |

Helpers live in `lib/site.ts` (`getSignupUrl`, `getSignInUrl`).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Create a **new Vercel project** from this repository.
2. Set **Root Directory** to `bidsquire-marketing` (not the monorepo root).
3. Add the environment variables above if staging URLs differ from defaults.
4. Deploy.

## Domain

To serve **bidsquire.com** from this project: in the Vercel project, add the domain under **Settings → Domains** and update DNS at your registrar using the records Vercel provides (typically A/CNAME as shown in the dashboard).

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/how-it-works` | How it works |
| `/pricing-tiers` | Pricing tiers |
| `/auction-results` | Auction results |
| `/more-auction-results` | More results |

Internal navigation uses Next.js `<Link>`. External CTAs use the env-driven URLs above.
