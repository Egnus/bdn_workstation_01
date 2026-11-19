---
name: BDN Workation 001
description: Contemporary Editorial & Boutique Travel design system for Barcelona Digital Nomads — Gran Canaria 2027.
colors:
  paper: "#f3f0e8"
  paper-elevated: "#f8f6ef"
  paper-inset: "#eae5da"
  charcoal: "#20231f"
  charcoal-muted: "#4b5048"
  volcanic: "#75806b"
  volcanic-deep: "#464e40"
  clay: "#d68a50"
  clay-hover: "#c5783d"
  sand: "#c6bba8"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.85rem, 6.3vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Instrument Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 4.8vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Instrument Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope Variable, Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.clay-hover}"
    textColor: "{colors.charcoal}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
---

# Design System: BDN Workation 001

## Overview

**Creative North Star: "The Sunlit Travel Prospectus"**

BDN Workation 001 translates independent travel magazine aesthetics—generous editorial whitespace, crisp hairline divisions, high-contrast display serif typography, and unhurried documentary photography—into a fast, conversion-focused single-page experience for Barcelona Digital Nomads.

Rather than dressing an unconfirmed community workation in SaaS feature cards or hospitality clichés, the system grounds every band in tactile paper and volcanic mineral hues while reserving saturated warmth exclusively for primary survey calls-to-action.

**Key Characteristics:**
- Tactile Warm Paper canvas paired with sharp `1px` Sand rules and zero drop shadows.
- Three distinct, self-hosted typographic voices (`Instrument Serif`, `Manrope`, `IBM Plex Mono`) establishing all hierarchy without decorative badges or gradient flourishes.
- Asymmetric 12-column editorial spreads that collapse cleanly to single-column mobile flow.

## Colors

The palette is drawn from Canarian volcanic stone, limewashed villages, dry coastal sand, and warm Atlantic dusk.

### Primary
- **Solar Clay** (`#d68a50` / hover `#c5783d`): Reserved strictly for primary expression-of-interest CTAs and key editorial punctuation on dark colophon closes. Always paired with Charcoal (`#20231f`) text to guarantee WCAG AA contrast.

### Secondary
- **Volcanic Green** (`#75806b` / deep `#464e40`): Used sparingly for chapter numerals, provisional notices, and natural editorial sublabels.

### Neutral
- **Warm Paper** (`#f3f0e8`): Primary page ground across hero folio, idea, experience, and details bands.
- **Warm Paper Elevated** (`#f8f6ef`) & **Warm Paper Inset** (`#eae5da`): Tonal step-surfaces for scouting placeholders, destination bands, and structured coworking frames.
- **Charcoal** (`#20231f`) & **Charcoal Muted** (`#4b5048`): Primary ink, deep closing colophon surface, and high-contrast secondary prose.
- **Sand** (`#c6bba8`): Structural `1px` hairline borders, ledger dividers, and subtle surface rules.

**The High-Contrast Clay Rule.** Never place white or cream text on Solar Clay (`#d68a50`); pair Solar Clay buttons exclusively with Charcoal (`#20231f`) ink so contrast exceeds 5.5:1.

## Typography

**Display Font:** Instrument Serif (fallback: Georgia, serif)
**Body Font:** Manrope Variable (fallback: system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono (fallback: ui-monospace, monospace)

**Character:** Editorial display warmth anchored by crisp humanist body clarity and utilitarian monospace trip metadata.

### Hierarchy
- **Display** (400, `clamp(2.85rem, 6.3vw, 5.4rem)`, `0.96` line-height, `-0.025em` tracking): Page hero statement and closing colophon quote.
- **Headline** (400, `clamp(2.25rem, 4.8vw, 4rem)`, `1.02` line-height): Major section headings (`The Idea`, `The Experience`, `The Destination`, `The Details`).
- **Title** (400, `clamp(2rem, 3.4vw, 3rem)`, `1.04` line-height): Chapter titles and ledger value callouts (`€599`, `€749`) set with `tabular-nums`.
- **Body** (400, `1rem`–`1.125rem`, `1.65`–`1.75` line-height, `46ch`–`62ch` measure): Narrative prose.
- **Label** (500, `0.75rem`, `0.08em` tracking, uppercase): Tabular metadata keys, dates, and action labels.

**The No-Eyebrow Rule.** Headings open their section directly; metadata and chapter indices sit below or beside headlines, never stacked above as decorative eyebrow kickers.

## Layout

A centered `1360px` container (`16px` mobile / `32px` tablet / `48px` desktop outer gutters) arranged on a 12-column desktop CSS Grid (`24px`–`48px` gaps). Sections alternate full-bleed cover imagery, asymmetric 5/7 and 4/8 editorial spreads, and `1px` Sand-ruled ledgers with `64px`–`96px` vertical section breathing room.

## Elevation & Depth

This system uses zero drop shadows and zero blur-glass cards. Hierarchy and separation come strictly from tonal paper steps (`#f3f0e8` -> `#eae5da` -> `#20231f`) and `1px` Sand (`#c6bba8`) hairline rules.

**The Flat-By-Default Rule.** Surfaces remain flat at rest; hover feedback uses crisp color shifts or subtle scale on photography (`1.02`) without elevated box-shadows.

## Shapes

Architectural sharp corners (`0px` radius) across buttons, inset folios, frames, and photographic plates, echoing printed travel prospectuses and physical photography contact prints. Provisional placeholders use a `1px dashed` Sand border (`#c6bba8`).

## Components

### Buttons
- **Shape:** Sharp rectangular corners (`0px` radius), minimum `44px`–`52px` touch height.
- **Primary:** Solar Clay (`#d68a50`) background with Charcoal (`#20231f`) uppercase `IBM Plex Mono` label and directional arrow icon; transitions to `#c5783d` on hover.
- **Secondary:** Transparent or Warm Paper (`#f3f0e8`) ground with `1px solid` Charcoal (`#20231f`) border, inverting to Charcoal fill / Warm Paper ink on hover.

### Editorial Ledger & Placeholder Frames
- **Style:** `1px` Sand (`#c6bba8`) horizontal dividers for provisional trip parameters; `1px dashed` Sand border on `#eae5da` for unconfirmed villa placeholders.

### Navigation
- **Style:** `64px` sticky Warm Paper header (`bg-paper/95` with subtle backdrop blur on scroll) holding brand wordmark left, four inline section links, and dark Charcoal CTA button right; collapses below `768px` into an accessible toggle drawer plus a scroll-revealed bottom CTA bar.

## Do's and Don'ts

### Do:
- **Do** use `1px` Sand (`#c6bba8`) hairlines and generous editorial whitespace instead of rounded card containers.
- **Do** label provisional trip details and missing villa assets transparently in `IBM Plex Mono`.
- **Do** pair Solar Clay (`#d68a50`) interactive controls with Charcoal (`#20231f`) ink.

### Don't:
- **Don't** add SaaS three-column icon grids, decorative pill badges, purple/blue gradients, or box-shadows.
- **Don't** stack uppercase eyebrows above headings.
- **Don't** invent villa photographs or imply confirmed bookings/deposits.
