# SeamX UK

The **project root is the website**. Open it and you get the homepage — not a folder listing.

## Run

```bash
npm start
```

→ **http://127.0.0.1:3000/**

## What’s here

| Item | Purpose |
|------|---------|
| `index.html` | Homepage / app shell |
| `assets/` | Logo + photos |
| `*.js` / `*.css` | App |
| `_redirects` | Cloudflare 301s + SPA fallback |
| `_archive/` | Old 761-route dump + package evidence (not part of the site) |
| `dist/` | Cloudflare deploy build (`npm run build`) |

## Cloudflare

```bash
npm run build
npx wrangler pages deploy dist --project-name seamx-uk
```
