<template>
  <div class="outer">
    <b-container class="d-flex flex-column align-items-left">
      <h2 class="sub-title">Welcome</h2>
      <p class="text">
        Welcome to Gauntlet Designs. We design, build, and host custom websites and enterprise grade
        applications to fit your needs. Be that a small family owned business, or a enterprise
        looking to expand. We are a female owned business located in the DC Metro Area. Our products
        are clean, light, responsive and fully customizable to meet your business needs.
      </p>
    </b-container>
  </div>
</template>

<script>
import SlideButton from '@/components/SlideButton';
export default {
  name: 'Section4',
  components: {SlideButton},
};
</script>

<style scoped lang="scss">
.outer {
  background-color: $background;
  padding: 60px 0px 30px 0px;
}

.learn-more {
  color: $accent;
  font-weight: 600;
}
</style>
