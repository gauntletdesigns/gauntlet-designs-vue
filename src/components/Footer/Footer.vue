<template>
  <div class="footer d-flex flex-wrap align-items-center justify-content-between">

    <div>
      <p>(571) 303-9811</p>
      <p>Herndon, VA 20170</p>
      <a class="email" href="mailto:afton.gauntlett@gmail.com">Email Us</a>
    </div>

    <div class="footer-logo">
      <Logo class="logo" />
      <p class="copyright">
        &copy; Copyright {{ new Date().getFullYear() }} built by Gauntlet Designs
      </p>
    </div>

      <div>
        <b-button variant="info">Contact Us</b-button>
      </div>
  </div>
</template>

<script>
import GauntletDesignsPlug from "./GauntletDesignsPlug";
import Logo from "../Logo";
export default {
  name: "Footer",
  components: { Logo, GauntletDesignsPlug },
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $primary;
  min-height: 50px;
  color: #c7c7c7;
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

</style>
