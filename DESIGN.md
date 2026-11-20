---
name: BDN Workation 001 — Kinetic Archipelago
description: Scroll-choreographed neo-grotesque & daylight-to-obsidian editorial design system for Barcelona Digital Nomads — Agaete, Gran Canaria 2027.
colors:
  daylight: "#f8f8f6"
  daylight-card: "#ffffff"
  daylight-subtle: "#ededeb"
  obsidian: "#0d1012"
  obsidian-elevated: "#161a1e"
  ink: "#111315"
  ink-muted: "#4b5259"
  mist: "#a8b0b8"
  coral: "#ff5a26"
  coral-hover: "#e84b18"
  slate-thumb: "#3a4149"
typography:
  display:
    fontFamily: "Onest Variable, Onest, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.9rem, 7.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Onest Variable, Onest, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.35rem, 5vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Onest Variable, Onest, system-ui, -apple-system, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Onest Variable, Onest, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.06em"
  micro:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  md: "0.75rem"
  xl: "1rem"
  2xl: "1.5rem"
  curtain: "2.75rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "5rem"
  2xl: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.obsidian}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.coral-hover}"
    textColor: "{colors.obsidian}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.daylight}"
    borderColor: "rgba(255, 255, 255, 0.25)"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  nav-pill:
    backgroundColor: "rgba(13, 16, 18, 0.92)"
    textColor: "{colors.daylight}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
---

# Design System: BDN Workation 001 — Kinetic Archipelago

## Overview

**Creative Direction: "Kinetic Archipelago"**

BDN Workation 001 combines tactile, scroll-choreographed neo-grotesque web typography with alternating Warm Daylight (`#f8f8f6`) editorial canvases and Deep Obsidian (`#0d1012` / `#161a1e`) interactive darkroom bands.

Scroll physics are powered by Locomotive Scroll v5 (`Lenis` smooth inertia + native `position: sticky`) alongside mobile-friendly `requestAnimationFrame` viewport progress tracking inside interactive sections like `#venue`.

**Key Characteristics:**
- Tightly tracked bold geometric neo-grotesque (`Onest Variable`) paired with structured `JetBrains Mono` coordinates, durations, room specs, and controls.
- Full-bleed viewport-height parallax cover with a bottom-right frosted glass metadata card (`rgba(13, 16, 18, 0.78)`).
- Responsive `@sveltejs/enhanced-img` pipeline (`?enhanced&w=...` directives + explicit `sizes`) generating `.avif`, `.webp`, and `.jpg` variants at exact display widths during Vite builds.
- Four signature kinetic moments: multi-speed satellite photo constellation (`#idea`), pinned horizontal chapter deck (`#experience`), scroll-reactive interactive Space Explorer (`#venue` on desktop + mobile touch swipe), and a rounded-top obsidian details curtain (`#details`).

## Colors

### Primary
- **Signal Coral** (`#ff5a26` / hover `#e84b18`): Reserved for primary CTA pills, hero badge `01`, active tabs/frames, scroll progress bar, and final statement punctuation. Always paired with Obsidian (`#0d1012`) ink (`~5.96:1` WCAG AA contrast; never white text on coral).

### Daylight Surface Roles
- **Warm Daylight** (`#f8f8f6`): Primary light page canvas across `#idea` and `#destination`.
- **Daylight Subtle** (`#ededeb`) & **Daylight Card** (`#ffffff`): Step surfaces for `#experience` cards, neighborhood distance tiles, and venue summary cards.
- **Charcoal Ink** (`#111315`) & **Muted Charcoal** (`#4b5259`): Body and secondary copy on light surfaces.

### Obsidian Surface Roles
- **Obsidian Charcoal** (`#0d1012`) & **Obsidian Elevated** (`#161a1e`): Hero ground, floating header capsule, dark chapter card, interactive `#venue` darkroom section, rising `#details` curtain, and `#interest` close.
- **Mist** (`#a8b0b8`) & **Warm Daylight** (`#f8f8f6`): Secondary labels and high-contrast headlines on dark backgrounds.
- **Hairline Borders**: `rgba(17, 19, 21, 0.12)` (`line-dark`) on daylight; `rgba(248, 248, 246, 0.14)` (`line-light`) on obsidian.

## Typography

Two self-hosted local font families bundled via `@fontsource`:
1. **`Onest Variable`** (`src/routes/+layout.svelte`): Headlines (`700`, `-0.04em` tight tracking) and clean UI body copy (`400`–`600`).
2. **`JetBrains Mono`** (`400`, `500`): All tabular dates, euro figures, room stats, route fares, captions, buttons, and status microcopy.

| Role | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| Display (`h1`) | `clamp(2.9rem, 7.2vw, 6rem)` | `700` | `0.94` | `-0.04em` |
| Headline (`h2`) | `clamp(2.35rem, 5vw, 4.25rem)` | `700` | `0.98` | `-0.04em` |
| Title (`h3`) | `2.25rem` | `700` | `1.05` | `-0.03em` |
| Body | `1rem` | `400`–`500` | `1.55` | `0` |
| Label (`mono`) | `0.75rem` | `500` | `1.3` | `0.06em` |
| Micro (`mono`) | `0.6875rem` | `500` | `1.3` | `0.06em` |

## Spacing

- Page container max width: `1320px`, horizontal gutter `16px` (`px-4`), `24px` (`sm:px-6`), `40px` (`lg:px-10`).
- Section rhythm: `py-20` (`80px`) mobile scaling to `py-28` (`112px`) and `lg:py-36` (`144px`).
- All touch targets enforce `min-h-[44px]` or `min-h-[48px]`.

## Layout & Borders

- **Radius Language**: Rounded photography plates (`16px` / `rounded-2xl`), experience deck & explorer frames (`24px` / `rounded-3xl`), rising obsidian section tops (`28px` mobile / `44px` desktop), and full capsule pill controls (`9999px`).
- **Elevation**: Border-defined separation (`1px solid line-dark` / `1px solid rgba(255,255,255,0.15)`) and translucent frosted glass (`backdrop-blur-md`) instead of heavy shadows.
- **No Eyebrows above H1/H2 & No Emojis**: Section headers start directly on bold architectural display lines; Lucide vector strokes only.

## Motion & Interaction

- **Engine**: `locomotive-scroll@5.1.1` initialized inside Svelte `$effect` (`lerp: 0.09`), skipped when `prefers-reduced-motion: reduce` matches, paired with `requestAnimationFrame` viewport progress CSS custom properties (`--venue-p`) for smooth desktop & mobile touch parallax.
- **Scroll-Progress Transforms**:
  - Hero parallax (`data-scroll-css-progress` on `.loco-hero-media`).
  - Constellation galaxy (`data-scroll-speed` `-0.09` to `0.11`): 4 flanking Puerto de las Nieves / Agaete frames on desktop, clean 2×2 grid on `<lg`.
  - Horizontal deck (`data-scroll-css-progress` across `lg:h-[185vh]`): 3 dual-photo cards synchronized with `01`/`02`/`03` chapter buttons.
  - Interactive Space Explorer (`#venue`): continuous `--venue-p` progress hairline (`scaleX`), gentle stage parallax (`scale` + `translateY`), touch swipe switching on mobile, tab/arrow navigation, and interactive detail thumbnail promotion.
- **Reduced Motion**: `@media (prefers-reduced-motion: reduce)` forces `transform: none !important`, `animation: none !important`, and `will-change: auto` across all scroll classes.

## Component Inventory

1. **`SiteHeader.svelte`**: Fixed floating dark pill capsule (`bdn-logo.png` + `01` badge + `The Idea`, `Experience`, `The Venue`, `Destination`, `Details` + active-section dot + `Express Interest` coral pill + mobile drawer).
2. **`HeroCover.svelte`**: Full-height `100svh` parallax Agaete photograph and frosted metadata card.
3. **`IdeaSection.svelte`**: Centered manifesto flanked by 4 clean venue/Agaete frames + full-building coliving overview linking to `#venue`.
4. **`ExperienceChapters.svelte`**: Sticky `lg:h-[185vh]` horizontal 3-card deck (`01 / WORK`, dark `02 / ISLAND`, white `03 / EVENINGS`) with dual-photo visual collages and real coworker/island dossier specs.
5. **`VenueRoomsSection.svelte`**: Interactive darkroom Space Explorer (`01 Shared Twin €599`, `02 Private Double €749`, `03 Rooftop & Commons`, `04 Seafront Coworking`) with scroll-reactive parallax/bar, mobile swipe support, thumbnail switcher, side-by-side tier comparator, 4 capacity counters, and 10 included services.
6. **`DestinationGallery.svelte`**: Interactive 4-plate Puerto de las Nieves / Agaete gallery (`Las Salinas Pools`, `Fishing Port`, `Agaete Valley`, `Atlantic Sunset`) + 6-tile walkable & island distance grid.
7. **`DetailsLedger.svelte`**: Sticky rounded-top obsidian curtain (`#details`) with `PROVISIONAL_DETAILS` hairline ledger plus 4-card `"Getting to Puerto de las Nieves (Agaete)"` airport (LPA) & ferry route guide.
8. **`FinalCta.svelte`**: `#interest` conversion close (`"Good people. New places. Different perspectives."`), primary pill CTA, footer lockup, and `IntersectionObserver`-guarded mobile bottom bar.

## Patterns & Constraints

- Strictly non-binding expression-of-interest positioning: dates (`24–30 January 2027`), ~40 participant headcount, and `€599` / `€749` tiers remain visibly provisional.
- Strict venue anonymity: zone/town (`Puerto de las Nieves · Agaete`) and arrival logistics are shown; property name, operator branding, and street address are strictly excluded from all code, copy, and imagery.
- Every conversion CTA links externally (`target="_blank" rel="noopener noreferrer"`) to `https://bdnforms.lovable.app/workation-form`.
