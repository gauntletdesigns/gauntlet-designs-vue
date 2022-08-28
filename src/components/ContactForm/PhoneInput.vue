<template>
  <b-form-group
      id="input-phone"
      label="Phone"
      label-for="input-phone"
  >
    <b-form-input
        id="input-phone"
        v-model="form.phone"
        placeholder="Phone"
    />
  </b-form-group>
</template>
<script>
export default {
  name: 'PhoneInput',
  props: {
    form: {}
  }
}
</script>

<style scoped lang="scss">
</style>
