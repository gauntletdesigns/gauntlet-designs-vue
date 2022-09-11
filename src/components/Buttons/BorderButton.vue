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
  font-size: 14px;
  text-align: center;
}

.border {
  position: relative;
  border: 1px solid $button-background;
  padding: 10px;
  margin: 5px;
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
    top: -5px;
    left: -5px;
    border-top: 1px solid $button-background;
    border-left: 1px solid $button-background;
  }

  &::after {
    right: -5px;
    bottom: -5px;
    border-bottom: 1px solid $button-background;
    border-right: 1px solid $button-background;
  }

  &:hover::before,
  &:hover::after {
    width: calc(100% + 9px);
    height: calc(100% + 9px);
  }
}
</style>
