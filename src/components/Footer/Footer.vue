<template>
  <div class="container-background w-100 h-100">
    <b-container>
      <b-row class="footer d-flex justify-content-around">
        <b-col
          cols="12"
          md="4"
          lg="4"
          class="justify-content-center d-none d-sm-flex"
        >
          <div class="address">
            <div class="py-2">703-296-4019</div>
            <div class="pb-2">
              <a class="email" href="mailto:contact@gauntletdesigns.com"
                >contact@gauntletdesigns.com</a
              >
            </div>
            <div>Herndon, VA</div>
          </div>
        </b-col>

        <b-col
          cols="12"
          md="4"
          lg="4"
          class="justify-content-center d-none d-sm-flex"
        >
          <b-button class="logo-button" :to="{ name: 'home' }">
            <Logo class="logo" />
          </b-button>
        </b-col>

        <b-col
          cols="12"
          lg="4"
          md="4"
          class="d-flex flex-column align-items-center mt-md-0 justify-content-center"
        >
          <SlideButton text="Contact Us" linkName="contact" />
        </b-col>
        <b-col cols="12" class="d-flex justify-content-center">
          <p class="copyright-text pt-3">
            &copy; Copyright Gauntlet Designs {{ new Date().getFullYear() }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GauntletDesignsPlug from "./GauntletDesignsPlug";
import Logo from "../Logo";
import SlideButton from "@/components/SlideButton";
export default {
  name: "Footer",
  components: { SlideButton, Logo, GauntletDesignsPlug },
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $primary;
  color: $light-text;
  padding-top: 20px;
  // 0 px margin to fix default row spacing causing horizontal scroll bar
  margin-right: 0px !important;
  margin-left: 0px !important;
}

.container-background {
  background-color: $primary;
}

.footer-container {
  background-color: $primary;
}

.copyright-text {
  color: #aeaeb0;
  font-size: 12px;
}

.email {
  color: #adc3f3;
}

.color-background {
  background-color: $background-accent !important;
}

.logo-button {
  background-color: unset;
  border: unset;
}
</style>
