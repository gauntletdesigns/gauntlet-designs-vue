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
    <SlideButton text="Schedule a free consultation" linkName="contact" />
  </b-row>
</template>

<script>
import CloudLogo from "@/components/CloudLogo";
import SlideButton from "@/components/SlideButton";

export default {
  name: "LargeServices",
  components: { SlideButton, CloudLogo },
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
</style>
