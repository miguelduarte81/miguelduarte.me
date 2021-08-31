<template>
  <div class="parallax">
    <div class="parallax-img" :key="(data.image) ? data.image.url : data.url" :style="{ backgroundImage: `url(${(data.image) ? data.image.url : data.url})` }"></div>
  </div>
</template>

<script>
  export default {
    props: ['data','index']
  }
</script>