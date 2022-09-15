<template>
  <div id="app" class="d-flex flex-column layout">
    <div class="app-container h-100">
      <Stars />
      <Navbar />
      <notifications group="main" />
      <router-view />
      <Footer v-if="$route.name !== 'home'" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Section1 from '@/components/Home/Section1';
import Stars from '@/components/Holidays/Stars';

export default {
  components: {Stars, Section1, Footer, Navbar},
};
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
}

.app-container {
  flex: 1;
  background: linear-gradient($background-darker, $background-dark);
}
</style>
