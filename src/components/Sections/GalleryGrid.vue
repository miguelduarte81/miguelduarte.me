<template>
  <div class="gallery container">
    <el-row :gutter="20">

      <el-col :md="12" class="col-left">
        <div class="skew"
          v-for="(photo,index) in oddImages"
          :key="index"
        >
          <g-image :src="photo.image.url" :width="photo.image.dimensions.width.toString()" :height="photo.image.dimensions.height.toString()" class="img-fluid" />
          <div class="description">
            <prismic-rich-text v-if="photo.description" :field="photo.description" />
            <p v-else>{{ photo.image.alt}}</p>
          </div>
        </div>
      </el-col>

      <el-col :md="12" class="col-right">
        <div class="skew"
          v-for="(photo,index) in evenImages"
          :key="index"
        >
          <g-image :src="photo.image.url" :width="photo.image.dimensions.width.toString()" :height="photo.image.dimensions.height.toString()" class="img-fluid" />
          <div class="description">
            <prismic-rich-text v-if="photo.description" :field="photo.description" />
            <p v-else>{{ photo.image.alt}}</p>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    props: ['data','fields'],

    computed: {
      oddImages: function() {
        return this.fields.filter(function(image,index) {
          return index %2 === 0
        })
      },
      evenImages: function() {
        return this.fields.filter(function(image,index) {
          return index %2 !== 0
        })
      }
    }
  }
</script>