<template>
  <div class="d-flex flex-wrap justify-content-around">
    <div class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center">
      <b-icon-pencil class="icon-circle"/>
      <h3 class="title">Design</h3>
      <div>Our design team will work with you to come up with a design that fits your needs and companies branding.
      </div>
    </div>
    <div class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center">
      <b-icon-trash class="icon-circle"/>
      <h3 class="title">Development</h3>
      <div>With over 10 years of professional development experience our dev team will produce your custom website in a
        timely manner.
      </div>
    </div>
    <div class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center">
      <b-icon-person class="icon-circle"/>
      <h3 class="title">Hosting</h3>
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
  width: 300px;
  text-align: center;
  color: $light-text;
  font-family: 'Montserrat', sans-serif;

}

.icon-circle {
  width: 40px;
  height: 40px;
  color: $info;
}

.title {
  color: $info;
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 20px;
}
</style>
