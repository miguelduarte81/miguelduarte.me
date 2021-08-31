<template>
  <Layout>

    <!-- COPY -->  
      <div class="container">
        <el-row :gutter="20" class="home-intro">
          <el-col :md="14">

            <h2 class="sub-title">About me</h2>  
            <br/><br/>

            <p>I'm a multidisciplinary designer with over 15 years of experience in Graphic, Digital Design and Development. During my professional career, I have worked with both B2C and B2B accounts across different markets, such as fashion, beauty, tech and automotive.</p>

            <p>I am a highly motivated and driven individual with a competitive nature, always striving to be the best that I can be. Quite meticulous with my work, with great attention to detail without losing sight of the bigger picture. I like to think outside the box and always find creative solutions to daily problems.</p>
            
            <p>As a people person, I enjoy meeting and developing meaningful relationships with customers and colleagues alike. Outside of work, I love spending time with family and friends. A novice golf player and music and cinema aficionado, always looking forward to trying the latest tech.</p>


            <a href="/cv/MiguelDuarte_CV.pdf" target="_blank" class="small-title" download>Download CV</a>

          </el-col>

          <el-col :md="{span:4,offset:2}" class="services">
            <p><strong>Services</strong></p>
            <ul>
              <li>Creative</li>
              <li>Branding & Identity</li>
              <li>Creative Direction</li>
              <li>Creative Concepts</li>
              <li>Graphic Design</li>
            </ul>
            <ul>
              <li>Digital</li>
              <li>User Flows & User Journeys</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Website Design</li>
              <li>Mobile App Design</li>
              <li>Interaction</li>
              <li>Animation</li>
              <li>Social Media</li>
            </ul>
          </el-col>

          <el-col :md="4" class="services">
            <p><strong>Skills</strong></p>
            <ul>
              <li>Software</li>
              <li>Adobe Creative Suite</li>
              <li>Sketch</li>
              <li>Figma</li>
              <li>Invision</li>
              <li>Miro</li>
            </ul>
            <ul>
              <li>Development</li>
              <li>HTML & CSS</li>
              <li>Javascript</li>
              <li>Vue.js</li>
              <li>React</li>
              <li>Shopify</li>
            </ul>
          </el-col>
 
        </el-row> 

      </div>

      <div class="section">
        <div class="container">
          
          <h2 class="sub-title">Some of the amazing clients I worked with</h2>  
          <br/><br/>

          <el-row :gutter="20">
            <el-col
              v-for="(client,index) in clients"
              :key="index"
              :md="4"
              :sm="8"
              :xs="8"
            >
            <div class="client_logo">
              <img :src="'/images/clients/' + client + '_white.png'" :alt="client" class="img-fluid">
            </div>
            </el-col>
          </el-row>
        </div>
      </div>    

  </Layout>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Scroll from '~/components/Scroll'

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      clients: ['adobe', 'autodesk', 'bosch', 'cisco', 'citrix', 'heathrow', 'hyundai', 'kia', 'mastercard', 'mazda', 'mercedes', 'nokia', 'regus', 'sap', 'sita', 'skrill', 'unilever', 'vodafone'],
      strategy: ['slack', 'jira', 'trello', 'confluence'],
      design: ['apple', 'adobe', 'sketch', 'invision', 'font-awesome'],
      development: ['html5', 'css3', 'less', 'sass', 'js', 'vuejs', 'php', 'aws', 'google', 'node-js', 'npm', 'github', 'docker'],
    }
  },

    components: {
      Scroll,
  },
}
</script>
