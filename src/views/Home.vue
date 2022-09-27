<template>
  <div class="">
    <b-container fluid class="px-0">
      <div class="d-flex flex-row justify-content-around">
        <div class="w-100">
          <div class="hero-background w-100">
            <Section1 class="py-5 hero"/>
          </div>
          <div class="d-flex align-items-center justify-content-center ani-page">
            <h2
                data-aos="fade-up"
                data-aos-offset="200"
            >
              Welcome!
            </h2>
          </div>
          <div class="d-flex align-items-center justify-content-center ani-page" >
            <div data-aos="fade-up"
                 data-aos-offset="200">
              <p
              >Are you looking to grow your business with a new application or website. Let Gauntlet Designs help!</p>

            </div>
          </div>
          <Section
              v-for="(section, ind) in sections"
              :key="section.title"
              :title="section.title"
              :text="section.text"
              :alt="section.alt"
              :img="section.img"
              :trigger="section.trigger"
              :bullets="section.bullets"
              :left="ind % 2 !== 0"
          />
        </div>
      </div>
      <Footer/>
    </b-container>
  </div>
</template>

<script>
import Section1 from '../components/Home/Section1';
import HomeTrinity from '@/components/Home/home-trinity';
import Logo from '@/components/Logo';
import FadeButton from '@/components/Buttons/FadeButton';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar';
import Sections from '@/components/Home/sections.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "@/components/Home/Section";

AOS.init({
  duration: 700,
  easing: 'ease-in',
});

export default {
  name: 'Home',
  components: {
    Section,
    Navbar,
    Footer,
    FadeButton,
    Logo,
    HomeTrinity,
    Section1,
  },

  data() {
    return {
      sections: []
    }
  },

  mounted() {
    this.sections = Sections;
  }
};
</script>

<style scoped lang="scss">
p {
  font-family: 'Montserrat', sans-serif;
}

.hero {
  //background: rgb(2,0,36);
  background: linear-gradient(231deg, #9208C7FF 0%, rgba(0, 212, 255, 1) 100%);
  min-height: 90vh;
  clip-path: polygon(0% 100%, 40% 100%, 100% 50%, 100% 0%, 0% 0%);
}

.hero-background {
  background: $primary;
}

.ani-page {
  min-height: 100vh;
  background: linear-gradient(231deg, #9208C7FF 0%, rgba(0, 212, 255, 1) 100%);
  background-color: $background;
}

//.background {
//  background-image: url('../assets/web-developer.svg');
//  background-size: 500px;
//  background-attachment: fixed;
//  background-position: right;
//  background-repeat: no-repeat;
//}

.background {
  max-height: 200px;
  width: auto;
}

.logo {
  padding-top: 30px;
}
</style>
