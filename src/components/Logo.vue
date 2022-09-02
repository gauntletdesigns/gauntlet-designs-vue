<template>
  <div class="d-flex justify-content-center">
    <b-img
      :src="require(`@/assets/${this.fileName}`)"
      :class="{ large, small: !large }"
      alt="Gauntlet Designs Logo"
    />
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    large: {
      type: Boolean,
    },
    text: {
      type: Boolean,
    },
  },

  computed: {
    fileName() {
      if (this.text) {
        return "gauntlet-designs-logo.webp";
      }
      return "gauntlet-designs-logo-no-text-small.webp";
    },
  },
};
</script>
<style scoped lang="scss">
.large {
  width: 450px;
  max-width: 80%;
}

.small {
  max-width: 75px;
}

small:hover {
  //  find a way to change the logo to accent color on hover. Maybe change to SVG?
}
</style>
