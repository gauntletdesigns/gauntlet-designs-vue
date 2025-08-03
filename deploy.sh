#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Files ready for deployment in 'dist/' directory"
    echo ""
    echo "To deploy:"
    echo "  - Netlify: Drag and drop the 'dist' folder"
    echo "  - Vercel: Connect your GitHub repository"
    echo "  - GitHub Pages: Use GitHub Actions or upload 'dist' contents"
    echo "  - Any static host: Upload contents of 'dist' folder"
else
    echo "❌ Build failed!"
    exit 1
fi
