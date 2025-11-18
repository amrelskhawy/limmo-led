# Netlify Deployment Guide

## Environment Variables

Set these environment variables in your Netlify dashboard:

1. **DATABASE_URL** - Your Neon database connection string
2. **NODE_ENV** - Set to "production"
3. **Any other environment variables** your app needs

## Deploy Steps

1. Connect your repository to Netlify
2. Set the build command: `npm run build:netlify`
3. Set the publish directory: `dist/public`
4. Set the functions directory: `netlify/functions`
5. Add your environment variables
6. Deploy!

## Important Notes

- The backend API will be available at `/.netlify/functions/api`
- All API routes are automatically redirected to the function
- The frontend will be served as a static site
- Make sure your database is accessible from Netlify (Neon should work fine)

## Testing Locally

To test the build process locally:

```bash
npm run build:netlify
```

This will build both the client and the serverless functions.
