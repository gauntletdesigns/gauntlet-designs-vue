<template>
  <div>
    <Section1 />
    <div class="d-flex">
      <div>
        <section4 />
        <Section2 />
        <Section3 />
      </div>
      <Logo class="logo" text />
    </div>
    <home-trinity />
  </div>
</template>

<script>
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import HomeTrinity from "@/components/home/home-trinity";
import Section4 from "@/components/home/Section4";
import Logo from "@/components/Logo";
export default {
  name: "Home",
  components: { Logo, Section4, HomeTrinity, Section3, Section2, Section1 },
};
</script>

<style scoped lang="scss">
p {
  font-family: "Montserrat", sans-serif;
}

.logo {
  width: 100%;
  height: auto;
}
</style>
