<template>
  <header
    class="theme-surface sticky top-0 z-40 border-b theme-border"
    role="banner"
  >
    <div class="header-container">
      <div class="header-content">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <a
            href="https://gauntletdesigns.com/"
            class="logo-text"
            aria-label="Gauntlet Designs Home"
          >
            Gauntlet Designs
          </a>
        </div>

        <!-- Navigation -->
        <div class="nav-container">
          <nav
            class="hidden md:flex space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <a
              v-for="link in navigationLinks"
              :key="link.name"
              :href="link.href"
              :target="link.external ? '_blank' : '_self'"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="nav-link"
              :aria-label="link.ariaLabel"
            >
              {{ link.name }}
              <span v-if="link.external" class="sr-only"
                >(opens in new tab)</span
              >
            </a>
          </nav>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="mobile-menu-btn md:hidden"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Toggle main menu"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="mobileMenuOpen"
        id="mobile-menu"
        class="md:hidden pb-4"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div class="space-y-1">
          <a
            v-for="link in navigationLinks"
            :key="link.name"
            :href="link.href"
            :target="link.external ? '_blank' : '_self'"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="nav-link block px-4 py-4"
            :aria-label="link.ariaLabel"
            @click="closeMobileMenu"
          >
            {{ link.name }}
            <span v-if="link.external" class="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

const navigationLinks = [
  {
    name: "Portfolio",
    href: "https://www.aftongauntlett.com/",
    external: true,
    ariaLabel: "Visit Afton Gauntlett's freelance/portfolio website.",
  },
];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>
