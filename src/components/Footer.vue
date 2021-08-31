<template>
  <div class="footer">
    <div class="container">

      <el-row :gutter="20" class="menu">
        <el-col :md="6" :sm="6" :xs="12" class="hidden-xs-only">
          <g-link to="/en/">Work</g-link>
          <g-link to="/en/profile/">Profile</g-link>
        </el-col>

        <el-col :md="6" :sm="6" :xs="24">
          <a class="small" target="_blank" href="https://www.linkedin.com/in/miguelduarte81/">Linkedin</a>
          <a class="small" target="_blank" href="https://twitter.com/miguelduarte81">Twitter</a>
          <a class="small" target="_blank" href="https://github.com/miguelduarte81">GitHub</a>
        </el-col>
        
        <el-col :md="6" :sm="6" :xs="24">
          <a class="small" target="_blank" href="mailto:info@miguelduarte.me">info@miguelduarte.me</a>
          <p class="small">0044 (0) 7502 337 331</p>
        </el-col>

        <el-col :md="6" :sm="6" :xs="12">
          <p>Guildford, Surrey<br />United Kingdom</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>