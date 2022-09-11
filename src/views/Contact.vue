<template>
  <b-container class="pt-5">
    <div>
      <h2 class="title pb-3">Contact Us</h2>
      <p class="text pb-2">
        Have questions or looking for a quote? <br />
        Contact us today to schedule a free consultation.
      </p>
      <div class="d-flex flex-row pb-2">
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
  color: #424242;
  border-bottom: 1px solid #424242;
  text-decoration: unset;
}

.email:hover {
  color: #045c8c;
  border-bottom: 1px solid #045c8c;
}
</style>
