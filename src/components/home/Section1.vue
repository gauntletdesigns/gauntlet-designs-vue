<template>
  <div class="outer">
    <b-container class="d-flex align-items-center flex-column">
      <div class="intro d-flex flex-column align-items-left">
      <h2 class="headline">
        Gauntlet Designs
      </h2>
        <p class="tagline">Design. Build. Maintain</p>
      <p class="text">
        Welcome to Gauntlet Designs. We design, build, and host custom websites to fit your needs. Be that a small
        family owned business, or a enterprise looking to expand. We are a female owned business located in the DC Metro
        Area. Our products are clean, light, responsive and fully customizable to meet your business needs.
      </p>
      </div>

      <div>
        <b-img></b-img>
      </div>
    </b-container>
      <Navbar/>
  </div>
</template>

<script>
import Logo from "../Logo";
import HomeTrinity from "./home-trinity";
import Navbar from "@/components/Navbar";

export default {
  name: "Section1",
  components: {Navbar}
}
</script>

<style scoped lang="scss">
.outer {
  background-color: $background-accent;
}

.text {
  color: $light-text;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 40px;
}

.headline {
  padding-top: 60px;
  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: 10px;
}

.tagline {
  font-size: 20px;
  padding-bottom: 40px;
  color: $info;
}

.intro {
  color: $light-text;
  font-family: 'Montserrat', sans-serif;
}
</style>
