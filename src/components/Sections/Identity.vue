<template>
  <div class="branding container">
    <el-row :gutter="20">
      <el-col :md="24">
        <div class="skew">
          <g-image :src="data.logo.url" :width="data.logo.dimensions.width.toString()" :height="data.logo.dimensions.height.toString()" class="img-fluid" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>