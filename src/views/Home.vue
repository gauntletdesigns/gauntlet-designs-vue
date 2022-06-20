<template>
<div>
  <Section1/>
  <Section2/>
  <Section3/>
</div>
</template>

<script>
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
export default {
  name: "Home",
  components: {Section3, Section2, Section1}
}
</script>

<style scoped lang="scss">
  p {
    max-width: 600px;
  }
</style>
