# Netlify Deployment Checklist

## Pre-Deployment Steps ✅

- [x] **Build Configuration**: Added `netlify.toml` with proper build settings
- [x] **Build Scripts**: Updated `package.json` with Netlify-specific build commands
- [x] **Serverless Function**: Created Netlify function to handle API routes
- [x] **Dependencies**: Added `serverless-http` for function wrapper
- [x] **Redirects**: Configured API redirects and SPA fallback
- [x] **Build Test**: Verified build process works locally

## Deployment Steps

1. **Connect Repository to Netlify**

   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your Git provider and repository
   - Select the `main` branch

2. **Configure Build Settings** (Should be auto-detected from netlify.toml)

   - Build command: `npm run build:netlify`
   - Publish directory: `dist/public`
   - Functions directory: `netlify/functions`

3. **Set Environment Variables**

   - Go to Site Settings > Environment Variables
   - Add: `NODE_ENV=production`
   - Add any other variables from `.env.netlify.example`

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be available at a random Netlify URL

## Post-Deployment Verification

- [ ] **Frontend**: Check that the React app loads correctly
- [ ] **API Routes**: Test `/api/products` and `/api/contact` endpoints
- [ ] **Static Assets**: Verify images and other assets load properly
- [ ] **Forms**: Test contact form submission

## Custom Domain (Optional)

If you want a custom domain:

1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS records as instructed by Netlify

## Continuous Deployment

Once connected, Netlify will automatically:

- Deploy when you push to the main branch
- Show build logs and any errors
- Provide deploy previews for pull requests

Your app is ready for deployment! 🚀
