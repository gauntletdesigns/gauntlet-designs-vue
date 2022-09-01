<template>
  <div class="d-flex">
    <b-btn class="service-btn service ml-auto" :to="{ name: linkName }">{{
      text
    }}</b-btn>
  </div>
</template>

<script>
export default {
  name: "ServiceButton",
  props: ["text", "linkName"],
};
</script>

<style scoped lang="scss">
.service-btn {
  background-color: unset;
  position: relative;
  display: block;
  color: #424249 !important;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  border: 2px solid #424249 !important;
  padding: 15px;
  overflow: hidden;
  transition: 1s all ease;
  border-radius: 0;
  z-index: 1000;
}
.service-btn::before {
  background: $secondary-dark;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: all 0.6s ease;
}

.service::before {
  width: 100%;
  height: 0%;
}
.service:hover::before {
  height: 100%;
}
</style>
