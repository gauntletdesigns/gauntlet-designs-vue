<template>
  <b-container>
    <div class="d-flex flex-row justify-content-around flex-wrap-reverse">
      <div class="sections">
        <section4 />
        <Section2 />
        <Enterprise />
        <Section3 />
      </div>
      <div class="logo d-flex flex-column align-self-center">
        <Logo large text />
        <div class="pt-4 d-flex align-self-center">
          <SlideButton text="View all of our services" linkName="services" />
        </div>
      </div>
    </div>
    <home-trinity class="trinity" />
  </b-container>
</template>

<script>
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import HomeTrinity from "@/components/home/home-trinity";
import Section4 from "@/components/home/Section4";
import Logo from "@/components/Logo";
import Enterprise from "@/components/home/Enterprise";
import SlideButton from "@/components/SlideButton";
export default {
  name: "Home",
  components: {
    SlideButton,
    Enterprise,
    Logo,
    Section4,
    HomeTrinity,
    Section3,
    Section2,
    Section1,
  },
};
</script>

<style scoped lang="scss">
p {
  font-family: "Montserrat", sans-serif;
}

.sections {
  width: 700px;
}

.logo {
  padding-top: 30px;
}

.trinity {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
