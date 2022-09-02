<template>
  <div class="d-flex flex-wrap justify-content-around">
    <div
      class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center"
    >
      <b-icon-pencil class="icon-circle" />
      <h3 class="triplet-title pt-3 pb-2">Design</h3>
      <div class="triplet-text">
        Our design team will work with you to come up with a design that fits
        your needs and companies branding.
      </div>
    </div>
    <div
      class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center"
    >
      <b-icon-code class="icon-circle" />
      <h3 class="triplet-title pt-3 pb-2">Development</h3>
      <div class="triplet-text">
        With over 10 years of professional development experience our dev team
        will produce your custom website in a timely manner.
      </div>
    </div>
    <div
      class="my-2 px-3 my-lg-0 triplet d-flex flex-column align-items-center"
    >
      <b-icon-cloud class="icon-circle" />
      <h3 class="triplet-title pt-3 pb-2">Hosting</h3>
      <div class="triplet-text">
        Want us to run your site for you? We will host your website using Google
        cloud, for the best possible uptime/reliability.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-trinity",
};
</script>

<style scoped lang="scss">
.triplet {
  width: 300px;
  text-align: center;
  color: $dark-text;
  font-family: "Montserrat", sans-serif;
  padding-top: 50px;
  padding-bottom: 30px;
}

.icon-circle {
  width: 40px;
  height: 40px;
  color: $primary;
}

.triplet-title {
  color: $dark-text;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 20px;
}

.triplet-text {
  color: $dark-text;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}
</style>
