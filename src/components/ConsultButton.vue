<template>
  <b-btn class="consult-btn consult" :to="{ name: linkName }">
    {{ text }}
  </b-btn>
</template>

<script>
export default {
  name: "ConsultButton",
  props: ["text", "linkName"],
};
</script>

<style scoped lang="scss">
.consult-btn {
  background-color: unset;
  position: relative;
  display: block;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  border: 2px solid white;
  padding: 15px;
  overflow: hidden;
  transition: 0.8s all ease;
  border-radius: 0;
  z-index: 1000;
}

.consult-btn:hover {
  color: $dark-text;
  transition: all 0.2s ease;
}

.consult-btn::before {
  background: $accent-light;
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
