# YAQUTI Landing Page — Implementation Plan

---

## 1. Design Audit (Phase 1 Findings)

### 1.1 Color Palette

Sampled from mockups and cross-referenced against the brand guideline document (`YAQUTI BRAND GUIDLINE.png` and `web ui.png`), which explicitly name colors and provide hex values:

| Token Name | Hex | Source / Notes |
|---|---|---|
| `--color-ink` (YAQUTI Midnight) | `#1C2D3A` | Brand guideline states **#1C2D3A** (dominant 80%). Used in nav bar background, footer background, hero CTA button fill, dark section backgrounds. RGB: 225, 250, 250 listed in guideline appears incorrect — the swatch is clearly a deep blue-navy-ink. Cross-referencing the nav/footer mockups confirms a very dark desaturated navy. |
| `--color-cream` (YAQUTI Ivory) | `#FAF9F7` | Brand guideline states **#FAF9F7**. Primary page background. Warm white with a slight yellow undertone. Visible as the dominant background on hero, categories, science, why-yaquti, testimonials sections. |
| `--color-parchment` | `#F2EFE7` | Slightly warmer/darker than cream. Used as alternating section backgrounds (trust-badges bar, why-yaquti section background, testimonial card backgrounds) to create subtle contrast. Not explicitly in the guideline — sampled from the mockups. |
| `--color-accent` (YAQUTI Ruby) | `#8C0D2C` | Brand guideline explicitly states **#8C0D2C** for the "Be Rare." slogan, CTA buttons in active states, and small accent moments. The seal mark (`Y seal.png`) confirms this deep burgundy-wine. |
| `--color-taupe` | `#7C7061` | Warm neutral observed in body copy, secondary text, icon linework. Provides readable contrast on cream without being harsh black. |
| `--color-slate` (YAQUTI Slate) | `#859AFA` | Brand guideline lists this as a third palette color (RGB: 133, 90, 250 / hex appears as a periwinkle-slate). However, examining the actual landing page mockups, this color does **not** appear to be used on the landing page. **Recommendation:** omit from landing page palette, keep available as a design token for future use. |
| `--color-white` | `#FFFFFF` | Text on dark backgrounds (nav links, footer text, hero overlay text where needed). |
| `--color-ink-light` | `#2A3F4D` | Slightly lighter variant of ink, used for hover states on dark backgrounds and subtle differentiation in the footer column headers. Derived, not in guideline. |
| `--color-border` | `#E5E2DA` | Fine rule lines visible in trust-badges bar (bottom border), why-yaquti grid dividers, testimonial card borders. Warm grey that reads as a continuation of the parchment tone. |

> [!IMPORTANT]
> **Honesty flag:** The brand guideline's stated RGB values for "YAQUTI Midnight" (`RGB: 225, 250, 250`) don't match the hex `#1C2D3A` or the dark swatch shown. The swatch and all mockups clearly show a deep navy-ink. I'm trusting the hex value and the visual swatch over the RGB numbers, which appear to be a typo in the guideline document. Please confirm.

> [!IMPORTANT]
> **Honesty flag:** The brand guideline lists YAQUTI Slate as `#859AFA` but the hex/RGB also appear inconsistent with the swatch shown (which looks like a grey-blue, closer to `#839ACA`). Since this color doesn't appear on the landing page, this doesn't affect implementation — but flagging for your brand team.

### 1.2 Typography

The brand guideline (`YAQUTI BRAND GUIDLINE.png`) explicitly names both typefaces:

**Display/Heading Serif: Domain Serif Bold**
- Used for: Section headings ("Be Rare.", "Featured Categories", "Science", "Why YAQUTI", "Lifestyle", "Testimonials", "Journal"), the YAQUTI wordmark in nav
- Letterform character: High stroke contrast (thick-to-thin transitions), bracketed serifs with gentle curves, ball terminals on lowercase letters, refined editorial feel — classic transitional serif in the Didone/Scotch direction
- **Web font substitute needed:** Domain Serif is a commercial typeface (Klim Type Foundry). Not available on Google Fonts. Closest available substitutes by visual character:
  - **Recommendation: "Playfair Display" (Google Fonts)** — matches the high stroke contrast, bracketed serifs, and editorial premium feel. Alternative: "DM Serif Display" if a more restrained option is preferred.
  - If the client has a Domain Serif license, we use `next/font/local` with the font files.
- Weights observed: Bold (headings), possibly Regular (subheadings)
- Hero H1: ~56–64px desktop, strong presence
- Section H2s: ~36–44px desktop
- Letter-spacing: Normal for headings (no tracking)

**Body/UI Sans: Söhne Regular**
- Used for: Body copy, nav links, button labels, eyebrow/category labels, trust badge labels, footer text
- Letterform character: Geometric-humanist hybrid, very clean and clinical, similar to Helvetica Neue but with warmer geometry
- **Web font substitute needed:** Söhne is a commercial typeface (Klim Type Foundry). Not available on Google Fonts. Closest available substitutes:
  - **Recommendation: "Inter" (Google Fonts)** — the `web ui.png` guideline actually lists "Inter" as the body/UI font alternative. Inter matches the geometric-humanist character, has excellent legibility, and is available in all needed weights.
- Weights observed: Regular (400) for body text, Medium (500) for button labels and nav links, possibly SemiBold (600) for bold labels
- Body size: 16px, line-height ~1.6
- Eyebrow/label style: 12–13px, **UPPERCASE**, letter-spacing +0.08em (observed on category labels like "Women's Wellness", section eyebrows)
- Nav links: ~14–15px, Medium weight

### 1.3 Iconography & Seal Usage

**Icon System** (from `yaquti icon.png` brand guideline page):
- Style: Monoline, 2px stroke weight, rounded ends, no fill
- Grid: 24px design grid
- Color: Single color only — black on light, white on dark backgrounds
- Ruby color is **only** permitted for notification dots, quality seals, and special highlights (per brand guideline rules)
- Icon set observed on landing page:
  - Trust badges: Flask/beaker (Clinically Formulated), Gear/molecule (Premium Ingredients), Checkmark-shield (Third-Party Tested), Globe/box (Worldwide Shipping)
  - Why YAQUTI: Scale (Science First), Leaf (Honest Ingredients), Cog/gear (Precision Manufacturing), Microscope (Clinical Quality), Recycle/package (Sustainable Packaging), Star/diamond (Premium Experience)

**Seal/Mark Usage:**
- **YAQUTI wordmark** (`YAQUTI LOGO.png`): Used in nav bar (left-aligned) and footer. Rendered as an image, custom serif lettering with distinctive Q tail and swash details.
- **Standalone Q mark**: Brand guideline says this is the official digital brand icon — used for favicon, browser tab, mobile app icon, social avatar. **Do NOT show standalone Q in Ruby color.**
- **Ruby Wax Seal** (`YAQUTI SEAL.png`): Secondary brand device. Appears as a wax-seal motif with gem/crystal center. Used only as accent — foil stamp, bottle cap, quality seal. **Never** replace the logo, never use as favicon, never enlarge larger than wordmark. The landing page mockups do **not** appear to use the seal prominently — it may appear subtly on product packaging in photography only.
- **Y Shield/Crest** (`Y seal.png`): Geometric Y monogram in shield shape. Available in Ruby, Black, White, and Outline variants. Used primarily on packaging, not directly on the landing page.

### 1.4 Photography Treatment

- **Color grading:** Warm, natural, golden-hour quality. Skin tones are warm. Interiors have a warm wood-and-cream palette. No heavy filters — the photography reads as "real" but editorially styled.
- **Category tiles:** Square (1:1 aspect ratio), straight rectangular crops with very subtle rounded corners (~4–8px). Warm studio lighting, cream/beige backgrounds matching the page palette. Products shot on stone pedestals or held in hands.
- **Lifestyle collage:** Mixed aspect ratios in an asymmetric editorial grid layout. Images include architectural exteriors, interior spaces (kitchen, gym), and portrait photography. Crops are straight rectangular with small radius.
- **Science section:** Mixed — ingredient photography (ashwagandha roots, collagen powder in bowl) is on white/cream backgrounds with no crop radius. Botanical line illustrations are on light backgrounds, editorial style.
- **Journal cards:** Varied aspect ratios — the main feature card is tall/portrait (~3:4), thumbnail cards are landscape or square. Moody, warm-toned editorial photography.
- **Hero:** Product bottle floating/suspended on a stone pedestal against a warm cream wall with natural light casting diagonal shadow patterns. The image reads as a premium studio still-life.

### 1.5 Button/CTA Style

From the hero section and brand guideline (`web ui.png`):

**Primary Button ("Shop Collection"):**
- Shape: Rounded rectangle with ~8px border-radius (not full pill, not sharp)
- Fill: `--color-ink` (#1C2D3A) background, white text
- Height: ~48px, horizontal padding ~24–32px
- Text: Inter Medium, ~14–15px, likely slight letter-spacing
- Hover state: Per brand guideline, Ruby (#8C0D2C) is used for CTA active states. **Recommendation:** Hover → background transitions to `--color-accent` (#8C0D2C)

**Secondary Button/Link ("Learn More →"):**
- Style: Text link with right arrow (→), no background/border
- Color: `--color-ink` on light backgrounds
- Hover: Likely underline or color shift to `--color-accent`

**Newsletter "Sign up" button (footer):**
- Outlined or filled variant, smaller scale, within the form

### 1.6 Spacing Rhythm Observations

Examining the `landing page.png` composite for relative whitespace:

- **Nav:** Very compact — ~16px vertical padding, thin bar feel
- **Hero:** Very generous — large vertical breathing room, text occupies left ~45%, product image right ~55%. Airy, not cramped.
- **Trust badges:** Compact micro bar — thin line, minimal vertical padding (~16–24px), sits directly below hero as a reassurance strip
- **Featured Categories:** Generous — significant top padding before "Featured Categories" heading, comfortable gaps between the heading and the 4×2 grid, consistent gutters between tiles
- **Science:** Medium-generous — balanced split layout with ample whitespace around the ingredient photos and illustration blocks
- **Why YAQUTI:** Medium density — 3×2 grid of icon+text cards with thin border dividers, less airy than categories
- **Lifestyle:** Generous — large heading area with subtitle, then an asymmetric masonry-style photo grid with comfortable gaps
- **Testimonials:** Medium — 3-column card layout with quotation marks, moderate padding
- **Journal:** Generous — complex editorial grid (large feature + smaller cards), comfortable spacing
- **Footer:** Medium-compact — dark background, 4-column layout plus newsletter, legal bar at bottom

---

## 2. Design Tokens (Code-Ready Variables)

All tokens defined in `tailwind.config.ts` → `theme.extend`:

### 2.1 Colors

```typescript
colors: {
  ink: {
    DEFAULT: '#1C2D3A',
    light: '#2A3F4D',
  },
  cream: '#FAF9F7',
  parchment: '#F2EFE7',
  accent: '#8C0D2C',     // YAQUTI Ruby
  taupe: '#7C7061',
  border: '#E5E2DA',
  // Standard semantic
  white: '#FFFFFF',
  black: '#000000',
}
```

### 2.2 Typography

```typescript
fontFamily: {
  serif: ['var(--font-playfair)', 'Georgia', 'serif'],
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
},
fontSize: {
  // Modular scale ~1.25 ratio, 16px base
  'xs': ['0.75rem', { lineHeight: '1.5' }],        // 12px — eyebrows
  'sm': ['0.8125rem', { lineHeight: '1.5' }],       // 13px — small labels
  'base': ['1rem', { lineHeight: '1.6' }],           // 16px — body
  'lg': ['1.125rem', { lineHeight: '1.6' }],         // 18px — large body
  'xl': ['1.25rem', { lineHeight: '1.4' }],          // 20px
  '2xl': ['1.5rem', { lineHeight: '1.3' }],          // 24px — H3 mobile
  '3xl': ['1.75rem', { lineHeight: '1.25' }],        // 28px — H3 desktop / H2 mobile
  '4xl': ['2.25rem', { lineHeight: '1.2' }],         // 36px — H2 desktop
  '5xl': ['2.75rem', { lineHeight: '1.15' }],        // 44px — H1 mobile
  '6xl': ['3.5rem', { lineHeight: '1.1' }],          // 56px — H1 desktop
  '7xl': ['4rem', { lineHeight: '1.05' }],           // 64px — Display
},
```

### 2.3 Spacing (8pt grid tokens)

```typescript
spacing: {
  'section-sm': '3rem',      // 48px — mobile standard sections
  'section-md': '5rem',      // 80px — tablet standard sections
  'section-lg': '6rem',      // 96px — desktop standard sections
  'section-xl': '7.5rem',    // 120px — hero desktop
  'section-hero-mobile': '3.5rem', // 56px
  'section-hero-tablet': '5rem',   // 80px
},
```

### 2.4 Border Radius

```typescript
borderRadius: {
  'card': '8px',
  'button': '8px',
  'tile': '8px',
  'image': '8px',
  'pill': '9999px',
  'none': '0px',
},
```

### 2.5 Breakpoints

Using Tailwind defaults — no overrides:
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (cap container)

---

## 3. Global Spacing & Grid System

### 3.1 Vertical Rhythm Table (Final Values)

| Section | Desktop (lg+) | Tablet (md) | Mobile (base) |
|---|---|---|---|
| **Nav** | py: 16px | py: 16px | py: 12px |
| **Hero** | py: 120px (section-xl) | py: 80px (section-md) | py: 56px (section-hero-mobile) |
| **Trust Badges** | py: 20px (custom: 16–24 range) | py: 16px | py: 12px |
| **Featured Categories** | py: 96px (section-lg) | py: 80px (section-md) | py: 48px (section-sm) |
| **Science** | py: 96px | py: 80px | py: 48px |
| **Why YAQUTI** | py: 96px | py: 80px | py: 48px |
| **Lifestyle** | py: 96px | py: 80px | py: 48px |
| **Testimonials** | py: 96px | py: 64px | py: 48px |
| **Journal** | py: 96px | py: 80px | py: 48px |
| **Footer** | pt: 80px, pb: 24px | pt: 64px, pb: 24px | pt: 48px, pb: 16px |

### 3.2 Container & Grid

| Property | Value |
|---|---|
| **Max content width** | **1320px** (between 1280–1440 range, gives good line lengths) |
| **Side gutters (desktop)** | 64px |
| **Side gutters (tablet)** | 32px |
| **Side gutters (mobile)** | 16px |
| **Grid system** | 12-column CSS Grid |
| **Column gap (desktop)** | 24px |
| **Column gap (mobile)** | 16px |
| **Full-bleed sections** | Nav, Trust Badges, Footer — bg extends 100vw, inner content constrained to max-width |

### 3.3 `SectionShell` Component

A shared wrapper that applies the vertical rhythm from the table above. Accepts a `variant` prop:

```typescript
type SectionVariant = 'micro' | 'hero' | 'standard' | 'footer';
```

This component:
- Applies `py` from the rhythm table based on variant + breakpoint
- Centers content via `max-w-[1320px] mx-auto`
- Applies horizontal gutters (`px-4 md:px-8 lg:px-16`)
- Accepts `background` prop for full-bleed colored sections (wraps an outer `<section>` at full width around the padded inner container)

---

## 4. Section-by-Section Specifications

---

### 4.1 Navigation (`01-navigation-bar.png`)

**Reference:** `01-navigation-bar.png`, top of `landing page.png`

**Structure:**
- Full-width dark background (`--color-ink`)
- Inner content constrained to max-width container
- Three-zone horizontal flex layout:
  - **Left:** YAQUTI wordmark logo (image, `YAQUTI LOGO.png` white variant, ~120–140px wide)
  - **Center:** Navigation links — "Products", "Science", "About", "Journal", "Contact"
  - **Right:** Utility icons — Search (magnifying glass icon + "Search" label), Account (user icon + "Account" label), Cart (bag icon + "Cart" label)

**Styling:**
- Background: `bg-ink`
- Text: `text-white`, font-sans, font-medium, ~14px
- Nav links: Spaced evenly with ~32px gap
- Utility links: Icon + text label pairs, ~24px gap between each pair
- Height: ~56–64px total (py-16 + content)
- Bottom border: None visible — clean edge
- Sticky: `position: sticky; top: 0; z-index: 50`

**Hover states:**
- Nav links: `opacity-80` or subtle underline on hover
- Utility icons: `opacity-80` on hover

**Responsive behavior:**
- **Desktop (lg+):** Full horizontal layout as described
- **Tablet (md):** Collapse center nav links into hamburger menu. Keep logo left, cart icon right. Search/Account may move into hamburger drawer.
- **Mobile (base–sm):** Hamburger menu (left or right). Logo centered or left. Cart icon always visible. Full-screen or slide-in drawer for navigation with stacked vertical links.

**Content (exact copy from mockup):**
- Links: Products, Science, About, Journal, Contact
- Utilities: Search, Account, Cart

> [!NOTE]
> The nav mockup shows "Preducts" — this appears to be a typo in the mockup. **Recommendation:** Render as "Products".

---

### 4.2 Hero (`02-hero-section.png` + `hero-background-only.png`)

**Reference:** `02-hero-section.png` (with text overlay), `hero-background-only.png` (raw background plate)

**Background image analysis:**
Comparing the two hero files: `hero-background-only.png` is the exact same image as the background of `02-hero-section.png`, minus the text overlays. The product bottle on a stone pedestal with warm directional light and shadow patterns across a cream wall is the complete scene. There is **no gradient or tinted overlay** — the text sits directly on the warm cream background, which provides sufficient contrast because the left ~45% of the image is an uncluttered cream wall.

**Decision:** Use `hero-background-only.png` as the literal `background-image` (via `next/image` with `fill` and `object-cover` inside a sized parent), and render all headline/subheadline/CTA as real HTML positioned on the left.

**Structure:**
- Full-width section, cream background
- Min-height: ~85vh desktop, min 640px
- Background image: `hero-background-only.png` covers the full section
- Content aligned to the left side (~45% width on desktop), vertically centered within the section

**Content hierarchy (left-aligned, bottom-third of left area):**
1. **Headline:** "Be Rare." — Playfair Display Bold, ~56–64px desktop (text-6xl/text-7xl), `text-ink` color. The period is part of the headline.
2. **Subheadline:** "Science-backed nutrition for those who choose quality over compromise." — Inter Regular, ~16–18px (text-base/text-lg), `text-taupe`, max-width ~400px to prevent running into the product image
3. **CTA Group (horizontal flex, gap-16):**
   - Primary: "Shop Collection" — filled button (`bg-ink text-white`, rounded-button, py-3 px-8)
   - Secondary: "Learn More →" — text link with arrow, `text-ink`, font-medium

**Responsive behavior:**
- **Desktop (lg+):** Text left ~45%, image covers full section, product bottle visible on right ~55%
- **Tablet (md):** Text remains left-aligned but may take more width (~60%). Background image shifts slightly to keep product visible on right. Headline scales to ~44px. Min-height ~520px.
- **Mobile (base–sm):** Two options:
  - **Recommendation:** Stack vertically — background image becomes a contained image above the text content (not a background), or use background with `object-position: right center` to keep the product visible while text overlays on a slightly darkened/semi-transparent area on the left.
  - Headline: 36–40px. Min-height: auto with py-section-hero-mobile.
  - CTA buttons may stack vertically on very small screens (<375px).

> [!NOTE]
> "Be Rare." — per the brand guideline, this slogan should **only** be rendered in YAQUTI Ruby (#8C0D2C). However, examining the hero mockup, the headline "Be Rare." appears in dark ink/black, not ruby. This contradicts the brand guideline's explicit rule. **Open question for client: should the hero headline follow the brand guideline (ruby) or the landing page mockup (ink/dark)?** I'll flag this in Open Questions. For now, the mockup shows ink-colored text, so I will implement as `text-ink` and await confirmation.

---

### 4.3 Trust Badges Bar (`03-trust-badges-bar.png`)

**Reference:** `03-trust-badges-bar.png`, visible in `landing page.png` between hero and categories

**Structure:**
- Full-width micro bar
- Light background (`bg-cream` or `bg-parchment` — appears same as page bg with a top and/or bottom border)
- Bottom border: 1px `border-border` (#E5E2DA) — a fine rule separating from the next section
- 4 badges evenly spaced in a horizontal flex row

**Badge pattern (each):**
- Icon (monoline, 20–24px) + Label text
- Horizontal layout: icon left, text right
- Gap between icon and text: ~8–12px
- Font: Inter Regular, ~13–14px, `text-ink` or `text-taupe`

**Badges (left to right):**
1. 🧪 "Clinically Formulated"
2. ⚙️ "Premium Ingredients"
3. ✅ "Third-Party Tested"
4. 📦 "Worldwide Shipping"

> [!NOTE]
> Icons are small in the mockup (~34KB file total for the bar). The exact icons are partially legible: flask/beaker, gear/atom, checkmark circle, and box/globe. I'll use Lucide icons (MIT licensed) that match these concepts: `Flask`, `Gem`/`Atom`, `BadgeCheck`/`ShieldCheck`, `Globe`/`Truck`. **Awaiting confirmation on exact icon choices.**

**Responsive behavior:**
- **Desktop (lg+):** 4 badges in a row, `justify-between` within the container
- **Tablet (md):** 4 badges in a row, slightly tighter spacing, may wrap to 2×2 if container is too tight
- **Mobile (base–sm):** **Recommendation:** Horizontal scroll (no wrapping) with `overflow-x: auto` and snap points, or 2×2 grid. Horizontal scroll preserves the "badge strip" pattern better. Each badge is a `flex-shrink-0` item.

---

### 4.4 Featured Categories (`04-featured-categories.png` + `featcat-*.png`)

**Reference:** `04-featured-categories.png`, confirmed in `landing page.png`

**Structure:**
- Section heading: "Featured Categories" — Playfair Display Bold, ~36–44px, `text-ink`, left-aligned
- Heading to grid gap: ~40–48px
- 4×2 grid of category tiles (8 total)
- Background: `bg-cream`

**Grid layout:**
- 4 columns desktop, equal width
- Gap between tiles: 24px (column and row gap)
- Tiles are 1:1 aspect ratio (square)

**Category tiles (in order, row by row):**

| Row 1 | Row 2 |
|---|---|
| Whey Protein (`featcat-whey-protein.png`) | Ashwagandha (`featcat-ashwagandha-2.png`) |
| Men's Health (`featcat-mens-health.png`) | Beetroot (`featcat-beetroot.png`) |
| Women's Health (`featcat-womens-health.png`) | Collagen (`featcat-collagen.png`) |
| Ashwagandha (`featcat-ashwagandha-1.png`) | Skincare (`featcat-skincare.png`) |

**Tile treatment:**
- Square image (1:1 aspect ratio, `aspect-square`)
- Image fills the tile with `object-cover`
- Subtle border-radius: `rounded-card` (8px)
- Below the image: Category label text — Playfair Display or Inter Medium, ~16–18px, `text-ink`, left-aligned, margin-top ~12–16px
- No overlay text on the image itself
- Hover state: **Recommendation** — subtle scale transform (1.02) with transition, or slight shadow elevation

**Labels (exact copy):**
Row 1: "Whey Protein", "Men's Health", "Women's Health", "Ashwagandha"
Row 2: "Ashwagandha", "Beetroot", "Collagen", "Skincare"

> [!NOTE]
> "Ashwagandha" appears twice with two different images. The first (row 1) shows a hand holding a capsule, the second (row 2) shows a bottle. This appears intentional in the mockup. **Recommendation:** Keep as-is per the design, but flag to client that having the same category listed twice may be confusing from a UX perspective.

**Responsive behavior:**
- **Desktop (lg+):** 4 columns × 2 rows
- **Tablet (md):** 3 columns (wrapping to 3 rows: 3-3-2)
- **Mobile (base–sm):** 2 columns × 4 rows

---

### 4.5 Science Section (`05-science-section.png` + `science-*.png`)

**Reference:** `05-science-section.png`, confirmed in `landing page.png`

**Structure:**
- Background: `bg-cream` (or very slightly off-white — appears same as page background)
- Section heading: "Science" — Playfair Display Bold, ~36–44px, `text-ink`, left-aligned
- Below heading: An asymmetric editorial grid layout featuring ingredient photography and botanical illustrations

**Layout (desktop):**
The Science section uses a bento/editorial grid layout with 5 content blocks:

```
┌──────────────┬──────────────┬──────────────────────────┐
│              │              │   Collagen peptides      │
│  Ashwagandha │  Collagen    │   [illustration + text]  │
│  root photo  │  powder bowl │                          │
│              │              ├──────────────────────────┤
│              │              │   Collagen               │
│              │              │   [illustration + text]  │
├──────────────┴──────────────┤                          │
│  Ashwagandha root           │                          │
│  [title + description text  │                          │
│   + "Clinical Studies →"]   │                          │
└─────────────────────────────┴──────────────────────────┘
```

**Content blocks:**
1. **Top-left:** Photo of ashwagandha roots (`science-ashwagandha-root.png`) — square or slightly portrait crop
2. **Top-center:** Photo of collagen powder in bowl (`science-collagen-powder.png`) — square crop
3. **Right-top:** "Collagen peptides" — title (Playfair Display, ~20–24px) + description paragraph (Inter Regular, ~14–15px, `text-taupe`) + botanical illustration (`science-illustration-collagen-peptides.png`). Includes "Clinical Studies →" link.
4. **Bottom-left span:** "Ashwagandha root" — title + description paragraph + "Clinical Studies →" link
5. **Right-bottom:** "Collagen" — title + botanical illustration (`science-illustration-collagen.png`). Similar card treatment.

**Description text content:**

> [!WARNING]
> The body text in the Science section mockup is too small/blurry to read verbatim at the provided resolution. The titles "Ashwagandha root" and "Collagen peptides" and "Collagen" are legible, as is the "Clinical Studies →" CTA link. The paragraph descriptions appear to be placeholder Latin-adjacent text. **Recommendation:** I will use plausible science-backed marketing copy as placeholder, clearly marked for client to replace with final copy. Flagged in Open Questions.

**CTA link style:** "Clinical Studies →" — text link with arrow, `text-ink`, font-medium, hover → `text-accent`

**Responsive behavior:**
- **Desktop (lg+):** Bento grid as sketched above, ~3-column asymmetric
- **Tablet (md):** 2-column layout — photo blocks stack beside text blocks
- **Mobile (base–sm):** Single column stack — photos and text blocks alternate vertically. Full-width images.

---

### 4.6 Why YAQUTI (`06-why-yaquti-section.png`)

**Reference:** `06-why-yaquti-section.png`, confirmed in `landing page.png`

**Structure:**
- Background: `bg-parchment` (slightly warmer than cream — creates visual separation)
- Section heading: "Why YAQUTI" — Playfair Display Bold, ~36–44px, `text-ink`, left-aligned
- Below heading: 3×2 grid of USP feature cards (6 total)

**Grid layout:**
- 3 columns × 2 rows on desktop
- Cards separated by thin 1px borders (`border-border`) — both vertical and horizontal dividers creating a table-like grid
- Each card has consistent internal padding: ~24–32px

**USP Cards (in order, row by row):**

| Row 1 | | |
|---|---|---|
| **Science First** | **Honest Ingredients** | **Precision Manufacturing** |
| Icon: Scale/balance | Icon: Leaf/checkmark | Icon: Cog/gear |

| Row 2 | | |
|---|---|---|
| **Clinical Quality** | **Sustainable Packaging** | **Premium Experience** |
| Icon: Microscope/shield | Icon: Recycle/leaf | Icon: Star/diamond |

**Card internal structure:**
1. Icon (monoline, 24–32px, `text-ink` or `text-taupe`) — top
2. Title (Inter SemiBold or Playfair Display, ~16–18px, `text-ink`) — below icon, gap ~12px
3. Description (Inter Regular, ~13–14px, `text-taupe`, 2–3 lines) — below title, gap ~8px

> [!WARNING]
> The description text beneath each USP title is too small to read in the mockup. The titles themselves are legible. **Recommendation:** Write plausible supporting copy, flag for client replacement. Flagged in Open Questions.

**Responsive behavior:**
- **Desktop (lg+):** 3 columns × 2 rows with border grid
- **Tablet (md):** 2 columns × 3 rows with border grid
- **Mobile (base–sm):** 1 column × 6 rows, each card full-width, separated by horizontal border only

---

### 4.7 Lifestyle Section (`07-lifestyle-section.png` + `lifestyle-*.png`)

**Reference:** `07-lifestyle-section.png`, confirmed in `landing page.png`

**Structure:**
- Background: `bg-cream`
- Section heading: "Lifestyle" — Playfair Display Bold, ~36–44px, `text-ink`
- Subtitle: "Quiet confidence and environmental luxury" — Inter Regular, ~16px, `text-taupe`
- Below heading/subtitle: A paragraph of descriptive text (Inter Regular, ~14–15px, `text-taupe`)
- Then: An asymmetric editorial photo grid/collage

**Photo collage layout (desktop):**

```
┌──────────────────────────────────┬──────────────┬──────────────┐
│                                  │              │              │
│   House exterior (large)         │   Kitchen    │  Portraits   │
│   landscape ~16:9                │   ~3:4       │  duo ~3:4    │
│                                  │              │              │
│                                  │              │              │
├──────────────┬──────────────┬────┴──────────────┴──────────────┤
│  Small 1     │  Small 2     │          Gym interior            │
│  ~1:1        │  ~1:1        │          landscape ~16:9         │
└──────────────┴──────────────┴──────────────────────────────────┘
```

Actually, re-examining `07-lifestyle-section.png` more carefully:

The layout appears to be:
- **Row 1:** Large house exterior spanning ~60% width (landscape) | Kitchen image ~20% | Portrait duo ~20% (both portrait/tall)
- **Row 2:** Two smaller square images on the left (~20% each) | Professional woman portrait (~20%) | Gym interior (~40% landscape)

> [!NOTE]
> The exact grid proportions are difficult to determine precisely from the low-res mockup. The overall impression is an editorial magazine-style asymmetric collage. I'll map this to a CSS Grid with explicit `grid-template-areas` and proportional `fr` units.

**Images used:**
1. `lifestyle-house-exterior.png` — modern house with greenery, landscape
2. `lifestyle-kitchen.png` — minimal kitchen with island, landscape/square
3. `lifestyle-portraits-duo.png` — woman in dark clothing, portrait orientation
4. `lifestyle-gym-interior.png` — person at gym equipment, portrait/tall

**Additional images in the collage bottom row:**
The bottom row in the mockup shows some additional small images (possibly cropped from the same set or additional images not provided). Cross-referencing `landing page.png`:
- Bottom row shows: two smaller square images + the woman portrait + gym interior
- The two small squares appear to be additional lifestyle images not in the provided asset set

> [!WARNING]
> The bottom row of the lifestyle collage appears to contain 2 small square images that are not in the provided file set. They look like additional architectural/interior shots at very low resolution. **Recommendation:** Reuse the `lifestyle-kitchen.png` and `lifestyle-house-exterior.png` with different crops for these slots, or ask client for additional source images. Flagged in Open Questions.

**Descriptive text content:**

> [!WARNING]
> The paragraph text below the subtitle is too small to read in the mockup. **Flagged for client-provided copy.**

**Responsive behavior:**
- **Desktop (lg+):** 2-row asymmetric CSS Grid collage as described
- **Tablet (md):** Simplify to 2-column grid with auto-flow, maintaining aspect ratios
- **Mobile (base–sm):** Single column stack of images, each full-width, maintaining their original aspect ratios via `aspect-ratio` CSS

---

### 4.8 Testimonials (`08-testimonials-section.png`)

**Reference:** `08-testimonials-section.png`, confirmed in `landing page.png`

**Structure:**
- Background: `bg-parchment` (subtle contrast from adjacent sections)
- Section heading: "Testimonials" — Playfair Display Bold, ~36–44px, `text-ink`, left-aligned
- Below heading: 3 testimonial cards in a horizontal row

**Card layout:**
- 3 cards in a row, equal width, separated by consistent gaps (24px)
- Each card: `bg-cream` or `bg-white`, `border border-border`, rounded-card (8px), internal padding ~24–32px
- No visible shadows — flat with border only

**Card internal structure:**
1. **Large quotation mark** — oversized `"` or `66` glyph at top, Playfair Display, ~48px, `text-ink` or `text-taupe`. Decorative, not functional.
2. **Quote text** — Inter Regular, ~14–15px, `text-taupe`, 3–5 lines. Italic or regular.
3. **Attribution** — preceded by a dash: "– Sol.", "– COS", "– Stöfun" (or similar)
   - Inter Medium, ~13–14px, `text-ink`

**Testimonial content:**

> [!WARNING]
> The testimonial quote text is largely illegible at this resolution. The attributions appear to be: "– Sol.", "– COS", and "– Stöfun" (these may be brand names or person names — unclear at this resolution). The testimonials read as 3–5 lines of text each. **Recommendation:** Use plausible premium wellness testimonial copy as placeholder. Flagged in Open Questions.

**Rating display:** None visible — no star ratings in the mockup. The quotes stand alone.

**Carousel vs. static:** Static 3-column grid on desktop. No carousel indicators, arrows, or pagination visible.

**Responsive behavior:**
- **Desktop (lg+):** 3 cards in a row
- **Tablet (md):** 3 cards in a row (slightly tighter) or 2 cards + 1 below
- **Mobile (base–sm):** Single column stack, or horizontal scroll carousel with snap points. **Recommendation:** Horizontal scroll carousel with snap-to-card, since stacking 3 cards vertically may feel too long. Show peek of next card to afford scrollability.

---

### 4.9 Journal (`09-journal-section.png` + `journal-*.png`)

**Reference:** `09-journal-section.png`, confirmed in `landing page.png`

**Structure:**
- Background: `bg-cream`
- Section heading: "Journal" — Playfair Display Bold, ~36–44px, `text-ink`, left-aligned
- Below heading: Editorial grid layout with 1 main feature card + 4 smaller article cards

**Layout (desktop):**

```
┌──────────────────────┬──────────────┬──────────────┐
│                      │  Thumb card  │  Thumb card  │
│   Main feature       │  1 (top-r)   │  2 (top-r2)  │
│   card (large)       │              │              │
│   ~50% width         ├──────────────┴──────────────┤
│   tall/portrait      │  Thumb card  │  Thumb card  │
│                      │  3 (bot-r)   │  4 (bot-r2)  │
│                      │              │              │
└──────────────────────┴──────────────┴──────────────┘
```

The layout is a left-side large feature article card taking ~50% width, with a 2×2 grid of smaller article cards on the right ~50%.

**Main feature card:**
- Large image (`journal-main-feature.png`) — portrait aspect ~3:4, shows a woman's hands reaching for a YAQUTI bottle on a table
- Overlaid or below the image:
  - Category eyebrow: "Women's Wellness" — uppercase, Inter Regular, ~12px, `text-taupe`, tracked (+0.08em)
  - Title: "Nutrition, Nutrition. Longevity, Recovery Recovery" — Playfair Display Bold, ~24–28px, `text-ink`
  - Description: ~2 lines of body text, Inter Regular, ~14px, `text-taupe`
  - CTA: "Learn More" — text link, `text-ink`, font-medium

> [!NOTE]
> The main feature title reads oddly ("Nutrition, Nutrition. Longevity, Recovery Recovery") — this appears to be placeholder/lorem text in the mockup, not final copy. **Will implement as-is, flagged for client replacement.**

**Smaller article cards (4 cards in 2×2 grid):**
Each card:
- Thumbnail image (landscape ~16:9 or 3:2), rounded-card (8px)
- Below image:
  - Category eyebrow: uppercase, ~11–12px, `text-taupe`, tracked
  - Title: Inter SemiBold or Playfair Display, ~15–16px, `text-ink`, 2 lines max
  - Description: ~1–2 lines, Inter Regular, ~13px, `text-taupe` (may not be visible on all cards)
  - CTA: "Learn More" — text link, ~13px

**Thumbnail images:**
1. `journal-thumb-1.png` — bowl of healthy food (salad/grains)
2. `journal-thumb-2.png` — woman in yoga/stretching pose
3. `journal-thumb-3.png` — woman in athletic wear (fitness portrait)
4. `journal-thumb-4.png` — man shirtless (fitness portrait)

**Card titles (best reading from mockup):**
- Card 1 top-right: Category "Nutrition" — Title reads approximately "Stamina, Longevity, Recovery, Women's Health" (partially legible)
- Card 2 top-right: Category "Recovery" — Title reads approximately "Recovery: Wellness and Recovery"
- Card 3 bottom-right: Category "Women's Wellness" — Title approximately "Natural Wellness and Women's MCOss" (illegible)
- Card 4 bottom-right: Category "Men's Health" — Title approximately "Men's Health & Strength, That's Yaquti"

> [!WARNING]
> All thumbnail card titles and category labels are partially illegible at this resolution. I'll write plausible placeholder titles matching the YAQUTI brand voice. **Flagged in Open Questions for client-provided final copy.**

**Responsive behavior:**
- **Desktop (lg+):** Feature card (50%) + 2×2 grid (50%), side by side
- **Tablet (md):** Feature card full width on top, 2×2 thumbnail grid below
- **Mobile (base–sm):** Single column — feature card full width, then thumbnails stacked vertically (or 2-column grid for thumbnails)

---

### 4.10 Footer (`10-footer-section.png`)

**Reference:** `10-footer-section.png`, confirmed at bottom of `landing page.png`

**Structure:**
- Full-bleed dark background (`bg-ink`)
- Inner content constrained to max-width container
- Two vertical zones: **Main footer** (link columns + newsletter) and **Legal bar** (bottom)

**Main footer layout (desktop):**
4 link columns + 1 newsletter sign-up area, all in a horizontal flex/grid row:

| Column 1 | Column 2 | Column 3 | Column 4 | Newsletter |
|---|---|---|---|---|
| **Products** | **Science** | **About** | | **Newsletter Signup** |
| Formulas | About | Values | | [email input] [Sign up] |
| Bundles | Blog | Sourcing | | Social icons row |
| | Process | Standards | | |
| | | Manufacturing | Contact | |

**Column heading style:** Inter SemiBold, ~14px, `text-white`, uppercase or title case
**Link style:** Inter Regular, ~13–14px, `text-white/70` (white with opacity), hover → `text-white`

**Newsletter form:**
- Heading: "Newsletter Signup" — Inter SemiBold, ~14px, `text-white`
- Input: Text field with placeholder "Enter your email address", `bg-transparent`, `border-white/30`, rounded-button, ~40–44px height, `text-white`
- Button: "Sign up" — `bg-white text-ink`, rounded-button, ~40–44px height
- Layout: Input and button side-by-side (inline-flex)

**Social icons:**
- Row of 4–5 icons below the newsletter form
- Visible icons: Facebook, Instagram, Twitter/X, YouTube, LinkedIn (or similar)
- Style: White monoline, ~20px, hover → `opacity-80`

> [!NOTE]
> Social icons are very small in the mockup. I can identify what appears to be Facebook (f), Instagram (camera), Twitter/X, and possibly YouTube and LinkedIn. **Will use standard social media icon set (Lucide or custom SVG). Awaiting confirmation of exact platforms.**

**Legal bar:**
- Separated from main footer by a 1px `border-white/10` rule
- Left: "Copyright © 2025. All rights reserved." (or similar year)
- Right: "Legal Notice" — text link

> [!NOTE]
> The copyright year in the mockup appears to read "2025" — **Recommendation:** Use current year dynamically or set to 2025 per mockup. The legal notice text is partially legible.

**Responsive behavior:**
- **Desktop (lg+):** 4 link columns + newsletter in a 5-zone horizontal layout
- **Tablet (md):** 2×2 grid for link columns + newsletter full-width below
- **Mobile (base–sm):** Single column stack — each column full-width, newsletter at bottom. Alternatively, link columns as accordion/collapsible sections.

---

## 5. Component Inventory

### Shared UI Primitives (`components/ui/`)

| Component | File | Purpose |
|---|---|---|
| `SectionShell` | `components/ui/SectionShell.tsx` | Standard section wrapper with vertical padding by variant (micro/hero/standard/footer), centered container, horizontal gutters, optional full-bleed background |
| `Container` | `components/ui/Container.tsx` | Max-width content container (1320px) with responsive gutters |
| `Button` | `components/ui/Button.tsx` | Primary (filled) and secondary (text link with arrow) button variants. Props: `variant`, `size`, `href` |
| `SectionHeading` | `components/ui/SectionHeading.tsx` | H2 section title with consistent serif styling, optional subtitle and description |
| `Card` | `components/ui/Card.tsx` | Generic card with image, eyebrow, title, description, CTA. Used in Journal and potentially Categories |
| `Badge` | `components/ui/Badge.tsx` | Icon + label horizontal pair for trust badges |
| `Icon` | `components/ui/Icon.tsx` | Wrapper for monoline icons (Lucide React or custom SVG), consistent sizing |
| `NavLink` | `components/ui/NavLink.tsx` | Navigation link with hover/active states |
| `Logo` | `components/ui/Logo.tsx` | YAQUTI wordmark component, accepts color variant (dark/light) |
| `QuoteCard` | `components/ui/QuoteCard.tsx` | Testimonial card with large quote mark, text, attribution |
| `CategoryTile` | `components/ui/CategoryTile.tsx` | Square image tile with label beneath |
| `USPCard` | `components/ui/USPCard.tsx` | Icon + title + description card for Why YAQUTI section |
| `NewsletterForm` | `components/ui/NewsletterForm.tsx` | Email input + submit button inline form |
| `SocialLinks` | `components/ui/SocialLinks.tsx` | Row of social media icon links |

### Section Components (`components/sections/`)

| Component | File | Reference |
|---|---|---|
| `Nav` | `components/sections/Nav.tsx` | `01-navigation-bar.png` |
| `Hero` | `components/sections/Hero.tsx` | `02-hero-section.png` + `hero-background-only.png` |
| `TrustBadges` | `components/sections/TrustBadges.tsx` | `03-trust-badges-bar.png` |
| `FeaturedCategories` | `components/sections/FeaturedCategories.tsx` | `04-featured-categories.png` |
| `Science` | `components/sections/Science.tsx` | `05-science-section.png` |
| `WhyYaquti` | `components/sections/WhyYaquti.tsx` | `06-why-yaquti-section.png` |
| `Lifestyle` | `components/sections/Lifestyle.tsx` | `07-lifestyle-section.png` |
| `Testimonials` | `components/sections/Testimonials.tsx` | `08-testimonials-section.png` |
| `Journal` | `components/sections/Journal.tsx` | `09-journal-section.png` |
| `Footer` | `components/sections/Footer.tsx` | `10-footer-section.png` |

### Page Composition

```typescript
// app/page.tsx
import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import FeaturedCategories from '@/components/sections/FeaturedCategories';
import Science from '@/components/sections/Science';
import WhyYaquti from '@/components/sections/WhyYaquti';
import Lifestyle from '@/components/sections/Lifestyle';
import Testimonials from '@/components/sections/Testimonials';
import Journal from '@/components/sections/Journal';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBadges />
      <FeaturedCategories />
      <Science />
      <WhyYaquti />
      <Lifestyle />
      <Testimonials />
      <Journal />
      <Footer />
    </>
  );
}
```

---

## 6. Responsive Strategy Summary

### Breakpoint Behavior Overview

| Breakpoint | Width | Layout Strategy |
|---|---|---|
| `base` (mobile) | 0–639px | Single column, stacked sections, hamburger nav, full-width images |
| `sm` (mobile landscape) | 640–767px | Minor adjustments (2-column grids for categories) |
| `md` (tablet) | 768–1023px | 2-column layouts, simplified grids, medium spacing |
| `lg` (desktop) | 1024–1279px | Full desktop layouts, 3–4 column grids, editorial bento |
| `xl` (large desktop) | 1280–1535px | Same as lg, capped container width kicks in |
| `2xl` (wide) | 1536px+ | Content constrained to 1320px max, full-bleed backgrounds |

### Key Responsive Decisions

1. **Nav:** Desktop → horizontal links. Mobile → hamburger drawer. Cart icon always visible.
2. **Hero:** Desktop → text-left-image-right over background. Mobile → stacked (image top, content bottom) or background with repositioned `object-position`.
3. **Category grid:** 4 col → 3 col → 2 col
4. **Science bento:** 3-zone editorial → 2-column → single column stack
5. **Why YAQUTI grid:** 3×2 → 2×3 → 1×6 (border grid adapts)
6. **Lifestyle collage:** Asymmetric grid → 2-column → single column stack
7. **Testimonials:** 3 cards → scroll carousel on mobile
8. **Journal:** Feature + 2×2 grid → feature-top + grid-below → single column stack
9. **Footer:** 5-zone → 2×2 + newsletter → single column accordion

### Image Handling

- All images via `next/image` with explicit `width`/`height` or `fill` mode
- `priority` only on hero background image
- All below-fold images lazy-loaded (default)
- `sizes` attribute specified for each image to prevent unnecessarily large downloads:
  - Category tiles: `(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw`
  - Lifestyle images: Vary by grid position
  - Journal thumbnails: `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw`

---

## 7. Accessibility Checklist

### Color Contrast (WCAG AA)

| Pairing | Foreground | Background | Contrast Ratio | Pass? |
|---|---|---|---|---|
| Body text on cream | `#1C2D3A` (ink) | `#FAF9F7` (cream) | ~14.5:1 | ✅ AA |
| Body text on parchment | `#1C2D3A` (ink) | `#F2EFE7` (parchment) | ~13.2:1 | ✅ AA |
| Taupe text on cream | `#7C7061` (taupe) | `#FAF9F7` (cream) | ~4.8:1 | ✅ AA (body), ✅ AA (large) |
| White text on ink bg | `#FFFFFF` (white) | `#1C2D3A` (ink) | ~14.5:1 | ✅ AA |
| Ruby accent on cream | `#8C0D2C` (accent) | `#FAF9F7` (cream) | ~7.8:1 | ✅ AA |
| Ruby accent on ink | `#8C0D2C` (accent) | `#1C2D3A` (ink) | ~1.9:1 | ❌ FAIL |
| White/70 on ink bg | `rgba(255,255,255,0.7)` | `#1C2D3A` | ~8.5:1 | ✅ AA |

> [!WARNING]
> **Ruby on ink fails.** If any accent-colored text is placed on the dark ink background, it will not pass WCAG AA. **Recommendation:** Never use `text-accent` on `bg-ink`. Use `text-white` or `text-cream` on dark backgrounds. This is consistent with the mockups, which don't show ruby text on dark backgrounds.

### Additional Accessibility Requirements

- [ ] All content images have descriptive `alt` text (not "image" or empty)
- [ ] Decorative images (botanical illustrations, lifestyle collage) use `alt=""` and `aria-hidden="true"` if purely decorative, or descriptive alt if they convey meaning
- [ ] YAQUTI logo has `alt="YAQUTI"` (wordmark)
- [ ] All interactive elements (buttons, links, nav items) have visible focus states: `ring-2 ring-accent ring-offset-2` (or equivalent)
- [ ] Skip-to-content link for keyboard users (hidden visually, visible on focus)
- [ ] Semantic HTML: `<nav>`, `<main>`, `<section>` (with `aria-label`), `<article>` for journal cards, `<footer>`
- [ ] `<h1>` used once (hero headline "Be Rare."), `<h2>` for each section heading, `<h3>` for card titles — no heading level skips
- [ ] `prefers-reduced-motion` media query: disable hover scale transforms, fade transitions, any scroll-triggered animations
- [ ] Newsletter form: `<label>` associated with email input, submit button has accessible name, validation messages are announced to screen readers
- [ ] Mobile hamburger menu: `aria-expanded`, `aria-controls`, focus trap within open menu

---

## 8. Open Questions / Flags for Client Review

### ✅ Resolved Decisions

1. **"Be Rare." color in hero:** → **Ruby (#8C0D2C)** per brand guideline. ✅
2. **Typeface licensing:** → No font files available. Using **Playfair Display** (serif) + **Inter** (sans) from Google Fonts. ✅
3. **Ashwagandha appears twice:** → **Intentional.** Keep as-is. ✅
4. **Missing lifestyle collage images:** → **Use placeholders.** Client will replace later. ✅
5. **Social media platforms:** → **Facebook, WhatsApp, Twitter, Instagram.** ✅

### 🟡 Content Needing Final Copy

6. **Science section body text:** Paragraph descriptions under "Ashwagandha root", "Collagen peptides", and "Collagen" are illegible in the mockup. I'll write plausible placeholder copy. Please provide final marketing copy.

7. **Why YAQUTI descriptions:** The supporting text under each of the 6 USP headings is illegible. Same approach — placeholder pending final copy.

8. **Testimonial quotes and attributions:** The full quote text is illegible. The attributions appear to read "– Sol.", "– COS", and "– Stöfun" — please confirm these names and provide the actual testimonial text.

9. **Journal article titles and categories:** All 5 article card titles/categories/descriptions are partially illegible. Please provide final editorial content.

10. **Lifestyle section description paragraph:** The body text below the subtitle is illegible. Please provide final copy.

11. **Footer link structure:** The exact link labels are partially legible. My best reading is listed in section 4.10, but please confirm the complete navigation structure for the footer columns.

### 🟢 Notes (No Action Needed from Client)

12. **YAQUTI Slate color (#859AFA):** Not used on the landing page. Included as a dormant token in the design system for future use.

13. **Brand guideline RGB inconsistencies:** The guideline document has several RGB values that don't match the listed hex values (Midnight, Slate). I'm using the hex values and visual swatches, which are internally consistent.

14. **Trust badge icons:** I'll use Lucide React icons that match the concepts shown. These are MIT-licensed and match the monoline 2px-stroke aesthetic specified in the brand guideline icon style.

---

## 9. Proposed Build Sequence

### Phase A: Foundation (do first)

| Step | Task | Why first |
|---|---|---|
| A1 | Initialize Next.js project with App Router + TypeScript + Tailwind CSS | Framework scaffold |
| A2 | Configure `tailwind.config.ts` with all design tokens (colors, fonts, spacing, radius, containers) | Everything depends on these |
| A3 | Set up `next/font` for both typefaces (Playfair Display + Inter, or local files if provided) | Typography affects all components |
| A4 | Create `SectionShell`, `Container`, `Button` primitives | Reused by every section |
| A5 | Create `app/layout.tsx` with font providers, global styles, meta tags | App shell |
| A6 | Copy all image assets to `public/images/` | Needed by every section |

### Phase B: Sections (top-to-bottom page order)

| Step | Component | Dependencies | Complexity |
|---|---|---|---|
| B1 | `Nav` | Logo, NavLink | Medium (sticky, responsive hamburger) |
| B2 | `Hero` | Button, SectionShell | Medium (background image, responsive) |
| B3 | `TrustBadges` | Badge, SectionShell | Low |
| B4 | `FeaturedCategories` | CategoryTile, SectionHeading, SectionShell | Low–Medium |
| B5 | `Science` | SectionHeading, Button (link), SectionShell | High (bento grid) |
| B6 | `WhyYaquti` | USPCard, SectionHeading, SectionShell | Medium (border grid) |
| B7 | `Lifestyle` | SectionHeading, SectionShell | High (asymmetric collage grid) |
| B8 | `Testimonials` | QuoteCard, SectionHeading, SectionShell | Medium |
| B9 | `Journal` | Card, SectionHeading, SectionShell | High (editorial grid) |
| B10 | `Footer` | NewsletterForm, SocialLinks, Logo, SectionShell | Medium |

**Why this order:**
- Building top-to-bottom matches the visual review flow — I can compare against `landing page.png` as each section is added
- Foundation primitives (Phase A) ensure every section component is consistent from the start
- The highest-complexity sections (Science bento, Lifestyle collage, Journal editorial grid) benefit from having simpler sections built first, establishing the rhythm and validating the spacing system

### Phase C: Polish

| Step | Task |
|---|---|
| C1 | Responsive testing at all 5 breakpoints |
| C2 | Hover/focus/active states on all interactive elements |
| C3 | Accessibility audit (contrast, alt text, keyboard nav, screen reader) |
| C4 | `prefers-reduced-motion` implementation |
| C5 | Performance check (Lighthouse, image sizes, font loading) |
| C6 | Final pixel-level comparison against all 10 section mockups |
| C7 | Cross-browser testing (Chrome, Firefox, Safari, Edge) |

---

> [!IMPORTANT]
> **This plan is ready for your review.** No code will be written until you approve the design system, section specifications, and resolve the Open Questions above. Please review and confirm or adjust before I proceed to implementation.
