<template>
  <div class="d-flex flex-wrap justify-content-around">
    <div class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center">
      <b-icon-pencil class="icon-circle"/>
      <h3>Design</h3>
      <div>Our design team will work with you to come up with a design that fits your needs and companies branding.
      </div>
    </div>
    <div class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center">
      <b-icon-trash class="icon-circle"/>
      <h3>Development</h3>
      <div>With over 10 years of professional development experience our dev team will produce your custom website in a
        timely manner.
      </div>
    </div>
    <div class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center">
      <b-icon-person class="icon-circle"/>
      <h3>Hosting</h3>
      <div>Want us to run your site for you? We will host your website in the cloud for the best possible
        uptime/reliability.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-trinity"
}
</script>

<style scoped lang="scss">
.triplet {
  width: 250px;
  text-align: center;
}

.icon-circle {
  width: 50px;
  height: 50px;
}
</style>
