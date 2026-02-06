# Kyras Desert Guide - Web Debugger Memory

## Project Overview
React + Vite application with pastel desert theme using custom CSS variables and component-based architecture.

## CSS Architecture
- **Design System**: Uses CSS custom properties in `src/index.css` for colors, spacing, typography, shadows, and transitions
- **Component Styles**: Each component has its own CSS file with scoped styles
- **Responsive Approach**: Mobile-first with breakpoints at 480px, 768px, 1024px

## Common Bug Patterns Fixed

### Text Overflow Issues
- **Problem**: Long text content can overflow containers and break layouts
- **Solution**: Add `overflow-wrap: break-word` and `word-wrap: break-word` to text elements
- **Affected Components**: ConstellationCard titles, FactCard titles/content, Home page card titles and proverbs
- **Prevention**: Always add word-wrap properties to user-generated or dynamic text containers

### CSS Redundancies
- **Duplicate scroll-behavior**: Was declared twice in `index.css` - consolidated into single declaration
- **FactCard category label**: Had conflicting `background-clip` properties causing rendering bugs
- **Duplicate animations**: `fadeInUp` and `fadeInDown` moved to global scope in `index.css` to prevent duplication
- **App.css cleanup**: Removed unused Vite boilerplate styles

### Z-Index Management
- **Header sticky**: z-index: 100
- **Mobile menu toggle**: z-index: 101 (above header)
- **Mobile menu panel**: z-index: 99 (below toggle, above overlay)
- **Mobile menu overlay**: z-index: 98
- **Keep values under 100 when possible**: Only navigation uses 98-101 range for stacking context

### Performance Optimizations
- **will-change property**: Added to frequently animated elements (hero animations, hamburger menu, dune decorations)
- **Affects**: Hero title, subtitle, date display, hamburger menu spans, dune decorations, category buttons
- **Note**: Only use will-change on elements that actually animate to avoid memory overhead

### Mobile Responsiveness
- **iOS text zoom fix**: Set `font-size: 16px` on form inputs to prevent auto-zoom on focus
- **Touch targets**: Increased button sizes on mobile (44px minimum for accessibility)
- **TipSection max-height**: Increased from 2000px to 3000px to accommodate longer content

## Color Contrast Verified
All pastel colors have sufficient contrast against text:
- Primary text: `#2D3748` on `#FDFBF7` background
- Category badges: White text on pastel backgrounds with 0.9 opacity
- No contrast issues detected

## File Structure
```
src/
├── index.css (global styles, variables, animations)
├── App.css (minimal root styles)
├── components/
│   ├── Header.css
│   ├── Navigation.css (mobile menu with overlay)
│   ├── Layout.css
│   ├── ConstellationCard.css
│   ├── FactCard.css
│   ├── TipSection.css (accordion component)
│   ├── JournalEntry.css
│   └── StarMap.css
└── pages/
    ├── Home.css (hero, nav cards, animations)
    ├── Constellations.css
    ├── Culture.css
    ├── Tips.css
    └── Journal.css
```

## Key Findings
- No major layout collisions or z-index conflicts
- Animations are smooth with GPU acceleration
- Responsive breakpoints work correctly across all pages
- Spacing is consistent using CSS variables
- All text is readable with good contrast ratios
