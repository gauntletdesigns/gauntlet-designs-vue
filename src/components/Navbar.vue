<template>
  <b-navbar class="py-2 navbar" toggleable="lg" sticky>
    <b-navbar-brand :to="{name: 'home'}">
      <div class="logo-nav d-flex flex-row align-items-center">
        <div class="d-flex">
          <span>GAUNTLET</span>
          <span class="ml-2">DESIGNS</span>
        </div>
      </div>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-item px-3" :to="{name: 'home'}">Home</b-nav-item>
        <b-nav-item class="nav-item px-3" :to="{name: 'services'}">Services</b-nav-item>
        <!--        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'ourWork'}">Our Work</b-nav-item>-->
        <b-nav-item class="nav-item px-3" :to="{name: 'contact'}">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from './Logo';

export default {
  name: 'Navbar',
  components: {Logo},
};
</script>
<style scoped lang="scss">
.navbar-toggler {
  background-color: $dark-text;
}
.navbar {
  background-color: $background-darker;
  color: $dark-text;
}

.nav-item:hover,
.nav-item:active {
  border-bottom: 3px solid $secondary-light;
}

.nav-item {
  border-bottom: 3px solid transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 8px;
  padding: 0;
}

.logo-nav {
  border: 1px solid white;
  color: white;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  font-size: 14px;
  text-align: center;
  margin: 18px 4px 5px 5px;
  padding: 10px;
}

.logo-nav:hover {
  border: 1px solid $secondary-light;
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

.navbar-brand {
  margin: unset;
}
</style>
