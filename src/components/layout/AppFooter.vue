<template>
  <footer class="theme-surface border-t theme-border" role="contentinfo">
    <div class="footer-container">
      <div class="footer-content">
        <p class="footer-text">
          © {{ currentYear }} Gauntlet Designs. All rights reserved.
        </p>
        <p class="footer-subtext">Built with Vue.js and Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>
