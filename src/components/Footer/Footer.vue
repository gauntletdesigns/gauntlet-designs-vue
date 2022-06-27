<template>
  <div class="footer d-flex flex-wrap align-items-center justify-content-between">

    <div>
      <p class="contact">Contact</p>
      <p>804-909-4118</p>
      <p>afton@gauntletdesigns.com</p>
      <p>Herndon, VA 20170</p>
    </div>

    <div>
      <Logo class="mx-auto" />
      <GauntletDesignsPlug class="ml-auto mr-3 align-self-end" />
      <p class="copyright">
        &copy; Copyright {{ new Date().getFullYear() }} Gauntlet Designs
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
  color: $light-text;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
}

.copyright {
  padding-top: 20px;
}

.contact  {
  font-size: 20px;
  font-weight: bold;
  color: $info;
}
</style>
