# NeoFlow MVP

Production-ready mobile-first MVP built from the provided wireframes.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- ShadCN-style reusable UI components
- Supabase (Auth/Postgres/Storage wiring)

## Run locally
1. Install dependencies
   ```bash
   npm install
   ```
2. Configure env
   ```bash
   cp .env.example .env.local
   ```
3. Start app
   ```bash
   npm run dev
   ```

## Supabase setup (MVP)
Create buckets:
- `films`
- `thumbnails`

Create `films` table with columns:
- `id uuid primary key default gen_random_uuid()`
- `title text not null`
- `description text not null`
- `film_path text not null`
- `thumbnail_path text not null`
- `created_at timestamptz default now()`

All MVP screens are implemented:
- `/` onboarding
- `/home` discovery feed
- `/film/[id]` film detail
- `/creator/[id]` creator profile
- `/explore` search/explore
- `/watch/[id]` watch player
- `/library` watchlist/library
- `/upload` creator upload
