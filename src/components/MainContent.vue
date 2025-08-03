<template>
  <main class="flex-1 theme-bg relative" role="main">
    <!-- Skip to main content link for accessibility -->
    <a href="#main-content" class="skip-link"> Skip to main content </a>

    <!-- Hero Section -->
    <section
      id="main-content"
      class="hero-section"
      aria-labelledby="hero-heading"
    >
      <div class="container-responsive text-center">
        <h1 id="hero-heading" class="hero-title">Farewell</h1>

        <div class="accent-bar mb-12"></div>

        <div class="text-container theme-text-secondary">
          <p class="hero-text">
            After years of creating beautiful digital experiences, we're closing
            our doors.
          </p>

          <p class="hero-text">
            It's been an incredible journey working with amazing clients and
            bringing their visions to life. Thank you to everyone who trusted us
            with their projects and helped make Gauntlet Designs what it was.
          </p>

          <p class="hero-text">
            While this chapter has ended, the passion for great design and
            development continues. I'm now available for freelance work and
            would love to help bring your next project to life.
          </p>
        </div>

        <!-- Contact Info -->
        <div class="contact-section">
          <p class="contact-prompt">
            Need a developer for your next project? Contact me through my
            portfolio website.
          </p>
        </div>

        <!-- Call to Action -->
        <div class="button-group">
          <a
            href="https://aftongauntlett.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary w-full sm:w-auto"
            aria-label="Visit Code Gauntlet freelance website"
          >
            Freelance Services
            <svg
              class="inline ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Floating Theme Toggle -->
    <FloatingThemeToggle />
  </main>
</template>

<script setup>
import FloatingThemeToggle from "./FloatingThemeToggle.vue";
</script>
