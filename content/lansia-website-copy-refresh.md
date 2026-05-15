# Lansia website copy refresh

## What this is

A complete copy refresh for lansia.app. The layout, screenshots, and visual design stay as-is. Two new sections get added (About / founder, Reviews). One badge gets removed (Most popular). One footer line gets removed (Made in Slovenia). All other changes are copy-only.

Workspace: `lansia-website/` (Next.js).

## Style rules (apply to every string you touch)

- No em dashes (`—`) or en dashes (`–`). Use commas, periods, parentheses, or shorter sentences.
- No banned phrases: `supercharge`, `unlock your potential`, `10x`, `game-changer`, `unleash`, `revolutionize`, `transform your life`, `level up`, `crush your goals`, `boss mode`, `grindset`, `productivity hacks`.
- No exclamation points.
- No emojis in body copy. Emoji eyebrows on feature blocks are fine (existing pattern).
- Straight quotes only. Do not auto-curl.
- Pricing on the website is always `$4.99`. Never use the euro symbol. App Store and Play Store handle local currency themselves.
- Brand name is always `Lansia`. Never `Motiv8` (legacy).
- Founder's name is `Tim`.

## Order of changes (top to bottom of page)

1. Meta tags
2. Hero
3. Features (section header + new contrast subhead + four blocks)
4. About / founder (NEW section, between Features and Pricing)
5. Pricing (drop `Most popular` badge, new copy)
6. Reviews (NEW section, between FAQ and bottom CTA)
7. FAQ
8. Bottom CTA
9. Footer (drop `Made in Slovenia 🇸🇮` line)

---

## 1. Meta tags

### `<title>`

```
Lansia: Small wins, every day.
```

### `<meta name="description">`

```
A calm daily plan in five tasks or less. Plan tonight, do tomorrow. One-time $4.99, no subscription. The habit tracker for people who hate habit trackers.
```

### Open Graph

```
og:title         → Lansia: Small wins, every day.
og:description   → The daily plan that compounds. Up to five tasks for tomorrow, written tonight. $4.99 lifetime, no subscription.
og:image         → https://lansia.app/og-image.png
og:image:alt     → Lansia. Small wins, every day.
og:url           → https://lansia.app
og:site_name     → Lansia
og:type          → website
og:locale        → en_US
```

### Twitter

```
twitter:card        → summary_large_image
twitter:title       → Lansia: Small wins, every day.
twitter:description → The daily plan that compounds. Up to five tasks for tomorrow, written tonight. $4.99 lifetime, no subscription.
twitter:image       → https://lansia.app/og-image.png
```

### Flags

- `og-image.png` needs to be regenerated. The current image has `Five goals. Every day.` baked in as text and is sized 1024x500 (non-standard). New file should use the new brand promise (`Small wins, every day.`) and be 1200x630. Update `og:image:width` and `og:image:height` in meta to match the new file. This is a design task, flag it for the user if needed.
- No `hreflang` tags yet. Website stays English-only until after Product Hunt.

---

## 2. Hero

### Headline (H1)

```
Small wins, every day.
```

### Subhead

```
The daily plan that compounds. Up to five tasks for tomorrow, written tonight.
```

Render the subhead as a single paragraph (one block of text, not two stacked lines).

### CTAs

Unchanged. Keep both store buttons (`Download on the App Store`, `Get it on Google Play`).

### Right-side mockup

Unchanged. The `12 days` streak indicator and `Today 3 / 5` mockup stay as is. (Optional polish, not blocking: `Meeting with Phillip` reads slightly like a placeholder; could swap to `Marketing standup` or `1:1 with Alex`. Skip if unsure.)

### Implementation notes

- H1 sizing should hold without changes. Both old and new headlines are four words.
- Update page `<title>` and `og:title` to match (covered in section 1).

---

## 3. Features

### Section eyebrow

```
FEATURES
```

(Unchanged.)

### Section heading (H2)

```
Built to keep, not to grind.
```

(Unchanged.)

### NEW section subhead

Add a single line beneath the H2, above the four feature blocks:

```
No yearly goals. No habit chains. Just tomorrow's list, written tonight.
```

Style this subhead at a smaller weight than the H2 but slightly larger than body text. It sits as the section's positioning statement before the four feature blocks begin.

### Block 1: Tasks

- Eyebrow: `✨ Tasks`
- Subhead (H3): `Write tomorrow's list, tonight.`
- Body:
  ```
  Write tomorrow's plan tonight, or first thing in the morning. Up to five tasks. Tap to mark done. Swipe to mark missed. That's the whole app. A daily ritual simple enough to actually keep.
  ```
- Screenshot: unchanged.

### Block 2: Stats

- Eyebrow: `📊 Stats`
- Subhead (H3): `The patterns behind your best days.`
- Body:
  ```
  Streaks, perfect weeks, weekly heatmap, year-at-a-glance, strongest day, success rate. Your record, surfaced quietly. Not a leaderboard, not a guilt trip.
  ```
- Screenshot: unchanged.

### Block 3: Milestones

- Eyebrow: `💜 Milestones`
- Subhead (H3): `Small wins, earned.`
- Body:
  ```
  First goal. 7-day streak. 14-day streak. Perfect week. 30 goals. 100 goals. Six quiet milestones. Earned once, kept forever, even if your streak slips.
  ```
- Screenshot: unchanged.

### Block 4: Daily Boost

- Eyebrow: `🔥 Daily Boost`
- Subhead (H3): `One line, every morning.`
- Body:
  ```
  One hand-picked quote, every morning. No ads, no notifications screaming. Just one line that nudges you to show up.
  ```
- Screenshot: unchanged.

---

## 4. About / founder (NEW section)

Add a new section between the Features section and the Pricing section. Section anchor: `#story`.

### Section heading (H2)

```
It started as a spreadsheet.
```

No subhead. The first paragraph is the entry.

### Body

Render as five paragraphs:

```
Before Lansia was an app, it was a spreadsheet I kept open for five years.

Every evening I'd write down two to five things I wanted to do the next day. That was the whole system. No tagging, no prioritization framework, no monthly review. Just tomorrow's list, tonight.

Two things changed almost immediately. I fell asleep faster because my head was already empty. I started mornings without that five-minute fog of figuring out what to do first. I'd do the hardest thing of the day before checking anything else. By 10am the day couldn't really go sideways anymore.

I tried the obvious apps along the way. Todoist. Notion. Habitify. Things. They all asked me to set up a system. I wanted the opposite of a system. I wanted one short list, every day, and a record that I'd shown up.

Lansia is that practice, in your pocket. Designed, built, and shipped in Slovenia. By one person.
```

### Signoff

Below the body, on its own line:

```
Tim
```

No leading dash, no leading punctuation. Just the name. Style it subtly: small caps or slightly reduced opacity, with a touch more space above it than between paragraphs.

### Implementation notes

- Section heading uses the same H2 style as the other section headings on the page.
- Body is left-aligned, single column, max-width comparable to the FAQ section. Around 60-70 characters per line.
- Body text in Kanit, white at ~92% opacity, generous line-height (around 1.6). Paragraph spacing should feel calm, not cramped.
- Optional but recommended: a small founder photo above the heading, circular crop, around 80px. If no photo is available, leave it out. Do not substitute an avatar illustration.
- Do not add `Story` or `About` to the top nav. Keep the nav at three items.
- The first-person voice in this section is intentional. Let it feel a little quieter than the rest of the page. Don't try to match the feature card styling too closely.

---

## 5. Pricing

### Section eyebrow

```
PRICING
```

(Unchanged.)

### Section heading (H2)

```
One payment. Yours forever.
```

(Unchanged.)

### Section subhead

```
No subscriptions. No renewals. No "you've been billed" emails six months later.
```

(Unchanged. Note: straight quotes around `"you've been billed"`, do not auto-curl.)

### Free card

- Tier name: `Lansia Free`
- Price (large): `Free`
- Price subtitle: `Forever. No card required.`
- Bullets:
  - `Three goals a day`
  - `Today and tomorrow view`
  - `Evening reminder to plan tomorrow`
  - `Basic stats`

### Lifetime card

**Drop the `Most popular` badge entirely.** With only two tiers and one of them paid, the label isn't doing real work. Differentiate the Lifetime card visually with a slightly brighter card border or gradient instead.

- Tier name: `Lansia Lifetime`
- Price (large): `$4.99`
- Price subtitle: `One-time. No subscription, ever.`
- Bullets:
  - `Everything in Free`
  - `Five goals a day`
  - `Full history`
  - `Full stats dashboard`
  - `Weekly and yearly heatmaps`
  - `Streaks, perfect weeks, strongest day`
  - `Quiet milestones`

### Implementation notes

- The visual price on the Lifetime card was previously the word `One-time` with no actual number. The number `$4.99` is the offer and must be the visual anchor.
- The previous bullet `Consistency + comeback rate` referenced metrics that don't exist in the shipped Stats tab. The new bullet list reflects what's actually in the app per the Stats & Milestones reference.
- No card-level CTAs (the existing pattern). Download CTAs stay in hero and bottom CTA only.

---

## 6. Reviews (NEW section)

Add a new section between the FAQ section and the bottom CTA section. Section anchor: `#reviews`.

### Section heading (H2)

```
From people who kept it.
```

No subhead. Reviews carry the section.

### Review data

The user will provide 3-4 real five-star reviews from the App Store, copied verbatim. Until that content is available, scaffold the section with this structure and leave clear placeholders:

```json
[
  {
    "stars": 5,
    "name": "[Rok]",
    "source": "App Store",
    "text": "[So simple, I can’t believe it. And SO efective! Absolutely love it!]"
  },
  {
    "stars": 5,
    "name": "[Jonathan]",
    "source": "App Store",
    "text": "[Finally an app that doesn't overcomplicate things. Beautiful UI and a great way to track daily progress.]"
  },
  {
    "stars": 5,
    "name": "[Tea]",
    "source": "App Store",
    "text": "[I just love the idea of focusing on what I can do tomorrow and not in 6 months. Keeps me accountable. Love how beautiful the app looks.]"
  }
]
```

Target 4 cards. 3 works. Don't render fewer than 3.

### Card visual

- Background `rgba(255,255,255,0.06)`, border `1px solid rgba(255,255,255,0.08)`, border-radius matching the feature and pricing cards.
- Padding similar to pricing cards.
- Five-star row at the top of each card, lilac `#CE95F9`, rendered as SVG (not emoji).
  - `aria-label="5 out of 5 stars"` on the row container.
  - `aria-hidden="true"` on the individual star SVGs.
- Review body text: Kanit, white at ~92% opacity, normal weight. Render without surrounding quotation marks on screen.
- Attribution below the body, two short lines:
  - Reviewer first name on line one.
  - `App Store` (or `Play Store`) on line two, in `rgba(255,255,255,0.55)`, around 13px, letter-spacing 0.05em, lowercase.
- No dates, no review titles, no platform logos, no star count number.

### Layout

- Desktop (≥768px): 2 columns × 2 rows for 4 reviews. If only 3 reviews, switch to 3 columns × 1 row.
- Mobile: single column stack.
- Gap between cards matches the gap used in the pricing section.

### Nav

- Add `Reviews` to the top nav between `Features` and `Pricing`, anchor `#reviews`.
- Add `Reviews` to the footer `App` list as well, same anchor.

### Don't add

- No `Read more` truncation. Pick reviews that fit in full.
- No aggregate rating like `4.8 stars from 127 reviews`. Off-brand and high-maintenance.
- No carousel. Static grid only.

---

## 7. FAQ

Replace the entire FAQ list with the following eight questions, in this order. A new question (`Is Lansia a habit tracker?`) has been added between question 4 and question 5.

### Q1: What is Lansia?

```
A daily plan you actually keep. Every evening (or first thing in the morning), you write up to five tasks for the day ahead. You tap to mark done, swipe to mark missed. Over time the app shows you the patterns: when you show up, when you don't, and what kind of days work best for you.
```

### Q2: Why five goals, not fifty?

```
Because real focus has a limit. When a system lets you list everything, you list everything, and finish nothing. Two is fine. Three is the sweet spot. Five is the ceiling. Most days you'll write three. On busy ones you'll write one. The cap is the feature.
```

### Q3: What should my goals look like?

```
Anything that moves your week forward. A 10-minute walk. A hard email you've been putting off. The first draft of a chapter. Big or small, only you decide. The only rule is that future-you will be glad past-you wrote it down.
```

### Q4: What if I don't complete a task?

```
Nobody's perfect. Missed goals are a normal part of the week. Lansia tracks your comeback rate so you can see how quickly you recover, not just how often you hit 100%. A week with three good days and two off days is still a good week.
```

### Q5: Is Lansia a habit tracker? (NEW)

```
Not exactly. Traditional habit trackers ask you to commit to the same actions forever and punish you for breaking the streak. Lansia is a daily plan: fresh tasks every day, no long-term contracts with yourself, no chain to break. The habit being tracked is the meta-habit of showing up with a small plan and following through.
```

### Q6: Is Lansia free?

```
Yes. The free tier gives you three goals a day, today and tomorrow view, and an evening reminder. Lansia Lifetime is a one-time $4.99 purchase that unlocks five goals a day, the full stats dashboard, heatmaps, and your complete history.
```

### Q7: Is it really a one-time purchase?

```
Yes. No subscription, no renewals, no surprise charges six months later. Pay once, keep it forever, on any device signed into the same App Store or Google Play account.
```

### Q8: Does Lansia sell my data?

```
No. We don't sell data, we don't run ads, we don't use your goals to train AI. Your data is yours, and you can delete your account from inside the app at any time.
```

---

## 8. Bottom CTA

Replace the current bottom CTA copy.

### Heading

```
Start tomorrow.
```

### Subhead

```
Free to download. 30 seconds to set up. Your evening reminder starts tonight.
```

### CTAs

Unchanged. Keep both store buttons.

---

## 9. Footer

### Brand line

The current line `Daily goals. Real progress. Built in Slovenia by one person who has journaled their daily goals every day for years.` is removed. The founder story now lives in its own About section.

Replace with the brand promise:

```
Small wins, every day.
```

### Made in Slovenia line

**Remove the `Made in Slovenia 🇸🇮` line entirely.** Multiple languages are being added soon and the flag will feel mismatched against localized variants.

### Legal + nav columns

- `App` list: add `Reviews` (anchor `#reviews`). Keep `Features`, `Pricing`, `Download`.
- `Legal` list unchanged (`Privacy Policy`, `Terms of Service`).
- `© 2026 Lansia` unchanged.

---

## Final checklist

After implementing, verify:

- [ ] No em dashes or en dashes anywhere in the new copy.
- [ ] No banned phrases anywhere.
- [ ] All instances of `€4.99` replaced with `$4.99`.
- [ ] The `Most popular` badge is removed from the Lifetime pricing card.
- [ ] The `Made in Slovenia 🇸🇮` line is removed from the footer.
- [ ] Top nav has four items: `Features`, `Reviews`, `Pricing`, `Download`.
- [ ] Footer `App` list includes `Reviews`.
- [ ] About / founder section is between Features and Pricing, anchor `#story`.
- [ ] Reviews section is between FAQ and bottom CTA, anchor `#reviews`.
- [ ] `<title>` tag matches `og:title` (`Lansia: Small wins, every day.`).
- [ ] og-image.png has been flagged for regeneration (handle separately).

## Open follow-ups (not blocking implementation)

1. **Reviews content**: User will paste 3-4 real App Store reviews into the placeholder JSON above. Until then, the section can ship with placeholder cards or stay hidden behind a feature flag.
2. **og-image.png**: Needs regeneration with new brand promise (`Small wins, every day.`) and standard 1200x630 dimensions.
3. **Founder photo**: Optional addition to the About section if the user provides one.
