<template>
  <b-row class="mt-5">
    <b-col
      cols="4"
      class="pb-4 d-flex flex-column align-items-end justify-content-center selection"
    >
      <b-btn
        variant="link"
        v-for="service in services"
        class="service-btn my-1 pb-2"
        :class="{ active: service.name === active }"
        @click="
          () => {
            selectService(service);
          }
        "
      >
        {{ service.name }}
      </b-btn>
    </b-col>
    <b-col
      cols="8"
      class="d-flex justify-content-start h-100 flex-column selection"
    >
      <div class="description-section d-flex flex-column" aria-live="polite">
        <h3 class="title pb-3">{{ active }}</h3>
        <p class="text" v-for="paragraph in paragraphs">
          {{ paragraph }}
        </p>
      </div>
      <div v-if="active === 'Hosting'" class="d-flex justify-content-center">
        <CloudLogo class="d-flex justify-content-center" />
      </div>
    </b-col>
    <b-btn :to="{ name: 'contact' }" class="ml-auto mr-2 service-consult"
      ><span>Schedule your free consultation today</span>
    </b-btn>
  </b-row>
</template>

<script>
import CloudLogo from "@/components/CloudLogo";

export default {
  name: "LargeServices",
  components: { CloudLogo },
  props: ["services"],
  data() {
    return {
      showCollapse: true,
    };
  },
  computed: {
    active() {
      return this.$route.query?.active || this.services[0]?.name;
    },
    paragraphs() {
      return this.services.find((service) => service.name === this.active)
        .paragraphs;
    },
  },
  methods: {
    selectService(service) {
      this.paragraphs = service.paragraphs;
      this.$router.push({
        name: this.$route.name,
        query: {
          active: service.name,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.service-btn {
  display: block;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  border-bottom: 3px solid rgba(255, 255, 255, 0.14);
}

.service-btn:focus {
  box-shadow: unset !important;
  text-decoration: unset;
}

.service-btn:hover {
  box-shadow: unset !important;
  text-decoration: unset;
  border-bottom: 3px solid $accent-light;
}

.active {
  border-bottom: 3px solid $accent-light;
}

.description-section {
  padding: 20px;
  color: $dark-text;
}

.selection {
  min-height: 300px;
}

.contact {
  color: $accent;
  font-weight: 600;
}

//Button animation
.service-consult {
  border-radius: 0;
  background-color: $accent-light;
  border: none;
  color: #ffffff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 15px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.service-consult span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.service-consult span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.service-consult:hover span {
  padding-right: 25px;
}

.service-consult:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
