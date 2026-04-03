# BidSquire marketing site

Next.js (App Router) marketing site for **bidsquire.com**: shared header/footer, env-based CTAs to onboarding and the app, and routes aligned with the previous Canva structure.

## Environment variables

Set at **build time** for `NEXT_PUBLIC_*` (Docker / Cloud Build args) or in `.env.local` for local dev. Optional; defaults match production URLs.

| Variable | Purpose | Default |
|----------|---------|---------|
| `NEXT_PUBLIC_ONBOARDING_SIGNUP_URL` | Primary signup CTA | `https://onboarding.bidsquire.com/signup` |
| `NEXT_PUBLIC_APP_SIGNIN_URL` | Header “Sign in” | `https://app.bidsquire.com/auth/login` |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for `metadataBase`, Open Graph, `sitemap.xml`, `robots.txt` | `https://bidsquire.com` |

Helpers: `lib/site.ts` (`getSignupUrl`, `getSignInUrl`), `lib/site-url.ts` (`getSiteUrl`).

### Production build-time values (Cloud Run)

For the **live** marketing domain after DNS cutover, pass these at **image build** (Cloud Build substitutions or `docker build --build-arg`):

- `NEXT_PUBLIC_SITE_URL` = `https://bidsquire.com` (or your chosen canonical host, no trailing slash).
- `NEXT_PUBLIC_ONBOARDING_SIGNUP_URL` = `https://onboarding.bidsquire.com/signup` (or your prod onboarding URL).
- `NEXT_PUBLIC_APP_SIGNIN_URL` = `https://app.bidsquire.com/auth/login` (or your prod app login URL).

Before DNS, you can set `NEXT_PUBLIC_SITE_URL` to your Cloud Run URL (e.g. `https://YOUR-SERVICE-REGION.run.app`) so sitemap and social metadata resolve correctly for that host.

### Copy pass with stakeholders (e.g. Monday)

When final headlines, body, FAQ, CTAs, stats labels, and sample-result disclaimers are ready, update:

- `app/page.tsx`, `app/how-it-works/page.tsx`, `app/pricing-tiers/page.tsx`, `app/auction-results/page.tsx`, `app/more-auction-results/page.tsx`
- `components/CtaBand.tsx`, `components/ResultCard.tsx` (notes), `lib/sample-results.ts`

Restore footer legal links in `components/Footer.tsx` when Terms and Privacy URLs exist.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Google Cloud Run

Cloud Run runs a **container**. This folder includes a **Dockerfile** (Next.js `standalone` output) and an optional **cloudbuild.yaml** for CI from GitHub/GitLab.

### One-time GCP setup

1. Enable APIs: Cloud Run, Artifact Registry, Cloud Build.
2. Create a Docker Artifact Registry repository (name must match `cloudbuild.yaml` or change `_AR_REPOSITORY`):

   ```bash
   gcloud artifacts repositories create bidsquire-docker \
     --repository-format=docker \
     --location=us-central1
   ```

3. Grant the Cloud Build service account permission to deploy to Cloud Run (`roles/run.admin`) and to use the service account that runs Cloud Run (`roles/iam.serviceAccountUser` on the compute default SA).

### Option A — Cloud Build trigger (connect repo)

1. **Cloud Build → Triggers → Connect repository** (2nd gen).
2. **Configuration**: Cloud Build configuration file (yaml).
3. **Location**: path to this file from repo root, e.g. `bidsquire-marketing/cloudbuild.yaml`.
4. **Substitutions** (optional): `_NEXT_PUBLIC_ONBOARDING_SIGNUP_URL`, `_NEXT_PUBLIC_APP_SIGNIN_URL`, `_NEXT_PUBLIC_SITE_URL` if you need non-default values at build time. Omit `_NEXT_PUBLIC_SITE_URL` to use the in-code default `https://bidsquire.com`.
5. Adjust `_REGION` / `_AR_REPOSITORY` / `_SERVICE_NAME` in `cloudbuild.yaml` if needed.

Each push runs: `docker build` in `bidsquire-marketing/` → push image → `gcloud run deploy`.

### Option B — Manual Docker + Cloud Run

From **monorepo root** (parent of `bidsquire-marketing`):

```bash
cd bidsquire-marketing
docker build -t REGION-docker.pkg.dev/PROJECT_ID/bidsquire-docker/bidsquire-marketing:latest .
docker push REGION-docker.pkg.dev/PROJECT_ID/bidsquire-docker/bidsquire-marketing:latest
gcloud run deploy bidsquire-marketing \
  --image REGION-docker.pkg.dev/PROJECT_ID/bidsquire-docker/bidsquire-marketing:latest \
  --region REGION \
  --platform managed \
  --allow-unauthenticated \
  --port 3000
```

With public env at build time:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://bidsquire.com \
  --build-arg NEXT_PUBLIC_ONBOARDING_SIGNUP_URL=https://onboarding.bidsquire.com/signup \
  --build-arg NEXT_PUBLIC_APP_SIGNIN_URL=https://app.bidsquire.com/auth/login \
  -t YOUR_IMAGE .
```

### Monorepo note

`cloudbuild.yaml` uses `dir: bidsquire-marketing` so the build context is this directory. The trigger must live on the repo that contains `bidsquire-marketing/` at that path.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/how-it-works` | How it works |
| `/pricing-tiers` | Pricing tiers |
| `/auction-results` | Auction results |
| `/more-auction-results` | More results |

`app/robots.ts` and `app/sitemap.ts` expose `/robots.txt` and `/sitemap.xml` for the five routes above (canonical URLs from `getSiteUrl()`).

Internal navigation uses Next.js `<Link>`. External CTAs use the env-driven URLs above.

## Scripts

| Script | Use |
|--------|-----|
| `npm run build` | Local build with Turbopack |
| `npm run build:docker` | Production build for Docker (`standalone`) |
