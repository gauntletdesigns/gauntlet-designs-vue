<template>
  <div class="container d-flex flex-column justify-content-center">
    <div data-aos-once="true" data-aos="fade-left" class="my-2 px-3 my-lg-0 triplet">
      <b-img
        src="@/assets/design.svg"
        class="icon"
        alt="Design icon showing pencils, pens and paper."
      />
      <h3 class="triplet-title pt-3 pb-2">Design</h3>
      <div class="triplet-text">
        Our design team will work with you to come up with a design that fits your needs and
        companies branding.
      </div>
    </div>

    <div data-aos-once="true" data-aos="fade-left" class="my-2 px-3 my-lg-0 triplet">
      <b-img
        src="@/assets/code.svg"
        class="icon"
        alt="Icon showing computer and programming books."
      />
      <h3 class="triplet-title pt-3 pb-2">Development</h3>
      <div class="triplet-text">
        With over 10 years of professional development experience our dev team will produce your
        custom website in a timely manner.
      </div>
    </div>

    <div data-aos-once="true" data-aos="fade-left" class="my-2 px-3 my-lg-0 triplet">
      <b-img
        src="@/assets/app.svg"
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
.container {
  width: 600px;
  margin: 0;
}
.triplet {
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  padding-top: 50px;
  padding-bottom: 30px;
  margin: auto;
  color: $light-text;
}

.triplet-title {
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 20px;
}

.triplet-text {
  text-align: left;
  font-family: 'Montserrat', sans-serif;
}

.icon {
  max-width: 300px;
}
</style>
