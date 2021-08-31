<template>
  <div class="branding container">

    <el-row :gutter="20">
      <el-col :md="8">
        <prismic-rich-text :field="data.colours" />
      </el-col>
      
      <el-col 
        v-for="(color,index) in fields"
        :key="index"
        :md="{ span:4, push:4 }" :sm="8" :xs="8"
      >
        <div class="color">
          <div class="spot" :style="{ backgroundColor: color.hex }"></div>
          <span v-if="color.pantone">{{ color.pantone }}</span><br />
          <span v-if="color.cmyk">{{ color.cmyk }}</span><br />
          <span v-if="color.hex">{{ color.hex }}</span>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    props: ['data','fields']
  }
</script>