# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

SvelteKit + Svelte 5 + Tailwind CSS v4 + Locomotive Scroll v5 (`locomotive-scroll`, Lenis-powered parallax & CSS scroll progress) + `@lucide/svelte` + `@sveltejs/enhanced-img` + `@sveltejs/adapter-vercel` (package manager: pnpm / pnpx only — never npm or npx; target: Vercel deployment; no database, auth, or custom backend)

## Users

Barcelona Digital Nomads (BDN) community members—remote workers, founders, creatives, and digital nomads—considering a 7-day shared workation in Gran Canaria to work remotely alongside familiar BDN faces, meet new people, and explore the island together.

## Product Purpose

A modern, kinetic, scroll-choreographed single-page campaign introducing the first-ever BDN Workation (`BDN WORKATION 001` in Gran Canaria, 24–30 January 2027, 7 days, ~40 participants). It communicates the concept, community atmosphere, experience chapters, destination character, and provisional trip details while driving visitors to submit the existing interest survey (`https://bdnforms.lovable.app/workation-form`).

## Positioning

A community-rooted workation organized by Barcelona Digital Nomads—not a commercial coliving package or open booking platform—combining focused remote work with island exploration and shared evenings alongside an existing Barcelona community.

## Operating Context

- Expression-of-interest campaign only; bookings and deposits are NOT open yet.
- Primary conversion: `https://bdnforms.lovable.app/workation-form` (`EXPRESS YOUR INTEREST` in Hero, `JOIN THE INTEREST LIST` in Final CTA, plus floating pill nav / mobile CTA).
- Six-section information architecture:
  - Section 01 — Hero: `"Work somewhere else. Connect differently."` + BDN Workation 001, Gran Canaria, 24–30 January 2027, Seven days, ~40 people, CTA `EXPRESS YOUR INTEREST`.
  - Section 02 — The Idea: personal, welcoming, confident intro explaining why BDN is organizing this trip + explicit scouting placeholder for unconfirmed villa details.
  - Section 03 — The Experience: three chapters (`Work together.`, `Explore together.`, `Make memories together.`) presented as a dynamic horizontal scroll-progress deck & interactive showcase rather than repetitive SaaS cards.
  - Section 04 — The Destination: Gran Canaria through architecture, nature, landscape, and local atmosphere using verified photography.
  - Section 05 — The Details: provisional dates (24–30 January 2027), duration (7 days), room options & indicative prices (`Shared room: €599`, `Private room: €749`), clearly marked provisional/subject to confirmation and not accepting bookings/deposits.
  - Section 06 — Final CTA: `"Good people. New places. Different perspectives."` + CTA `JOIN THE INTEREST LIST` linking to `https://bdnforms.lovable.app/workation-form`.

## Capabilities and Constraints

- Language: English.
- Content & Asset Integrity: Never invent villa photographs, confirmed accommodation features, exact property location, unconfirmed activities, booking availability, or final prices/conditions. Use clearly identified placeholders where property details are unavailable, and note that 40 participants is the public working capacity subject to organizer confirmation.
- Respect `prefers-reduced-motion: reduce`, keyboard navigation, WCAG AA contrast, and zero horizontal overflow on mobile (`390px`).

## Brand Commitments

- Visual identity (v2 redesign chosen via `/impeccable`): **Kinetic Archipelago** — inspired by Wolverine Worldwide (Locomotive Scroll v5 multi-speed photo galaxy & sticky rounded curtain), Vita Travel (high-contrast dark obsidian & crisp `1px` architectural hairlines), and Apocalypse Coffee / Epicurrence (pinned horizontal scroll deck & oversized tight-tracked display typography).
- Palette: Studio Daylight (`#F8F8F6`), Volcanic Obsidian (`#0D1012` / `#161A1E`), Coral Signal (`#FF5A26`), Crisp Ink (`#111315`), Mist Text (`#A8B0B8`), Subtle Hairlines (`rgba(255,255,255,0.14)` / `rgba(17,19,21,0.12)`).
- Typography: Neo-Grotesk Variable Display & Body (`Onest`, tight `-0.04em` display tracking) + Monospace Metadata (`JetBrains Mono`, tabular numerals).

## Evidence on Hand

- Official BDN community post (Gran Canaria, 1-week villa workation, 40 digital nomads, coworking + evening memories).
- Official interest survey at `https://bdnforms.lovable.app/workation-form` (Agaete Gran Canaria photo, 24–30 January 2027, €599 shared twin / €749 private indicative tiers, future €100 refundable deposit concept, exploratory activity options).
- Verified Gran Canaria photography in `src/lib/assets/photos/` (Agaete, Roque Nublo, Tamadaba cliffs, Caldera de Tejeda sunset, Vegueta basalt architecture, Las Canteras horizon).

## Product Principles

- Pair genuine contemporary motion craft (Locomotive Scroll v5 parallax, CSS `--progress` scroll choreography, sticky rounded curtain reveals) with crisp readability and conversion clarity.
- Respect content integrity strictly: clearly distinguish provisional survey details from confirmed facts and label placeholder media where villa specifics do not exist yet.
- Maintain effortless mobile-first usability even when desktop showcases advanced scroll choreography.
