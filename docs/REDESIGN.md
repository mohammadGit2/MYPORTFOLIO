# Systems in Motion

This redesign builds on the existing single-page React portfolio. The visual direction uses an off-white editorial canvas, charcoal workflow lab, lime interaction color, asymmetrical project compositions, large type, and a recurring input → logic → action motif. The supplied identity, six projects, five workflow concepts, email address, and GitHub profile remain available.

## Audit of the original repository

Audited `App`, all eight original components, data, audio utility, CSS, HTML metadata, Vite/TypeScript configuration, package manifest, environment example, and all four JPG assets. There were no additional routes, backend endpoints, repository instructions, test suites, or CI workflows in the supplied tree.

| Area | Original behavior | Resolution |
| --- | --- | --- |
| Page structure | Navbar → hero → project grid → agent hub → expertise → contact → footer | Preserve the story with distinct compositions, contextual navigation, and a contrasting lab scene. |
| Projects | Six records; five categories including All; clickable `div` cards | Native buttons, retained category filters, varied editorial media proportions, and case-study dialogs. |
| Detail overlay | Escape and scroll lock, but no focus containment/restoration | Native modal dialog supplies inert background, focus containment, Escape semantics; cleanup restores scrolling and trigger focus. |
| Project source links | All six source links pointed to the general GitHub profile | Label them “GitHub Profile.” No project-specific source repository was supplied. |
| Claims | Conversion, latency, uptime, skill percentages, scale and seniority assertions | Remove unsupported statistics and status language from data, UI, and metadata. Keep qualitative project descriptions. |
| Images | Four 1376 × 768 JPGs, about 2.56 MB combined; fragile `/src/` paths | Imported responsive WebP derivatives with explicit dimensions, lazy decoding/loading, and failure fallback. Originals retained as source assets. |
| Image integrity | Existing images depict product concept compositions | Label them as concept artwork, not verified product screenshots. |
| Workflow simulation | Five selectable architectures; timed steps; graph/log view; node inspection | Keep all five concepts and interactions. Replace timer ownership with effect cleanup and run identifiers, preventing stale reset/switch updates. |
| Workflow credibility | Simulated logs displayed as real production results | Explicit local-demo language, illustrative outputs, no latency/reliability/audience claims, no external actions. |
| Contact | `setTimeout` claimed a message had reached an inbox | Direct `mailto`, copy address, and selectable fallback on clipboard denial. No simulated submission. |
| Sound | On by default; repeated hover tones; unhandled storage/resume paths | Versioned opt-in preference, default off, meaningful-action tones only, handled storage and audio failures. |
| Clock | Duplicated one-second intervals in hero and navbar | One isolated local-time component with a cleaned-up ten-second timer and minute precision. |
| Responsive/a11y | Desktop-style graph, nonsemantic selection controls, incomplete mobile menu semantics | Vertical mobile timeline, real buttons, focus indicators, full-screen native menu dialog, resize cleanup, reduced motion. |
| Motion | Rotating headline, repeated hover audio, generic glow/card patterns | Selective image crop, responsive typographic progression where supported, dialog entry, discrete workflow state transitions. No continuous JavaScript animation loop. |
| Dependencies | GenAI SDK, Express, dotenv, Tailwind, Motion, Lucide, extra build tooling | No backend or GenAI usage found. New UI uses CSS and native browser APIs; remove unused dependencies. Keep React 19, TypeScript, Vite 8, React plugin, and types. |
| Metadata | Unsupported “Senior” and “Master” claims, nonexistent server capability | Factual title/description, canonical, social metadata, theme color, SVG favicon, and useful no-JavaScript contact fallback. |

## Content provenance and link verification

Project descriptions are supplied portfolio content, not independently verified implementation audits. The original descriptions have been made more restrained; no measured business outcomes are claimed. The workflow lab is a portfolio architecture demonstration, not an integration service.

All six existing HTTPS project URLs were preserved. Attempts to inspect each deployment and the current portfolio through the web retrieval service were unsuccessful in this environment. Therefore availability and live project functionality remain unverified. The GitHub repository was accessible through the authenticated GitHub connector. Do not describe this limitation as a broken-link finding.

## Technical decisions

- Keep the existing component boundaries rather than introduce an unnecessary framework or router migration.
- Use native `<dialog>` for both case-study and mobile navigation accessibility.
- Use a reducer plus a cleanup-owned timeout for sequential workflow execution. Each run has an identifier so stale events cannot mutate a reset or replacement run.
- Lazy-import the interactive lab near the viewport. Its section anchor exists before loading, so deep links and navigation remain available.
- Reuse a project-media component for responsive images, clear artwork labeling, text-only projects, and network failure fallback.
- Prefer CSS for interaction and native scroll-driven animation only where supported. The layout remains complete without animation. Reduced-motion disables nonessential transitions and smooth scrolling.
- No API keys, server functions, form service, 3D engine, or graph library are required.
- Google Fonts remains the supplied typography delivery method, with system fallbacks. The design was visually checked with fallback fonts because external font delivery was unavailable in the test environment.

## Dependency reproducibility

The original repository had no lockfile and requested package ranges unavailable from the network-restricted environment. The implementation pins compatible React 19 / Vite 8 tooling available in the local package cache: React 19.2.8, Vite 8.2.1, TypeScript 6.0.3, React plugin 6.0.5. A lockfile was generated from cached package metadata and successfully installed with `npm ci --offline` against that cache. This makes the tested dependency versions explicit.

## Running locally

```sh
npm ci
npm run dev
npm run lint
npm run build
```

`lint` is the existing TypeScript check, now running with strict mode. It is not an ESLint audit.

## Browser regression checks

`tests/portfolio.smoke.cjs` tests the production build in Chromium. Install Playwright separately, then run:

```sh
npm run build
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node tests/portfolio.smoke.cjs
```

The script also supports `PLAYWRIGHT_MODULE`, `CHROMIUM_PATH`, and `TEST_OUTPUT` for existing tool installations. It starts and stops a local production-preview server, and writes screenshots/results into ignored `test-results/` by default.

The checks cover viewport overflow, image decoding, project filtering, dialog keyboard handling and focus restoration, all workflow simulations, trace events, reset and agent-change cancellation, mobile menu navigation and resize, clipboard success/failure, persistent sound preference, blocked storage, reduced motion, and browser/local asset errors.

## Validation results — 29 September 2026

- `npm ci --offline` using the provided package cache: passed.
- `npm run lint` (strict TypeScript): passed.
- `npm run build`: passed.
- Production Chromium regression suite: passed. See [machine-readable results](validation-results.json).
- Viewports: 375×812, 390×844, 430×932, 768×1024, 1024×768, 1280×720, 1366×768, 1440×900, 1920×1080, and 1024×600. No horizontal overflow; all local project images decoded.
- No uncaught JavaScript errors or local asset HTTP errors were observed.
- Visual review: desktop and mobile page composition, images, workflow timeline, and contact.
- Initial JS: about 218 KB / 69 KB gzip. Lazy lab chunk: about 5.4 KB / 1.8 KB gzip. CSS: about 27 KB / 6.5 KB gzip.
- Four large WebP variants: about 301 KB combined, versus 2.56 MB of original JPGs (approximately 88% smaller). Small variants total about 94 KB. Only the appropriate responsive variant is requested by the browser.

These are build/test observations, not production Lighthouse or business-performance claims. Browser automation used Chromium with system font fallbacks; Safari, Firefox, real-device audio policies, live project endpoints, and external font delivery have not been verified here.

## Review images

[Desktop full-page preview](previews/1440-full.webp) · [Mobile full-page preview](previews/390-full.webp)
