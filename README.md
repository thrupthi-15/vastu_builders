# Vaastu Builders & Constructions — Website

Built with **Next.js 15 + TypeScript + Tailwind CSS**. Production-ready, SEO-optimised, fully responsive.

---

## 🗂 Project Structure

```
vaastu-builders/
├── app/
│   ├── layout.tsx          ← Root layout + SEO metadata
│   ├── page.tsx            ← Homepage (all sections)
│   ├── globals.css         ← Global styles + CSS variables
│   ├── about/page.tsx      ← About Us page
│   ├── contact/page.tsx    ← Contact + Book Site Visit
│   ├── projects/page.tsx   ← All Projects grid
│   └── services/[slug]/    ← Dynamic service pages (6 services)
├── components/
│   ├── Navbar.tsx          ← Fixed nav + dropdown + mobile menu
│   ├── Footer.tsx          ← Footer with all links
│   ├── Hero.tsx            ← Hero with animated counters
│   ├── QuoteModal.tsx      ← Quotation popup (loads on first visit)
│   ├── EmiCalculator.tsx   ← Interactive EMI calculator
│   └── Reveal.tsx          ← Scroll animation wrapper
└── lib/
    └── data.ts             ← All content (services, projects, packages, reviews)
```

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1 — Push to GitHub

```bash
cd vaastu-builders
git init
git add .
git commit -m "Initial commit — Vaastu Builders website"
```

Create a new repo at github.com → then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/vaastu-builders.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to **vercel.com** → Sign up / Log in (use GitHub account)
2. Click **"Add New Project"**
3. Select your **vaastu-builders** GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! You get a live URL: `vaastu-builders.vercel.app`

---

## 🌐 Connect a Custom Domain (DNS Setup)

### Buy a Domain
- Recommended: **GoDaddy** or **Namecheap**
- Suggested domain: `vaastubuilders.in` or `vaastubuildersmysore.com`
- Cost: ₹800–1,200/year

### Add Domain to Vercel
1. In Vercel dashboard → Your project → **Settings → Domains**
2. Type your domain (e.g. `vaastubuilders.in`) → click **Add**
3. Vercel shows you **2 nameserver addresses** like:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

### Update Nameservers at Registrar
1. Log in to GoDaddy / Namecheap
2. Go to **DNS Settings** for your domain
3. Change nameservers to the Vercel ones above
4. Save — takes **10 min to 24 hours** to go live

**SSL/HTTPS is automatic** — Vercel handles it for free.

---

## ✏️ How to Update Content

All content is in **`lib/data.ts`** — no code knowledge needed to change text:

| What to change | Where |
|---|---|
| Services (name, description, features) | `SERVICES` array in `lib/data.ts` |
| Projects (name, location, sqft, floors) | `PROJECTS` array in `lib/data.ts` |
| Package prices & inclusions | `PACKAGES` array in `lib/data.ts` |
| Customer reviews | `REVIEWS` array in `lib/data.ts` |
| Gallery images | `GALLERY_IMAGES` array in `lib/data.ts` |
| Phone / Email / Address | `app/contact/page.tsx` |
| WhatsApp number | Search `wa.me/91` in codebase |
| RERA number | Search `RERA/KA` in codebase |

---

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 15 | Framework + routing + SSR/SSG |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| Google Fonts | — | Playfair Display + Outfit |
| Unsplash | — | AI / stock photography |
| Vercel | — | Hosting + CDN + SSL |

---

## 📞 Support

For any changes or additional features, contact your developer.
