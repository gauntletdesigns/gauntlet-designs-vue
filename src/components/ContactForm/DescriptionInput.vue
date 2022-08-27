<template>
  <b-form-group
      id="input-description"
      label="A brief statement about what you need"
      label-for="input-description"
  >
    <b-form-textarea
        id="input-description"
        v-model="form.description"
        rows="6"
        placeholder="Enter a brief description about what you're looking for Gauntlet Designs to build for you."
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
