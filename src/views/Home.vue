<template>
  <div class="background">
    <b-container>
      <div class="d-flex flex-row justify-content-around flex-wrap-reverse">
        <div>
          <Section1 class="py-5" />
          <section4 class="py-5" />
          <Section2 class="py-5" />
          <Enterprise class="py-5" />
          <Section3 class="py-5" />
        </div>
      </div>
      <home-trinity class="trinity py-5" />
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
// AOS.init({
//   duration: 1200,
// });

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

.background {
  background-image: url('../assets/support.svg');
  background-size: 500px;
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
}

.logo {
  padding-top: 30px;
}

.trinity {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
