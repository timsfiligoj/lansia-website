# Lansia app screenshots

These are the screenshots used in the marketing site's phone mockups.

## Required files

Drop PNGs here with these exact filenames:

| Filename | Used in | Content |
|---|---|---|
| `hero-home.png` | Hero section | Today's goals screen with a mix of completed and pending items (ideally morning greeting "Good morning, ..." visible) |
| `feature-tasks.png` | "Plan your day with purpose" | Task list with some succeeded, some pending, one failed/missed via swipe |
| `feature-stats.png` | "See the story behind your days" | Stats tab with circular progress ring + streak cards + weekly heatmap visible |
| `feature-milestones.png` | "Small wins, earned" | Scroll down on stats screen to where MilestonesStrip shows — mix of unlocked + in-progress |
| `feature-boost.png` | "A quote to start with" | Boost tab showing today's motivational quote |

## Export recipe (iOS simulator)

With the dev client running on iPhone 15 Pro simulator (or 16 Pro Max):

```bash
# Capture the currently displayed screen to Desktop
xcrun simctl io booted screenshot ~/Desktop/hero-home.png
```

Then move the file into this directory.

## Format

- **Aspect ratio**: 9:19.5 (iPhone 14/15/16 Pro)
- **Resolution**: 1170×2532 native, but the site displays them inside a ~280px-wide frame so anything ≥ 800px tall is fine
- **Format**: PNG (site serves statically, compress if size > 500 KB via `pngquant` or TinyPNG)

## Placeholder

If any file is missing, the site renders a friendly "Drop a real screenshot" placeholder inside the phone frame automatically — so the site never breaks. Just swap them in as you capture them.
