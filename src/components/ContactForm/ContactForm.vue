<template>
  <div class="form-container my-5">
    <b-form @submit="onSubmit">
      <div class="d-flex flex-row">
        <NameInput class="name pr-2" :form="form" />
        <CompanyInput class="name pl-2" :form="form" />
      </div>
      <div class="d-flex flex-row">
        <EmailInput class="name pr-2" :form="form" />
        <PhoneInput class="name pl-2" :form="form" />
      </div>

      <CalendarInput :form="form" />
      <DescriptionInput :form="form" />
      <div class="d-flex">
        <b-btn type="reset" class="clear"> Clear </b-btn>
        <b-btn type="submit" class="submit ml-3"> Submit </b-btn>
      </div>
    </b-form>
  </div>
</template>

<script>
import NameInput from "@/components/ContactForm/NameInput";
import EmailInput from "@/components/ContactForm/EmailInput";
import DescriptionInput from "@/components/ContactForm/DescriptionInput";
import PhoneInput from "@/components/ContactForm/PhoneInput";
import CalendarInput from "@/components/ContactForm/CalendarInput";
import CompanyInput from "@/components/ContactForm/CompanyInput";

import { collection, doc, setDoc, getFirestore } from "firebase/firestore";

export default {
  name: "ContactForm",
  components: {
    CompanyInput,
    PhoneInput,
    DescriptionInput,
    EmailInput,
    NameInput,
    CalendarInput,
  },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const newEmailRef = doc(collection(getFirestore(), "mail"));
      let form = this.form;
      setDoc(newEmailRef, {
        to: ["contact@gauntletdesigns.com"],
        message: {
          subject: `New Contact Us Submission from ${form.name}`,
          html: `
<h1>Submission From ${form.name}</h1><p>${form.company}</p><p>${form.email}</p><p>${form.phone}</p><p>${form.description}</p><p>${form.calendar}</p> `,
        },
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
    onReset(event) {
      this.form = {};
    },
  },
};
</script>

<style scoped lang="scss">
.form-container {
  max-width: 700px;
}

.submit {
  background-color: #28a745;
  color: white;
}

.clear {
  background-color: grey;
  color: white;
}

.name {
  width: 100%;
}
</style>
