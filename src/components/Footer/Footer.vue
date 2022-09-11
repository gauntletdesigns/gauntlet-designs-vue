<template>
  <!--  To Do: Footer isn't centered properly.-->

  <div class="container-background w-100 h-100">
    <b-container>
      <b-row>
        <AddressInfo />
        <Footer-Logo />

        <Footer-Contact />
        <Copyright />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddressInfo from '@/components/Footer/AddressInfo';
import FooterLogo from '@/components/Footer/FooterLogo';
import FooterContact from '@/components/Footer/FooterContact';
import Copyright from '@/components/Footer/Copyright';

export default {
  name: 'Footer',
  components: {Copyright, FooterContact, FooterLogo, AddressInfo},
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

.color-background {
  background-color: $background-accent !important;
}
</style>
