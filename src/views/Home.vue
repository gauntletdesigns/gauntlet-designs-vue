<template>
<div>
  <Section1/>
  <Section2/>
  <Section3/>
  <home-trinity/>
</div>
</template>

<script>
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Navbar from "@/components/Navbar";
import HomeTrinity from "@/components/home/home-trinity";
export default {
  name: "Home",
  components: {HomeTrinity, Section3, Section2, Section1}
}
</script>

<style scoped lang="scss">
  p {
    font-family: 'Montserrat', sans-serif;
  }
</style>
