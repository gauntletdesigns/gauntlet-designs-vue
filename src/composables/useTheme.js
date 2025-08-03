import { ref, onMounted, onUnmounted, watch } from "vue";

const isDark = ref(false);

export function useTheme() {
  let mediaQuery = null;
  let cleanup = null;

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  const setTheme = (dark) => {
    isDark.value = dark;
  };

  const initTheme = () => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDark.value = savedTheme === "dark";
    } else {
      // Use system preference
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  };

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  // Watch for theme changes and apply them
  watch(isDark, applyTheme, { immediate: true });

  // Listen for system theme changes
  onMounted(() => {
    initTheme();
    applyTheme();

    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
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
