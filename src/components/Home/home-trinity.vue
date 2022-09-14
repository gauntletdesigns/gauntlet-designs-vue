<template>
  <div
    class="d-flex flex-wrap justify-content-around"
    data-aos-easing="ease-in"
    data-aos-once="true"
    data-aos="fade"
  >
    <div class="triplet">
      <b-img
        src="@/assets/ux.svg"
        class="icon"
        alt="Design icon showing pencils, pens and paper."
      />
      <h3 class="triplet-title pt-3 pb-2">Design</h3>
      <div class="triplet-text">
        Our design team will work with you to come up with a design that fits your needs and
        companies branding.
      </div>
    </div>

    <div class="triplet">
      <b-img
        src="@/assets/world.svg"
        class="icon"
        alt="Icon showing computer and programming books."
      />
      <h3 class="triplet-title pt-3 pb-2">Development</h3>
      <div class="triplet-text">
        With over 10 years of professional development experience our dev team will produce your
        custom website in a timely manner.
      </div>
    </div>

    <div class="triplet">
      <b-img
        src="@/assets/single-server.svg"
        class="icon"
        alt="Icon showing computer and phone with applications open."
      />
      <h3 class="triplet-title pt-3 pb-2">Hosting</h3>
      <div class="triplet-text">
        Want us to run your site for you? We will host your website using Google cloud, for the best
        possible uptime/reliability.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-trinity',
};
</script>

<style scoped lang="scss">
.triplet {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding-top: 50px;
  padding-bottom: 30px;
  color: $light-text;
}

.triplet-title {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 20px;
}

.triplet-text {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.icon {
  max-height: 100px;
}
</style>
