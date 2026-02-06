# Kyras's Desert Guide

A beautiful, interactive web guide for exploring the Moroccan Sahara desert - featuring constellation guides, cultural insights, travel tips, and a personal journey journal.

## 🎯 Project Objectives

Create a pastel-themed, mobile-friendly website that helps Kyras make the most of her desert tour in Marrakesh, Morocco by providing:

- **Interactive Constellation Guide**: Identify and learn about stars and constellations visible in the Sahara night sky
- **Moroccan Culture & Desert Facts**: Fascinating information about Berber traditions, desert ecology, and Moroccan heritage
- **Practical Travel Tips**: Essential advice for camel riding, desert survival, packing, and cultural etiquette
- **Personal Trip Journal**: A space to capture memories, thoughts, and favorite moments from the journey

## 📦 Deliverables

1. Fully functional React website with responsive design (mobile-first)
2. Git repository with clean commit history
3. Live deployment on Vercel with public URL
4. Content-rich pages with 5+ constellations and 15-20 curated facts
5. Trip journal with localStorage persistence
6. Comprehensive project documentation

## 🛠 Tech Stack

- **Framework**: React 18+ (component-based architecture)
- **Build Tool**: Vite (fast development and optimized builds)
- **Routing**: React Router DOM v6
- **Styling**: CSS Modules / Tailwind CSS (TBD during implementation)
- **Icons**: React Icons
- **Animations**: Framer Motion (optional, for polish)
- **Storage**: Browser localStorage (for journal entries)
- **Deployment**: Vercel (automatic deployments from Git)
- **Version Control**: Git + GitHub

## 🎨 Design System

### Color Palette (Pastel Desert Theme)

```css
--sand-beige: #F5E6D3;      /* Soft sand backgrounds */
--dusty-rose: #E8B4B8;      /* Accent color, warm highlights */
--sage-green: #C9D5B5;      /* Oasis, calm sections */
--lavender-twilight: #D4C5E2; /* Evening sky, subtle accents */
--warm-terracotta: #E8B4A0; /* Desert warmth, interactive elements */
--night-sky: #4A5568;       /* Text, contrast, night mode */
```

### Visual Elements

- Sand dune patterns (SVG or CSS gradients)
- Star/constellation illustrations
- Camel silhouettes
- Moroccan geometric tile patterns (subtle backgrounds)
- Smooth, rounded corners on cards and containers
- Soft shadows for depth

### Typography

- Clean, modern sans-serif for body text (readable on mobile)
- Slightly elegant serif or decorative font for headings (optional)
- Good contrast ratios for accessibility
- Responsive font sizes (min 16px for body text on mobile)

## 📁 File Structure

```
Kyras_Desert_guide/
├── README.md                 # Project overview for GitHub
├── CLAUDE.md                 # This file - project documentation
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── index.html                # HTML entry point
├── .gitignore                # Git ignore rules
│
├── public/                   # Static assets
│   ├── favicon.ico          # Desert-themed favicon
│   └── images/              # Public images
│
└── src/
    ├── main.jsx             # App entry point
    ├── App.jsx              # Root component with routing
    ├── index.css            # Global styles, CSS variables
    │
    ├── components/          # Reusable UI components
    │   ├── Header.jsx       # Site header/navigation bar
    │   ├── Navigation.jsx   # Navigation menu
    │   ├── Layout.jsx       # Page layout wrapper
    │   ├── StarMap.jsx      # Interactive star visualization
    │   ├── ConstellationCard.jsx  # Constellation details card
    │   ├── FactCard.jsx     # Fun fact display card
    │   ├── TipSection.jsx   # Organized tip categories
    │   └── JournalEntry.jsx # Journal entry display/edit
    │
    ├── pages/               # Page components
    │   ├── Home.jsx         # Landing page
    │   ├── ConstellationGuide.jsx  # Star guide page
    │   ├── Culture.jsx      # Cultural facts page
    │   ├── TravelTips.jsx   # Practical advice page
    │   └── Journal.jsx      # Personal journal page
    │
    ├── data/                # Static data files
    │   ├── constellations.json    # Constellation data
    │   └── morocco-facts.json     # Cultural facts data
    │
    └── assets/              # Images, SVGs, fonts
        └── icons/           # Custom SVG icons
```

## 🚀 Development Workflow

### Initial Setup

```bash
# Initialize React + Vite project
npm create vite@latest kyras-desert-guide -- --template react
cd kyras-desert-guide

# Install dependencies
npm install
npm install react-router-dom react-icons

# Start development server
npm run dev
```

### Running Locally

```bash
# Development server (hot reload enabled)
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### Git Workflow

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit: Project setup"

# Create GitHub repo and connect
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main

# Regular workflow
git add .
git commit -m "Descriptive commit message"
git push
```

## 🌐 Deployment to Vercel

### First-Time Deployment

1. **Push code to GitHub** (see Git workflow above)

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `Kyras_Desert_guide` repository
   - Configure build settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Get your URL**: Vercel will provide a public URL like `kyras-desert-guide.vercel.app`

### Continuous Deployment

Once connected, Vercel automatically deploys on every push to the `main` branch:

```bash
git add .
git commit -m "Add constellation guide feature"
git push
# Vercel automatically builds and deploys!
```

## 📋 Feature Implementation Checklist

### Phase 1: MVP (Deploy ASAP)
- [ ] Project initialization and setup
- [ ] Theme and layout foundation
- [ ] Home/landing page
- [ ] Constellation data (5-7 constellations)
- [ ] Constellation guide UI
- [ ] Culture/fun facts page (15-20 facts)
- [ ] Initial Vercel deployment

### Phase 2: Enhanced Features
- [ ] Travel tips page
- [ ] Trip journal with localStorage
- [ ] Improved mobile responsiveness

### Phase 3: Polish
- [ ] Smooth animations and transitions
- [ ] Desert-themed visual elements (SVG illustrations)
- [ ] Performance optimization
- [ ] Final documentation updates

## 🌟 Content Guidelines

### Constellation Guide

Each constellation should include:
- **Common name** (e.g., "Orion")
- **Arabic name** (if available)
- **Description**: What it looks like, notable features
- **Mythology**: Story or cultural significance
- **How to locate**: Directions using other visible stars/constellations
- **Best viewing time**: When to look for it (evening, late night, dawn)
- **Key stars**: Brightest or most notable stars within the constellation

**Constellations visible in Morocco (February)**:
- Orion (The Hunter) - Most prominent
- Canis Major (contains Sirius, brightest star)
- Ursa Major (Big Dipper/Plough)
- Cassiopeia (The Queen)
- Taurus (The Bull)
- Gemini (The Twins)
- Leo (The Lion)

### Morocco/Desert Facts

Categories to cover:
- **Sahara Geography**: Size, temperature ranges, dune types
- **Desert Wildlife**: Fennec foxes, scarab beetles, desert snakes, camels
- **Berber Culture**: Language, traditions, music, nomadic heritage
- **Moroccan Cuisine**: Tagine, couscous, mint tea ceremony (3 glasses tradition)
- **Traditional Crafts**: Carpet weaving, pottery, leather work
- **Historical Sites**: Kasbahs, ancient caravan routes
- **Desert Ecology**: Oasis formation, water conservation, plant adaptations

### Travel Tips

Essential categories:
- **Camel Riding**: Mounting, posture, what to expect, trust your guide
- **Packing Essentials**: Layers (hot days, cold nights), sun protection, hydration
- **Safety**: Sun exposure, dehydration prevention, sand protection for electronics
- **Cultural Etiquette**: Dress modestly, ask before photographing people, bargaining basics
- **Useful Phrases**: Basic Arabic/Berber greetings and thank yous

## 🔮 Future Enhancement Ideas

Once the MVP is deployed, consider these additions:
- **Dark mode**: Perfect for nighttime desert viewing
- **Weather widget**: Current conditions in Marrakesh
- **Sunrise/sunset times**: Daily golden hour tracker
- **Moon phase calendar**: Track the lunar cycle
- **Audio pronunciations**: Arabic/Berber phrases
- **Photo gallery**: Upload and organize trip photos
- **Printable PDF guide**: Offline reference
- **Desert wildlife ID**: Visual guide to animals and plants
- **Traditional music player**: Berber music samples
- **PWA features**: Offline access in the desert (no internet!)

## 🎯 Success Metrics

The project is successful when:
- ✅ Website is live and accessible on mobile devices
- ✅ Kyras can use it during her desert tour
- ✅ All core features are functional (constellations, facts, tips, journal)
- ✅ Design is visually appealing with pastel desert theme
- ✅ Mobile-responsive and fast-loading
- ✅ Content is accurate, helpful, and engaging

## 🤝 Contributing

This is a personal project for Kyras's trip, but feel free to fork and adapt it for your own desert adventures!

## 📝 License

MIT License - Feel free to use and modify

---

**Built with ❤️ for Kyras's Marrakesh Adventure** 🐫 ⭐ 🏜️
