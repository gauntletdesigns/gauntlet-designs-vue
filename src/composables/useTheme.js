import { ref, onMounted, onUnmounted, watch } from "vue";

const isDark = ref(false);

export function useTheme() {
  let mediaQuery = null;
  let cleanup = null;

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    // When manually toggling, save the preference
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  };

  const setTheme = (dark) => {
    isDark.value = dark;
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const initTheme = () => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDark.value = savedTheme === "dark";
    } else {
      // Use system preference if no saved preference
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
      // Don't save to localStorage yet - let user's first manual toggle do that
    }
  };

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  // Initialize theme immediately (before mounting)
  initTheme();

  // Watch for theme changes and apply them
  watch(isDark, applyTheme, { immediate: true });

  // Listen for system theme changes
  onMounted(() => {
    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Only auto-update if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        isDark.value = e.matches;
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    cleanup = () => {
      mediaQuery?.removeEventListener("change", handleChange);
    };
  });

  onUnmounted(() => {
    cleanup?.();
  });

  return {
    isDark,
    toggleTheme,
    setTheme,
  };
}
