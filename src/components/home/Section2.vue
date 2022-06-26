<template>
  <div class="outer">
    <b-container class="d-flex flex-column align-items-left">
      <h2 class="text">We Make It Simple</h2>
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
  padding: 60px 0px 0px 60px;
}

.text {
  color: $light-text;
  text-align: left;
  max-width: 60%;
  font-family: 'Montserrat', sans-serif;
}
</style>
