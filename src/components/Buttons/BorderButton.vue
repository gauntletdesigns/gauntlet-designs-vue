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
  color: #36a3cb;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 8px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
}

.border {
  position: relative;
  border: 1px solid white !important;
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
    border-top: 1px solid #36a3cb;
    border-left: 1px solid #36a3cb;
  }

  &::after {
    right: -10px;
    bottom: -10px;
    border-bottom: 1px solid #36a3cb;
    border-right: 1px solid #36a3cb;
  }

  &:hover::before,
  &:hover::after {
    width: calc(100% + 9px);
    height: calc(100% + 9px);
  }
}
</style>
