# ZERO DAY 2026

ZERO DAY 2026 is a fictional Capture The Flag (CTF) cybersecurity hackathon landing page built with React and Vite.

> Break the Code. Defend the Future.

This project is a frontend-only demonstration created for a university web team recruitment submission. It does not include a backend, database, real authentication, or real event registration system.

## Features

- Responsive cybersecurity-themed landing page
- ZERO DAY hero section with countdown timer
- About and event information sections
- Five CTF challenge tracks
- How It Works process section
- Fictional event timeline
- Prize cards using LKR currency
- Placeholder sponsor section
- Interactive FAQ accordion
- Official IEEE Computer Society and UCSC logo assets
- Secret Access Protocol with:
  - Terminal-inspired interface
  - ROT13 decoding clue
  - Local flag validation
  - ACCESS GRANTED state
  - Registration form unlock
- Responsive navigation and mobile menu

## Technology

- React
- JavaScript
- JSX
- Vite
- Vanilla CSS
- Lucide React

The project intentionally uses basic functional components, `useState`, `useEffect`, props, and `.map()` so the code remains approachable for an intermediate React learner.

## Getting started

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Project structure

```text
src/
├── components/
│   ├── About.jsx
│   ├── Challenges.jsx
│   ├── CTFChallenge.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── HowItWorks.jsx
│   ├── Navbar.jsx
│   ├── Prizes.jsx
│   ├── Registration.jsx
│   ├── Sponsors.jsx
│   └── Timeline.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx

public/
├── Image/
│   └── hero-bg.png
└── assets/
    └── branding/
        ├── ieee-cs-ucsc-color.png
        └── ieee-cs-ucsc-white.png
```

## Secret Access Protocol

The registration flow is intentionally gated behind a small frontend CTF challenge.

1. Click **Register** in the navigation or hero section.
2. Read the encoded string in the terminal panel.
3. Use the **Reveal clue** button to learn that the string uses ROT13.
4. Decode the string while keeping the braces and underscores.
5. Submit the decoded flag.
6. The registration form becomes available after access is granted.

The demonstration flag is:

```text
ZERO{defend_the_future}
```

This flag is present in the frontend source and is not securely protected. The challenge is for interaction and learning only, not for real security.

## Branding and assets

The official IEEE Computer Society and UCSC logo files are stored unchanged in `public/assets/branding/`.

- The white logo is used in the dark navigation and footer.
- The color logo is preserved for use on a suitable light-background attribution area.
- ZERO DAY has its own separate event identity and is not represented as the IEEE/UCSC logo.

Images in `public/` are referenced from the site root, for example:

```jsx
src="/assets/branding/ieee-cs-ucsc-white.png"
```

## Event disclaimer

All event dates, sponsors, prize amounts, registration details, and challenge content are fictional demonstration content. The prize values are displayed in Sri Lankan Rupees (LKR) as part of the mock event design.
