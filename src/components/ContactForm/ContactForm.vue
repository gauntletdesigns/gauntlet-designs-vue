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
import {
  collection,
  doc,
  setDoc,
  getFirestore,
} from 'firebase/firestore';

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
      const newEmailRef = doc(collection(getFirestore(), 'mail'))
      let form = this.form;
      setDoc(newEmailRef, {
        to: ['contact@gauntletdesigns.com'],
        message: {
          subject: `New Contact Us Submission from ${form.name}`,
          html: `<h1>Submission From ${form.name}</h1><p>${form.email}</p><p>${form.description}</p> `
        }
      }).then(() => {
        this.$notify({
          group: 'main',
          title: 'Submitted',
          text: "Thank you, we'll be in touch shortly",
          type: 'success'
        })
        this.onReset({})
      }).catch(e => {
        this.$notify({
          group: 'main',
          type: 'error',
          title: 'Error Submitting,',
          text: "That's embarassing, something went wrong, please try again later."
        })
      })
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