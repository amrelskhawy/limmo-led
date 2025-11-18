# LuminaTech - LED Lighting Solutions Platform

## Overview

LuminaTech is a B2B e-commerce platform for professional LED lighting solutions targeting organizations. The application presents a premium product catalog for office, industrial, outdoor, and retail LED lighting, with an emphasis on energy efficiency and sustainability. Built as a modern single-page application, it features product browsing, detailed product pages, and contact form submissions for quote requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod validation for form handling

**UI Framework:**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design system
- Design inspired by Apple (premium presentation), Stripe (professional restraint), and Linear (modern typography)
- Custom theme system supporting light/dark modes with CSS variables

**Component Structure:**
- Page components in `client/src/pages/` (Home, About, Products, ProductDetail, Contact)
- Reusable UI components from shadcn/ui in `client/src/components/ui/`
- Shared layout components (Navigation, Footer)
- Path aliases configured for clean imports (@/, @shared/, @assets/)

**State Management:**
- TanStack Query for asynchronous server state with caching
- React Hook Form for form state management
- No global state management library (Redux/Zustand) - relying on React Query and component state

### Backend Architecture

**Technology Stack:**
- Express.js web server with TypeScript
- Node.js runtime (ESM modules)
- RESTful API design pattern

**Server Structure:**
- Entry point: `server/index.ts` with request logging middleware
- Route handlers: `server/routes.ts` defining API endpoints
- Storage abstraction: `server/storage.ts` with in-memory implementation (MemStorage class)

**API Endpoints:**
- `GET /api/products` - Retrieve all products
- `GET /api/products/:id` - Retrieve single product by ID
- `POST /api/contact` - Submit contact form with optional product inquiry

**Data Storage Strategy:**
- Current: In-memory storage using Map collections (development/demo mode)
- Schema-first approach: Database schemas defined using Drizzle ORM
- Migration-ready: Drizzle configuration prepared for PostgreSQL migration
- Validation: Zod schemas derived from Drizzle schemas for runtime validation

**Development Environment:**
- Hot Module Replacement (HMR) via Vite in development
- Custom error overlay and dev tooling for Replit environment
- Request/response logging with timing information

### Data Layer

**Schema Design (Drizzle ORM):**

Products table structure:
- UUID primary key with auto-generation
- Product metadata (name, category, description, price)
- Technical specifications (wattage, lumens, color temperature, lifespan)
- Features stored as text array
- Image URL for product display

Contact Submissions table structure:
- UUID primary key with auto-generation
- Contact information (name, email, company, phone)
- Message content
- Optional product reference (productId, productName) for inquiry context

**Type Safety:**
- TypeScript types inferred from Drizzle schemas
- Zod schemas for runtime validation
- Shared types between client and server via `shared/schema.ts`

### Build and Deployment

**Development:**
- `npm run dev` - Runs Express server with Vite middleware for HMR
- TypeScript compilation via tsx runtime (no build step needed)
- Vite serves client assets with instant updates

**Production:**
- `npm run build` - Builds client with Vite and bundles server with esbuild
- Client output: `dist/public/` (static assets)
- Server output: `dist/index.js` (single bundled file)
- `npm start` - Runs production server serving static client and API

**Type Checking:**
- `npm run check` - TypeScript compilation check without emit
- Configured for strict mode with ESNext modules

## External Dependencies

### Database
- **Neon Database Serverless** (@neondatabase/serverless) - Configured for PostgreSQL connection
- **Drizzle ORM** - Database toolkit with PostgreSQL dialect
- Connection via DATABASE_URL environment variable
- Migration system ready with `drizzle-kit push` command

### UI Component Libraries
- **Radix UI** - Accessible component primitives (20+ components including Dialog, Dropdown, Popover, Tooltip, etc.)
- **shadcn/ui** - Pre-built component patterns using Radix primitives
- **Lucide React** - Icon library for consistent iconography
- **Embla Carousel** - Carousel/slider functionality
- **cmdk** - Command palette component

### Form Management
- **React Hook Form** - Performant form state management
- **Zod** - Schema validation library
- **@hookform/resolvers** - Zod resolver integration

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Component variant utilities
- **tailwind-merge** - Intelligent Tailwind class merging
- **clsx** - Conditional className construction

### Data Fetching
- **TanStack Query** - Server state management with intelligent caching
- Built-in fetch API for HTTP requests
- Custom query client configuration with credentials support

### Development Tools
- **Replit-specific plugins** - Runtime error modal, cartographer, dev banner (development only)
- **Vite plugins** - React plugin, custom overlays for Replit environment

### Utilities
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation

### Build Tools
- **Vite** - Fast build tool and dev server
- **esbuild** - Server bundling for production
- **tsx** - TypeScript execution for development
- **PostCSS** with Autoprefixer - CSS processing