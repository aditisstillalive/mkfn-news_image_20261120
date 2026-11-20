# mkfn-news_image_20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/aditisstillalive/mkfn-news_image_20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/aditisstillalive/mkfn-news_image_20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up the world news of Friday 20 November 2026: Russian missiles hit three Kyiv bridges; an AI sell-off sinks Asian stocks; Cyclone Akvan makes landfall in India; COP31 reaches its deadline day with no deal yet; a Houthi missile is shot down over Saudi Arabia.

![World news, 20 November 2026](entry.png)

The image is drawn as SVG in [`design/news.html`](design/news.html) and rendered to `entry.png` (1024×1024 PNG) with Playwright by [`design/render.mjs`](design/render.mjs). `main.ts` checks it against the contest's limits and copies it to `/output/entry.png`.

Each story was checked against reporting dated 20 November 2026 (Reuters, AFP, PTI, Saudi Press Agency).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=hp5q8mh0&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
