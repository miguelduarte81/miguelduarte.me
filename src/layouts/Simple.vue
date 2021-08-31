<template>
  <div class="simple">
    <Header />

    <transition name="fade" appear>
      <main>
        <slot class="view" />
      </main>
    </transition>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: {
    Header
  }
};
</script>