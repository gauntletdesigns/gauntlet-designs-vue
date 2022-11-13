<template>
  <b-btn class="mr-2 service-consult" :to="{name: linkName, query}" :class="{small}"
    ><span>{{ text }}</span>
  </b-btn>
</template>

<script>
export default {
  name: 'SlideButton',
  props: {text: {}, linkName: {}, query: {}, small: {type: Boolean}},
};
</script>

<style scoped lang="scss">
.service-consult {
  min-width: 175px;
  border-radius: 0;
  background-color: $secondary-dark;
  border: none;
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 15px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.small {
  min-width: unset;
}

.service-consult span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.service-consult span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.service-consult:hover span {
  padding-right: 25px;
}

.service-consult:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
