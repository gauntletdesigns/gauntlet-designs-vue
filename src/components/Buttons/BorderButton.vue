<template>
  <b-btn :to="{name: linkName, query}" class="border">
    <span class="border-btn">{{ text }}</span>
  </b-btn>
</template>

<script>
export default {
  name: 'BorderButton',
  props: {text: {}, linkName: {}, query: {}, small: {type: Boolean}},
};
</script>

<style scoped lang="scss">
.border-btn {
  color: white;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  font-size: 16px;
  text-align: center;
  padding: 10px;
}

.border {
  position: relative;
  border: 1px solid white;
  padding: 10px;
  background-color: unset;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    transition: 0.3s ease-in-out;
  }

  &::before {
    top: -10px;
    left: -10px;
    border-top: 1px solid $accent-light;
    border-left: 1px solid $accent-light;
  }

  &::after {
    right: -10px;
    bottom: -10px;
    border-bottom: 1px solid $accent-light;
    border-right: 1px solid $accent-light;
  }

  &:hover::before,
  &:hover::after {
    width: calc(100% + 9px);
    height: calc(100% + 9px);
  }
}
</style>
