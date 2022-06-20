<template>
  <div class="outer">

    <b-container class="d-flex align-items-center flex-column section">
      <Logo class="my-5"/>
      <h2>
        Business Name
      </h2>
      <p class="my-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ea ex exercitationem fuga iure odio quae
        ratione reprehenderit sequi vitae! Earum ipsam laboriosam necessitatibus neque possimus quis sapiente sed sunt.
      </p>
      <home-trinity class="my-3"/>
    </b-container>
  </div>
</template>

<script>
import Logo from "../Logo";
import HomeTrinity from "./home-trinity";

export default {
  name: "Section1",
  components: {HomeTrinity, Logo}
}
</script>

<style scoped lang="scss">
.section {
}

.outer {
  background-color: $background-accent;
}
</style>
