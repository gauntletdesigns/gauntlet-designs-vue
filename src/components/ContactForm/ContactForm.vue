<template>
  <div class="form-container my-5">
    <b-form
        @submit="onSubmit"
    >
      <NameInput :form="form"/>
      <EmailInput :form="form"/>
      <DescriptionInput :form="form"/>
      <div class="d-flex">
        <b-btn type="submit" variant="success" class="mx-3">
          Submit
        </b-btn>
        <b-btn type="reset" variant="info" class="mx-3">
          Clear
        </b-btn>
      </div>
    </b-form>
  </div>
</template>

<script>
import NameInput from "@/components/ContactForm/NameInput";
import EmailInput from "@/components/ContactForm/EmailInput";
import DescriptionInput from "@/components/ContactForm/DescriptionInput";

export default {
  name: "ContactForm",
  components: {DescriptionInput, EmailInput, NameInput},
  data(){
    return {
      form: {}
    }
  },
  methods: {
    onSubmit(event){
      event.preventDefault();
    },
    onReset(event){
      this.form = {};
    }
  }
}
</script>

<style scoped lang="scss">
.form-container{
  max-width: 400px;
}
</style>