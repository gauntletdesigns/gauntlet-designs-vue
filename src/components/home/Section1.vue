<template>
  <div class="background d-flex flex-column">
    <b-container class="header-container d-flex flex-column align-items-left mb-auto">
      <div class="intro">
      <h2 class="headline">
        Gauntlet Designs
      </h2>
        <p CLASS="subtext">AND DEVELOPMENT</p>
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
.background {
  background-image: url("../../assets/blue.jpg");
  min-height: 600px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-container {
 padding-top: 50px;
}

.text {
  color: $light-text;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 40px;
}

.subtext {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 8px;
  padding-bottom: 20px;
}

.headline {
  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: 10px;
}

.tagline {
  font-size: 20px;
  padding-bottom: 40px;
  color: $info;
  font-weight: bold;
}

.intro {
  color: $light-text;
  font-family: 'Montserrat', sans-serif;
}
</style>
