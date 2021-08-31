<template>
  <div class="copy container">
    <el-row :gutter="20">
      <el-col :md="12" class="margin-bottom">
        <span class="sub-title">{{ $prismic.richTextAsPlain(data.header) }}</span>
      </el-col>
      <el-col :md="12">
        <prismic-rich-text :field="data.text" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>