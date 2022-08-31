<template>
<div class="outer">

  <b-container class="d-flex flex-column align-items-left">
    <h2 class="sub-title">Enterprise Scale Applications</h2>
    <div class="text">
      Let us help you solve your businesses most time consuming problems. We create enterprise-grade applications that are designed to scale with your business.
      <ul>
        <li>Built with mobile responsive design from the start</li>
        <li>Built with accessibility and usability form the start</li>
        <li>Scales to your business needs, as your business scales</li>
        <li>Custom permission and user management to meet your needs</li>
      </ul>
      <b-btn variant="link" class="learn-more" :to="{name: 'services', query: {active: 'Enterprise Tools'}}">Learn more...</b-btn>
    </div>
  </b-container>
</div>
</template>

<script>
export default {
  name: "Enterprise"
}
</script>

<style scoped lang="scss">
.learn-more {
  color: $accent;
  font-weight: 600;
}
</style>