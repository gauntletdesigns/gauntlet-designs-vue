<template>
  <b-container class="pt-5 d-flex flex-column justify-content-center">
    <b-row>
      <b-col lg="4" offset-lg="1">
        <h2 class="title pb-3">Contact Us</h2>
        <p class="text pb-2">
          Have questions or looking for a quote? <br />
          Contact us today to schedule a free consultation.
        </p>
        <div class="d-flex flex-row pb-2">
          <a class="text" :href="`tel:${phone}`">{{ phone }}</a>
        </div>
        <div class="d-flex flex-row">
          <a class="email" :href="`mailto:${email}`">{{ email }}</a>
        </div>
      </b-col>
      <b-col lg="4" offset-lg="2">
        <img
          class="illustration pt-3"
          src="../assets/ux.svg"
          alt="Illustration of a woman on a mobile phone with a purple background."
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
.email {
  color: white;
  border-bottom: 1px solid white;
  text-decoration: unset;
}

.email:hover {
  color: $accent-light;
  border-bottom: 1px solid $accent-light;
}

.illustration {
  width: 100%;
}
</style>
