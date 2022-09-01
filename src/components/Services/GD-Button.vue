<template>
  <div clas="consult-container">
    <b-btn class="consult-btn consult" :to="{ name: linkName }">
      {{ text }}
    </b-btn>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "linkName"],
};
</script>

<style scoped lang="scss">
.consult-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.consult-btn {
  background-color: unset;
  position: relative;
  display: block;
  color: white !important;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border: 2px solid white !important;
  padding: 15px;
  overflow: hidden;
  transition: 1s all ease;
  border-radius: 0;
  z-index: 1000;
}
.consult-btn::before {
  background: $secondary-dark;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: all 0.6s ease;
}

.consult::before {
  width: 0%;
  height: 100%;
}

.consult:hover::before {
  width: 100%;
}
</style>
