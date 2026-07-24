# TrueBuild Construction — website

A static SvelteKit site for a licensed general contractor in North Hills, CA. The whole thing prerenders to plain files, so it can be hosted
anywhere without a server.

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # static output in ./build
npm run preview  # serve the built output
```

---

## Content

**Everything editable lives in one file: `src/lib/data/site.ts`** — you should
not need to touch a component to change any of it.

Real details taken from the business card and already in place:

| What          | Value                                            |
| ------------- | ------------------------------------------------ |
| Legal name    | TrueBuild Construction Company Corp.              |
| Owner         | Arthur Aslanian, General Contractor               |
| Licence       | CSLB #1126490, bonded & insured                   |
| Phone         | (818) 212-7100                                    |
| Email         | TrueBuildCorp@gmail.com                           |
| Address       | 9134 Sepulveda Blvd. Unit #2716, North Hills, CA 91393 |
| Core services | New builds · Home additions · ADUs · Remodels · Design & planning |
| Service area  | Greater Los Angeles, 18 cities listed in `towns`        |

Pools sit in the same services list as everything else, not in a separate
section. He is a general contractor and a pool is excavation, steel, plumbing
and concrete, so splitting it out implied a second discipline that does not
exist. Pools are not on the business card at all, so if the weighting is wrong
it is a one-line change in `services`.

### Still outstanding

- **Office hours** are deliberately *not* on the site. I had no source for
  them, and publishing guessed hours for a contractor is worse than omitting
  them. Add them to `site.ts` and drop a line into the contact block if wanted.
- **Selected work** (`work`) is four representative projects with vector
  drawings, not real jobs. See below.
- **No customer reviews.** Deliberate: writing fake testimonials would be worse
  than having none. Once you have real ones with permission, they slot in after
  "Selected work".
- **No invented statistics.** An earlier draft claimed "25 years / 600
  projects". Those came out once the licence number showed the corporation is
  relatively recent. Only checkable facts appear now, in the hero strip.

## Photography

The four project cards currently show vector construction drawings — plans,
sections and a before/after — sized for a 16:10 photo slot. They are meant to
look intentional rather than like grey placeholder boxes, but **real
photographs will beat them decisively**, and it is the single highest-value
upgrade to this site.

To swap one in, replace the `<Figure />` call in
`src/lib/components/Work.svelte` with an `<img>` (or better, a `<picture>` with
a WebP source) and drop the file in `static/`.

## Contact

`src/lib/components/Contact.svelte` shows phone, email, office and the named
contractor as tap-to-call and mailto links. There is no enquiry form: the
earlier one was removed on request, so nothing needs a backend.

To add a form later, drop it into that component and POST to Formspree,
Netlify Forms or your own endpoint.

---

## The design

Everything descends from the four colours in `GoldLogo.svg`:

| Token       | Value     | From                        |
| ----------- | --------- | --------------------------- |
| `--gold`    | `#BC9A53` | the metallic B              |
| `--bitumen` | `#1B150E` | the roofline (a warm black) |
| `--slate`   | `#57575B` | the wordmark's second line  |
| `--bone`    | `#FCFCFC` | the knock-outs              |

Gold is the only accent, and it is spent deliberately: hairlines, datum rules
and small-caps labels rather than large gradient fills, which is how
gold-and-black identities usually turn cheap. The `--water` token survives only
inside the project drawings in `Figure.svelte`, where a pool plan needs a
second tone.

**Type.** Archivo is loaded with its _width_ axis and set at `font-stretch: 122%`
for headings — the expanded cut gives them a broad, facade-like proportion
instead of the usual condensed-grotesque look. Instrument Sans sets body copy,
JetBrains Mono handles labels and figures, and Instrument Serif italic appears
on single emphasis words as a nod to the logo's serif wordmark. All four are
self-hosted via `@fontsource`; there is no third-party font request at runtime.

**Themes.** Dark is the default — it is the identity's natural ground. A light
"cured concrete" theme is a genuine second design, not an inversion: the gold
is darkened to `#7A5F22` so it clears AA contrast on a pale ground. The
preference is stored in `localStorage` and resolved by a small inline script in
`app.html` before first paint, so there is no flash.

**Motion** is limited to a page-load sequence in the hero (a gold datum line
that draws itself across), a slow specular sweep that travels over the gold B
in the background mark, and scroll reveals. All of it is disabled under
`prefers-reduced-motion`.

## Logo assets

| File                        | Use                                                |
| --------------------------- | -------------------------------------------------- |
| `static/GoldLogo.svg`       | the original supplied artwork, untouched           |
| `static/truebuild-mark.svg` | the mark with the wordmark removed, self-contained |
| `static/tb-b.webp`          | the gold B, extracted from the original (27 KB)    |
| `static/icon-*.png`         | favicons, light and dark                           |

The wordmark in the original file is live `<text>` set in Gill Sans MT, which
falls back inconsistently across browsers. So the site draws the **mark** and
sets "TRUEBUILD CONSTRUCTION" in real HTML type — that is why the lockup looks
crisp at every size. `LogoMark.svelte` drives the roofline and knock-out from
CSS custom properties, so the mark sits correctly on both themes.

## Deploying

`npm run build` writes `./build`. Drop that folder on Netlify, Vercel,
Cloudflare Pages, GitHub Pages, S3 or any Apache/nginx host. No Node runtime
required.
