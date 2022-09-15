<template>
  <div class="vector">
    <svg viewBox="0 0 600 250" preserveAspectRatio="none">
      <line x1="1" y1="1" x2="600" y2="1" id="top" />
      <line x1="1" y1="1" x2="1" y2="250" />
      <line x1="1" y1="1" x2="450" y2="250" />
      <line x1="1" y1="1" x2="175" y2="250" />
      <path d="M 1,80 a 12,15 45 1,1 37,-26 a 10,12 0 1,1 14,-24 a 25,20 -45 1,1 40,-30" />
      <path d="M 1,160 a 17,20 45 1,1 75,-52 a 17,20 0 1,1 30,-48 a 30,25 -45 1,1 60,-70" />
      <path d="M 1,240 a 22,25 45 1,1 113,-78 a 23,26 0 1,1 46,-72 a 35,30 -45 1,1 90,-110" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Halloween',
};
</script>

<style scoped lang="scss">
div.vector {
  height: 50px;
  width: 100px;
  overflow: hidden;
  position: relative;
}
svg {
  height: 100%;
  width: 100%;
}
line,
path {
  stroke: #ccc;
  stroke-width: 2px;
  fill: none;
}
#top {
  stroke-width: 2px;
}
</style>
