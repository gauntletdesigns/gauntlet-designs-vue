<template>
  <b-container class="pt-5">
    <div>
      <h2 class="pb-3">Contact Us</h2>
      <p class="pb-4">
        Have questions or looking for a quote? Contact us today to schedule a
        free consultation.
      </p>
      <div class="d-flex flex-row pb-2">
        <div class="pr-3">Phone:</div>
        <a :href="`tel:${phone}`">{{ phone }}</a>
      </div>
      <div class="d-flex flex-row">
        <div class="pr-3">Email:</div>
        <a :href="`mailto:${email}`">{{ email }}</a>
      </div>
      <ContactForm />
    </div>
  </b-container>
</template>

<script>
import ContactForm from "@/components/ContactForm/ContactForm";
export default {
  name: "Contact",
  components: { ContactForm },
  data() {
    return {
      phone: "571-265-2903",
      email: "contact@gauntletdesigns.com",
    };
  },
};
</script>

<style scoped lang="scss"></style>
