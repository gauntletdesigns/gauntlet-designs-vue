<template>
  <b-col cols="12" md="6" lg="4" class="justify-content-center d-none d-md-flex">
    <div>
      <div class="pb-1">
        <a class="text phone" href="tel:703-296-4019">703-296-4019</a>
      </div>
      <div class="pb-2">
        <a class="text email" href="mailto:contact@gauntletdesigns.com"
          >contact@gauntletdesigns.com</a
        >
      </div>
      <span class="text">Herndon, VA</span>
    </div>
  </b-col>
</template>
<script>
export default {
  name: 'AddressInfo',
};
</script>
<style scoped lang="scss">
.email {
  border-bottom: 1px solid $light-text;
  padding-bottom: 3px;
  text-decoration: unset;
}

.email:hover {
  color: $accent-light !important;
  border-bottom: 1px solid $accent-light;
  padding-bottom: 3px;
}

.phone {
  padding-bottom: 3px;
  text-decoration: unset;
}

.phone:hover {
  color: $accent-light !important;
  padding-bottom: 3px;
}
</style>
