<template>
  <b-col cols="12" class="d-flex justify-content-center">
    <p class="copyright-text pt-3">
      &copy; Copyright Gauntlet Designs {{ new Date().getFullYear() }} All Rights Reserved
    </p>
  </b-col>
</template>
<script>
export default {
  name: 'Copyright',
};
</script>
<style scoped lang="scss">
.copyright-text {
  color: rgba(255, 255, 255, 0.53);
  font-size: 12px;
}
</style>
