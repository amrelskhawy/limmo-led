#!/bin/bash

echo "🚀 Testing Netlify Build Process..."

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf dist/
rm -rf netlify/functions/*.mjs

# Run the build
echo "Running Netlify build..."
npm run build:netlify

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo "✅ Build succeeded!"
    
    echo "📁 Build artifacts:"
    echo "- Client files:"
    ls -la dist/public/
    
    echo "- Function files:"
    ls -la netlify/functions/
    
    echo ""
    echo "🎉 Your app is ready for Netlify deployment!"
    echo "📋 Next steps:"
    echo "1. Connect your repository to Netlify"
    echo "2. Deploy using the settings in netlify.toml"
    echo "3. Set NODE_ENV=production in environment variables"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi