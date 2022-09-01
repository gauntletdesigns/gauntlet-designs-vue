<template>
  <div class="color-background w-100 h-100">
    <b-row class="footer">
      <b-col
        cols="12"
        md="3"
        lg="2"
        offset-lg="1"
        offset-xl="2"
        class="justify-content-center d-none d-md-flex"
      >
        <div class="address">
          <div>703-296-4019</div>
          <div>
            <a class="email" href="mailto:afton@gauntletdesigns.com"
              >Email Us</a
            >
          </div>
          <div>Herndon, VA</div>
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
        <GDButton text="Free Consultation" linkName="contact" />
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
import GDButton from "@/components/Services/GD-Button";

export default {
  name: "Footer",
  components: { GDButton, Logo, GauntletDesignsPlug },
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
