<template>
  <b-container class="pt-5 d-flex flex-column justify-content-center">
    <b-row>
      <b-col lg="4" offset-lg="1">
        <h2 class="title pb-3">Contact Us</h2>
        <p class="text pb-2">
          Have questions or looking for a quote? Contact us today to schedule a free consultation.
        </p>
        <div class="d-flex flex-row pb-4">
          <a class="text contact" :href="`tel:${phone}`">{{ phone }}</a>
        </div>
        <div class="d-flex flex-row">
          <a class="text contact" :href="`mailto:${email}`">{{ email }}</a>
        </div>
      </b-col>
      <b-col lg="4" offset-lg="2" class="pt-5 d-flex justify-content-center">
        <img
          class="illustration animate__animated animate__swing"
          src="../assets/search.svg"
          alt="Illustration of a computer monitor with a magnifying glass search icon within."
        />
      </b-col>
      <b-col lg="10" offset-lg="1">
        <ContactForm />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import ContactForm from '@/components/ContactForm/ContactForm';
export default {
  name: 'Contact',
  components: {ContactForm},
  data() {
    return {
      phone: '703-296-4019',
      email: 'contact@gauntletdesigns.com',
    };
  },
};
</script>

<style scoped lang="scss">
.contact {
  color: black;
  border-bottom: 1px solid black;
  text-decoration: unset;
  padding-bottom: 3px;
}

.contact:hover {
  color: #50507c !important;
  border-bottom: 1px solid #50507c;
  padding-bottom: 3px;
}

.illustration {
  max-width: 300px;
}
</style>
