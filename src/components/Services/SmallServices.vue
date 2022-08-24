<template>
<div class="mt-5">
  <div
      v-for="service in services"
      class="mt-3"
  >
    <h3>{{service.name}}</h3>
    <p
        v-for="paragraph in service.paragraphs"
    >
      {{paragraph}}
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "SmallServices",
  props: ['services'],
}
</script>

<style scoped lang="scss">
h3{
  color: $primary;
  border-left: 3px solid $accent;
  padding-left: 10px;
  letter-spacing: 3px;
}

p {
  margin-left: 15px;
}

</style>