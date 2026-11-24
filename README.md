# House of Interio: website

Next.js 15 site for House of Interio, Jaipur.

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Deploy
Push this `website` folder to GitHub and import it on Vercel (free), or run `npm run build && npm start` on any Node host.

## Editing content
- All text, services, projects, process steps and testimonials: `lib/site.ts`
- "My Story" text and the other sections: `app/page.tsx`
- Colours and styling: `app/globals.css` (tokens at the top)
- Photos: `public/images/`; logo files: `public/brand/`

## Before going live
- Replace the SAMPLE testimonials in `lib/site.ts` with real client quotes.
- Have Anjali review and edit the "My Story" text in `app/page.tsx`.
- Confirm project names and locations in `lib/site.ts`.
