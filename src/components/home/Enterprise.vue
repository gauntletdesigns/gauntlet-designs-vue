<template>
  <div class="outer">
    <b-container class="d-flex flex-column align-items-left">
      <h2 class="sub-title">Enterprise Scale Applications</h2>
      <div class="text">
        Let us help you solve your businesses most time consuming problems. We
        create enterprise-grade applications that are designed to scale with
        your business.
        <ul>
          <li>Built with mobile responsive design from the start</li>
          <li>Built with accessibility and usability from the start</li>
          <li>Scales to your business needs, as your business scales</li>
          <li>Custom permission and user management to meet your needs</li>
        </ul>
      </div>
    </b-container>
  </div>
</template>

<script>
import SlideButton from "@/components/SlideButton";
export default {
  name: "Enterprise",
  components: { SlideButton },
};
</script>

<style lang="scss" scoped>
.learn-more {
  color: $accent;
  font-weight: 600;
}
</style>
