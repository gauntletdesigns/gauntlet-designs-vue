<template>
  <b-col cols="12" class="d-flex justify-content-center">
    <p class="copyright-text pt-3">
      &copy;Copyright Gauntlet Designs {{ new Date().getFullYear() }}
    </p>
  </b-col>
</template>
<script>
export default {
  name: 'Copyright'
}
</script>
<style scoped lang="scss">

.copyright-text {
  color: #e2e2e8;
  font-size: 12px;
}

</style>