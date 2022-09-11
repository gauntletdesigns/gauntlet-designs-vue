<template>
  <b-row class="mt-5">
    <b-col
      cols="4"
      class="pb-4 d-flex flex-column align-items-end justify-content-center selection"
    >
      <b-btn
        v-for="service in services"
        class="service-btn"
        variant="link"
        :class="{active: service.name === active}"
        @click="
          () => {
            selectService(service);
          }
        "
      >
        {{ service.name }}
      </b-btn>
    </b-col>
    <b-col cols="8" class="d-flex justify-content-start h-100 flex-column selection">
      <div class="description-section d-flex flex-column" aria-live="polite">
        <h3 class="title pb-3">{{ active }}</h3>
        <p class="text" v-for="paragraph in paragraphs">
          {{ paragraph }}
        </p>
        <SlideButton text="Schedule a free consultation" linkName="contact" class="ml-auto" />
      </div>
      <div v-if="active === 'Hosting'" class="d-flex justify-content-center">
        <CloudLogo class="d-flex justify-content-center" />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import CloudLogo from '@/components/CloudLogo';
import SlideButton from '@/components/Buttons/SlideButton';

export default {
  name: 'LargeServices',
  components: {SlideButton, CloudLogo},
  props: ['services'],
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
      return this.services.find(service => service.name === this.active).paragraphs;
    },
  },
  methods: {
    selectService(service) {
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

//button effect
.service-btn {
  text-decoration: unset;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  margin: 10px;
  position: relative;
  overflow: hidden;
  padding: 5px 5px;
  font-size: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  color: $dark-text;
  transition: 0.2s;
  &::before {
    content: '';
    height: 3px;
    width: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background: $accent-light;
    transition: 0.4s;
  }
  &:hover,
  &:focus,
  &.active {
    &::before {
      width: 100%;
    }
  }
}

.btn-link:focus {
  outline: none !important;
  box-shadow: unset !important;
}
</style>
