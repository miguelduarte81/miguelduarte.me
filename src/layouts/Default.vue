<template>
  <div class="layout light">

    <Header/>
    <transition name="fade" appear>
      <main>
        <slot class="view" />
      </main>
    </transition>
    <Footer/>

  </div>
</template>

<script>
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>