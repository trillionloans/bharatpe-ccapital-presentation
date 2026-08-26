# BharatPe Capital — Booth Experience

Two complementary experiences, built for BharatPe Capital's fintech-conference booth presence, showcasing BharatPe Capital as an AI-powered lending platform.

Built with Next.js, React, TypeScript, Tailwind CSS v4, Framer Motion, GSAP and React Three Fiber.

## Two Modes

| Route | Mode | Use case |
|---|---|---|
| `/` | **Interactive Kiosk** | Touch-driven, visitor-controlled exploration of 8 experiences. Resets to Home after 45s idle. |
| `/reel` | **Autoplay Motion Reel** | Hands-off, continuously looping 45-second cinematic sequence for unattended display (e.g. a 55" LED wall visitors glance at for 5–15s while walking by). No buttons, no input required, loops forever. |

Point the booth TV at whichever mode fits the moment — `/reel` for ambient/background loop, `/` when a promoter wants a visitor to actually touch and explore.

### The Autoplay Reel (`/reel`)

A single continuous, self-looping 45-second timeline (`src/hooks/useReelClock.ts`) drives six scenes, matching the BharatPe Capital brand:

1. **Opening (0–5s)** — logo, animated network particles, title reveal ("Powering the Future of Intelligent Lending").
2. **Merchant Ecosystem (5–12s)** — glowing merchant nodes, category labels (Retail, Restaurants, Healthcare, Kirana, Electronics, Services), animated counters (17M+ Merchant Network, ₹1700B+ Annual TPV — real BharatPe metrics).
3. **AI Brain (12–20s)** — merchant network morphs into a pulsing neural core with 8 orbiting signal inputs (UPI, Payments, GST, Banking, Bureau, KYC, AML, Behaviour).
4. **Lending Pipeline (20–30s)** — 7-stage animated pipeline (Merchant → Digital KYC → AI Risk Models → Real-Time Decision Engine → Instant Loan Offer → Digital Agreement → Instant Disbursal), each stage lighting up sequentially with flowing connector animations.
5. **Feature Cards (30–38s)** — 8 floating, slowly rotating glass cards (100% Digital Journey, AI Powered Underwriting, Real-Time Risk Assessment, Developer APIs, etc.) using real BharatPe brand icons.
6. **Closing (38–45s)** — camera settles, closing statement, BharatPe Capital logo, then fades seamlessly back into the Opening scene.

Progress dots at the bottom show the current scene; there is otherwise zero UI chrome.

## Experience Map (Interactive Kiosk, `/`)

- **Home** — animated title, network background, "Touch Anywhere to Explore" CTA.
- **The Merchant Universe** — 160+ animated merchant nodes; tap any node to reveal transactions, risk, growth, business type and AI confidence.
- **How AI Makes Lending Decisions** — animated 9-stage decision pipeline (Merchant → Payments → Banking → KYC → AML → Behavior → Risk → Decision → Offer).
- **Interactive Risk Engine** — 6 live sliders driving a real-time AI score, risk gauge, approval probability, loan amount and interest rate.
- **Platform Architecture** — draggable/rotatable stack of 9 platform layers with hover detail panel.
- **AI Product Showcase** — 6 expandable cards on underwriting, developer platform, APIs, automation, fraud detection and real-time risk.
- **Build Your Loan** — configurator (industry, revenue, TPV, vintage, purpose) generating an instant AI-style offer with reasoning.
- **BharatPe Capital Metrics** — animated counters for disbursals, integrations, delivery speed and onboarding speed.
- **Innovation Wall** — 9 floating, touch-to-expand cards on platform engineering, AI agents, compliance, fraud prevention, etc.

Every screen auto-resets to Home after **45 seconds of inactivity**, and the whole app is designed for **zero scroll**, full-bleed 4K displays.

## Getting Started (development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

The build produces a fully static/optimized bundle — once built, the app runs entirely offline (no external network calls at runtime).

## Running in Kiosk Mode (for the booth TV)

### 1. Build once, then serve

```bash
npm run build
npm run start -- -p 3000
```

Keep this running in the background (e.g. via `pm2`, a `launchd`/systemd service, or a simple `nohup`).

### 2. Launch the browser in kiosk mode

Replace `http://localhost:3000` with `http://localhost:3000/reel` to launch the autoplay motion reel instead of the interactive kiosk.

**macOS (Chrome):**

```bash
open -na "Google Chrome" --args --kiosk --incognito --noerrdialogs --disable-session-crashed-bubble --disable-infobars http://localhost:3000
```

**Windows (Chrome):**

```bash
chrome.exe --kiosk --incognito --noerrdialogs --disable-session-crashed-bubble http://localhost:3000
```

**Linux (Chromium):**

```bash
chromium-browser --kiosk --incognito --noerrdialogs --disable-infobars http://localhost:3000
```

### 3. Enter full-screen from within the app

The app also requests native Fullscreen API on the first touch/click, as a fallback if the browser isn't launched with `--kiosk`.

### 4. Auto-restart on crash / boot (recommended for a multi-day booth)

Use a process manager to keep the server and browser alive, e.g.:

```bash
npm install -g pm2
pm2 start npm --name bharatpe-capital -- start
pm2 save
pm2 startup
```

Pair this with an OS-level auto-launch entry (Login Items on macOS, Task Scheduler on Windows, or a systemd service + `.xinitrc` on Linux) pointing at the kiosk browser command above.

## Inactivity Reset

Implemented in `src/hooks/useIdleReset.ts`. Any pointer, touch, wheel or key event resets a 45-second timer; on timeout, the app automatically returns to the Home screen via the shared Zustand store (`src/store/useAppStore.ts`).

## Project Structure

```
src/
  app/                     Next.js app router entry (layout, page, globals.css)
  components/
    background/            ParticleField (R3F animated network background)
    experiences/            One component per experience (Home, MerchantUniverse, ...)
    nav/                   ExperienceDock — bottom navigation between experiences
    shell/                 AppShell — orchestrates active experience, idle reset, fullscreen
    ui/                    Reusable primitives (GlassCard, AnimatedCounter, MagneticButton, RippleLayer, ExperienceHeader)
  data/                    Dummy JSON-style data (merchants, decision stages, architecture, showcase, metrics, innovation)
  hooks/                   useIdleReset, useFullscreen
  store/                   useAppStore (Zustand) — tracks the active experience
```

## Performance Notes

- All experiences are simple client components rendered on demand; only the active experience is mounted at a time.
- The particle background uses a single R3F `<Canvas>` with capped device pixel ratio (`dpr={[1, 1.5]}`) for smooth 4K performance.
- All animations use GPU-friendly transforms (`opacity`, `scale`, `x`/`y`, `rotate`) via Framer Motion, avoiding layout thrashing.
- No external network calls occur at runtime — the production build is fully self-contained.

## Customizing Content

All copy and numbers live in `src/data/content.ts` and `src/data/merchants.ts`. Update these files to refresh stats, cards, or merchant data without touching component logic.
