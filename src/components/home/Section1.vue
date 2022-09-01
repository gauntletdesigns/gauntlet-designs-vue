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
          <span class="hover-btn" id="style-2" data-replace="BUILD link"
            ><span>DESIGN</span></span
          >
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

.hover-btn {
  overflow: hidden;
  position: relative;
  display: inline-block;
  color: white !important;
}

.hover-btn::before,
.hover-btn::after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
}
.hover-btn::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}
.hover-btn::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

.hover-btn:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.hover-btn:hover::after {
  transform: translate3d(0, 0, 0);
}

.hover-btn span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

.hover-btn:hover span {
  transform: translate3d(-200%, 0, 0);
}

.hover-btn {
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
