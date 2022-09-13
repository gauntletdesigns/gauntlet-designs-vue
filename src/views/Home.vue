<template>
  <div class="">
    <b-container>
      <div class="d-flex flex-row justify-content-around">
        <div>
          <Section1 class="py-5" />

          <div
            data-aos-once="true"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-anchor="#trigger-development"
            class="d-flex flex-row py-5"
          >
            <section4 id="trigger-development" />
            <img class="background" src="../assets/development.svg" alt="logo-home.svg" />
          </div>

          <div
            data-aos-once="true"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-anchor="#trigger-support"
            class="d-flex flex-row-reverse py-5"
          >
            <Section2 id="trigger-support" />
            <img class="background" src="../assets/support.svg" alt="logo-home.svg" />
          </div>

          <div
            data-aos-once="true"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-anchor="#trigger-dev"
            class="py-5 d-flex flex-row"
          >
            <Enterprise id="trigger-dev" />
            <img class="background" src="../assets/web-developer.svg" alt="logo-home.svg" />
          </div>

          <div
            data-aos-once="true"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-anchor="#trigger-social"
            class="py-5 consulting d-flex flex-row-reverse"
          >
            <Section3 id="trigger-social" class="py-5" />
            <img class="background" src="../assets/social.svg" alt="logo-home.svg" />
          </div>
        </div>
      </div>
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
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 700,
  easing: 'ease-in',
});

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

//.background {
//  background-image: url('../assets/web-developer.svg');
//  background-size: 500px;
//  background-attachment: fixed;
//  background-position: right;
//  background-repeat: no-repeat;
//}

.background {
  max-height: 400px;
  width: auto;
}

.logo {
  padding-top: 30px;
}

.consulting {
  padding-bottom: 50px;
}
</style>
