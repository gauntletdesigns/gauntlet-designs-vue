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
        <b-btn
          :to="{name: 'contact'}"
          variant="link"
          class="ml-auto mr-2 contact"
        >
          Schedule your free consultation today
        </b-btn>
      </div>
      <div v-if="active === 'Hosting'" class="d-flex justify-content-center">
        <CloudLogo />
      </div>
    </b-col>
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
      paragraphs: this.services[0]?.paragraphs,
      showCollapse: true,
    };
  },
  computed:{
    active(){
      return this.$route.query?.active || this.services[0]?.name
    }
  },
  methods: {
    selectService(service) {
      this.paragraphs = service.paragraphs;
      this.$router.push({
        name: this.$route.name,
        query: {
          active: service.name
        }
      })
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
  border-bottom: 3px solid $accent;
}

.active {
  border-bottom: 3px solid $accent;
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
