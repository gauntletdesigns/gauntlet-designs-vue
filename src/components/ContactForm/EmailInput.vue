<template>
  <b-form-group
    id="input-email"
    label="Email*"
    label-for="input-email"
    description="We'll never share your email address."
  >
    <b-form-input
      id="input-email"
      v-model="form.email"
      type="email"
      required
      placeholder="Email"
    >
    </b-form-input>
  </b-form-group>
</template>
<script>
export default {
  name: "EmailInput",
  props: {
    form: {},
  },
};
</script>
