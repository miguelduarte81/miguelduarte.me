<template>
	<div>
		<Navigation />
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<slot class="view"></slot>
				<LazyFooter />
			</div>
		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

onMounted(() => {

	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		document.documentElement.setAttribute('data-theme', 'light')
	}

	ScrollSmoother.create({
		smooth: .8,
		effects: true,
		smoothTouch: .1
	})
})

</script>


<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(.5rem);
}
</style>