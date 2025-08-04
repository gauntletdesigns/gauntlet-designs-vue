#!/bin/bash

# Deploy to Production - Push current main branch to gauntletdesigns org repo
# This triggers Vercel deployment

set -e  # Exit on any error

echo "🚀 Deploying to production..."

# Check if we're on main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "❌ Error: You must be on the main branch to deploy to production"
    echo "   Current branch: $CURRENT_BRANCH"
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Error: You have uncommitted changes. Please commit or stash them first."
    git status --short
    exit 1
fi

# Check if production remote exists, if not add it
if ! git remote | grep -q "^production$"; then
    echo "📡 Adding production remote..."
    read -p "Enter your GitHub personal access token (or press Enter if already configured): " TOKEN
    if [ -n "$TOKEN" ]; then
        git remote add production "https://$TOKEN@github.com/gauntletdesigns/gauntlet-designs-vue.git"
    else
        git remote add production "git@github.com:gauntletdesigns/gauntlet-designs-vue.git"
    fi
fi

# Push to production
echo "📤 Pushing to production repository..."
git push production main

echo "✅ Successfully deployed to production!"
echo "🌐 Vercel should start building shortly at: https://vercel.com"
echo "🔗 Live site: https://gauntletdesigns.com"
