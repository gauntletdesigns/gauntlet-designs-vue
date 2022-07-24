<template>
  <b-container class="pt-5">
    <h2>What we Offer</h2>
    <Design/>
    <Development/>
    <Hosting/>
    <Maintenance/>
    <Contracting/>
  </b-container>
</template>

<script>
import Design from "@/components/Services/Design";
import Development from "@/components/Services/Development";
import Hosting from "@/components/Services/Hosting";
import Maintenance from "@/components/Services/Maintenance";
import Contracting from "@/components/Services/Contracting";
export default {
  name: "Services",
  components: {Contracting, Maintenance, Hosting, Development, Design}

}
</script>

<style scoped>


 /deep/ p {
  max-width: 600px;
}

</style>
