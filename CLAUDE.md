# tompickup23.github.io — Agent Context

## What this is

**A publish target, not a source repo.** GitHub Pages repo serving
`tompickup.co.uk` (see `CNAME`), holding built output — `_astro/`, rendered
route directories (`about/`, `contact/`, `news/`, `lancs/`, `lgr/`, `doge/`,
`press/`, `privacy/`, `cookies/`, `documents/`), sitemaps and images.

## Rules

1. **Don't hand-edit the built output.** Make the change in the Astro source
   repo — `~/tompickup.co.uk` — and rebuild/republish. Edits made here are lost
   on the next publish.
2. If something looks wrong here, diagnose it in the source repo.
3. This is the live public site for a serving councillor. Never publish, push or
   remove content without an explicit instruction, and take particular care with
   the `news/`, `press/`, `lgr/` and `documents/` sections.
4. Keep `CNAME`, `news-sitemap.xml` and the sitemaps intact — deleting them
   breaks the custom domain or search indexing.
