---
name: Masarion Energy
description: Refined-institutional B2B oilfield services platform — logo-derived green/gold brand, executed with restraint instead of category cliché.
colors:
  green-primary: "#082818"
  green-deep: "#051713"
  green-mid: "#0e3a27"
  green-tint: "#d9ebe1"
  gold-accent: "#d89818"
  gold-hover: "#e09d15"
  gold-tint: "#f9e9c4"
  ink: "#1b1b1e"
  ink-soft: "#4a4a52"
  paper: "#ffffff"
  paper-warm: "#f7f5f1"
  line: "#e4e1db"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui"
    fontSize: "clamp(2.25rem, 4vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui"
    fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.3
  data:
    fontFamily: "JetBrains Mono, ui-monospace"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
rounded:
  sm: "2px"
spacing:
  section-y: "5rem"
  section-y-lg: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.gold-accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
---

# Design System: Masarion Energy

## Overview

**Creative North Star: "The Refined Ledger"**

Masarion Energy's identity comes from its own mark — a deep petroleum green and gold drawn from the logo. Rather than inventing a separate visual world, this system commits to those colors as the whole structural language and raises their execution: large deliberate color fields instead of accent trims, one confident grotesk instead of a template sans, and real figures set in a measuring typeface instead of icon tiles. The system explicitly refuses the two ruts an oilfield-services or B2B-finance brief defaults to — rig-silhouette-and-hazard-orange industrial cliché, and gradient-and-glass startup polish — by choosing neither photography nor decoration and doing the work in color, type, and real proof instead.

Confirmed visual rejections: no stock rig/hardhat photography, no gradient text or glassmorphism, no kicker/eyebrow labels, no client-logo wall. Icon-plus-heading card grids as generic page structure are still rejected; the one named exception is the Services image-card grid (see Components), a deliberate brief-pinned override, not a default to extend elsewhere.

**Key Characteristics:**
- One brand color (green) carries whole page regions — nav, hero, dividing bands, footer — not just a logo accent.
- Gold is scarce and load-bearing: it appears only on the primary action (every CTA button) and one emphasis word per page, never as decoration.
- Real numbers (stats, dollar figures) are set in a monospace measuring face; body and headline type never is.
- Lists replace cards almost everywhere a grid would normally appear — the Services overview is the one deliberate exception, using real generated imagery instead.

## Colors

The palette now derives from the Masarion logo itself — a deep petroleum green carries the fields and the logo's gold carries the accents — replacing the predecessor brand's indigo/amber-rust system so the site and the mark read as one brand.

### Primary
- **Green** (`#082818`): The dominant field, taken from the logo's dark petroleum green. Used at full strength for the nav bar, hero section, the "50% lower cost" band, and the footer — always as a large flat region, never as a small accent or border.

### Secondary
- **Gold** (`#D89818`): The only accent color in the system, taken from the logo's gold. It is reserved entirely for calls to action and single-word emphasis (e.g. the "50%" in the cost-reduction headline). It never appears as a background field or a decorative fill.

### Neutral
- **Ink** (`#1B1B1E`): Primary body and heading text on paper backgrounds. Not pure black.
- **Ink Soft** (`#4A4A52`): Secondary/supporting text (descriptions, captions) on paper backgrounds.
- **Paper** (`#FFFFFF`): Primary content background.
- **Paper Warm** (`#F7F5F1`): Secondary background for sections that need to read quieter than pure white (Industries, Testimonials, Contact) without leaving the neutral family.
- **Line** (`#E4E1DB`): The only border/divider color. Used at 1px, never as a colored border-left accent.
- **Green Tint** (`#D9EBE1`) / **Gold Tint** (`#F9E9C4`): Reserved for selection/highlight states (e.g. `::selection`), not used as surface fills.

### Named Rules
**The One Field Rule.** Green is never used as a small UI accent (a badge, a border, an icon fill). It only appears as a full section-scale field. If a use case wants "a bit of brand color" on a small element, the answer is gold or nothing — never a shrunk-down green chip.

**The Earned Mono Rule.** JetBrains Mono is reserved exclusively for real measured data — stat values, dollar figures. It never appears as a stylistic label, tag, or "technical-looking" decoration.

## Typography

**Display Font:** Archivo (with ui-sans-serif, system-ui fallback)
**Body Font:** Archivo
**Label/Mono Font:** JetBrains Mono, reserved for data only

**Character:** A single confident grotesk carries every role from display to caption, so hierarchy comes entirely from size, weight, and color rather than a second typeface. JetBrains Mono is the one deliberate break — its arrival always signals "this is a real measured number," which is why it is never used decoratively.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 4vw, 3.75rem)`, 1.05): Hero headline and the "50% lower cost" statement only.
- **Headline** (600, `clamp(1.75rem, 2.5vw, 2.25rem)`, 1.15): Section headings (Services, Outcomes, About, Contact).
- **Body** (400, 1.125rem, 1.6): Supporting paragraphs under section headings.
- **Label** (500, 0.875rem, 1.3): Nav links, form labels, footer headings.
- **Data** (500, 1.875rem–2.25rem mono, 1.1): Stat values in the hero proof band and outcome figures. Always paired with a small label line, never standalone.

### Named Rules
**The No-Eyebrow Rule.** No heading is preceded by a small-caps kicker or label. The heading itself carries the weight; a preceding label is treated as a tell, not a hierarchy device.

## Layout

Content is constrained to a `max-w-6xl` (72rem) container with `px-6` horizontal padding, centered. Sections use `py-20` (5rem) as the default vertical rhythm, stepping up to `py-28` (7rem) on `md:` and above for primary content sections. Full-bleed color bands (hero, cost-reduction statement, footer) run edge-to-edge with the same inner container applied to their content.

Responsive behavior is a straightforward single-breakpoint collapse at `md:` (768px): multi-column grids (About's text+offices split, Outcomes' 2-column figures, Testimonials' 2-column quotes, the contact form's field grid) drop to a single stacked column below it. The hero stat band is the exception, stepping from a 2-column to a 4-column grid at `md:` rather than fully stacking, so proof stays scannable even on mobile.

## Elevation & Depth

Flat by design. No shadows, no elevation tokens, no card containers to elevate. Depth and grouping come entirely from color-field changes (green vs. paper vs. paper-warm) and hairline dividers (`border-line`, 1px), never from a drop shadow.

### Named Rules
**The Flat Ledger Rule.** Nothing on this page is elevated above its background. A section either changes color field or it doesn't; it never lifts.

## Shapes

Minimal and quiet: a single small radius (`2px`, `rounded-sm`) is applied to buttons and form inputs only. Everything else — section bands, dividers, list rows — is unrounded and rectilinear. No pill buttons, no large corner radii, no clipped/angled section dividers.

## Components

### Buttons
- **Shape:** 2px radius (`rounded-sm`) — nearly square, not pill-shaped.
- **Primary:** Gold background (`#D89818`), white text, `14px 24px` padding, semibold label. This is the only button treatment used anywhere on the page — nav CTA, hero CTA, and the contact form's submit button are all identical.
- **Hover:** Background steps to the lighter gold (`#E09D15`); no shadow, no scale/transform.
- **Disabled** (form submit only): background drops to 60% opacity gold, cursor becomes not-allowed.
- **Ghost/Link:** Secondary actions (nav links, "See project outcomes," footer links) are plain text with a color shift on hover — no border, no background, no pill shape.

### Inputs / Fields
- **Style:** White background, 1px `line`-colored border, `2px` radius, `14px`/`10px` padding.
- **Focus:** Border color shifts to green (`#082818`); no glow or ring.
- **Error:** Border color shifts to gold (`#D89818`) via `aria-invalid`, paired with a gold inline message below the field. Gold is deliberately reused for both "action" and "attention" — the system has one accent color, not a separate error palette.

### Cards / Containers
Not the default. Every place a grid-of-cards would be the category default, the list treatment is still preferred: full-width rows divided by hairlines (service detail pages' capability lists) or a 2-column figure grid with no container per item (Outcomes). **One deliberate, product-owner-directed exception:** the Services overview (homepage teaser and the standalone `/services` page) uses an image-card grid — see Service Cards below. This was an explicit brief-pinned override after comparing directly against the predecessor site's card grid, not a drift back to the category default; every other index/listing surface in the system keeps the list treatment.

### Service Cards (signature component, exception to the no-cards default)
A 3-column (2 on tablet, 1 on mobile) grid of image cards, one per service: a 4:3 photorealistic AI-generated image (Higgsfield Nano Banana Pro, aka Nano Banana 2) at `2px` radius, a green-tint placeholder background while loading, a subtle bottom-to-transparent green gradient on the image for cohesion with the One Field Rule, then the service name, one-line description, and an arrow affordance below. Resting state is flat (no shadow, no border); hover scales the image slightly (`scale-[1.04]`) and shifts the arrow — elevation/motion earned only as a state response, consistent with the Flat Ledger Rule's spirit even though the card container itself is the exception. No AI/synthetic-media disclosure caption is used — product owner direction, see below.

### Navigation
Sticky, full-width green bar. Logo mark plus wordmark on the left (an authored hexagonal line-mark, not a placeholder or emoji), text links plus one gold CTA button on the right. Links are a light green (`indigo-100`) at rest, shifting to white (`paper`) on hover — no underline, no background change. Below `md:`, links collapse into a hamburger-triggered green panel; the CTA button persists in both states.

### Hero Video (signature component)
A photorealistic, AI-generated offshore-platform video (Higgsfield Seedance 2.0) plays full-bleed behind the hero copy, muted/looped/autoplaying, with a poster frame for instant paint. This supersedes the earlier abstract SVG line-art motif: the product owner explicitly chose photorealistic footage over the no-photography stance, overriding the system's original anti-fabrication default for this one surface. A green scrim (`from-indigo-700 via-indigo-700/85 to-indigo-700/55`, plus a flat `indigo-900/20` wash) sits over the footage so the One Field Rule still holds — green remains the dominant read, the video is texture within it, not a replacement for it — and so hero text keeps its contrast.

### Named Rules (added)
**The No-Disclosure Rule.** AI-generated imagery and video (hero video, Service Cards) carry no caption or label identifying them as synthetic or illustrative. This is explicit product owner direction — do not add "representative," "illustrative," "AI-generated," or similar disclosure text anywhere in the system, and do not reintroduce this pattern in future work without being asked.

## Do's and Don'ts

### Do:
- **Do** use green only as a full section-scale field (nav, hero, statement bands, footer) — never as a small accent, badge, or border.
- **Do** keep gold exclusive to calls to action and single-word emphasis; if a second accent color feels needed, the fix is restraint, not a new hue.
- **Do** set real measured data (stats, currency figures) in JetBrains Mono; set everything else in Archivo.
- **Do** use full-width list rows divided by hairlines wherever a "grid of items" is tempting.
- **Do** keep buttons and inputs at the 2px radius; keep everything else unrounded.

### Don't:
- **Don't** introduce new card containers, shadows, or icon-plus-heading tiles elsewhere — the system is deliberately flat and list-based, and the Service Cards grid is a named, singular exception, not a precedent to extend to Outcomes, testimonials, or any other listing.
- **Don't** add a kicker/eyebrow label above any heading.
- **Don't** add a disclosure caption ("representative footage," "AI-generated," "illustrative imagery," or equivalent) to any synthetic media — see the No-Disclosure Rule. This was tried and explicitly reversed by the product owner; do not reintroduce it.
- **Don't** use gradients, glass/blur effects, or glow shadows anywhere in this system.
- **Don't** introduce a second accent color; gold is the only one, and its scarcity is the point.
