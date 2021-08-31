<template>
  <Layout>

    <Mouse :status="cursorStatus" :text="cursorText" class="hidden-xs-only" />

    <!-- COPY -->  
      <div class="container">
        <el-row :gutter="20" class="home-intro">
          <el-col :md="24">
            <h1 class="title"><span>Hi!</span> I'm Miguel Duarte</h1>
            <h2 class="title light">UX and Interface Designer<br/> based in Guildford, UK.</h2>
          </el-col>
        </el-row> 
      </div>      

    <!-- WORK -->  
    <div class="section">
      <div class="container">

        <el-row>
          <el-col :md="12" :xs="24">
            <h3 class="sub-title">Featured Projects</h3>
          </el-col>
        </el-row>

        <el-row :gutter="80" class="work">
          
          <el-col 
            :md="12"
            v-for="(project,index) in $page.Prismic.projects.edges"
            :key="index"
            class="project-col"
            
          >
            <g-link :to="`/project/${project.node._meta.uid}/`">
              <div class="work--preview skew"
                :style="{backgroundImage: `url(${ project.node.hero.url })` }"
                @mouseenter="changeCursor('active','View<br/>Work')"
                @mouseleave="changeCursor('normal','')"
              >
                <div class="protect"></div>
              </div>

              <div class="description">
                  <span class="client">{{ project.node.agency }}</span>
                  <h2 class="main-title">{{ project.node.client }}</h2>

                  <span 
                    class="label"
                    v-for="(service,index) in project.node.services"
                    :key="index"
                  >
                    {{ service.service }}
                  </span>
                </div>
            </g-link>

          </el-col>
        </el-row>
       
      </div>      
    </div>

  </Layout>
</template>

<script>
import Logo from '~/components/Logo'
import Icon from '~/assets/svg/Icon.svg'
import Mouse from '~/components/Mouse'
import Scroll from '~/components/Scroll'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {

  metaInfo() {
    return {
      title: 'Work'
    }
  },

  components: {
    Logo,
    Icon,
    Mouse,
    Scroll
  },

  data() {
    return {
      cursorStatus: 'normal',
      cursorText: ''
    }
  },

  mounted() {
    this.startAnim();
  },
  
  beforeDestroy() {
    gsap.killTweensOf("*")
  },

  methods: {

    changeCursor(status,text) {
      this.cursorStatus = status
      this.cursorText = text
    },
    
    startAnim() {

      ScrollTrigger.defaults({
        toggleActions: "play pause resume reset",
      })

      /* Skew Animation */ 
      let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skew", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees. 

      ScrollTrigger.create({
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -800);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {skew: 0, duration: 0.5, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
          }
        }
      });

      gsap.set(".skew", {transformOrigin: "right center", force3D: true});
    }
  }
}
</script>

<page-query>
  query {
    Prismic {
      projects: allProjects (sortBy: meta_lastPublicationDate_DESC, where:{featured:true}) {
        edges {
          node {
            _meta {
              uid
              lastPublicationDate
            }
            agency
            client
            hero
            services {
              ... on Prismic_ProjectServices {
                service
              }
            }
          }
        }
      }
    }
  }
</page-query>