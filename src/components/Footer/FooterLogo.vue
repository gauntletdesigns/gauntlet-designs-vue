<template>
  <b-col cols="12" md="6" lg="4"  class="justify-content-center align-items-center d-none d-lg-flex">
    <b-button class="logo-button" :to="{ name: 'home' }">
      <Logo class="logo"/>
    </b-button>
  </b-col>
</template>
<script>
import Logo from "../Logo"

export default {
  name: 'Footer-Logo',
  components: {Logo}
}
</script>
<style scoped lang="scss">

.logo-button {
  background-color: unset;
  border: unset;
}
</style>