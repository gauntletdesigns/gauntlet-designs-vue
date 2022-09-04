<template>
  <!--  To Do: Footer isn't centered properly.-->

  <div class="container-background w-100 h-100">
    <b-container>
      <div class="footer d-flex flex-wrap justify-content-between">
        <div class="d-flex justify-content-center d-none d-sm-flex">
          <div class="address">
            <div class="py-2">703-296-4019</div>
            <div class="pb-2">
              <a class="email" href="mailto:contact@gauntletdesigns.com"
                >contact@gauntletdesigns.com</a
              >
            </div>
            <div>Herndon, VA</div>
          </div>
        </div>
        <div class="justify-content-center d-none d-sm-flex">
          <b-button class="logo-button" :to="{ name: 'home' }">
            <Logo class="logo" />
          </b-button>
        </div>

        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <SlideButton text="Contact Us" linkName="contact" />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <p class="copyright-text pt-3">
          &copy;Copyright Gauntlet Designs {{ new Date().getFullYear() }}
        </p>
      </div>
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
  color: #e8e8f1;
  padding-top: 20px;
}

.container-background {
  background-color: $primary;
}

.footer-container {
  background-color: $primary;
}

.copyright-text {
  color: #e2e2e8;
  font-size: 12px;
}

.email {
  color: #ffffff;
  border-bottom: 1px solid #d1e2ee;
  text-decoration: unset;
}

.email:hover {
  color: #bed2e0;
}

.color-background {
  background-color: $background-accent !important;
}

.logo-button {
  background-color: unset;
  border: unset;
}
</style>
