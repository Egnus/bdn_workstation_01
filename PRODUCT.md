# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

SvelteKit + Svelte 5 + Tailwind CSS v4 + Locomotive Scroll v5 (`locomotive-scroll`, Lenis-powered parallax & CSS scroll progress) + `@lucide/svelte` + `@sveltejs/enhanced-img` + `@sveltejs/adapter-netlify` (package manager: pnpm / pnpx only — never npm or npx; no database, auth, or custom backend)

## Users

Barcelona Digital Nomads (BDN) community members—remote workers, founders, creatives, and digital nomads—considering a 7-day shared workation in Puerto de las Nieves (Agaete, Gran Canaria) to work remotely alongside familiar BDN faces, meet new people, and explore the island together.

## Product Purpose

A modern, kinetic, scroll-choreographed single-page campaign introducing the first-ever BDN Workation (`BDN WORKATION 001` in Puerto de las Nieves, Agaete, Gran Canaria, 24–30 January 2027, 7 days, ~40 participants). It communicates the concept, community atmosphere, interactive venue & room setups, coworking and island rhythms, walkable destination character, airport/ferry routes, and provisional trip details while driving visitors to submit the existing interest survey (`https://bdnforms.lovable.app/workation-form`).

## Positioning

A community-rooted workation organized by Barcelona Digital Nomads—not an anonymous commercial tour—pairing focused remote work inside a dedicated 40-seat seafront coworking hub with full-building coastal coliving and shared island evenings.

## Operating Context

- Expression-of-interest campaign only; bookings and deposits are NOT open yet.
- Zone-level privacy constraint: Puerto de las Nieves / Agaete (Northwest Gran Canaria) and airport/ferry routes to town are published, while the exact building name, operator brand, and street address remain strictly omitted until participant confirmation.
- Primary conversion: `https://bdnforms.lovable.app/workation-form` (`EXPRESS YOUR INTEREST` in Hero, `JOIN THE INTEREST LIST` in `#interest` Final CTA, plus floating pill nav / mobile CTA).
- Seven-section information architecture:
  - Section 01 — Hero (`#top`): `"Work somewhere else. Connect differently."` + BDN Workation 001, Puerto de las Nieves · Agaete (GC), 24–30 January 2027, Seven days, ~40 people, CTA `EXPRESS YOUR INTEREST`.
  - Section 02 — The Idea (`#idea`): personal welcome manifesto flanked by 4 clean venue/Agaete constellation frames (`Las Salinas` natural pools, cliff-view rooftop loungers, long-table communal dinners, coastal sunset hikes) + full-building venue summary linking to `#venue`.
  - Section 03 — The Experience (`#experience`): three chapters (`Work together.`, `Explore together.`, `Make memories together.`) presented as a dynamic horizontal scroll-progress deck showcasing the 40-seat seafront coworking hub + workshop room, Las Salinas pools & Agaete Valley coffee plantations, and rooftop sunset sessions & communal dinners.
  - Section 04 — The Venue & Rooms (`#venue`): interactive, scroll-reactive darkroom showcase featuring 4 switchable modes (`Shared Twin · €599`, `Private Double · €749`, `Rooftop & Commons`, `Seafront Coworking`) with swipe/tap support on mobile, thumbnail switcher, side-by-side room comparator, 31-room / 31-bathroom / 31-desk / 40-seat capacity ledger, and all 10 included services.
  - Section 05 — The Destination (`#destination`): Puerto de las Nieves (Agaete) editorial gallery (Las Salinas natural pools & Tamadaba cliffs, traditional port architecture, cliffside mornings & Agaete Valley, Atlantic sunset) plus walkable & island distances (`2 min walk` pools to `30 min drive` Las Canteras surf).
  - Section 06 — The Details (`#details`): sticky rounded obsidian curtain listing provisional dates (`24–30 January 2027`), duration (`7 days / 6 nights`), destination & full-building 31-room + 40-seat coworking setup, indicative room pricing (`Shared twin: €599`, `Private double: €749`), clearly marked non-binding/survey-first, plus a 4-route transport guide from Gran Canaria Airport (LPA) and the Tenerife ferry pier to Puerto de las Nieves.
  - Section 07 — Final CTA (`#interest`): `"Good people. New places. Different perspectives."` + CTA `JOIN THE INTEREST LIST` linking to `https://bdnforms.lovable.app/workation-form`.

## Capabilities and Constraints

- Language: English.
- Content & Asset Integrity: Use only verified, brand-clean venue and island photography stored under `src/lib/assets/photos/venue/` with anonymized `kebab-case` filenames and optimized at build time via `@sveltejs/enhanced-img` (`<enhanced:img>` + `?enhanced&w=...` directives). Never display visible third-party property brands inside photos, alt text, or copy.
- Respect `prefers-reduced-motion: reduce`, keyboard navigation, WCAG AA contrast, and zero horizontal overflow on mobile (`390px`).

## Brand Commitments

- Visual identity: **Kinetic Archipelago** — inspired by Wolverine Worldwide (Locomotive Scroll v5 multi-speed photo galaxy & sticky rounded curtain), Vita Travel (high-contrast dark obsidian & crisp `1px` architectural hairlines), and Apocalypse Coffee / Epicurrence (pinned horizontal scroll deck & oversized tight-tracked display typography).
- Palette: Studio Daylight (`#F8F8F6`), Volcanic Obsidian (`#0D1012` / `#161A1E`), Coral Signal (`#FF5A26`), Crisp Ink (`#111315`), Mist Text (`#A8B0B8`), Subtle Hairlines (`rgba(255,255,255,0.14)` / `rgba(17,19,21,0.12)`).
- Typography: Neo-Grotesk Variable Display & Body (`Onest`, tight `-0.04em` display tracking) + Monospace Metadata (`JetBrains Mono`, tabular numerals).

## Evidence on Hand

- Official BDN community post & survey at `https://bdnforms.lovable.app/workation-form` (24–30 January 2027, €599 shared twin / €749 private double indicative tiers, future €100 refundable deposit concept).
- Verified Puerto de las Nieves / Agaete retreat dossier specifications (31 en-suite bedrooms with personal desks, rooftop chill-out & BBQ, dual-oven kitchen, 40-seat seafront coworking with meeting & podcast rooms, 10 included essentials, island activity menu, and LPA/ferry transfer routes).
- Audited, brand-clean venue & island photography in `src/lib/assets/photos/venue/` and hero vista in `src/lib/assets/photos/agaete-gran-canaria.jpg`.

## Product Principles

- Pair genuine contemporary motion craft (Locomotive Scroll v5 parallax, CSS `--progress` scroll choreography, touch-reactive space switching, sticky rounded curtain reveals) with crisp readability and conversion clarity.
- Maintain strict zone-level venue anonymity (town/area and logistics published; exact building identity and street address withheld until confirmed) while remaining transparent about provisional interest-survey pricing.
- Ensure every interactive showcase and scroll effect feels fluid and purposeful on both desktop and mobile viewports.
