<template>
  <b-form-group label="Your Name*" label-for="input-name">
    <b-form-input
      id="input-name"
      v-model="form.name"
      placeholder="Name"
      required
    ></b-form-input>
  </b-form-group>
</template>
<script>
export default {
  name: "NameInput",
  props: {
    form: {},
  },
};
</script>
