# Kyras Desert Guide - Implementation Memory

## Project Overview
- React + Vite project for a Morocco desert tour guide website
- Target user: Kyras, someone on a desert tour in Morocco
- Key features: Constellation guide, Culture/Fun facts, Travel tips, Trip journal

## Project Structure
```
C:\Claude code projects\Kyras_Desert_guide\
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Route page components (Home, Constellations, Culture, Tips, Journal)
│   ├── data/         # JSON data files (constellations, morocco-facts)
│   ├── assets/       # Static assets
│   ├── App.jsx       # React Router configuration
│   └── main.jsx      # Entry point
├── public/           # Static public files
├── IMPLEMENTATION.md # Task tracking document
└── CLAUDE.md         # Project documentation
```

## Tech Stack
- React 18.3.1
- Vite 6.x
- react-router-dom 7.x
- react-icons 5.x

## Task Completion Status
- [x] Task 1: Project Initialization & Setup (2026-02-06)
- [x] Task 2: Theme & Layout Foundation (2026-02-06)
- [x] Task 3: Home/Landing Page (2026-02-06)
- [x] Task 4: Constellation Guide - Data & Content (2026-02-06)
- [x] Task 5: Constellation Guide - UI Components (2026-02-06)
- [x] Task 6: Culture & Fun Facts Page (2026-02-06)
- [x] Task 7: Travel Tips Page (2026-02-06)
- [x] Task 8: Trip Journal Feature (2026-02-06)
- [ ] Task 9: Polish & Animations
- [x] Task 10: Git & Vercel Deployment (2026-02-06)
- [ ] Task 11: Documentation

## Deployment
- GitHub Repository: https://github.com/jbasin-stack/kyras-desert-guide
- Live Site: https://kyras-desert-guide.vercel.app
- Automatic deployments configured: Every push to master triggers Vercel rebuild
- Build verified successful: dist/ generated without errors

## Key Patterns
- Routes defined in src/App.jsx using react-router-dom BrowserRouter
- Pages are in src/pages/, components in src/components/
- Layout component wraps all pages with Header and footer
- Navigation component uses NavLink for active state styling
- Color palette: sand-beige, dusty-rose, sage-green, lavender-twilight, warm-terracotta, night-sky
- CSS custom properties defined in src/index.css for consistent theming
- Mobile-responsive with hamburger menu (<768px breakpoint)
- Pages should have corresponding .css files in same directory (e.g., Home.jsx + Home.css)
- Navigation cards use Link component from react-router-dom for internal routing
- Date formatting uses Intl.DateTimeFormat via toLocaleDateString()
- Each page section gets semantic <section> tag with descriptive class names

## Data Files
- Constellation data stored in src/data/constellations.json
  - 7 constellations: Orion, Canis Major, Ursa Major, Cassiopeia, Taurus, Gemini, Leo
  - Each has: id, name, arabicName, description, mythology, howToLocate, bestViewingTime, visibility, keyStars[], funFact, culturalSignificance
  - All tailored for Morocco (latitude ~31°N) in February
  - Arabic names and cultural significance included for each

- Morocco facts stored in src/data/morocco-facts.json
  - 20 facts across 5 categories
  - Categories: Moroccan Traditions (5), Berber Culture (6), Sahara Desert Geography (4), Desert Wildlife (4), Historical Facts (1)
  - Each fact has: id, category, title, content, icon (emoji)
  - Culturally respectful content with accurate information

## Home Page Implementation Details
- Hero section uses gradient from sand-beige to lavender-twilight
- Navigation cards are in 4-column grid (responsive: auto-fit minmax(250px, 1fr))
- Each card has color-coded accent bar (::before pseudo-element)
- Card hover effects: translateY(-8px), shadow elevation, arrow moves right
- CSS decorative elements: dune-decoration divs with border-radius for sand dunes
- Star accents use twinkle animation (opacity + scale)
- Moroccan proverbs array with 6 quotes, selected by day of week for consistency
- Daily inspiration section uses gradient background with border
- Animations: fadeInDown, fadeInUp, twinkle (all keyframe-based)
- Responsive breakpoints: 768px (tablet), 480px (mobile), 360px (very small)

## Travel Tips Page Implementation Details
- Uses collapsible TipSection component for accordion-style content organization
- TipSection accepts: icon (emoji), title, children (content), defaultOpen (boolean)
- Collapse/expand animation uses max-height transition (0 to 2000px)
- FiChevronDown/FiChevronUp icons from react-icons/fi for expand/collapse indicators
- Custom phrase-box class for highlighting Arabic phrases with lavender background
- First section (Camel Riding) defaults to open for better UX
- Content includes: Camel riding tips, Packing essentials, Safety & comfort, Cultural etiquette, Desert survival
- 7 Arabic phrases included with transliteration and English meanings
- Respectful cultural content covering photography etiquette, dress code, bargaining, hospitality customs

## Culture Page Implementation Details
- Category filtering system with 'All' option plus 5 specific categories
- useState hook manages selectedCategory state
- Filter buttons use pill-shaped design with rounded borders (border-radius: var(--radius-full))
- Active filter button has gradient background (dusty-rose to lavender-twilight)
- Fact counter displays filtered count dynamically
- FactCard component receives full fact object as prop
- Color-coding: Each category has unique color (set as CSS custom property --category-color)
  - Moroccan Traditions: dusty-rose
  - Berber Culture: lavender-twilight
  - Sahara Desert Geography: warm-terracotta
  - Desert Wildlife: sage-green
  - Historical Facts: sand-beige
- Facts grid uses CSS Grid with auto-fill, minmax(320px, 1fr) for responsive columns
- Card top border color matches category, gradient overlay on hover
- Staggered fade-in animation for cards (nth-child animation delays)
- Category badge displays as inline pill with category color
- Responsive: 1 column on mobile, 2-3 on tablet, 3-4 on desktop

## Constellation Guide Page Implementation Details
- ConstellationCard component with expandable details (accordion-style)
- Card displays: name (English + Arabic), description, visibility badge
- Expand/collapse animation using CSS transitions and fadeIn keyframes
- Visibility badges color-coded: easy (sage-green), moderate (warm-terracotta)
- Expanded view shows: mythology, howToLocate, bestViewingTime, keyStars list, funFact, culturalSignificance
- Key stars displayed in separate styled boxes with left border accent (lavender-twilight)
- Fun fact section has gradient background (lavender-twilight) with dusty-rose border
- Cultural section has gradient background (sage-green) with warm-terracotta border
- Circular expand button (+/-) with hover scale effect
- Data loading: Direct JSON import (not fetch) for Vite compatibility
- Grid layout: auto-fill minmax(400px, 1fr), responsive breakpoints at 1024px, 768px, 480px
- Stargazing tips box with bullet points styled as stars (::before emoji)
- Optional StarMap component created with SVG visualization
  - Generates pseudo-random star positions based on constellation name (seed-based)
  - Shows constellation lines connecting key stars
  - Animated twinkling stars and glowing key stars
  - Stylized representation, not astronomically accurate

## Trip Journal Implementation Details
- localStorage key: 'journalEntries' stores array of entry objects
- Entry structure: { id, content, timestamp (ISO string), mood (emoji string) }
- Entry ID format: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
- Entries displayed in reverse chronological order (newest first)
- useState hooks: entries, newEntry, selectedMood, isLoading
- useEffect for loading entries on mount, useEffect for saving on changes
- JournalEntry component handles individual entry display and editing
- Edit mode: Entry expands to show textarea and mood selector
- Delete confirmation: Inline confirmation dialog appears within entry card
- Timestamp formatting: Relative time for recent entries (minutes/hours/days ago), full date for older
- Mood selector: 8 emoji options (😊 ⭐ 🐫 🌅 🌙 💫 🏜️ 🎉) displayed as clickable buttons
- Mobile-friendly: Large touch targets (44x44px), font-size 16px on textarea prevents iOS zoom
- Character counter displays below save button
- Empty state: Centered message with ✍️ emoji when no entries exist
- Error handling: try-catch blocks for localStorage operations (handles full/disabled scenarios)
- Accessibility: aria-labels on buttons, sr-only labels on form fields, semantic time elements
- Styling: Pastel theme with lavender-twilight/dusty-rose gradient header, white entry cards with shadow

## Notes
- Windows environment (CRLF line endings)
- Dev server runs on port 5173 (or next available)
- When creating Vite project in non-empty dir, must manually create files
- JSON validation: Use node -e with JSON.parse to verify syntax
