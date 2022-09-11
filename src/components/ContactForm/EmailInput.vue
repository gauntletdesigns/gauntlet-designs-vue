<template>
  <b-form-group label="Email*" label-for="input-email">
    <b-form-input id="input-email" v-model="form.email" type="email" required placeholder="Email">
    </b-form-input>
  </b-form-group>
</template>
<script>
export default {
  name: 'EmailInput',
  props: {
    form: {},
  },
};
</script>
