# Gauntlet Designs - Farewell Website

[![Commit Activity](https://img.shields.io/github/commit-activity/m/gauntletdesigns/gauntlet-designs-vue)](https://github.com/gauntletdesigns/gauntlet-designs-vue/commits)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/gauntletdesigns/gauntlet-designs-vue)

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
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue         # Navigation and branding
│   │   └── AppFooter.vue         # Footer with copyright
│   ├── MainContent.vue           # Hero section and main content
│   └── FloatingThemeToggle.vue   # Theme switcher button
├── composables/
│   └── useTheme.js               # Theme management composable
├── theme.css                     # CSS custom properties for theming
├── index.css                     # Component styles with Tailwind
├── main.js                       # Application entry point
└── App.vue                       # Root component with layout
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

## License

MIT License - Feel free to explore, learn from, and adapt the code for educational purposes.

---

Built with ✨ by [Afton Gauntlett](https://github.com/aftongauntlett) • Frontend Engineer specializing in UI/UX and Accessibility
