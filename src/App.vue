<template>
  <div id="app" class="min-h-screen flex flex-col theme-bg">
    <AppHeader />
    <MainContent />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import MainContent from "./components/MainContent.vue";
import { useTheme } from "./composables/useTheme.js";

// Initialize theme system
useTheme();
</script>
