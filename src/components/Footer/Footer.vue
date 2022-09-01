<template>
  <div class="color-background w-100 h-100">
    <b-row class="footer d-flex justify-content-around">
      <b-col
        cols="12"
        md="3"
        lg="2"
        class="justify-content-center d-none d-md-flex"
      >
        <div class="address">
          <div class="py-2">703-296-4019</div>
          <div class="pb-2">
            <a class="email" href="mailto:contact@gauntletdesigns.com"
              >contact@gauntletdesigns.com</a
            >
          </div>
          <!--          <div>Herndon, VA</div>-->
        </div>
      </b-col>

      <b-col
        cols="12"
        md="6"
        lg="6"
        xl="4"
        class="justify-content-center d-none d-md-flex"
      >
        <b-button class="logo-button" :to="{ name: 'home' }">
          <Logo class="logo" />
        </b-button>
      </b-col>

      <b-col
        cols="12"
        lg="2"
        md="3"
        class="d-flex flex-column align-items-center mt-md-0 justify-content-center"
      >
        <ConsultButton text="Contact Us" linkName="contact" />
      </b-col>
      <b-col cols="12" class="d-flex justify-content-center">
        <p class="copyright-text pt-3">
          &copy; Copyright Gauntlet Designs {{ new Date().getFullYear() }}
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import GauntletDesignsPlug from "./GauntletDesignsPlug";
import Logo from "../Logo";
import ConsultButton from "@/components/ConsultButton";

export default {
  name: "Footer",
  components: { ConsultButton, Logo, GauntletDesignsPlug },
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $secondary-transparent;
  color: $light-text;
  padding-top: 20px;
  // 0 px margin to fix default row spacing causing horizontal scroll bar
  margin-right: 0px !important;
  margin-left: 0px !important;
}

.footer-container {
  background-color: $secondary-transparent;
}

.copyright-text {
  color: #aeaeb0;
  font-size: 12px;
}

.email {
  color: $secondary-light;
}

.color-background {
  background-color: $background-accent;
}

.logo-button {
  background-color: unset;
  border: unset;
}
</style>
