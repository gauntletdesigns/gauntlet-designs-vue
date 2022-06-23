<template>
<b-img
    :src="require(`@/assets/${this.fileName}`)"
    :class="{large, 'small': !large}"
    alt="Gauntlet Designs Logo"
/>
</template>

<script>
export default {
  name: "Logo",
  props: {
    large: {
      type: Boolean
    },
    text: {
      type: Boolean
    }
  },

  computed: {
    fileName(){
      if (this.text){
        return 'gauntlet-designs-logo.webp'
      }
      return 'gauntlet-designs-logo-no-text.webp'
    }
  }
}
</script>

<style scoped lang="scss">
  .large {
    max-width: 300px;
  }

  .small {
    max-width: 75px;
  }
</style>
