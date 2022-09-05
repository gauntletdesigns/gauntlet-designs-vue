<template>
  <b-col cols="12" md="6" lg="4" class="justify-content-center d-none d-md-flex">
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
</template>
<script>
export default {
  name: 'AddressInfo'
}
</script>
<style scoped lang="scss">

.email {
  color: $light-text;
  border-bottom: 1px solid #d1e2ee;
  text-decoration: unset;
}

.address {
  color: $light-text;
}

.email:hover {
  color: #bed2e0;
}

</style>