<template>
	<div class="parallax">
		<div class="parallax-img" :style="{ backgroundImage: `url(${slice.primary.image.url})` }"></div>
	</div>
</template>

<script setup>
import { gsap } from "gsap";

defineProps(
	getSliceComponentProps([
		"slice",
		"index",
		"slices",
		"context",
	]),
);

onMounted(() => {
	startAnim()
})


const startAnim = () => {
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
}
</script>

<style lang="scss" scoped>
.parallax {
	position: relative;
	width: 100vw;
	height: 90vh;
	overflow: hidden;
	-webkit-box-shadow: inset 0px 0px 40px 0px rgba(0, 0, 0, .3);
	-moz-box-shadow: inset 0px 0px 40px 0px rgba(0, 0, 0, .3);
	box-shadow: inset 0px 0px 40px 0px rgba(0, 0, 0, .3);
}

.parallax-img {
	position: absolute;
	top: -25%;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	transform: scale(1.1);
	z-index: -1;
}
</style>
