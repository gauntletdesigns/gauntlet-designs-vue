<template>
  <b-form-group
      id="input-company"
      label="Company Name"
      label-for="input-company"
  >
    <b-form-input
        id="input-company"
        v-model="form.company"
        placeholder="Company"

    />
  </b-form-group>
</template>
<script>
export default {
  name: 'CompanyInput',
  props: {
    form: {}
  }
}
</script>

<style scoped lang="scss">
</style>
