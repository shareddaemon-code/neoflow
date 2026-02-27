# Creator-First Streaming App — Mobile MVP Low-Fidelity Wireframes

## Design Direction (Applied Across All Screens)
- **Mobile-first** single-column layouts.
- **Dark-mode default** with grayscale placeholders (`#111`, `#1B1B1B`, `#2A2A2A`, `#EAEAEA` labels in final UI handoff).
- **Poster-first cards** with generous spacing and rounded corners.
- **Bold headline typography**, minimal supporting text.
- **Low-clutter interaction model**: primary CTA + lightweight secondary actions.
- **Vertical, smooth-scrolling discovery flow**.

---

## 1) Onboarding Screen

### Purpose
Introduce value quickly and convert users to sign-up while allowing guest mode.

### Wireframe

```text
┌─────────────────────────────────────┐
│                                     │
│               [LOGO]                │
│                                     │
│      A new world for cinema lovers  │
│                                     │
│   • Discover new filmmakers         │
│   • Watch original creator series   │
│   • Follow rising cinema talent     │
│                                     │
│        [ Sign up ]                  │
│                                     │
│      [ Continue as guest ]          │
│                                     │
└─────────────────────────────────────┘
```

### UX Notes
- Keep copy short and center-aligned.
- Make **Sign up** the strongest CTA.
- Guest action remains visible but lower visual weight.

---

## 2) Home / Discovery Feed (Primary)

### Purpose
TikTok-style discovery with cinematic presentation and creator identity.

### Wireframe

```text
┌─────────────────────────────────────┐
│ For You                 [Search ⌕]  │
├─────────────────────────────────────┤
│ Trending stories                    │
│ ┌─────────────────────────────────┐ │
│ │        [Poster Thumbnail]       │ │
│ │                                 │ │
│ │ Title of Film                   │ │
│ │ by @creatorname                 │ │
│ │                     ♡  🔖  ↗     │ │
│ └─────────────────────────────────┘ │
│                                     │
│ New creators                        │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │Poster   │ │Poster   │ │Poster   │ │
│ └─────────┘ └─────────┘ └─────────┘ │
│                                     │
│ Editor’s picks                      │
│ ┌─────────────────────────────────┐ │
│ │        [Poster Thumbnail]       │ │
│ └─────────────────────────────────┘ │
│                                     │
│            ↑ Swipe up               │
└─────────────────────────────────────┘
```

### UX Notes
- Full-width hero cards for visual impact.
- Overlay metadata only: title + creator.
- Vertical swipe/scroll to next story for habit loop.

---

## 3) Film / Series Detail Page

### Purpose
Convert discovery to watch intent and creator follow.

### Wireframe

```text
┌─────────────────────────────────────┐
│         [Large Hero Banner]         │
│                                     │
│ Film / Series Title                 │
│ @creatorname   [Follow]             │
│                                     │
│ Short description text (2-3 lines)  │
│                                     │
│ [ Watch now ]   [ + Watchlist ]     │
│                                     │
│ Episodes (if series)                │
│ 1. Episode One            12:34     │
│ 2. Episode Two            10:02     │
│ 3. Episode Three          14:51     │
└─────────────────────────────────────┘
```

### UX Notes
- Hero area should dominate first fold.
- Primary action is **Watch now**.
- Episode rows should be tap-friendly and sparse.

---

## 4) Creator Profile

### Purpose
Establish creator identity and drive follow/session depth.

### Wireframe

```text
┌─────────────────────────────────────┐
│        [Creator Banner Image]       │
│          (Avatar overlaps)          │
│                                     │
│ Creator Name        [ Follow ]      │
│ 128K followers                      │
│ Bio line about creator style...     │
│                                     │
│ Featured series                     │
│ ┌─────────────────────────────────┐ │
│ │         [Wide Poster]           │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Filmography                         │
│ ┌─────────┐ ┌─────────┐             │
│ │Poster   │ │Poster   │             │
│ └─────────┘ └─────────┘             │
│ ┌─────────┐ ┌─────────┐             │
│ │Poster   │ │Poster   │             │
│ └─────────┘ └─────────┘             │
└─────────────────────────────────────┘
```

### UX Notes
- Banner + avatar stack gives “channel identity” quickly.
- Grid keeps scan behavior familiar (YouTube/Netflix hybrid).

---

## 5) Search / Explore

### Purpose
Support intentional discovery through themes, tags, and creators.

### Wireframe

```text
┌─────────────────────────────────────┐
│ [ Search films, creators, tags... ] │
│                                     │
│ Categories                          │
│ [Sci-fi] [Thriller] [Experimental]  │
│                                     │
│ Rising creators                     │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │Avatar   │ │Avatar   │ │Avatar   │ │
│ └─────────┘ └─────────┘ └─────────┘ │
│                                     │
│ Trending tags                       │
│ #mindbender  #oneshot  #neo-noir    │
│                                     │
│ Suggested picks                     │
│ ┌─────────────────────────────────┐ │
│ │       [Poster Result Card]      │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### UX Notes
- Keep discovery chips large for thumb taps.
- Limit top-level taxonomy to avoid cognitive overload.

---

## 6) Watch Screen (Player)

### Purpose
Immersive viewing with minimal but accessible controls.

### Wireframe

```text
┌─────────────────────────────────────┐
│                                     │
│        [ Fullscreen Video ]         │
│                                     │
│                                     │
│   (Tap to reveal controls overlay)  │
│                                     │
│─────────────────────────────────────│
│  ♡ Like   💬 Comment   + Follow      │
│                                     │
│  [ Next episode ]                   │
└─────────────────────────────────────┘
```

### UX Notes
- Controls hidden by default.
- Keep action row at thumb zone near bottom.
- “Next episode” appears contextually near completion.

---

## 7) Watchlist / Library

### Purpose
Retain users via saved intent and progress recovery.

### Wireframe

```text
┌─────────────────────────────────────┐
│ Library                             │
│                                     │
│ Continue watching                   │
│ ┌─────────────────────────────────┐ │
│ │ Poster + progress bar           │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Saved films                         │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │Poster   │ │Poster   │ │Poster   │ │
│ └─────────┘ └─────────┘ └─────────┘ │
│                                     │
│ Following creators                  │
│ @creatorA   @creatorB   @creatorC   │
└─────────────────────────────────────┘
```

### UX Notes
- Lead with “Continue watching” to reduce friction.
- Use compact sections to keep this page fast-scannable.

---

## 8) Creator Upload (Simple MVP)

### Purpose
Allow creators to publish quickly with minimal production friction.

### Wireframe

```text
┌─────────────────────────────────────┐
│ Upload new film                     │
│                                     │
│ [ Select video file ]               │
│                                     │
│ Title                               │
│ [ Enter film title ]                │
│                                     │
│ Description                         │
│ [ Short description... ]            │
│                                     │
│ Thumbnail                           │
│ [ Upload thumbnail ]                │
│                                     │
│            [ Publish ]              │
└─────────────────────────────────────┘
```

### UX Notes
- Single-screen upload for MVP speed.
- Keep fields essential only.
- Post-publish success state should route to new content page.

---

## End-to-End UX Flow (MVP)

```text
Onboarding
   ↓
Home Feed (Discover)
   ↓ tap title
Film Detail
   ├─ Watch now → Watch Screen → Next episode / Back
   ├─ Save → Watchlist
   └─ Follow creator → Creator Profile

Search/Explore → Detail/Creator
Watchlist → Resume Watch
Creator Upload → Publish → Appears in feed/profile
```

## Component Priorities (Build Order)
1. Navigation shell (bottom tabs: Home, Explore, Library, Profile/Upload)
2. Reusable poster card (large + compact variants)
3. Creator mini-profile row
4. Action icon cluster (like/save/share)
5. Episode list row
6. Upload form

## MVP Guardrails
- Keep text density low and visuals dominant.
- One clear primary action per screen.
- Reuse card components for consistency and speed.
- Avoid dashboard-style complexity until post-MVP.
