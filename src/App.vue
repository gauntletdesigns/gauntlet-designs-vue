<template>
  <div id="app" class="d-flex flex-column layout">
    <div class="app-container h-100">
      <Navbar />
      <Section1 v-if="$route.name === 'home'" />
      <notifications group="main" />
      <router-view />
    </div>
    <Footer class="mt-auto" />
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
  background-color: $background;
  flex: 1;
}

.outer {
  background-color: $background;
  padding: 60px 0px 30px 0px;
}
</style>
