<template>
  <Layout class="layout">

    <Mouse :status="cursorStatus" :text="cursorText" class="hidden-xs-only" />

    <!-- INTRO -->
    <div>
    
      <div class="container">
        <el-row type="flex" align="middle" class="header" :gutter="20">
          <el-col :md="24">
            <span class="client">{{ $page.Prismic.project.agency }}</span> 
            <h1 class="main-title">{{ $page.Prismic.project.client }}</h1>
            <span 
              v-for="(service, index) in $page.Prismic.project.services"
              :key="index"
              class="label">{{ service.service }}
            </span>
            
          </el-col>
        </el-row>
        
        <Scroll class="scroll hidden-xs-only" />
      </div>
    </div>
  
    <!-- SECTIONS -->
    <component 
      v-for="(section,index) in $page.Prismic.project.body" 
      :key="$context.uid + '-' + index"
      :is="section.__typename"
      :data="section.primary"
      :fields="section.fields"
    >
    </component>

    <!-- NEXT -->
    <el-row type="flex" align="middle" class="next" :gutter="20">
      <el-col :md="24">
        
        <g-link :to="findNextProjectLink">
          <h4 class="small-title">Thank you for watching.</h4>
          <h4 class="more">Next Project</h4> 
        </g-link>
        
      </el-col>
    </el-row>

  </Layout>
</template>

<script>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Mouse from "~/components/Mouse"
import Scroll from '~/components/Scroll'

import Colors from '~/components/Sections/Colors';
import Copy from '~/components/Sections/Copy';
import Identity from '~/components/Sections/Identity';
import GalleryGrid from '~/components/Sections/GalleryGrid';
import Parallax from '~/components/Sections/Parallax';
import FeaturedImage from '~/components/Sections/FeaturedImage';
import Video from '~/components/Sections/Video';


export default {
  metaInfo() {
    return {
      title: this.$page.Prismic.project.title[0].text,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.Prismic.project.meta_description
        },
        {
          key: 'keywords',
          name: 'keywords',
          content: this.$page.Prismic.project.meta_keywords
        }
      ]
    }
  },

  components: {
    Mouse,
    Scroll,
    Prismic_ProjectBodyColors: Colors,
    Prismic_ProjectBodyCopy: Copy,
    Prismic_ProjectBodyIdentity: Identity,
    Prismic_ProjectBodyParallax: Parallax,
    Prismic_ProjectBodyGallery_grid: GalleryGrid,
    Prismic_ProjectBodyFeatured_video: Video,
    Prismic_ProjectBodyFeatured_image: FeaturedImage
  },

  mounted() {
    this.startAnim();
  },

  updated() {
    gsap.killTweensOf("*")
    this.startAnim();
  },

  beforeDestroy() {
    gsap.killTweensOf("*")
  },

  data() {
    return {
      cursorStatus: "normal",
      cursorText: "",

      moreCopy: [
        'Want More?',
        'Not Enough?',
        'Keep Looking!',
        'Next, please!'
      ]
    };
  },

  computed: {
    findNextProjectLink: function() {

      let nextUID;
      let currentIndex = this.$page.Prismic.projects.edges.findIndex(project => project.node._meta.uid === this.$context.uid )

      if(currentIndex < this.$page.Prismic.projects.edges.length - 1 ) {
        nextUID = this.$page.Prismic.projects.edges[++currentIndex].node._meta.uid;
      } else {
        nextUID = this.$page.Prismic.projects.edges[0].node._meta.uid;
      }

      return `/project/${nextUID}`;
    },
  },

  methods: {

    changeCursor(status, text) {
      this.cursorStatus = status;
      this.cursorText = text;
    },

    startAnim() {

      gsap.utils.toArray(".parallax").forEach((section, i) => {
        section.bg = section.querySelector(".parallax-img"); 
          gsap.to(section.bg, {
            y: '+=40%',
            ease: "none",
            scrollTrigger: {
              trigger: section,
              scrub: true
            }
          });
        } 
      );

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
  query ( $uid: String! ) {
    Prismic {
      
      projects: allProjects {
        edges {
          node {
            _meta {
              uid
            }
            client
            agency
          }
        }
      }

      project ( uid:$uid, lang:"en-gb" ) {
        agency
        client
        meta_description
        meta_keywords
        services {
          service
        }
        body {
          __typename

          ... on Prismic_ProjectBodyParallax {
            primary {
              image
            }
          }
          ... on Prismic_ProjectBodyIdentity {
            primary {
              logo
            }
          }
          ... on Prismic_ProjectBodyColors {
            primary {
              colours
            }
            fields {
              hex
              cmyk
              pantone
            }
          }
          ... on Prismic_ProjectBodyCopy {
            primary {
              header
              text
            }
          }
          ... on Prismic_ProjectBodyGallery_grid {
            fields {
              image
              description
            }
          }
          ... on Prismic_ProjectBodyFeatured_video {
            primary {
              video_title
              video_text
              video_id
            }
          }
          ... on Prismic_ProjectBodyFeatured_image {
            primary {
              image
            }
          }

        }
      }
    }
  }
</page-query>