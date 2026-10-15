# Ananya — Systems in Motion

A React + Vite starter portfolio with a cinematic midnight-blue visual identity, responsive navigation, scroll reveals, project filtering, and a quick-navigation command palette.

## 1. Install prerequisites
Install Node.js LTS from https://nodejs.org/ if you do not already have Node.js and npm.

## 2. Open this folder
Extract the ZIP, then open the extracted `ananya-portfolio` folder in VS Code.

## 3. Install dependencies
Open **Terminal → New Terminal** in VS Code and run:

```bash
npm install
```

## 4. Run the site
```bash
npm run dev
```

Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## 5. Build for production
```bash
npm run build
```

## Personalise before publishing
Search in `src/main.jsx` for:
- `YOUR_EMAIL@example.com` — replace with your public contact email.
- Project descriptions — verify and edit them to reflect your actual contribution and project status.
- `https://www.linkedin.com/` — replace with your exact LinkedIn profile URL.
- The photo placeholder — add your own image under `public/images/` and replace the placeholder in the About section.
- Award and patent details — verify exact names, dates, and legal/publication status before publishing.

## Add a profile image
Create `public/images/` and place your chosen image inside it, e.g. `ananya-portrait.jpg`. Then replace the photo placeholder in `src/main.jsx` with:

```jsx
<img
  className="profile-photo"
  src="/images/ananya-portrait.jpg"
  alt="Ananya Agarwal"
/>
```

Add styling in `src/styles.css`:

```css
.profile-photo {
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  object-position: center 35%;
  border-radius: 12px;
}
```

## Notes
- This is a starter template, not a finished verified CV. Check every claim and technology stack before publishing.
- The visual design uses CSS-generated artwork so the site works without external image assets.
- Fonts load from Google Fonts when online; system fallbacks remain available.
- Project cards currently link to the contact section. Add dedicated case-study pages and repository/demo links as you verify each project.
