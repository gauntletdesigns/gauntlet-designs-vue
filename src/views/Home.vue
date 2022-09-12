<template>
  <div class="section-container">
    <b-container>
      <div class="d-flex flex-row justify-content-around flex-wrap-reverse">
        <div class="sections">
          <section4 data-aos-once="true" data-aos="fade-left" class="py-5" />
          <Section2 data-aos-once="true" data-aos="fade-right" class="py-5" />
          <Enterprise data-aos-once="true" data-aos="fade-left" class="py-5" />
          <Section3 data-aos-once="true" data-aos="fade-right" class="py-5" />
        </div>
        <div data-aos="fade-in" class="logo d-flex flex-column align-self-center py-5">
          <div class="pt-4 d-flex align-self-center"></div>
        </div>
      </div>
      <home-trinity class="trinity py-5" />
      <!--    <FadeButton text="Learn More" linkName="services" />-->
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import HomeTrinity from '@/components/Home/home-trinity';
import Section4 from '@/components/Home/Section4';
import Logo from '@/components/Logo';
import Enterprise from '@/components/Home/Enterprise';
import FadeButton from '@/components/Buttons/FadeButton';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    FadeButton,
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
  font-family: 'Montserrat', sans-serif;
}

.section-container {
  background: linear-gradient(#24242a, #62626c);
}

.sections {
  width: 750px;
  margin: auto;
}

.logo {
  padding-top: 30px;
}

.trinity {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
