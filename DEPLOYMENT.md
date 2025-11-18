# Vercel Deployment Checklist

## ✅ Pre-deployment Steps

### 1. Code Preparation

- [x] Created `api/` directory with serverless functions
- [x] Added `vercel.json` configuration
- [x] Updated `package.json` with Vercel dependencies
- [x] Created `build:vercel` script
- [x] Configured TypeScript for API functions

### 2. API Functions Created

- [x] `api/products.ts` - Get all products
- [x] `api/products/[id].ts` - Get product by ID
- [x] `api/contact.ts` - Handle contact form submissions

### 3. Configuration Files

- [x] `vercel.json` - Deployment configuration
- [x] `tsconfig.json` - Updated to include API directory
- [x] `api/tsconfig.json` - API-specific TypeScript config

## 🚀 Deployment Steps

1. **Install Vercel CLI (if not already installed):**

   ```bash
   npm install -g vercel
   ```

2. **Build the project:**

   ```bash
   npm run build:vercel
   ```

3. **Deploy to Vercel:**

   ```bash
   vercel --prod
   ```

4. **Follow the prompts:**
   - Link to existing project or create new one
   - Select your team/account
   - Confirm deployment settings

## 🔍 Post-deployment Verification

### Test these endpoints on your Vercel URL:

1. **Homepage:** `https://your-app.vercel.app/`
2. **Products page:** `https://your-app.vercel.app/products`
3. **API endpoints:**
   - `https://your-app.vercel.app/api/products`
   - `https://your-app.vercel.app/api/products/[any-product-id]`
   - `https://your-app.vercel.app/api/contact` (POST)

### Test functionality:

- [ ] Homepage loads with hero section
- [ ] Products page displays all products
- [ ] Individual product pages work
- [ ] Contact form submits successfully
- [ ] Navigation works between pages
- [ ] Images load correctly
- [ ] Responsive design works on mobile

## 🐛 Troubleshooting

### Common Issues:

1. **API functions not working:**

   - Check Vercel function logs in dashboard
   - Verify `vercel.json` configuration
   - Ensure TypeScript compiles without errors

2. **Images not loading:**

   - Check if images are in `client/public/images/`
   - Verify image paths in storage.ts
   - Check network tab in browser dev tools

3. **Build fails:**

   - Run `npm run build:vercel` locally first
   - Check for TypeScript errors
   - Verify all dependencies are installed

4. **404 errors on refresh:**
   - Verify `routes` configuration in `vercel.json`
   - Check that SPA routing is properly configured

### Debug Commands:

```bash
# Check build locally
npm run build:vercel

# Test API functions locally with Vercel dev
vercel dev

# Check TypeScript compilation
npm run check
```

## 🔧 Environment Variables

If you need to add environment variables later:

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add variables for:
   - Database connections
   - API keys
   - Other secrets

## 📝 Notes

- The app uses in-memory storage, so data resets on each deployment
- To persist data, integrate with a database like PostgreSQL or MongoDB
- Static assets are served from `/images/` path
- API routes are automatically handled as serverless functions
