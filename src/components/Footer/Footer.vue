<template>
  <div class="color-background w-100 h-100">
    <b-row class="footer text">
      <b-col
        cols="12"
        md="3"
        lg="2"
        offset-lg="1"
        offset-xl="2"
        class="d-flex flex-column align-items-center"
      >
        <p>571-265-2903</p>
        <p>
          <a class="email" href="mailto:afton@gauntletdesigns.com">Email Us</a>
        </p>
        <p>Herndon, VA</p>
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
        class="d-flex flex-column align-items-center mt-3 mt-md-0 justify-content-center"
      >
        <b-button
          class="contact-button mb-3"
          variant="success"
          size="lg"
          :to="{ name: 'contact' }"
          >Contact Us</b-button
        >
      </b-col>
      <b-col cols="12" class="d-flex justify-content-center">
        <p class="copyright-text">
          &copy; Copyright {{ new Date().getFullYear() }} built by Gauntlet
          Designs
        </p>
      </b-col>
    </b-row>
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
  background-color: $secondary-transparent;
  min-height: 50px;
  color: $light-text;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;

  // 0 px margin to fix default row spacing causing horizontal scroll bar
  margin-right: 0px !important;
  margin-left: 0px !important;
}

.footer-container {
  background-color: $secondary-transparent;
}

.copyright {
  padding-top: 20px;
  font-size: 14px;
}

.copyright-container {
  background-color: $secondary-transparent;
}

.copyright-text {
  color: #aeaeb0;
}

.email {
  color: $secondary-light;
}

.color-background {
  background-color: $background-accent;
}

.contact-button {
  border-radius: unset;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 4px;
  font-weight: 600;
}

.logo-button {
  background-color: unset;
  border: unset;
}
</style>
