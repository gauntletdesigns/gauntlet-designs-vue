<template>
  <div class="form-container my-5">
    <b-form @submit="onSubmit">
      <b-row>
        <b-col cols="12" md="6">
          <NameInput class="name" :form="form" />
        </b-col>
        <b-col cols="12" md="6">
          <CompanyInput class="name" :form="form" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <EmailInput class="name" :form="form" />
        </b-col>
        <b-col cols="12" md="6">
          <PhoneInput class="name" :form="form" />
        </b-col>
      </b-row>

      <DescriptionInput :form="form" />
      <div class="d-flex">
        <b-btn type="reset" variant="danger"> Clear </b-btn>
        <b-btn type="submit" variant="success" class="ml-3"> Submit </b-btn>
      </div>
    </b-form>
  </div>
</template>

<script>
import NameInput from "@/components/ContactForm/NameInput";
import EmailInput from "@/components/ContactForm/EmailInput";
import DescriptionInput from "@/components/ContactForm/DescriptionInput";
import PhoneInput from "@/components/ContactForm/PhoneInput";
import CompanyInput from "@/components/ContactForm/CompanyInput";

import { collection, doc, setDoc, getFirestore } from "firebase/firestore/lite";

export default {
  name: "ContactForm",
  components: {
    CompanyInput,
    PhoneInput,
    DescriptionInput,
    EmailInput,
    NameInput,
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
          html: `<h1>Submission From ${form.name}</h1><p>${form.company}</p><p>${form.email}</p><p>${form.phone}</p><p>${form.description}</p> `,
        },
      })
        .then(() => {
          this.$notify({
            group: "main",
            title: "Submitted",
            text: "Thank you, we'll be in touch shortly",
            type: "success",
          });
          this.onReset({});
        })
        .catch((e) => {
          this.$notify({
            group: "main",
            type: "error",
            title: "Error Submitting,",
            text: "That's embarassing, something went wrong, please try again later.",
          });
        });
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

.name {
  width: 100%;
}

.btn-secondary {
  border-color: unset;
}
</style>
