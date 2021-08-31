<template>
  <div class="branding container">
    <el-row :gutter="20">
      <el-col :md="24">
        <!-- <pre>
          {{ data.video_id }}
        </pre> -->

        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe :src="`https://player.vimeo.com/video/${ data.video_id }?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;background=1&amp;muted=1&amp;player_id=0&amp;app_id=58479`" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  style="position:absolute;top:0;left:0;width:100%;height:100%;" title="OST_Video">
          </iframe>
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