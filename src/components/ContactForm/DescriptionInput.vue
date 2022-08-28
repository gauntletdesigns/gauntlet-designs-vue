<template>
  <b-form-group
      id="input-description"
      label="Description*"
      label-for="input-description"
  >
    <b-form-textarea
        id="input-description"
        v-model="form.description"
        rows="6"
        placeholder="Provide a brief description of your desired project."
        required
    />
  </b-form-group>
</template>
<script>
export default {
  name: 'DescriptionInput',
  props: {
    form: {}
  }
}
</script>

<style scoped lang="scss">
</style>
