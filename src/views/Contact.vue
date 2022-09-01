<template>
  <b-container class="pt-5">
    <div>
      <h2 class="title pb-3">Contact Us</h2>
      <p class="text pb-4">
        Have questions or looking for a quote? Contact us today to schedule a
        free consultation.
      </p>
      <div class="d-flex flex-row pb-4">
        <a :href="`tel:${phone}`">{{ phone }}</a>
      </div>
      <div class="d-flex flex-row">
        <a class="email" :href="`mailto:${email}`">{{ email }}</a>
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
      phone: "703-296-4019",
      email: "contact@gauntletdesigns.com",
    };
  },
};
</script>

<style scoped lang="scss">
.email {
  color: $secondary-dark;
}
</style>
