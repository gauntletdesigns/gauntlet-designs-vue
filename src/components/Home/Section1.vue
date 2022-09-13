<template>
  <div class="d-flex flex-column">
    <b-container class="header-container d-flex flex-column align-items-left">
      <div class="intro">
        <h2 class="headline">Gauntlet Designs</h2>
        <p class="animation">
          CUSTOM BUILT
          <span class="hover-btn" id="style-2" data-replace="DESIGNS link"
            ><span>WEBSITES</span></span
          >
        </p>
        <BorderButton class="mt-4" text="Learn More" linkName="services" />
      </div>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import BorderButton from '@/components/Buttons/BorderButton';

export default {
  name: 'Section1',
  components: {BorderButton, Navbar},
};
</script>

<style scoped lang="scss">
.header-container {
  padding-top: 50px;
  padding-bottom: 30vh;
}

.headline {
  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: 10px;
}

.tagline {
  font-size: 20px;
  padding-bottom: 40px;
  color: $button-background;
  font-weight: bold;
}

.intro {
  color: $light-text;
  font-family: 'Montserrat', sans-serif;
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
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.hover-btn::before {
  background-color: $button-background;
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
  color: $button-background;
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
