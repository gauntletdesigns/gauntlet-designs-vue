<template>
  <div class="outer">

    <b-container class="d-flex align-items-center flex-column section">
      <Logo class="my-5"/>
      <h2>
        Gauntlet Designs
      </h2>
      <p class="my-5">
        Welcome to Gauntlet Designs. We design, build, and host custom websites to fit your needs. Be that a small
        family owned business, or a enterprise looking to expand. We are a female owned business located in the DC Metro
        Area. Our products are clean, light, responsive and fully customizable to meet your business needs.
      </p>
      <home-trinity class="my-3"/>
    </b-container>
  </div>
</template>

<script>
import Logo from "../Logo";
import HomeTrinity from "./home-trinity";

export default {
  name: "Section1",
  components: {HomeTrinity, Logo}
}
</script>

<style scoped lang="scss">
.section {
}

.outer {
  background-color: $background-accent;
}
</style>
