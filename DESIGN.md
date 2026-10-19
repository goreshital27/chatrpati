# DESIGN.md — Chhatrapati Shivaji Maharaj Website

> Single source of truth for the visual design. Read this file before writing or changing any UI code. If code and this file disagree, follow this file.

---

## 1. Project summary

- **Subject:** Chhatrapati Shivaji Maharaj: his history, warriors (mavle), forts, achievements and the Ashtapradhan Mandal.
- **Audience:** students, history lovers, tourists and the Marathi diaspora. Many will arrive on a phone.
- **Primary job of the site:** make the Swarajya story feel epic and memorable, and make it easy to explore (timeline, forts, warriors, council).
- **Reference style:** a cinematic, game-like festival site (angular metallic nav, fog-reveal hero, gold-framed cards, color-shifting sections). We copy the *structure and feel*, and use Maratha imagery, colors and language throughout.
- **The one memorable thing:** the fog-parting hero that reveals Shivaji Maharaj on horseback at sunset. Everything else supports it and stays disciplined.

---

## 2. Design principles

1. **Epic but readable.** Heavy ornament lives on frames, dividers and the hero. Body text sits on calm, high-contrast surfaces.
2. **Every ornament carries meaning.** Gold frames mean "significant," the red ribbon means "key fact," the diamond divider means "new chapter." Never decorate without a job.
3. **Motion answers the user or opens the story.** One orchestrated hero sequence plus motion on interaction (hover, click, scroll-pinned timeline). No fade-up on every section.
4. **Bilingual by default.** Marathi (Devanagari) and English share equal visual weight. Layouts must survive both.
5. **Respect the history.** Dignified tone, no caricature, no cheap stock imagery. Facts come from verified sources.

---

## 3. Color tokens

| Token | Hex | Role |
|---|---|---|
| `--saffron` | `#FF9933` | Bhagwa accent, hero sky, active states |
| `--ember` | `#E2552B` | Sunset mid-tone, hover glow |
| `--rose-mist` | `#E8B4B8` | Fog and cloud tint in the hero |
| `--gold` | `#D4AF37` | Frames, dividers, icons |
| `--gold-deep` | `#8F6B14` | Frame shadow edge, pressed state |
| `--maroon` | `#4A0D0D` | Warrior section base |
| `--blood` | `#8B1A1A` | Red ribbons, CTA section |
| `--choco` | `#1A0F0A` | Forts section, footer |
| `--indigo` | `#1C1233` | Ashtapradhan section |
| `--charcoal` | `#0D0A08` | Deepest background |
| `--ivory` | `#F5ECD7` | Card face, body text on dark |
| `--steel` | `#8E8A86` | Nav bar metal, muted text |

### Section background morph (scroll-driven)

One continuous gradient interpolated by ScrollTrigger. No hard cuts.

| Section | Background | Mood |
|---|---|---|
| Hero | saffron → rose-mist sunset sky | dawn of Swarajya |
| Itihas (timeline) | `--choco` | heritage, weight |
| Gadkille (forts) | `--choco` → `--charcoal` | stone, shadow |
| Mavle (warriors) | `--maroon` + halftone dots | battle, courage |
| Ashtapradhan | `--indigo` with faint gold star-dust | royal court |
| Achievements | `--charcoal` + gold light streaks | legacy |
| Final CTA | `--blood` halftone grunge | rallying call |
| Footer | `--choco` | rest |

### Contrast rules
- Body text on dark: `--ivory` (≥ 7:1).
- Body text on ivory cards: `--charcoal`.
- Gold is for frames and large headings. Never use it for small body text on light backgrounds.

---

## 4. Typography

| Role | Typeface | Notes |
|---|---|---|
| Display (English) | **Cinzel Decorative** (fallback: Cinzel, serif) | hero title, section headings |
| Display (Marathi) | **Yatra One** (fallback: Tiro Devanagari Marathi) | hero title in Devanagari, ministers' titles |
| Body (both) | **Mukta** (fallback: Inter, system-ui) | Devanagari-friendly, clean at small sizes |
| UI labels | Mukta SemiBold, uppercase, `0.08em` tracking | nav, buttons, badges only |

### Scale

| Token | Size (desktop / mobile) | Use |
|---|---|---|
| `--text-hero` | `clamp(3.5rem, 10vw, 9rem)` | hero title |
| `--text-h1` | `clamp(2.25rem, 5vw, 4rem)` | section headings |
| `--text-h2` | `clamp(1.5rem, 3vw, 2.25rem)` | card/modal titles |
| `--text-body` | `1.0625rem` (17px) | paragraphs |
| `--text-small` | `0.875rem` | captions, badges |

- Line length: max **70 characters** (English), **60** (Marathi).
- Line height: body `1.7`, Marathi body `1.85` (Devanagari needs more room), headings `1.15`.
- Uppercase is used **only** for nav items, buttons and badges, which matches the reference. Section headings may be uppercase in English but never for Marathi.

### Hero title treatment
- Marathi title "छत्रपती शिवाजी महाराज" in Yatra One with an ornate metallic gradient (ivory → gold → gold-deep), a soft glow and a letter-by-letter reveal.
- English subtitle in Cinzel Decorative, smaller, tracked out.

---

## 5. Layout and grid

- **Container:** max-width `1280px`, side padding `clamp(1rem, 4vw, 3rem)`.
- **Grid:** 12 columns desktop, 4 tablet, 1 mobile (cards stack, nav becomes drawer).
- **Alignment:** headings and dividers are **centered** (a ceremonial feel). Long-form text is **left-aligned**. Never justify Devanagari text.
- **Spacing scale:** `4 8 12 16 24 32 48 64 96 144` px. Section vertical padding is `96–144px` desktop, `64px` mobile.
- **Z-layers:** background 0 → parallax layers 1–5 → content 10 → nav 50 → modal 100 → cursor 999.

### Page wireframe

```
┌──────────────────────────────────────────┐
│        ◢ ITIHAS GADKILLE ASHTAPRADHAN ◣  │  floating nav
│                                          │
│   [fog layers fade away on scroll]       │
│        छत्रपती शिवाजी महाराज               │  HERO
│   silhouette: rider + mavle + flags      │
│                  ▼ scroll                │
├──────────────────────────────────────────┤
│        ◆  ITIHAS  ◆                       │
│  ◄ [1630] [1645] [1659] [1660] ... ►     │  pinned horizontal timeline
├──────────────────────────────────────────┤
│        ◆  GADKILLE  ◆                     │
│  [filters]                                │
│  [card][card][card][card]                 │  forts grid
├──────────────────────────────────────────┤
│        ◆  MAVLE  ◆   (maroon, halftone)   │
│  [card][card][card] flip cards           │
├──────────────────────────────────────────┤
│        ◆  ASHTAPRADHAN  ◆   (indigo)      │
│        ○   ○   ○                          │
│       ○   [SEAL]   ○       octagonal      │
│        ○   ○   ○           council        │
├──────────────────────────────────────────┤
│  achievements counters  |  navy + admin   │
├──────────────────────────────────────────┤
│   quotes carousel                         │
├──────────────────────────────────────────┤
│        स्वराज्य   [ JOIN THE LEGACY ]     │  red grunge CTA
├──────────────────────────────────────────┤
│   footer: Jai Bhavani, Jai Shivaji        │
└──────────────────────────────────────────┘
```

---

## 6. Components

### 6.1 Floating nav (signature element #1)
- Pill-shaped bar, fixed top-center, `max-width: 720px`.
- Both ends are **chamfered** using `clip-path` (45° cuts). Fill is a brushed-steel gradient (`--steel` → darker), with a 2px lighter bevel edge and a subtle outer shadow, like the metal plate in the reference.
- Items: ITIHAS · GADKILLE · ASHTAPRADHAN · MOHIMA · VARSA.
- A tiny yellow badge ("NEW") sits above one item.
- Active item has a gold underline glow.
- Language toggle (EN | मराठी) sits at the right end.
- **Mobile:** collapses to a hamburger that opens a full-screen saffron-to-maroon drawer with large Devanagari links.
- Adds a blurred dark backdrop once the user scrolls past the hero, so text stays legible over any section.

### 6.2 Ornate card (signature element #2)
Structure, top to bottom:
1. **Crown ornament:** a gold chevron/peak that rises above the frame.
2. **Gold frame:** a 3px gold-foil gradient border with beveled corners (`clip-path` polygon), and an inner dark inset around the image.
3. **Image area:** 4:5 ratio.
4. **Title** on an ivory plate (Cinzel Decorative, `--text-h2`).
5. **Button pair:** `READ MORE` and `WATCH`, both angular (chamfered corners). Primary = outlined gold, secondary = filled maroon.
6. **Stat ribbon:** a full-width `--blood` bar with a label and value (e.g. `WON · 1674`).

**States**
- Default: flat, subtle inner shadow.
- Hover (desktop): lifts 8px, 3D tilt toward the cursor (max 6°), gold border glow, description fades over the image bottom-up.
- Focus-visible: 3px saffron outline offset by 3px.
- Disabled/closed variant: grayscale image plus a greyed ribbon (mirrors the "closed" cards in the reference).

### 6.3 Diamond section divider
```
 ─────────── ◆  S E C T I O N  ◆ ───────────
```
- Two thin gold lines (1px, fading to transparent at the outer ends) flank the heading. Small gold diamonds sit on either side.
- The heading reveals with a typewriter effect when it enters the viewport, once only.

### 6.4 Hero (signature element #3, the single big moment)
Parallax layers from back to front:
1. Sunset sky gradient (saffron → ember → rose)
2. Distant Sahyadri ridges and Raigad silhouette
3. Flying birds (small looped SVG sprites)
4. Mid-ground hill with flags and spears
5. Foreground: Shivaji Maharaj on horseback plus mavle silhouettes, dark with subtle teal-gold edge glow
6. **Fog:** 3 stacked pink-orange cloud layers, full-viewport, scaled and faded out on scroll to reveal the scene

Behavior:
- On load, the fog is thick and the title is hidden. A short intro (≤ 2.5s) thins the fog slightly and reveals the nav.
- As the user scrolls the first 100vh, the fog parts, drifts sideways and fades, and the title and silhouette rise into view.
- Ember particles float upward at low density (≤ 40 particles, disabled on reduced motion).

### 6.5 Ashtapradhan darbar (the centerpiece)
- Octagonal layout, **8 portrait nodes** around a central Rajmudra seal.
- Nodes are gold-framed circles/octagons with a faint pulsing glow.
- Line-drawn connectors (SVG stroke-dash animation) run from the seal to each node as the section enters.
- Click or tap a node → a detail panel slides in (desktop: right side, mobile: bottom sheet) containing the title in Devanagari and English, the minister's name at the 1674 coronation, the role and responsibilities.
- Keyboard: arrow keys move between nodes, Enter opens, Esc closes.
- Includes a small "Governance Flow" diagram below.

### 6.6 Timeline (pinned horizontal scroll)
- The section pins while vertical scroll moves cards horizontally.
- Each year node is an ornate card with a connecting gold line.
- Progress bar at the bottom with the year ticks.
- On mobile: becomes a vertical timeline (no pinning).

### 6.7 Warrior flip card
- Front: silhouette portrait, name, battle badge.
- Back: one-line legend plus the battle name and year.
- Flip on hover (desktop) or tap (mobile), with the 3D flip taking ~500ms.

### 6.8 Countdown widget
- Heading: "SHIVRAJYABHISHEK DIN IN" (counts to 6 June).
- Four glowing digit boxes (DAYS · HOURS · MINS · SECS), dark glass with a gold digit and a faint inner glow.
- Three glass pills beside it for highlights.

### 6.9 Final CTA
- Blood-red background with halftone dot texture and a vignette.
- Huge metallic gradient title "स्वराज्य" with a torch/flame icon.
- A white rectangular button (`JOIN THE LEGACY`), square corners, black text, as in the reference.

### 6.10 Cursor and preloader
- Custom cursor: small arrowhead with a short glowing trail. Hidden on touch devices.
- Preloader: the Rajmudra seal draws itself with an SVG stroke animation, then dissolves into the hero. Max 2s, skippable.

---

## 7. Texture and effects

| Effect | Spec |
|---|---|
| Gold foil | linear-gradient 135°: `#8F6B14 → #D4AF37 → #F7E27A → #D4AF37 → #8F6B14` |
| Metal plate | linear-gradient 180°: `#B9B5B0 → #6E6A66 → #A19D98` + 1px light top edge |
| Halftone | radial-gradient dot pattern, 6px pitch, 12% opacity |
| Grain | SVG noise overlay at 4% opacity over the whole page |
| Glow | `box-shadow: 0 0 24px rgba(212,175,55,.45)` |
| Fog | blurred cloud PNGs/CSS, `mix-blend-mode: screen`, rose-mist tint |

---

## 8. Motion spec

| Moment | Tool | Duration / ease |
|---|---|---|
| Preloader seal draw | SVG stroke-dash | 1.6s, `power2.inOut` |
| Hero fog part | GSAP ScrollTrigger scrub | scrubbed to scroll |
| Title letter reveal | GSAP stagger | 1.2s, 0.04s stagger, `power3.out` |
| Divider typewriter | GSAP text | 0.8s, once |
| Background morph | ScrollTrigger scrub | continuous |
| Card hover | Framer Motion | 250ms, spring (stiffness 300, damping 24) |
| Modal / panel open | Framer Motion | 350ms, `easeOut` |
| Counters | GSAP | 1.8s, once per view |
| Smooth scroll | Lenis | lerp 0.1 |

**Reduced motion:** when `prefers-reduced-motion: reduce`, disable parallax, particles, the cursor trail and the pinned timeline. Use simple fades only.

**Performance:** animate only `transform` and `opacity`. Lazy-load below-the-fold images. Cap parallax layers on mobile to 3.

---

## 9. Content rules

- **Languages:** English and Marathi. All strings live in `/src/data/` and `/src/i18n/`, never hardcoded in components.
- **Facts:** every date, name and quote must be verified from reliable sources before it ships. Quotes must be attributed to a source or removed.
- **Voice:** respectful, vivid, plain. Use active verbs and avoid filler. Headings state the topic (e.g. "Pratapgad, 1659"), not a slogan.
- **Button labels:** `READ MORE`, `WATCH`, `JOIN THE LEGACY`. Keep the same name for the same action everywhere.
- **Ashtapradhan titles (Devanagari and English):** पेशवा/प्रधान, अमात्य, सचिव, मंत्री, सेनापती, सुमंत, न्यायाधीश, पंडितराव. Confirm the names of the 1674 ministers against a trusted source before display.

---

## 10. Imagery guidelines

- **Style:** dramatic sunset or night scenes, dark silhouettes, teal-gold glowing armor accents, painterly rather than photoreal cartoon.
- **Never use:** copyrighted artwork, scraped images, or caricatured depictions. Use original, licensed or self-generated art only.
- **Asset slots:** every image has a named slot in `/public/assets/` plus an entry in `ASSETS.md` with its size, ratio and a generation prompt.
- **Alt text:** mandatory and descriptive. Decorative layers use `alt=""` and `aria-hidden`.
- **Formats:** WebP/AVIF with JPEG fallback, hero layers as transparent PNG/WebP, max 250KB each where possible.

---

## 11. Accessibility and quality floor

- WCAG AA contrast for all text.
- Visible keyboard focus on every interactive element.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a skip-to-content link.
- Modals trap focus and close on Esc.
- All animated content has a reduced-motion fallback.
- Touch targets ≥ 44×44px.
- Language attribute switches (`lang="mr"` / `lang="en"`) with the toggle.
- Lighthouse targets: Performance ≥ 85, Accessibility ≥ 95.

---

## 12. Responsive behavior

| Breakpoint | Behavior |
|---|---|
| ≥ 1280px | Full layout, 4-column card grid, pinned timeline |
| 1024–1279px | 3-column grid |
| 768–1023px | 2-column grid, nav still a pill but condensed |
| < 768px | 1-column, hamburger drawer, vertical timeline, Ashtapradhan becomes a vertical list with a bottom-sheet detail, no custom cursor |

---

## 13. Folder structure

```
/src
  /components     NavBar, OrnateCard, Divider, Countdown, Modal, Cursor, Preloader
  /sections       Hero, Timeline, Forts, Warriors, Ashtapradhan, Achievements, Navy, Quotes, Cta, Footer
  /data           timeline.ts, forts.ts, warriors.ts, ashtapradhan.ts, quotes.ts
  /hooks          useScrollTheme, useCountdown, useTilt, useReducedMotion
  /i18n           en.json, mr.json
  /styles         tokens.css, textures.css
/public/assets    hero/, forts/, warriors/, ministers/, ui/
DESIGN.md
ASSETS.md
```

---

## 14. Definition of done

- [ ] All 10 sections built and matching this spec
- [ ] Hero fog reveal works on desktop and mobile
- [ ] Background morphs smoothly through all sections
- [ ] Ashtapradhan fully interactive (mouse, touch, keyboard)
- [ ] English and Marathi toggle works everywhere
- [ ] Reduced-motion mode verified
- [ ] Facts and quotes verified against sources
- [ ] Lighthouse targets met
- [ ] `ASSETS.md` lists every image slot with a prompt
