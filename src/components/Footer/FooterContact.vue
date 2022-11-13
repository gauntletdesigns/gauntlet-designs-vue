<template>
  <b-col
    cols="12"
    md="6"
    lg="4"
    class="d-flex flex-column align-items-center justify-content-center mt-3 mt-md-0"
  >
    <SlideButton text="Contact Us" linkName="contact" class="mx-center ml-lg-auto mr-lg-1"/>
  </b-col>
</template>
<script>
import SlideButton from '@/components/Buttons/SlideButton';

export default {
  name: 'Footer-Contact',
  components: {SlideButton},
};
</script>
