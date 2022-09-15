<template>
  <b-row
      data-aos-once="true"
      data-aos="fade-left"
      data-aos-offset="50"
      data-aos-anchor="#trigger-development"
      class="py-5"
  >
    <b-col cols="12" md="7" id="trigger-development">
      <h2 class="sub-title align-self-end">Welcome</h2>
      <p class="text">
        Welcome to Gauntlet Designs. We design, build, and host custom websites and enterprise grade
        applications to fit your needs. Be that a small family owned business, or a enterprise looking
        to expand. We are a female owned business located in the DC Metro Area. Our products are
        clean, light, responsive and fully customizable to meet your business needs.
      </p>
    </b-col>
    <b-col cols="12" md="5" lg="3" offset-lg="1" class="d-none d-md-block">
      <img
          class="background"
          src="@/assets/monitor.svg"
          alt="Illustration of a computer monitor with a settings gear icon within."
      />
    </b-col>
  </b-row>
</template>

<script>
import SlideButton from '@/components/Buttons/SlideButton';
export default {
  name: 'Section4',
  components: {SlideButton},
};
</script>

<style scoped lang="scss">
.learn-more {
  color: $accent;
  font-weight: 600;
}

.container {
  max-width: 600px;
  margin: 0;
}
</style>
