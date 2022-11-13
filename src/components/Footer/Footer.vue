<template>
  <b-container class="pt-3 footer">
    <b-row>
      <AddressInfo />
      <Footer-Logo />
      <Footer-Contact />
      <Copyright />
    </b-row>
  </b-container>
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
  background-color: $secondary-dark;
  width: 100%;
  max-width: 100%;
}
</style>
