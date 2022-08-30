<template>
  <div class="d-flex flex-row">
    <b-img
      :src="require(`@/assets/${this.fileName}`)"
      class="cloud"
      :class="{ large, small: !large }"
      alt="Gauntlet Designs Logo"
    />
    <div class="google-text mt-auto ml-3">
      Build a carbon-free future on the cleanest cloud in the industry. Google
      Cloud is the only major cloud provider to purchase enough renewable energy
      to cover our operations, including your workloads.
    </div>
  </div>
</template>

<script>
export default {
  name: "CloudLogo",
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
        return "supercloud.svg";
      }
      return "supercloud.svg";
    },
  },
};
</script>

<style scoped lang="scss">
.cloud {
  width: 150px;
}

.google-text {
  font-size: 14px;
  color: #888080;
  max-width: 400px;
}
</style>
