# Website Prompt: Emaan Ali — Artist Portfolio

Build a single-page animated portfolio website for a visual artist named **Emaan Ali**, based in **Sialkot, Pakistan**. Style: bold, playful, high-energy "baby pink" aesthetic — not minimal, not corporate.

**Color Palette**
- Background: baby pink (`#ffe1ec`)
- Secondary surface: slightly deeper pink (`#ffd0e0`)
- Text: deep maroon/plum (`#5b1030`) for strong contrast
- Muted text: dusty rose (`#b5507c`)
- Accent (buttons, links, highlights): hot pink/fuchsia (`#ff4f93`, `#ff2e77`)
- All body and heading text is **bold** throughout — no light or regular weights anywhere.

**Typography**
- Display font: Fraunces (serif, italic for name/quotes)
- Body font: Inter
- Utility/label font: IBM Plex Mono (uppercase, letter-spaced, used for eyebrows/nav/captions)

**Sections & Content**
1. **Nav** — logo "EMAAN ALI" left, links (Work / About / Exhibitions / Contact) right, mix-blend difference so it stays visible over any background.
2. **Hero** — full-screen. Eyebrow: "Painter · Mixed Media · Est. Sialkot, Pakistan." Huge staggered-reveal name animation ("Emaan" / "Ali"). Subtext about her medium (oil, ink, reclaimed textile). Scroll-cue at bottom. Floating soft pink "blob" shapes drifting slowly in the background (4 blobs, different sizes/speeds).
3. **Marquee strip** — infinite scrolling ticker: "ORIGINAL WORKS — LIMITED PRINTS — COMMISSIONS OPEN — ARCHIVE 2016–2026."
4. **About** — two-column: circular portrait photo (with a gold/pink gradient ring border) on one side, bio + 3 stat counters (years practicing, exhibitions, works placed) on the other.
5. **Selected Work gallery** — 3-column (responsive to 1) grid of 6 pieces. Each tile: full-bleed art image, grayscale by default, hover reveals full color + zoom + slight tilt/rotate, with piece number, title, and medium sliding up from the bottom.
6. **Pull quote** — large italic serif quote from the artist, centered, own section.
7. **Exhibitions** — a running list/table of past shows: year, title, venue, with hover highlight per row.
8. **Contact** — big statement heading, single pill-shaped email button with a soft pulsing glow animation (like a heartbeat), mailto link.
9. **Footer** — copyright + social/studio line.

**Animation requirements**
- Staggered text rise-in on page load (hero name/subtext)
- Infinite auto-scrolling marquee
- Custom circular cursor that grows on hover over links/gallery/rows
- Scroll-triggered fade/slide-up reveals for each section (IntersectionObserver)
- Floating/drifting blob shapes in the hero (independent keyframe animations, different durations)
- Gallery tiles: color/zoom/tilt on hover
- Pulsing glow ring animation on the contact CTA button
- Respect `prefers-reduced-motion` (disable animations for users who request it)

**Technical**
- React and Tailwind CSS v4 setup
- Fully responsive down to mobile
- Visible keyboard focus states
- High-quality generated artwork assets and portrait
