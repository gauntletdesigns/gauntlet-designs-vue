<template>
  <div class="form-container mt-5">
    <b-form
        @submit="onSubmit"
    >
      <NameInput :form="form"/>
      <EmailInput :form="form"/>
      <DescriptionInput :form="form"/>
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