# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at localhost:4321
npm run build     # production build to dist/
npm run preview   # preview the production build
```

No test runner or linter is configured.

## Architecture

Single-page digital menu for El Greco, a Greek restaurant. Built with **Astro 4** + **Tailwind CSS 3**.

### Page structure

The entire menu lives in one file: `src/pages/index.astro`. It is a long scroll of `<MenuPage>` sections, each with an anchor `id` used for navigation. Sections in order:

`#hero` → `#ueber-uns` → `#mittagskarte` → `#vorspeisen` → `#platten-salate` → `#nudeln-fisch` → `#backofen-pfanne` → `#grill` → `#ueberbacken` → `#burger-beilagen` → `#desserts` → `#aperitif` → `#alkoholfrei` → `#bier` → `#wein` → `#flaschenwein` → `#kaffee` → `#allergene` → `#kontakt`

### Components

| Component | Props | Purpose |
|-----------|-------|---------|
| `MenuPage` | `id`, `title`, `kicker?`, `note?`, `footnote?` | Section wrapper with heading, Greek subtitle, and decorative rule |
| `MenuSection` | `title`, `quantity?` | Sub-section heading within a `MenuPage`; `quantity` shows portion info (e.g. `"0,2 l · 0,4 l"`) |
| `MenuItem` | `number`, `name`, `price`, `allergens?`, `description?`, `vegetarian?`, `badge?` | Food/drink line item with dotted leader between name and price; `badge` is `'house' \| 'share' \| 'popular'` |
| `WineItem` | `number?`, `name`, `price`, `allergens?`, `type?`, `character?`, `pairing?` | Wine entry with type, tasting note, and food pairing below the name |
| `NavBar` | — | Desktop sticky nav (`md:` and above); hover dropdowns; scroll-based active indicator via `IntersectionObserver` |
| `BottomNav` | — | Mobile fixed bottom bar (`md:hidden`); tapping Speisen/Getränke/Mehr opens a slide-up sheet |
| `Layout` | `title?` | HTML shell; loads Google Fonts (Cormorant Garamond + Manrope) and Tabler Icons webfont |

### Design system

Colors are defined in two places that must stay in sync:
- **CSS custom properties** in `src/styles/global.css` (used inline as `var(--ink)` etc.)
- **Tailwind theme** in `tailwind.config.mjs` (used as Tailwind classes like `text-olive-700`)

Palette tokens: `--olive-900/700/500`, `--paper`, `--ink`, `--ink-soft`, `--ink-mute`, `--rule`, `--terra`, `--veg`

Typography:
- **Serif / headings / italic descriptions**: `font-serif` → Cormorant Garamond
- **Sans / labels / prices / nav**: `font-sans` → Manrope

The `.leaders` CSS class (in `global.css`) renders the dotted line between a menu item name and its price.

Icons come from Tabler Icons webfont (loaded via CDN in `Layout.astro`), used in `BottomNav` as `<i class="ti ti-*">`.


