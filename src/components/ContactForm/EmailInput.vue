<template>
  <b-form-group
      id="input-email"
      label="Your Email"
      label-for="input-email"
  >
    <b-form-input
        id="input-email"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter Email"
    >
    </b-form-input>
  </b-form-group>
</template>
<script>
export default {
  name: 'EmailInput',
  props: {
    form: {}
  }
}
</script>
