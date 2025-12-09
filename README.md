# TechFix Community — GitHub-ready Site (Flat v4)

This is the same redesigned TechFix Community site, but structured to be **super easy to upload via the GitHub web UI**.

## Files in this version

All files live in the **root** (no nested folders required):

- `index.html` – main one-page site
- `style.css` – all styling (dark/light theme, layout, sections)
- `script.js` – main JS entry, loaded as a module
- `ui.js` – UI logic (nav, theme toggle, scroll spy, reveal, back-to-top)
- `plugins.js` – placeholder for future integrations (real contact form, analytics, etc.)

You can also optionally add:

- `favicon.svg` – your site icon
- Any images you want in the repo root or a simple `images/` folder (GitHub accepts folders as long as they have files).

## How to use on GitHub Pages

1. Go to your repo: `bernardr27/bernardr27.github.io`.
2. Click **Add file → Upload files**.
3. Drag-and-drop these files from the unzipped folder into the repo:
   - `index.html`
   - `style.css`
   - `script.js`
   - `ui.js`
   - `plugins.js`
   - (and `favicon.svg` if you create one)
4. Commit the changes.
5. Make sure GitHub Pages is set to deploy from the `main` branch, `/ (root)`.
6. Visit `https://bernardr27.github.io` and you should see the redesigned site.

## Customization

- Update your email and city in the Contact section of `index.html`.
- Swap the placeholder text in Services, Process, Portfolio, Pricing, and FAQ to match your real offers.
- Later, wire up a real contact form by adding logic in `plugins.js` or a dedicated form handler.
