<template>
  <div id="mouse">
    <div id="ball"></div>
    <div id="copy" v-html="text"></div>
  </div>
</template>

<script>

  import { gsap } from "gsap";

  export default {

    props: ['status','text'],

    mounted() {
      this.setStatus()
      window.addEventListener("mousemove", this.mousemove);
    },

    beforeDestroy() {
      window.removeEventListener("mousemove", this.mousemove);
    },

    watch: {
      status: function (){
        this.setStatus()
      }
    },

    methods: {
      mousemove(event){

        event.preventDefault()
        let mouseX = event.clientX - 50
        let mouseY = event.clientY - 50

        gsap.to('#mouse', { x: mouseX, y:mouseY, ease:'power4.out', duration:1 })
      },

      setStatus() {
        gsap.set("#ball", {transformOrigin: "center center", force3D: true});

        if(this.status === 'active') {
          gsap.to("#ball", { scale:1, backgroundColor:'#131415', duration:.5 })
          gsap.to("#copy", { opacity:1, duration:.5, delay:.2 })
        } else {
          gsap.to("#copy", { opacity:0, duration:.1 })
          gsap.to("#ball", { scale:.1, backgroundColor:'#E70C7B', duration:.5 })
        }
      }
    }
  }
</script>