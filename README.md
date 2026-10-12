# Gift Angel portfolio site

Vite + React + Framer Motion. Black and gold, built mobile first.

## Run it
```
npm install
npm run dev        # opens a local preview
npm run build      # makes the production site in /dist
```

## The three files you will edit
- `src/config/media.js`   photos and videos (Cloudinary public IDs) and the FOLDER switch
- `src/config/content.js` all text, links, bio, services, photo credits
- `index.html`            page title, description and share image

## First check after `npm run dev`
If photos or videos show "unavailable", open one image in Cloudinary, copy its URL and compare it with
`src/config/media.js`. If the URL contains `home/gift_angel/`, set `FOLDER = 'home/gift_angel'`.

## Things to confirm before launch
- Photo credits: fill the `credit` line for each world in `content.js`.
- Alt text: photo descriptions are generic. Make them specific for better SEO.
- Brand permission for the Payscribe and Legal Paradigms logos and videos.
- The people shown in the event and personality clips are fine with it.
- Service descriptions and the tagline are drafts. Edit them with her.
