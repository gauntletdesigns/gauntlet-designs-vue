<template>
  <b-col
    cols="12"
    md="6"
    lg="4"
    class="d-flex flex-column align-items-center justify-content-center mt-3 mt-md-0"
  >
    <BorderButton text="Contact Us" linkName="contact" class="mx-center ml-lg-auto mr-lg-1"/>
  </b-col>
</template>
<script>
import BorderButton from "@/components/Buttons/BorderButton";

export default {
  name: 'Footer-Contact',
  components: {BorderButton},
};
</script>
