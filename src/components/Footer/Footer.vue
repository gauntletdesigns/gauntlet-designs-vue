<template>
<div class="footer d-flex flex-wrap">
  <Logo class="mx-auto"/>
  <GauntletDesignsPlug class="ml-auto mr-3 align-self-end"/>
</div>
</template>

<script>
import GauntletDesignsPlug from "./GauntletDesignsPlug";
import Logo from "../Logo";
export default {
  name: "Footer",
  components: {Logo, GauntletDesignsPlug}
}
</script>

<style scoped lang="scss">
  .footer {
    background-color: $primary;
    min-height: 50px;
    color: $light-text;
  }
</style>
