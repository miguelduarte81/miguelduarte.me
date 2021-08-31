<template>
  <div id="header">
    <div class="container">
      <el-row>
        
        <el-col :md="12" :sm="12" :xs="24">
          <g-link to="/">
            <div id="icon">
              <Icon />
            </div>
          </g-link>

          <el-dropdown class="pull-right hidden-sm-and-up">
            <span class="el-dropdown-link">
              <Bars class="pull-right menu-icon"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><g-link to="/en/" class="link">Work</g-link></el-dropdown-item>
              <el-dropdown-item><g-link to="/en/profile/" class="link">Profile</g-link></el-dropdown-item>
              <el-dropdown-item><a href="mailto:miguelduarte.me" target="_blank" class="link">Get in Touch</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          
        </el-col>
        
        <el-col :md="12" :sm="12" :xs="12" class="menu hidden-xs-only">
          <g-link to="/en/" class="link">Work</g-link>
          <g-link to="/en/profile/" class="link">Profile</g-link>
          <a href="mailto:miguelduarte.me" target="_blank" class="link">Get in Touch</a>
        </el-col>
        
      </el-row>

    </div>
  </div>
</template>

<script>
  import Icon from '~/assets/svg/Icon.svg'
  import Bars from '~/assets/svg/Bars.svg'
  import Theme from '~/assets/svg/Theme.svg'

  export default {
    components: {
      Icon,
      Bars,
      Theme
    },

    mounted() {
      if(localStorage.getItem('theme')) {
        document.querySelector('html').dataset.theme = localStorage.getItem('theme');  
      } else {
        document.querySelector('html').dataset.theme = `dark`;  
      }
    },

    methods: {
      changeTheme(e) {

        e.preventDefault();
        
        if(document.querySelector('html').dataset.theme == `dark`) {
          document.querySelector('html').dataset.theme = `light`;
          localStorage.setItem('theme', 'light');
        } else {
          document.querySelector('html').dataset.theme = `dark`;
          localStorage.setItem('theme', 'dark');
        }



      }
    }
  }
</script>