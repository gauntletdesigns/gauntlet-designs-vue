<template>
  <div id="app" class="d-flex flex-column layout">
    <Navbar v-if="$route.name != 'home'"/>
    <div class="app-container h-100">
      <router-view/>
    </div>
    <Footer class="mt-auto"/>
  </div>
</template>

<style lang="scss">
.layout {
  min-height: 100vh;
}

.app-container{
  background-color: $background;
  flex: 1;
}
</style>
<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

export default {
  components: {Footer, Navbar}
}
</script>
