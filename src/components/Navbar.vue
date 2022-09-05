<template>
  <div
    :class="!$route.name !== 'home' ? 'dark-background' : 'mt-auto'"
    class="sticky"
  >
    <b-navbar class="navbar" sticky type="dark" toggleable="lg">
      <b-navbar-brand :to="{ name: 'home' }"
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
        <b-navbar-nav class="mr-auto">
          <b-nav-item class="nav-item py-2 px-3" :to="{ name: 'home' }"
            >Home</b-nav-item
          >
          <b-nav-item class="nav-item py-2 px-3" :to="{ name: 'services' }"
            >Services</b-nav-item
          >
          <!--        <b-nav-item class="nav-item py-2 px-3" :to="{name: 'ourWork'}">Our Work</b-nav-item>-->
          <b-nav-item class="nav-item py-2 px-3" :to="{ name: 'contact' }"
            >Contact</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
      <SlideButton
        text="Contact Us"
        linkName="contact"
        class="mr-2 ml-auto my-auto d-none d-lg-block "
      />
    </b-navbar>
  </div>
</template>

<script>
import Logo from "./Logo";
import SlideButton from "@/components/SlideButton";
export default {
  name: "Navbar",
  components: { SlideButton, Logo },
};
</script>
<style scoped lang="scss">
.nav-item:hover,
.nav-item:active {
  border-bottom: 3px solid $accent-light;
}

.nav-item {
  border-bottom: 3px solid transparent;
  font-family: "Montserrat", sans-serif;
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

.dark-background {
  background-color: $background-accent;
}

.navbar {
  background-color: $primary;
  color: $light-text;
}

.navbar-dark .navbar-nav .nav-link {
  color: $light-text;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
