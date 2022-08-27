<template>
  <b-container class="pt-5">
    <h2>Contact Us</h2>
    <div>
      Looking for more information or to request a quote? Please reach out to us via the form below or you may call us at:
      <a :href="`tel:${phone}`">{{phone}}</a>
      <ContactForm/>
    </div>
  </b-container>
</template>

<script>
import ContactForm from "@/components/ContactForm/ContactForm";
export default {
  name: "Contact",
  components: {ContactForm},
  data(){
    return {
      phone: '571-265-2903'
    }
  }
}
</script>

<style scoped>

</style>
