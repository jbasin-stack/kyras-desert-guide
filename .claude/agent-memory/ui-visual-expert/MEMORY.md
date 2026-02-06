# Kyras Desert Guide - Visual Design Memory

## Project Overview
Pastel-themed Moroccan desert guide with warm, welcoming aesthetics.

## Color Palette
- Primary colors: sand-beige (#F5E6D3), dusty-rose (#E8B4B8), sage-green (#C9D5B5)
- Secondary: lavender-twilight (#D4C5E2), warm-terracotta (#E8B4A0), night-sky (#4A5568)
- Semantic: bg-primary (#FDFBF7), bg-secondary (sand-beige), text-primary (#2D3748)

## Design Patterns Observed
- Gradient backgrounds extensively used (linear-gradient 135deg pattern)
- Consistent border-radius using CSS variables (--radius-lg: 16px, --radius-md: 12px)
- Hover states: translateY(-2px to -8px) + box-shadow elevation
- Card-based layouts with box-shadow elevation system
- Emoji icons used consistently for visual personality
- Pastel color accents via category-based styling
- Responsive breakpoints: 768px (tablet), 480px (mobile), 375px (small mobile)

## Component Structure
- Pages: Home, Constellations, Culture, Tips, Journal
- Reusable components: ConstellationCard, FactCard, TipSection, JournalEntry
- Layout: Header (sticky, gradient), Navigation (mobile hamburger), Footer
- All components have dedicated CSS files with responsive design

## Visual Enhancements Implemented (2026-02-06)
1. ✅ Added decorative desert elements to all page headers (camels, palm trees, stars, luggage, notebooks)
2. ✅ Enhanced footer with camel and palm tree decorations
3. ✅ Improved Journal empty state with animated floating icon and background pattern
4. ✅ Added pulse-in animation to Culture page category buttons on selection
5. ✅ Enhanced Home page dunes with subtle sway animation
6. ✅ Added subtle radial gradient pattern to main content background
7. ✅ Improved hover states with scale transforms on cards
8. ✅ Enhanced Constellations page header with dark night sky theme and twinkling stars
9. ✅ Added decorative gradients to Tips footer with desert icons
10. ✅ All decorative elements have pointer-events: none for proper interaction

## Key Design Decisions
- Decorative elements use opacity 0.2-0.4 to remain subtle
- All pseudo-elements properly positioned with z-index layering
- Animations kept gentle (3-8s durations) for sophistication
- pointer-events: none on all decorative elements prevents click interference
- Maintained consistent spacing and responsive behavior

## Responsive Design Notes
- Touch targets properly sized (44px+ on mobile)
- Font sizes scale down appropriately
- Mobile menu uses slide-in drawer pattern
- Grid layouts adapt: multi-column → single column
- Forms adjust: side-by-side → stacked buttons

## Animation Patterns
- fadeInDown/fadeInUp for hero elements (0.8s ease-out)
- twinkle animation for star accents (3s infinite)
- Hover transforms with transition-base (250ms)
- Staggered entry animations on Culture page (0.05s increments)
