<template>
  <div class="mt-5">
    <div class="mt-3 pb-3" v-for="service in services">
      <h3 class="title">{{ service.name }}</h3>
      <p class="text" v-for="paragraph in service.paragraphs">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallServices',
  props: ['services'],
};
</script>

<style scoped lang="scss">
h3 {
  color: $primary;
  border-left: 3px solid $accent-light;
  padding-left: 10px;
  letter-spacing: 3px;
}

p {
  margin-left: 15px;
}
</style>
