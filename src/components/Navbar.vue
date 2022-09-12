<template>
  <b-navbar class="py-2 navbar" sticky toggleable="lg">
    <b-navbar-brand :to="{name: 'home'}" class="logo-nav d-flex flex-row align-items-center">
      <span class="logo-bracket">{{&nbsp;</span>
      <span class="logo-title">GAUNTLET DESIGNS</span>
      <span class="logo-bracket">&nbsp;}}</span>
    </b-navbar-brand>
    <SlideButton
      text="Contact Us"
      linkName="contact"
      class="mr-4 ml-auto my-auto d-lg-none small-btn"
      small
    />
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'home'}">Home</b-nav-item>
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'services'}">Services</b-nav-item>
        <!--        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'ourWork'}">Our Work</b-nav-item>-->
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'contact'}">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from './Logo';
import SlideButton from '@/components/Buttons/SlideButton';

export default {
  name: 'Navbar',
  components: {SlideButton, Logo},
};
</script>
<style scoped lang="scss">
.navbar {
  background-color: #24242a;
  color: $light-text;
}

.nav-item:hover,
.nav-item:active {
  border-bottom: 3px solid $accent-light;
}

.nav-item {
  border-bottom: 3px solid transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 8px;
}

.logo-nav {
  border: 1px solid white;
  color: white;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  font-size: 14px;
  text-align: center;
  margin: 5px;
  padding: 10px;
}

.logo-nav:hover {
  border: 1px solid $button-background;
  color: white;
}

.logo-title {
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
}

.logo-bracket {
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
}

.small-btn {
  letter-spacing: unset;
}

h1 {
  margin-bottom: unset;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
}
</style>
