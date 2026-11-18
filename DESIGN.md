# Design

## Concept: the flow sheet

Shivam chaired a debate society. Debaters track an argument across a round on a "flow": a sheet ruled into columns, written in two pen colours. This site is that sheet, used for work. Every project is one line carried across four columns: **noticed → thought through → built → now**.

The two inks do a job. **Black ink is what I did. Red ink is what I don't know yet.** Anything unmeasured or unconfirmed is written in red, in handwriting, so honesty about stage is part of the look and not a disclaimer.

The page it refuses: the portfolio of equal project cards with tech badges.

## Colour

Stone and terracotta: warm, calm, editorial. Photographs are the only other colour on the site.

| Token | Value | Use |
|---|---|---|
| `--paper` | `oklch(0.925 0.016 75)` (#EDE6DC) | Warm stone. The ground of light sections. |
| `--ink` | `oklch(0.26 0.012 55)` (#2A2420) | Warm near-black. Text, rules, buttons, and the ground of dark sections. |
| `--ink-soft` | `oklch(0.47 0.02 60)` | Warm grey-brown. Pen labels and secondary text. |
| `--scrap` | `oklch(0.965 0.008 75)` | Light stone. Notes, chat messages, photo frames. |
| `--red` | `oklch(0.5 0.13 40)` (terracotta) | The only accent. Cracks in the pipe, and what is unknown or unmeasured. |

Rules: terracotta is never used for links, hover or emphasis. No gradients, glass or cards.

## Type

All three faces come from Indian foundries and have Devanagari siblings, which is why the Marathi in the MedDraft simulation sits in the same voice.

- **Eczar** 500/600/700: headings and project names. Upright only, no italic.
- **Anek Latin** (variable): body and interface. Body is 18px / 1.55.
- **Kalam** 400: the pen. Labels in the flow, captions, dates, red notes, the spoken transcript. Never for body copy.

Scale: `--step--1` 15px, `--step-0` 18px, `--step-1` 22px, `--step-2` 26–36px, `--step-3` 34–56px, `--step-4` 40–84px. Prose measure is 62ch.

## Layout

- `.sheet`: max 80rem, with the red margin line at the left. Left padding is 5.5rem on wide screens, 1.5rem on phones.
- Sections are separated by space and by rules: a 2px ink rule opens a table, 1px rules divide rows.
- Photographs sit square-edged, tilted about 1° on wide screens, with a handwritten caption.
- Breakpoints: 48rem, 60rem, 62rem (flow and prose go multi-column), 72rem.

## The home page, scene by scene

The home page is one continuous scroll of interactive scenes. Each one comes from Shivam's own story. Inner pages reuse the toys.

1. **The leaking pipe** (`scenes/Hero.astro`). Pinned for 360vh. A pipe with three leaks, each labelled with a problem. Scrolling brings in Shivam's portrait and a wrench that clamps each leak in turn; each clamp turns the problem label into the product name, the puddle drains and the water runs clean. Shown already fixed without JavaScript or with reduced motion.
2. **Three product scenes** (`scenes/ProductScene.astro`), each with a toy and its flow strip (noticed, thought through, built, now) that draws across when it enters view.
   - **MedDraft** (`toys/MedDraftDemo.astro`): plays a dictation word by word, fills the form field by field with the source words inked in, leaves the gap blank in red, and stamps "Approved" on click.
   - **Kuchu Puchu** (`toys/KuchuToy.astro`): press a gesture and a small character walks onto a desktop, acts it out, and tucks back into the corner. The character is an original drawing for this site.
   - **MU Central** (`toys/CentralToy.astro`): one button moves the messages that matter out of a group chat into three boards.
3. **The life track** (`scenes/LifeTrack.astro`). On ink. Pinned; vertical scroll carries five stops sideways. The data stop runs a canvas where scattered marks pass through a pipeline and come out in rows.
4. **The chalkboard** (`scenes/Chalkboard.astro`). A board you can write on, after the real Café 101 menu.
5. **The photo pile** (`scenes/PhotoPile.astro`). Real photographs you can pick up and move with a mouse.
6. **The closing motion** (footer, every page). "This house believes you should write to Shivam." For opens an email. Against gets a rebuttal.

Also on every page: a red pen progress line across the top, a dock that appears once the masthead scrolls away, and content that rises in as it enters view.

## Motion rules

- Library: `motion` only (`animate`, `scroll`, `inView`, `stagger`). GSAP is installed but unused.
- Scroll is always native. Pinned scenes use `position: sticky` and read scroll progress; nothing takes over the wheel.
- Ease `cubic-bezier(0.16, 1, 0.3, 1)`. Springs for things that land (the stamp, sorted messages).
- Dragging is mouse-only, so a finger on a draggable thing still scrolls the page.
- Reduced motion or no JavaScript: the pile becomes a plain list of the three products, the life track stacks vertically, toys jump to their end state, and nothing is hidden.

## Components

- **Ledger** (`Ledger.astro`): four columns closing every case study. What I did, what it supports, what has been measured, what I do not know yet (red).
- **Facts** (`.facts`), **Prose** (`.prose`), **Index list** (`.index`), **dated line** (`.line`), **button**, **arrow link** (`.go`), **dock**.

States: links thicken their underline on hover. Focus is a 3px ink outline (paper-coloured on ink). Touch targets are at least 44px.

## Photographs

In `src/assets/images/`, optimised to WebP at build by Astro.

| File | Where | Note |
|---|---|---|
| `portrait.jpg` | Home, About, social preview | |
| `cafe-menu.jpg` | Home, Café 101 | The real chalkboard. |
| `travel-vietnam.jpg` | Home, Beyond work | Shows two other people. |
| `waterfall-rappel.jpg` | Beyond work | Was `adventure-wakeboard.jpg`. It shows rappelling, so it is captioned as that. |

Missing: product screenshots of MedDraft, Kuchu Puchu and MU Central, and a proper 1200×630 social image.
