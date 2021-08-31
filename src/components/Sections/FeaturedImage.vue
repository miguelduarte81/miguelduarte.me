<template>
  <div class="gallery container">
    <el-row :gutter="20">

      <el-col :md="{span:20,offset:2}">
        <div class="skew">
          <g-image :src="data.image.url" :width="data.image.dimensions.width.toString()" :height="data.image.dimensions.height.toString()" class="img-fluid" />
          <div class="description">
            <p>{{ data.image.alt}}</p>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    props: ['data'],
  }
</script>