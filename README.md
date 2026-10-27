<div align="center">

# 🛒 বাজার দর | BazarDor

**A bilingual (বাংলা) market-price tracker built with the Next.js App Router**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-1.7-FF6B00)](https://better-auth.com/)

</div>

---

**BazarDor** (বাজার দর — "market price") helps shoppers in Bangladesh track daily product prices across local markets. Browse by category, compare today's price against yesterday's, see which prices went **up ▲** or **down ▼**, and check the minimum/maximum price at each market — all in a clean, mobile-first interface.

## ✨ Features

| | Feature | Description |
|---|---|---|
| 📦 | **Product catalog** | Browse the full product list with today's price, yesterday's price, and the percentage change. |
| 📈 | **Price movement highlights** | Automatic "আজ দাম বেড়েছে" (price up) and "আজ দাম কমেছে" (price down) sections, sorted by the biggest change. |
| 🗂️ | **Category navigation** | Filter the catalog by category through the navbar and dropdown menu. |
| 🔍 | **Product details** | Per-product page with a market-wise table and computed min/max prices. |
| 🔐 | **Authentication** | Sign up / sign in with email + password, Google, or GitHub via Better Auth. |
| 👤 | **Profile management** | Signed-in users can view and update their profile. |
| 🌐 | **Bengali-first UI** | Hind Siliguri font, `bn-BD` number formatting, and localized copy throughout. |
| 📱 | **Responsive layout** | Works across desktop, tablet, and mobile screens. |
| ⚡ | **Streaming & skeletons** | `loading.tsx` placeholder UI while server components fetch data. |
| 🚫 | **Custom 404** | Friendly Bengali not-found page for missing products/categories. |

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router, React Server Components, Turbopack) |
| UI | **React 19** + **HeroUI** + **daisyUI** |
| Styling | **Tailwind CSS 4** |
| Language | **TypeScript 5** (strict type checking across the app) |
| Auth | **Better Auth** with email/password, Google & GitHub OAuth |
| Database | **MongoDB** (via `@better-auth/mongo-adapter`) |
| Data | REST API (`api.api-store.workers.dev`) with ISR revalidation |
| Extras | `react-hot-toast` notifications, React Compiler enabled |
| Hosting | **Vercel** |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** (or yarn / pnpm / bun)
- **Git**
- A **MongoDB** database (Atlas or local)
- OAuth credentials for Google and/or GitHub (optional, for social login)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sakibhasan077/bazar-dor.git
cd bazar-dor

# 2. Install dependencies
npm install

# 3. Configure environment variables (see the table below)
#    Create a file named .env.local in the project root

# 4. Start the development server
npm run dev
```

The app is now running at **http://localhost:3000**.

### Environment Variables

Create a `.env.local` file in the project root:

| Variable | Required | Description |
|---|---|---|
| `BETTER_AUTH_MONGODB_URI` | ✅ | MongoDB connection string. The app throws at startup if missing. |
| `BETTER_AUTH_URL` | ✅ | Base URL of the app, e.g. `http://localhost:3000`. |
| `GOOGLE_CLIENT_ID` | ⚪ | Google OAuth client ID (for Google sign-in). |
| `GOOGLE_CLIENT_SECRET` | ⚪ | Google OAuth client secret. |
| `GITHUB_CLIENT_ID` | ⚪ | GitHub OAuth client ID (for GitHub sign-in). |
| `GITHUB_CLIENT_SECRET` | ⚪ | GitHub OAuth client secret. |

> ⚠️ `.env*` files are git-ignored — never commit your secrets.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server with Turbopack. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

## 📁 Project Structure

```
bazar-dor/
├── src/
│   ├── app/                       # App Router routes
│   │   ├── page.tsx               # Home — banner, price up/down, all products
│   │   ├── category/[productId]/  # Products filtered by category
│   │   ├── productDetails/[productId]/  # Single product + market prices
│   │   ├── (auth)/                # sign-in, sign-up, profile pages
│   │   ├── api/auth/[...all]/     # Better Auth handler
│   │   ├── layout.tsx             # Root layout (fonts, header, footer, toaster)
│   │   ├── loading.tsx            # Route-level loading skeleton
│   │   └── not-found.tsx          # Custom 404 page
│   ├── components/
│   │   ├── header/                # Navbar, dropdown, marquee, auth buttons
│   │   ├── banner/                # Hero banner
│   │   ├── products/              # Product grid, price-up / price-down sections
│   │   ├── categoryProduct/       # Category listing
│   │   ├── cart/                  # Product card
│   │   └── footer/                # Footer
│   ├── lib/                       # Better Auth server & client setup
│   └── type.ts                    # Shared TypeScript interfaces
├── public/                        # Static assets
└── package.json
```

## 🌐 API Endpoints

Product data is fetched server-side from a public REST API:

| Endpoint | Used by |
|---|---|
| `GET /api/bazardor/products` | Home page (`revalidate: 80`) |
| `GET /api/bazardor/products?category={slug}` | Category page (`revalidate: 500`) |
| `GET /api/bazardor/products/{id}` | Product details page |
| `GET /api/bazardor/categories` | Navbar & dropdown menus |

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/amazing-feature`
3. Commit your changes — `git commit -m "Add amazing feature"`
4. Push to the branch — `git push origin feature/amazing-feature`
5. Open a Pull Request

Please make sure `npm run lint` and `npm run build` pass before submitting.

## 📬 Contact

**Sakib Hasan** — [@sakibhasan077](https://github.com/sakibhasan077)

Project Link: [https://github.com/sakibhasan077/bazar-dor](https://github.com/sakibhasan077/bazar-dor)

---

<div align="center">

⭐ If you find this project useful, consider giving it a star — it helps a lot!

</div>
