# Project Astra — Signal → Structure → Product

## Audit: 10 October 2026

Starting point: `mohammadGit2/MYPORTFOLIO`, main commit `834c9c92ee497f220d43f1fe93df8aeeecc13c32`. The source is a React 19 / TypeScript / Vite single-page application. No project instructions, backend, custom routing, or CI workflow were present in that tree. `src/main.tsx` mounts `App`; content lives in `src/data/portfolioData.ts`; plain CSS owns presentation. `public` holds static assets. Existing Netlify deployment and six project URLs are retained.

Audited every component, the complete CSS, data model, dialog hook, audio utility, package/configuration files, existing smoke suite, and prior redesign documentation. Direct Git clone was blocked by this environment; the authenticated GitHub connector recovered the exact source snapshot. Existing project asset WebPs were restored byte-for-byte. Existing original JPGs and previous preview documents remain untouched in the GitHub base tree.

**Retained strengths:** six project records and category filters; varied editorial project layouts; native dialogs and focus restoration; five reducer-driven workflow simulations with cancellation; copy-email fallback; responsive project images; truthful concept-art labeling; lazy lab loading; reduced motion. No integration endpoints were removed.

**Gaps addressed:** no real film, no résumé, a limited identity reveal, no cinematic score, missing project-specific source links, unverified historical-reader claims, and a persisted sound preference that could enable audio on a new page.

The live Netlify site could not be retrieved in this environment. That is an access limitation, not evidence that it is broken. No business outcomes, employment, qualifications, or experience duration were added.

## Implementation plan and decisions

1. Keep the existing stack and interactions. Develop ink / parchment / copper art direction, a finite typographic entrance, and one original SVG ruled surface.
2. Build a 21-second genuine rendered film using deterministic Canvas drawings and an original synthesized stereo score. Integrate user-initiated playback, captions, native controls, mute, transcript, and download fallback.
3. Add a practical résumé in both React and standalone HTML, with A4 print styles and browser Save as PDF. Preserve known contact details. Clearly identify undocumented fields onscreen and omit them from print.
4. Improve evidence in case studies using inspected source, then run TypeScript, production build, media inspection and static rendering checks. Keep existing browser tests and update them for the new sound policy.
5. Publish an owner-private review site and preserve the change in a GitHub review branch. The original Netlify main deployment is not automatically replaced by the review site.

## Visual system

- Palette: ink `#151a19`, parchment `#f1efe8`, copper `#d7a27d`, muted sage-gray. Copper represents a signal moving through structure.
- Existing Syne / Plus Jakarta Sans / JetBrains Mono typography remains, with Georgia for editorial emphasis and explicit system fallbacks.
- Spacing follows the original fluid gutters and grid. Hero: two-column identity / ruled-surface sculpture; mobile: readable identity then a compact sculpture. Cases retain staggered full-width / split-width proportions. Film is a dark interlude. Résumé is a calm paper composition.
- Motion: 160ms controls, 280ms transitions, 900–1700ms identity entrance, finite 2.4s path reveal. Ease: cubic-bezier(.16,1,.3,1). No blocking intro, no scroll hijacking, no animation library, no permanent JS animation loop. The optional CSS scroll transformation is decorative and disabled by reduced motion.
- Main content renders immediately. Skip opening motion is always available. Reduced-motion removes all nonessential CSS movement; the film only plays on explicit request.
- No generated food, fake product screenshot, client logo, award, or invented metric is used.

## Film storyboard (21 seconds, 1280 × 720, 24 fps)

| Time | Composition and type | Motion / transition | Sound | Small-screen behavior |
| --- | --- | --- | --- | --- |
| 0–3 | “It starts with a signal.” Left title; right field of copper wave paths | Paths swell from a single line, then fade through the grid | Suspended pad, air swell, soft arpeggio | Contained landscape player, native fullscreen available |
| 3–6 | Name and professional identity; rotating line structure | Mask-like upward type entrance, slowly rotating geometry | New chord and restrained low accent | Large name remains central; transcript beneath |
| 6–10 | “Give the idea a structure.” Layered interface planes | Perspective offset, staged internal line growth | Harmonic change, felt attacks | Contain rather than crop |
| 10–14 | “Make the connections count.” Five stages including human review | Lines and node fills advance in order | Deliberate harmonic progression and scene accent | Readable transcript documents the node sequence |
| 14–18 | “Build for the person.” Abstract desktop / phone composition | Interface arrives, product geometry subtly tilts | Warmer chord, small air transition | Native video controls and fullscreen |
| 18–21 | “Useful technology. Built with intention.” Signature and explore invitation | Lines resolve into a quiet folded structure; final fade | Resolving chord and soft tail | Signature, captions and scene index remain available |

The film is abstract motion design, not evidence of product UI. `scripts/film.mjs` defines deterministic frames; `scripts/render-film.mjs` renders via `@napi-rs/canvas` and FFmpeg. `scripts/score.py` composes the original score with NumPy/SciPy. No commercial music or external samples. MP4 contains H.264 and stereo AAC, with fast-start metadata. It is not fetched until the visitor requests play. Poster is approximately 720p. The soundtrack is part of the film, initially muted. Interface sounds are a separate opt-in microinteraction feature, always off on a fresh page; they are not described as the cinematic score.

Rendering prerequisites: FFmpeg, Python with NumPy/SciPy, Node with `@napi-rs/canvas`. The renderer accepts `CANVAS_MODULE` to use a preinstalled module. Linux Nimbus Sans / P052 fonts are registered when rendering. These are build-time film tools, not runtime web dependencies. The committed MP4 requires none of them to play.

## Evidence improvements

- **NextMarket:** `mohammadGit2/syedstore` explicitly defines `nextmarketpk.netlify.app` in `src/lib/site.ts`. Inspected `cart-store.ts` verifies stock-capped cart quantities and local persistence. `OrderButtons.tsx` verifies encoded WhatsApp messages and email-route handoff. Stack corrected to Next.js / TypeScript / Tailwind. No claim of verified live payment processing.
- **Historical library:** inspected `historyLibrary` README, `app/page.tsx`, `lib/search.ts`, and `app/reader/[bookId]/page.tsx`. Unicode/Urdu aliases, records, reader controls and citation copy exist. PDF renderer, OCR search and bookmarks are placeholders. Marked MVP. Exact correspondence with the retained deployment is not independently verified.
- Other four project descriptions remain supplied portfolio notes, explicitly unverified. Private repository contents were not published. Individual contribution records are not invented.

## Creative review: five weaknesses corrected

1. **Identity was secondary to a generic headline:** replaced the opening with the actual name, a concise professional declaration, and one controlled copper sculpture.
2. **No motion narrative or real media:** rendered a beginning-to-end six-scene film with a matching score, captions and accessible transcript.
3. **Proof was disconnected from claims:** added inspected source links, corrected NextMarket technology, and explicitly labeled historical-library placeholders.
4. **Professional information was impractical to take away:** added an A4 print résumé and a JavaScript-independent HTML version; print excludes undocumented placeholders.
5. **Motion/audio added friction:** finite skippable intro, user-initiated film, separate visible mute, no preload, fresh-page UI sound off, reduced-motion support, and CSS-only decorative movement.

## Dependency reproducibility

The original exact dependency versions were unavailable in the restricted registry. React 19.2.6, React DOM 19.2.6, Vite 8.0.13, TypeScript 5.9.3, and matching types/plugin versions were available in the managed cache. `package-lock.json` was reconstructed from the runtime cache lock, preserving exact package integrity values and required platform packages; `npm ci --offline --cache /opt/codex/cache/sites-vinext-npm --ignore-scripts` then installed successfully. Ordinary environments can use `npm ci`. This is an explicit same-framework compatibility adjustment, not a claim to use the latest releases. No new production animation library was added.

## Verification limits

The managed Sites environment has no supported `control-browser` tool. Per its preview rules, no browser was installed and no alternate browser automation path was used. Therefore desktop/mobile browser layout, live interactive playback policies, keyboard regression behavior, print pagination, console/network runtime checks, external fonts and live project availability are **not claimed as passed for this revision**. Prior September results in `REDESIGN.md` describe the old revision only.

Production, static-render, media and source checks are recorded in `ASTRA-VALIDATION.json`. The existing browser regression suite is updated and can run in an ordinary development environment. Manual review before replacing the main Netlify deployment remains appropriate.
