<template>
  <b-container class="pt-5">
    <h2>What we Offer</h2>
    <div class="large-container d-none d-md-block">
      <LargeServices :services="services"/>
    </div>
  </b-container>
</template>

<script>
import services from '@/assets/Services';
import LargeServices from "@/components/Services/LargeServices";
export default {
  name: "Services",
  components: {LargeServices},
  computed: {
    services(){
      return services;
    }
  }
}
</script>

<style scoped lang="scss">

h2{
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 600;
  color: $primary;
}

.large-container{

}

</style>
