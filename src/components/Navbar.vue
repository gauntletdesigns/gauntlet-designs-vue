<template>
  <div :class="!$route.home ? 'dark-background' : ''">
  <b-navbar class="navbar" sticky type="dark" toggleable="lg">
    <b-navbar-brand :to="{name: 'home'}"><h1><logo/></h1></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'home'}">Home</b-nav-item>
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'services'}">Services</b-nav-item>
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'about'}">About</b-nav-item>
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'contact'}">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "Navbar",
  components: {Logo}
}
</script>
<style scoped lang="scss">
 .nav-item:hover, .nav-item:active {
    border-bottom: 3px solid $accent-light;
 }

 .nav-item {
   border-bottom: 3px solid transparent;
   font-family: 'Montserrat', sans-serif;
   font-size: 16px;
   text-transform: uppercase;
   letter-spacing: 8px;
 }

 h1 {
   margin-bottom: unset;
 }

 .dark-background {
   background-color: $background-accent;
 }

 .navbar {
   background-color: $secondary-transparent;
   color: $light-text;
 }
</style>
