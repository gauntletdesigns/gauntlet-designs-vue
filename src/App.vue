<template>
  <div id="app" class="d-flex flex-column layout">
    <div class="app-container h-100">
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

export default {
  components: {Section1, Footer, Navbar},
};
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
}

.app-container {
  flex: 1;
  background: linear-gradient(#111315, #443470);
}
</style>
