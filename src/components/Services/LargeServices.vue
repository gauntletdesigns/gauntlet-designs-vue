<template>
  <b-row class="mt-5">
    <b-col cols="4" class="d-flex flex-column align-items-end justify-content-center selection">
      <b-btn
          variant="link"
          v-for="service in services"
          class="service-btn my-1"
          :class="{active: service.name === active}"
          @click="() => {selectService(service)}"
      >
        {{ service.name }}
      </b-btn>
    </b-col>
    <b-col cols="8" class="d-flex justify-content-start h-100 flex-column selection">
      <div class="description-section" aria-live="polite">
        <h3>{{active}}</h3>
        <p v-for="paragraph in paragraphs">
          {{ paragraph }}
        </p>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "LargeServices",
  props: ['services'],
  data() {
    return {
      paragraphs: this.services[0]?.paragraphs,
      active: this.services[0]?.name,
      showCollapse: true
    }
  },
  methods: {
    selectService(service){
      this.paragraphs = service.paragraphs
      this.active = service.name
    }
  }
}
</script>

<style scoped lang="scss">
.service-btn {
  display: block;
  font-size: 24px;
  :focus {
  }
}
.service-btn:focus {
    box-shadow: unset !important;

}

.active {
  text-decoration: underline $accent 3px;
}

.description-section {
  padding: 20px;
  color: $dark-text;
}

.selection {
  min-height: 300px;
}

</style>