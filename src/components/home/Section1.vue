<template>
  <div class="background d-flex flex-column">
    <b-container
      class="header-container d-flex flex-column align-items-left mb-auto"
    >
      <div class="intro">
        <h2 class="headline">Gauntlet Designs</h2>
        <p class="subtext">AND DEVELOPMENT</p>
        <p class="animation">
          CUSTOM
          <a id="style-2" data-replace="BUILD link"><span>DESIGN</span></a>
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Section1",
  components: { Navbar },
};
</script>

<style scoped lang="scss">
.background {
  background-image: url("../../assets/blue.webp");
  min-height: 400px;
  height: 60vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  .background {
    min-height: 300px;
    height: 50vh;
  }
}

.header-container {
  padding-top: 50px;
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
  font-family: "Montserrat", sans-serif;
}

//animated text

a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a::before,
a::after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
}
a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}
a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a:hover::after {
  transform: translate3d(0, 0, 0);
}

a span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
  transform: translate3d(-200%, 0, 0);
}

/* Presentational Styles */
body {
  display: grid;
  font-family: "Poppins", sans-serif;
  font-size: 27px;
  line-height: 1.5;
  height: 100vh;
  place-items: center;
}

a {
  text-decoration: none;
  color: #18272f;
  font-weight: 700;
  vertical-align: top;
  font-size: 25px;
}

.animation {
  font-size: 25px;
}
</style>
