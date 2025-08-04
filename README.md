# Gauntlet Designs - Farewell Website

[![Deploy Status](https://img.shields.io/badge/deploy-manual-blue)](https://github.com/aftongauntlett/gauntlet-designs-vue)
[![CI/CD Pipeline](https://img.shields.io/badge/pipeline-ready-success?logo=github-actions)](https://github.com/aftongauntlett/gauntlet-designs-vue/actions)
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)](https://gauntletdesigns.com)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/aftongauntlett/gauntlet-designs-vue?logo=git)](https://github.com/aftongauntlett/gauntlet-designs-vue/commits)
[![Live Site](https://img.shields.io/badge/live%20site-gauntletdesigns.com-blue?logo=web)](https://gauntletdesigns.com)

A clean, modern, accessible farewell website built with Vue 3, Vite, and Tailwind CSS to serve as a graceful closure for the Gauntlet Designs business.

## Project Goals

This project serves as a professional closure page that:

- Thanks past clients and acknowledges the business journey
- Provides clear navigation to current professional presence
- Promotes ongoing freelance services
- Maintains high standards for performance, accessibility, and SEO
- Demonstrates modern web development best practices

## Tech Stack

![Vue.js](https://img.shields.io/badge/Vue_3-4FC08D?style=flat&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **Vue 3** - Modern composition API with `<script setup>`
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Custom Properties** - Theme system with light/dark mode
- **Heroicons** - Beautiful SVG icons
- **Responsive Design** - Mobile-first approach

## Project Structure

```
gauntlet-designs-vue/
├── public/
│   ├── .well-known/              # Well-known URIs for web standards
│   ├── favicon.svg               # Site favicon
│   ├── manifest.json             # Web app manifest
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # Site map for SEO
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue     # Navigation and branding
│   │   │   └── AppFooter.vue     # Footer with copyright
│   │   ├── FloatingThemeToggle.vue # Theme switcher button
│   │   └── MainContent.vue       # Hero section and main content
│   ├── composables/
│   │   └── useTheme.js           # Theme management composable
│   ├── App.vue                   # Root component with layout
│   ├── index.css                 # Component styles with Tailwind
│   ├── main.js                   # Application entry point
│   └── theme.css                 # CSS custom properties for theming
├── deploy.sh                     # Deployment script
├── index.html                    # Main HTML template
├── jsconfig.json                 # JavaScript configuration
├── package.json                  # Project dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── vercel.json                   # Vercel deployment configuration
└── vite.config.js                # Vite build tool configuration
```

## Development

### Quick Start

```bash
# Clone the repository
git clone https://github.com/gauntletdesigns/gauntlet-designs-vue.git
cd gauntlet-designs-vue

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

⚠️ **Important**: This repository syncs to the production repository for Vercel deployment.

### Development vs Production Repositories

- **Development repo**: `aftongauntlett/gauntlet-designs-vue` (this repo)
- **Production repo**: `gauntletdesigns/gauntlet-designs-vue` (Vercel watches this)

### Deployment Methods

#### Option 1: Manual Deployment (Recommended)

```bash
# Deploy current main branch to production
npm run deploy

# Check deployment status
npm run deploy:check
```

#### Option 2: Using the Script Directly

```bash
# Make sure you're on main branch with committed changes
./deploy-production.sh
```

#### Option 3: Automatic via GitHub Actions (Optional)

- **Setup required**: Add `PRODUCTION_REPO_TOKEN` secret in GitHub repository settings
- **Once configured**: Pushes to `main` branch automatically sync to production repo
- **Current status**: Manual deployment recommended (working perfectly)

### Important Notes

1. **Only deploy from main branch** - The script prevents accidental deployments from feature branches
2. **Commit changes first** - Uncommitted changes will prevent deployment
3. **Production updates** - Vercel only deploys when the `gauntletdesigns` org repo is updated
4. **Branch merges** - When PRs are merged to main, run `npm run deploy` to update production

### Vercel Configuration

The site deploys automatically to Vercel when the production repository is updated:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Framework**: Vite
- **Live URL**: https://gauntletdesigns.com

## License

MIT License - Feel free to explore, learn from, and adapt the code for educational purposes.

---

Built with ✨ by [Afton Gauntlett](https://github.com/aftongauntlett) • Frontend Engineer specializing in UI/UX and Accessibility
