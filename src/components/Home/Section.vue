<template>
  <b-row
      data-aos-once="true"
      :data-aos="left ? 'fade-right' : 'fade-left'"
      data-aos-offset="50"
      :data-aos-anchor="trigger"
      class="py-5"
  >
    <b-col v-if="left" cols="12" md="5" lg="3" offset-lg="1" class="d-none d-md-block">
      <img
          class="background"
          :src="require('@/assets/' + img)"
          :alt="alt"
      />
    </b-col>
    <b-col cols="12" md="7" id="trigger-development">
      <h2 class="sub-title align-self-end">{{title}}</h2>
      <p class="text">
        {{text}}
      </p>
      <ul v-if="bullets" class="text">
        <li v-for="bullet in bullets" :key="bullet">
          {{bullet}}
        </li>
      </ul>
    </b-col>
    <b-col v-if="!left" cols="12" md="5" lg="3" offset-lg="1" class="d-none d-md-block">
      <img
          class="background"
          :src="require('@/assets/' + img)"
          :alt="alt"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Section",
  props: {
    left: {
      type: Boolean,
    },
    title: {},
    text: {},
    img: {},
    alt: {},
    bullets: {}
  }
}
</script>

<style scoped lang="scss">

</style>