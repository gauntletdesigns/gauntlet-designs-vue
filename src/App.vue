<template>
  <div id="app" class="d-flex flex-column layout">
    <notifications group="main" />
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

.fade-in {
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
}
@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.outer {
  background-color: $background;
  padding: 60px 0px 30px 0px;
}
</style>
<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

export default {
  components: {Footer, Navbar},
}
</script>
