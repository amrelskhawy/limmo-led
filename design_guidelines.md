# LED Lighting Company - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing from:
- **Apple**: Premium product presentation, clean layouts, sophisticated imagery
- **Stripe**: Professional restraint, purposeful animations, trust-building design
- **Linear**: Modern typography, smooth micro-interactions, gradient accents

**Design Principles:**
- Sophisticated minimalism with strategic light/glow effects
- Smooth, purposeful animations that enhance (not distract)
- Premium feel appropriate for B2B organizational sales
- Product-first visual hierarchy

## Typography

**Font Stack:**
- Primary: Inter (Google Fonts) - Clean, modern, professional
- Headings: 700 weight
- Body: 400 weight
- Accents: 600 weight

**Scale:**
- Hero Headline: text-6xl lg:text-7xl
- Section Headings: text-4xl lg:text-5xl
- Subsections: text-2xl lg:text-3xl
- Body: text-base lg:text-lg
- Small Text: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24, py-32
- Grid gaps: gap-6, gap-8, gap-12

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Product grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
- Sticky header with blur backdrop (backdrop-blur-lg)
- Logo left, links center/right on desktop
- Hamburger menu for mobile with slide-in drawer
- Subtle scroll shadow appears on scroll

### Hero Section (Landing)
- Full viewport height (min-h-screen)
- Large background image showing LED installations in modern office/facility
- Overlay gradient (subtle dark overlay for text contrast)
- Centered content: headline + subheading + primary CTA
- Animated scroll indicator at bottom
- Buttons with blurred backgrounds (backdrop-blur-md bg-white/20)

### Product Cards (Products Page)
- Card with product image, title, category badge, brief description
- Hover state: subtle lift (translate-y-2), shadow increase, image zoom
- "View Details" button appears on hover
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Filter sidebar/top bar with category buttons

### Product Detail Page
- Left: Image gallery with thumbnails (vertical or horizontal)
- Right: Product name, category, specifications list, features with icons
- Sticky "Request Quote" CTA that follows scroll
- Specifications in clean table/grid format
- Related products section at bottom

### Contact Form
- Two-column layout on desktop: form left, contact info/map right
- Form fields with floating labels
- Pre-filled product field when navigating from product page
- Success state with animation

### Footer
- Multi-column: Company info, Quick Links, Product Categories, Contact
- Newsletter signup with inline form
- Social links with icon font
- Trust indicators (certifications, years in business)

## Animations

**Entry Animations:**
- Fade up on scroll (use Intersection Observer)
- Stagger delays for grid items (0.1s increments)
- Hero elements fade in sequence on load

**Hover States:**
- Product cards: transform scale(1.02), shadow elevation
- Buttons: subtle brightness increase
- Navigation links: underline slide-in

**Page Transitions:**
- Smooth scroll behavior enabled
- Cross-fade between pages (if SPA)

**Performance:** Use will-change sparingly, prefer transform/opacity

## Images

**Hero Image:**
- Large, high-quality image showing LED lights in modern commercial space
- Professional photography of installations (office, warehouse, retail)
- Placement: Full-width background with gradient overlay

**Product Images:**
- Clean product shots on white/neutral backgrounds
- Lifestyle images showing installations
- Detail shots highlighting features
- Minimum 1200px width for quality

**Supporting Images:**
- About page: Team photos, facility images
- Case study sections: Before/after installations
- Icon illustrations for features/benefits

## Icons

Use **Heroicons** (outline style) via CDN for consistency with modern aesthetic

## Page-Specific Guidelines

**Landing Page (6-7 sections):**
1. Hero with dramatic LED installation image
2. Key benefits (3-4 columns with icons)
3. Product categories showcase (image + text cards)
4. Featured installations/case studies
5. Why choose us (stats + features)
6. Testimonials (2-column)
7. CTA section with contact form preview

**Products Page:**
- Filter bar with category chips
- Search functionality
- Sort dropdown (price, popularity, newest)
- Product grid with consistent card heights
- Load more/pagination

**Product Detail:**
- Breadcrumb navigation
- Image gallery with lightbox
- Specifications table
- Technical documents download section
- Similar products carousel

**About Page:**
- Company story with timeline
- Mission/values cards
- Team section (if applicable)
- Certifications/partnerships logos

**Contact Page:**
- Form with validation states
- Office locations/hours
- Map integration
- Alternative contact methods (phone, email)

---

**Visual Treatment:** Professional, clean, and modern with subtle use of light effects (glows, gradients) that reinforce the LED lighting theme without being overwhelming. White/light backgrounds with dark text, strategic use of glass morphism effects for CTAs and overlays.