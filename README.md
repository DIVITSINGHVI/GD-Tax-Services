# GD TAX SERVICES – Website

Business website for **GD TAX SERVICES**, Tarabenahalli, Chikkanayakanahalli Taluk, Tumakuru, Karnataka 572214.

- Phone / WhatsApp: 7975171155
- Email: gdtax1379@gmail.com
- Working hours: 7 AM – 9 PM

Pages: **Home**, **About Us**, **Contact** (main menu). The **Services** page (`/services`) is opened from the "Our Services" buttons on the home page.

Built with Next.js (App Router) and Tailwind CSS. **No database is needed.** The enquiry form sends enquiries through WhatsApp.
Photos load directly from Pexels (free stock photos), so there is **no `public` folder**.

## What must be in the GitHub repository

```
src/               <- folder: ALL the website pages, components and text
.gitignore
README.md
drizzle.config.json
eslint.config.mjs
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
tsconfig.json
```

Do **not** upload `node_modules/`, `.next/` or `.env`.

### Uploading with the GitHub website
1. Open the repository → **Add file** → **Upload files**.
2. **Drag and drop** the `src` folder and the files above from your computer into the upload box.
3. Click **Commit changes**.
4. Check that the repo now shows a `src` folder, and that `src/app/page.tsx` exists.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy (Vercel, recommended)
1. Go to vercel.com → **Add New… → Project** → import this GitHub repository.
2. Leave all settings as default (Framework: Next.js) → **Deploy**.
3. No environment variables are required. Optionally set `NEXT_PUBLIC_SITE_URL` to your real domain (used for SEO / sitemap).

## Editing content
- Phone, WhatsApp, address, email and working hours: `src/lib/site.ts`
- All page text, services, FAQs: `src/lib/content.ts`
- Photos (Pexels photo IDs): `src/lib/images.ts`
