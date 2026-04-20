# Design Brief

## Direction

Learnify — Premium education consultancy with light, refined aesthetic. Deep navy blue primary with gold accents signals luxury, trust, and aspirational guidance. White backgrounds with minimal grey accents create spacious, premium visual hierarchy optimized for credibility and conversion.

## Tone

Premium minimalist elegance — clean white spaces, navy blue for authority & trust, gold for opportunity & conversion. Geometric sans-serif typography conveys modern precision while maintaining approachable professionalism.

## Differentiation

Navy + Gold + White iconic palette in premium education signals institutional credibility and aspirational quality. Geometric display font (Plus Jakarta Sans) paired with clean body font (General Sans) conveys both expertise and accessibility—premium guidance without intimidating formality.

## Color Palette

| Token      | OKLCH           | Role                                      |
| ---------- | --------------- | ----------------------------------------- |
| background | 1.0 0.001 0     | Pure white, clean primary content area    |
| foreground | 0.21 0.01 250   | Deep navy, primary text                   |
| card       | 1.0 0.001 0     | Pure white elevated surfaces              |
| primary    | 0.35 0.06 250   | Deep navy blue for trust & authority      |
| accent     | 0.67 0.19 75    | Premium gold for CTAs & conversion focus  |
| muted      | 0.97 0.001 0    | Off-white for subtle backgrounds          |

## Typography

- Display: Plus Jakarta Sans — geometric, modern, bold for headlines and hero messaging
- Body: General Sans — clean, legible, premium sans-serif for body text and UI labels
- Mono: Geist Mono — professional code/data display
- Scale: hero `text-6xl md:text-7xl font-bold`, h2 `text-4xl md:text-5xl font-bold`, label `text-sm font-semibold tracking-tight`, body `text-base leading-relaxed`

## Elevation & Depth

Minimal shadow hierarchy with navy-tinted shadows for premium feel. Header floats with subtle navy shadow, content cards use delicate elevation, footer recesses with border-top only. Maximum 2 shadow tiers — no stacked depth.

## Structural Zones

| Zone    | Background    | Border                 | Notes                                              |
| ------- | ------------- | ---------------------- | -------------------------------------------------- |
| Header  | card (white)  | border-b navy subtle   | Navbar with navy text, gold accent on active link |
| Hero    | primary/navy  | —                      | Full-width navy background, white/gold text       |
| Content | background    | —                      | Alternating white/off-white for section contrast  |
| Cards   | card (white)  | shadow-subtle          | Minimal elevation, spacing-driven hierarchy       |
| Footer  | muted/off-wh  | border-t navy subtle   | Navy text, gold links, contact info               |

## Spacing & Rhythm

Generous whitespace: 48–64px gaps between sections. Cards use 24px internal padding, 16px element gaps. Hierarchy through scale: 8px micro, 16px component, 32px section, 48px major block spacing.

## Component Patterns

- Buttons: rounded-md, primary (navy) with white text & gold hover state, secondary (off-white bg) with navy text
- Cards: rounded-md, white background, shadow-subtle, 24px padding, transitions on hover
- Hero CTA: gold background with navy text, prominent rounded button, all-caps label
- Section Headers: uppercase tracking-tight, navy text, muted-foreground labels above
- Trust Stats: bold navy numbers, small muted labels, minimal design

## Motion

- Entrance: fade-in on load, slide-up for cards (0.6s easing)
- Hover: button lift with shadow-elevated, gold accent appears/brightens on focus
- Subtle: no bounce or playful animations—premium refinement demands restraint

## Constraints

- OKLCH tokens exclusively; never raw hex, rgb, or arbitrary Tailwind colors
- Maximum 2 shadow tiers; no stacking or decorative shadows
- Maintain 0.8+ L difference for text-on-background in light mode
- Mobile-first responsive: sm 640px, md 768px, lg 1024px
- Gold accent used sparingly: CTAs, active states, highlights only

## Signature Detail

Premium gold accent on CTAs and hero elements signals opportunity within a refined professional framework. Restrained use of geometric display font conveys both approachability and expertise—neither corporate nor playful, but aspirational and accessible.
