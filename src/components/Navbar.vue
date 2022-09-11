<template>
  <b-navbar class="py-1 navbar" sticky variant="dark" type="dark" toggleable="lg">
    <b-navbar-brand :to="{name: 'home'}" class="d-flex nav-logo flex-row align-items-center">
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
import SlideButton from '@/components/SlideButton';

export default {
  name: 'Navbar',
  components: {SlideButton, Logo},
};
</script>
<style scoped lang="scss">
.navbar {
  background-color: transparent;
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

.nav-logo {
  border: solid 1px white;
  color: white;
  margin: 15px;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  font-size: 14px;
  text-align: center;
}

.logo-title {
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
}

.logo-bracket {
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
}

.nav-logo:hover {
  color: white;
  border: solid 1px $button-background;
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
