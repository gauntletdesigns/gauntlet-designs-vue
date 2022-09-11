<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand :to="{name: 'home'}"
        ><h1><logo /></h1
      ></b-navbar-brand>
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
  </div>
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

.small-btn {
  letter-spacing: unset;
}

h1 {
  margin-bottom: unset;
}

.navbar {
  background-color: transparent;
  position: absolute;
  width: 100%;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
}
</style>
