<template>
  <Simple>
    <div class="section">
      <div class="container">

        <el-row :gutter="30">
          <el-col :md="24">

              <h1 class="main-title">Oops!</h1>
              <h2 class="title">Do not be upset, but I couldn't find what you're looking for.</h2>
              <h3 class="sub-title">404 Not Found</h3>

              <g-link to="/" class="menu">
                <a class="link">
                  <i class="el-icon-back"></i> Back Home
                </a>
              </g-link>
          </el-col>    
        
        </el-row>
      </div>
    </div>
  </Simple>
</template>


<script>

export default {
  metaInfo: {
    title: "Not Found"
  }
};
</script>