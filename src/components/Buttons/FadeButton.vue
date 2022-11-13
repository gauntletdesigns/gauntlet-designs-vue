<template>
  <b-btn
    :to="{name: linkName, query}"
    class="item item--primary"
  >
    <span>{{ text }}</span>
  </b-btn>
</template>

<script>

export default {
  name: 'FadeButton',
  props: {text: {}, linkName: {}, query: {}, small: {type: Boolean}},
};
</script>

<style scoped lang="scss">
@mixin center-v() {
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto;
}

.item {
  min-width: 140px;
  max-height: 55px;
  border-radius: 0;
  background-color: $button-background;
  border: none;
  color: black;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 15px;
  width: 200px;
  margin: 50px auto;

  span {
    display: block;
    font-size: 18px;
    min-width: 175px;
  }

  &--primary {
    @include center-v;
    right: 20px;
    background-color: $button-background;
  }
}
</style>
