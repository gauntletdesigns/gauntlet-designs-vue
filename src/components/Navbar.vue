<template>
  <b-navbar variant="primary" type="dark" toggleable="lg">
    <b-navbar-brand :to="{name: 'home'}"><h1><logo/></h1></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'home'}">Home</b-nav-item>
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'services'}">Services</b-nav-item>
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'about'}">About</b-nav-item>
        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'contact'}">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
    border-top: 3px solid $info;
 }

 .nav-item {
   border-top: 3px solid $primary;
 }
</style>
