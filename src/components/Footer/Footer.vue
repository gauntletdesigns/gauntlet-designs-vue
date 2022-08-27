<template>
  <div class="color-background w-100 h-100">
    <div class="footer d-flex flex-wrap align-items-center justify-content-between">


      <div>
        <p>(571) 303-9811</p>
        <p>Herndon, VA 20170</p>
        <a class="email" href="mailto:afton.gauntlett@gmail.com">Email Us</a>
      </div>

      <div class="footer-logo">
        <Logo class="logo"/>
        <p class="copyright">
          &copy; Copyright {{ new Date().getFullYear() }} built by Gauntlet Designs
        </p>
      </div>

      <div>
        <b-button variant="info" :to="{name: 'contact'}">Contact Us</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import GauntletDesignsPlug from "./GauntletDesignsPlug";
import Logo from "../Logo";

export default {
  name: "Footer",
  components: {Logo, GauntletDesignsPlug},
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $secondary-transparent;
  min-height: 50px;
  color: $light-text;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
}

.copyright {
  padding-top: 20px;
  font-size: 14px;
}

.footer-logo {
  text-align: center;
}

.logo {
  max-width: 115px;
}

.email {
  color: $secondary-light;
}

.color-background {
  background-color: $background-accent;
}

</style>
