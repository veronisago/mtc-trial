# MHK-Kitchens Homepage

This project is the homepage for **MHK-Kitchens**, a demonstration of a responsive, pixel-perfect website built with:

- **React** (powered by Vite)
- **Tailwind CSS**
- **JSON** as a simulated Headless CMS data source

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Installation & Usage](#installation--usage)
4. [Data (JSON)](#data-json)
5. [Deployment](#deployment)
6. [License](#license)

---

## Features

- **Pixel-perfect** implementation based on an Adobe XD mockup
- **Responsive** layout for mobile, tablet, and desktop
- **Component-based** architecture: Navbar, Hero, Showcase, Testimonials, Gallery, Footer
- **Headless CMS simulation**: dynamic content stored in `src/data/home.json`
- **Static asset management** via imports for hashing and caching

---

## Project Structure

```
mtc-trial/
├── public/             # Static files (favicon)
├── src/
│   ├── assets/         # Images and SVGs
│   ├── common/         # Shared components/utilities (GoldButton)
│   ├── components/     # React components consuming JSON
│   ├── data/
│   │   └── home.json   # Dynamic page content
│   ├── App.jsx         # Main application entry
│   ├── main.jsx        # Application bootstrapper
│   └── index.css       # Tailwind CSS imports
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Project metadata & scripts
└── README.md           # This document
```

---

## Installation & Usage

### Prerequisites

- Node.js v16 or newer
- npm or Yarn

### Install dependencies

```bash
npm install
# or
yarn install
```

### Development Server

```bash
npm run dev
# Visit: http://localhost:5173
```

### Production Build

```bash
npm run build
# Preview build locally
npm run preview
```

---

## Data (JSON)

All dynamic content resides in `src/data/home.json`:

```json
{
  "navbar": { ... },
  "hero": { ... },
  "showcase": { ... },
  "testimonial": { ... },
  "gallery": { ... },
  "footer": { ... }
}
```

Each component receives its relevant data via props, separating content from presentation. When integrating with a real Headless CMS, you can replace this JSON import with API calls.

---

## Deployment

The `dist/` folder can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.). For example, to deploy with Vercel:

```bash
npm install -g vercel
vercel
```

---

## License

This project is licensed under the [MIT License](LICENSE).

