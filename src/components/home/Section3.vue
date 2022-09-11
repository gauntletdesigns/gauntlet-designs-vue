<template>
  <div class="outer">
    <b-container class="d-flex flex-column align-items-left">
      <h2 class="sub-title">Consulting</h2>
      <div class="text">
        Don't need a website, but instead looking for expertise and assistance for your existing web
        infrastructure? We can help with that too. We have professional work experience with AWS,
        Google Cloud, and Azure. Along with modern Javascript frameworks, and web application
        backends.
      </div>
    </b-container>
  </div>
</template>

<script>
import SlideButton from '@/components/SlideButton';
export default {
  name: 'Section3',
  components: {SlideButton},
};
</script>

<style scoped lang="scss">
.outer {
  background-color: $background;
  padding: 60px 0px 30px 0px;
}
</style>
