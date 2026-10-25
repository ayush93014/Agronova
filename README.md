# Agronova

**Smarter Agriculture, Better Decisions** — an agricultural technology prototype I developed for Smart India Hackathon 2025.

**Problem statement:** SIH25075 — *Gamified Platform to Promote Sustainable Farming Practices* (Government of Kerala · Software · Agriculture, FoodTech & Rural Development).

**Idea:** growing plants and vegetables becomes a level-based game where achievements earn points. Planned: buying seeds and supplies in the same place through a government-connected marketplace. Aimed especially at Gen Z, who enjoy games and achievements.

> **Status: work in progress.** Agronova is an evolving prototype. Several features use sample data or are awaiting backend integration (see [Current state](#current-state)).

## Tech stack

Vite · React 18 · TypeScript · Tailwind CSS · shadcn/ui (Radix) · React Router · React Hook Form + Zod

## Getting started

Requires Node.js 18+ and npm.

```sh
npm ci            # install exactly what package-lock.json specifies
npm run dev       # development server on http://localhost:8080
npm run lint      # ESLint
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

Copy `.env.example` to `.env` if you need to configure a backend. **Never commit `.env`.** Any variable prefixed with `VITE_` is bundled into public JavaScript, so it must never be a secret.

## Project structure

```
src/
  components/
    auth/       Shared login/register UI (AuthLayout, FormField)
    effects/    Decorative animated backgrounds and particles
    home/       Homepage sections (hero, project sections, dashboard and mission previews)
    layout/     Navigation
    ui/         shadcn/ui primitives
  content/      Editable project facts (SIH problem statement, feature status)
  hooks/        Shared React hooks
  lib/          Utilities and Zod validation schemas
  pages/        Route-level pages: Index, Login, Register, SoilSetup, NotFound
  services/     Auth service (demo mode until a backend is connected)
  types/        Shared TypeScript types
public/images/  Logo
```

Routes: `/` (home), `/login`, `/register`, `/soil-setup`, and a 404 fallback.

## Current state

| Area | State |
| --- | --- |
| Homepage, navigation, responsive layout | Working |
| Login and registration forms (validation, loading and error states, cross-links) | Working |
| Account creation / authentication | **Not connected.** Runs in demo mode: input is validated in the browser; nothing is stored or sent. |
| Soil setup | UI works; data is **not saved** |
| Farm dashboard and mission board | UI works with **hardcoded sample data** |
| Private routes, logout | Not applicable yet (no real sessions) |

### Connecting authentication later

`src/services/auth.ts` is the single place to implement real login and registration. It stays in demo mode while `VITE_API_BASE_URL` is empty. Hash passwords on the server, never log or persist passwords or Aadhar numbers in the browser, and reconsider whether the prototype should collect Aadhar numbers at all.

### Project details

The SIH problem statement and feature status shown on the homepage live in `src/content/project.ts`. Keep the "implemented vs planned" list accurate.
