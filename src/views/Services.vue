<template>
  <b-container class="pt-5">
    <h2 class="title">What we Offer</h2>
    <div class="large-container d-none d-lg-block pb-3">
      <LargeServices :services="services" />
    </div>
    <div class="d-block d-lg-none pb-5">
      <SmallServices :services="services" />
    </div>
  </b-container>
</template>

<script>
import services from "@/assets/Services";
import LargeServices from "@/components/Services/LargeServices";
import SmallServices from "@/components/Services/SmallServices";
export default {
  name: "Services",
  components: { SmallServices, LargeServices },
  computed: {
    services() {
      return services;
    },
  },
};
</script>

<style scoped lang="scss"></style>
