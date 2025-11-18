# LumenForge - LED Lighting Solutions

A full-stack React + Express.js application showcasing premium LED lighting products with a modern, responsive design.

## 🚀 Features

- Modern React frontend with TypeScript
- Express.js backend with RESTful API
- Product catalog with detailed specifications
- Contact form with validation
- Responsive design with Tailwind CSS
- Serverless deployment on Vercel

## 🏗️ Architecture

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js with serverless functions for Vercel
- **Database**: In-memory storage (can be easily extended to PostgreSQL)
- **Deployment**: Vercel with serverless functions

## 📦 Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── products.ts         # Product API endpoints
│   ├── contact.ts          # Contact form API
│   └── products/[id].ts    # Dynamic product routes
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   └── lib/           # Utilities and configuration
├── server/                 # Express server (for development)
├── shared/                 # Shared types and schemas
└── vercel.json            # Vercel deployment configuration
```

## 🚀 Deployment on Vercel

### Prerequisites

1. Install [Vercel CLI](https://vercel.com/docs/cli): `npm i -g vercel`
2. Have a Vercel account

### Deploy Steps

1. **Clone and install dependencies:**

   ```bash
   git clone <your-repo>
   cd LumenForge
   npm install
   ```

2. **Build the project:**

   ```bash
   npm run build:vercel
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

### Environment Variables (if using database)

If you plan to use a real database like PostgreSQL on Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your database connection string:
   ```
   DATABASE_URL=postgresql://...
   ```

## 🔧 Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run dev
```

The development server will run both the frontend and backend with hot reloading.

### Build for Production

```bash
# Build frontend for Vercel
npm run build:vercel

# Build full application (traditional deployment)
npm run build
```

## 🌐 API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/contact` - Submit contact form

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🛠️ Technologies Used

### Frontend

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Radix UI for accessible components
- React Query for data fetching
- Framer Motion for animations

### Backend

- Express.js
- Zod for validation
- TypeScript
- Drizzle ORM (ready for database integration)

### Deployment

- Vercel for hosting
- Serverless functions for API
- Automatic deployments from Git

## 🔄 Migration from Development to Production

The application automatically switches between development and production modes:

- **Development**: Uses Express server with Vite middleware
- **Production**: Uses Vercel serverless functions with static files

## 📄 License

MIT License
