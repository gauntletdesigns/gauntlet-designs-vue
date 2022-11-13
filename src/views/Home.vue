<template>
  <div>
    <b-container fluid>
          <Section1 />
    </b-container>
    <b-container>
      <div class="d-flex flex-row justify-content-around">
        <div class="pb-3">
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
import Section from "@/components/Home/Section";


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

  data(){
    return {
      sections: []
    }
  },

  mounted(){
    this.sections = Sections;
  }
};
</script>

<style scoped lang="scss">
p {
  font-family: 'Montserrat', sans-serif;
}

.container-fluid {
  padding: unset !important;
}

.background {
  max-height: 200px;
  width: auto;
}

.logo {
  padding-top: 30px;
}
</style>
