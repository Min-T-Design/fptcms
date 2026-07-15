# FPT Design System

A complete, free design system recreated in code from the **"FPT Design System "** Figma community file. It pairs a 12-step color model, a 4px spacing grid and an Inter-based type scale with ~30 reusable React primitives, a curated icon set, two product UI kits and a landing-page template.

> **Sources** (no access assumed — recorded for provenance):
> - Figma: *ZEN.Kaiz.-.Design.System.FREE.fig* (mounted virtual file; every page/frame in scope). Token values, components and icons were extracted from the file itself, not from public references.
> - Uploaded brand asset: `uploads/Logo-FPT.webp` → `assets/logo-fpt.webp` (the FPT brand logo).
>
> This is a generic, brandable UI-kit-style system (no single end-product), so the UI kits are realistic *showcases* of the system at product scale rather than recreations of one app.

---

## Brand at a glance
FPT's identity is a **vivid magenta-pink** ("FPT" hue, `--zen-9` ≈ `#F263CA`) over clean grays, with **fully pill-shaped action controls** as the signature move. The aesthetic is bright, friendly and modern — high-contrast text, soft neutral shadows, generous radii, and Inter throughout.

---

## CONTENT FUNDAMENTALS
How copy is written across the system's product surfaces:

- **Voice:** clear, warm, confident. Speaks *to* the user as "you"; the product/assistant refers to itself as "I" only in the AI chat ("I'm Kaiz, your design assistant").
- **Casing:** **Sentence case everywhere** — buttons ("Get started", "New invoice"), headings ("Recent invoices"), nav ("Help & docs"). Never Title Case on actions. UPPERCASE is reserved for tiny overlines/table headers with letter-spacing.
- **Buttons are verb-first** and short: "Send invite", "Start building", "Browse kit". Avoid "Click here".
- **Tone:** encouraging and concrete, not hypey. Microcopy explains consequences ("This makes FPT visible to everyone in your organization.").
- **Numbers:** tabular, with currency shown as `₫48.2M`; deltas as `+12.4%` / `-0.4%`.
- **Emoji:** not used in product UI. **No emoji** in components, labels or specimens.
- **Punctuation:** ellipsis on in-progress/placeholder states ("Message Kaiz…", "Select…"), no exclamation-mark spam.

---

## VISUAL FOUNDATIONS
- **Color:** Radix-style 12-step scales for **FPT** (brand) and **Gray** (neutral), plus support hues (green/red/orange/yellow/blue) used at step 9 (solid), 3 (subtle bg) and 11 (text). Step usage convention: 1–2 backgrounds · 3–5 subtle/hover fills · 6–8 borders · 9 solid · 10 hover · 11 accessible text · 12 strongest. Semantic aliases (`--color-surface`, `--color-text`, `--color-accent`, …) are the component-facing API and flip under `:root[data-theme="dark"]`.
- **Type:** **Inter** for display, heading, body and button; **JetBrains Mono** for dev/numerics, **IBM Plex Mono** for code specimens. Headings are Semi Bold (600) with tight tracking (-0.01 to -0.02em); body is 400/regular at 1.5–1.6 line height. (The Figma file's alternate "mono" theme mode swaps in *Tektur* + *Geist Mono* — see Caveats.)
- **Spacing:** 4px base grid (`--space-*`), exposed as friendly px aliases plus semantic gaps (`--gap-sm`…`--gap-2xl`).
- **Corner radii:** small 8 / base 12 / lg 16 / xl 20 — and **`--radius-full` (pill)**, the default for buttons, tags, badges, switches and segmented controls. Cards use 16px.
- **Backgrounds:** flat and clean — `--color-bg` (gray-2) for app canvas, white surfaces for cards. **No gradients, no textures, no hand illustration.** The only "imagery" is logos; full-bleed brand color blocks appear behind logo lockups.
- **Borders:** 1px hairlines (`--color-border`, gray-5); inputs go to brand-pink on focus; active/selected rings use brand at 1.5px plus a soft `--color-accent-bg` halo.
- **Elevation:** soft, low-spread neutral shadows (`--shadow-xs`→`--shadow-overlay`). Cards rest on `--shadow-sm`; modals/menus on `--shadow-overlay`. Dark mode deepens the ramp.
- **Cards:** white surface, 1px pale border, 16px radius, soft shadow; interactive cards lift 2px on hover.
- **Animation:** quick and purposeful. `--ease-standard` `cubic-bezier(.2,0,0,1)`; durations 120/180/260ms. Fades + small translate/scale on modals; switch knobs use the emphasized ease. **No bounce, no infinite decorative loops** (except the deliberate typing-dots and shimmer loaders).
- **Hover / press:** primary actions **lighten** on hover (`--color-accent-hover` = zen-10) and **darken** on press (`--color-accent-pressed` = zen-11). Ghost/secondary surfaces shift to `--color-surface-alt`. No scale-down on press for buttons.
- **Transparency / blur:** sparingly — a 2px backdrop blur behind the modal scrim; subtle alpha fills for selected/ghost states in dark mode.
- **Layout:** left sidebar + topbar app shell; content max-widths ~1120px for marketing. Fixed chrome, scrolling body.

---

## ICONOGRAPHY
- **System:** an Untitled-UI-style line/solid family (~2153 glyphs in the Figma file). A curated **77-glyph working subset** is shipped here, extracted as real SVG paths into `components/icons/icon-registry.js` and rendered by the `<Icon>` component.
- **Usage:** `<Icon name="search-medium-line" size={20} />`. Names are kebab-case; `-line` (default UI weight) and `-solid` (emphasis/status) variants. Icons paint with `currentColor` on a 20×20 grid — set `color` on the icon or a parent. 20px is the default; 24px for nav/touch.
- **No emoji, no unicode glyphs as icons.** When a needed glyph is missing from the subset, materialize more from the Figma file with `fig_materialize` and regenerate the registry.
- **Logo:** `assets/logo-fpt.webp` — the full-color FPT brand mark, used in nav chrome and the landing header.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (import manifest only). Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front-matter wrapper.

**`tokens/`** — `colors.css`, `typography.css`, `scale.css`, `fonts.css` (clean px-resolved component-facing layer) + `fig-tokens.css` (complete Figma Variable export, every collection & theme mode).

**`components/`** (namespace `window.ZENKaizenDesignSystem_4069b4`)
- `icons/` — `Icon` (+ `ICON_NAMES`)
- `core/` — `Button`, `IconButton`, `Badge`, `Tag`, `Avatar` / `AvatarGroup`, `Card`, `Divider`
- `forms/` — `Input`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `Select`, `Slider`
- `feedback/` — `Alert`, `Toast`, `Tooltip`, `Progress`, `Skeleton`, `Spinner`
- `navigation/` — `Tabs`, `Segmented`, `Breadcrumbs`, `Pagination`
- `overlay/` — `Modal`
- `data/` — `ListItem`, `Accordion`, `Stat`, `Table`

Each directory has a `*.card.html` specimen (Design System tab) and each component a `.d.ts` + `.prompt.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand).

**`ui_kits/`**
- `console/` — SaaS admin console (dashboard + members + invite modal).
- `ai-chat/` — Kaiz AI assistant chat.

**`templates/`**
- `landing/` — marketing landing page Design Component (`Landing.dc.html`).

**`assets/`** — `logo-fpt.webp` (FPT brand logo).

---

## Caveats / substitutions
- **Fonts:** the default theme uses **Inter** + **JetBrains Mono**, loaded from Google Fonts. The Figma file's alternate **"mono" theme mode** references **Tektur** (display) and **Geist Mono** (sans), which are **not bundled** — their tokens fall back to the system stack until font files are uploaded. No substitute family was forced in their place.
- Only a 77-icon subset of the full ~2153-glyph set is shipped; expand via `fig_materialize` as needed.
- UI kits are showcases of the system, not recreations of a specific shipping product (the source is a generic free kit).
