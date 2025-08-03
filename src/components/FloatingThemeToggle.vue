<template>
  <button
    @click="toggleTheme"
    class="floating-theme-toggle"
    aria-label="Toggle theme"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <SunIcon
      v-if="isDark"
      class="h-6 w-6 transition-colors duration-200"
      :class="isDark ? 'text-yellow-400' : 'text-gray-600'"
    />
    <MoonIcon
      v-else
      class="h-6 w-6 transition-colors duration-200"
      :class="isDark ? 'text-blue-400' : 'text-gray-700'"
    />
  </button>
</template>

<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { useTheme } from "../composables/useTheme.js";

const { isDark, toggleTheme } = useTheme();
</script>
