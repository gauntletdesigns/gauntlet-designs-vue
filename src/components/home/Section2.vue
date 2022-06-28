<template>
  <div class="outer">
    <b-container class="d-flex flex-column align-items-left">
      <h2>We Make It Simple</h2>
      <div class="text">
        Building a website is hard and time consuming. Let us take all the hard work off your hands.
        We work with you to make sure that you get the stunning website that you want, while still having time to do
        what matters most to you, running your business!.
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Section2"
}
</script>

<style scoped lang="scss">
.outer {
  background-color: $background;
  padding: 60px 0px 30px 60px;
}

.text {
  color: $dark-text;
  text-align: left;
  max-width: 40%;
  font-family: 'Montserrat', sans-serif;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
}
</style>
