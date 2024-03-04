<template>
	<div id="mouse">
		<div id="ball"></div>
		<div id="copy" v-html="text"></div>
	</div>
</template>

<script setup>

import { gsap } from "gsap";

const props = defineProps(['status', 'text'])

const mousemove = (e) => {
	e.preventDefault()
	let mouseX = e.pageX - 50
	let mouseY = e.pageY - 50

	gsap.to('#mouse', { x: mouseX, y: mouseY, ease: 'power4.out', duration: 1 })
}

const setStatus = () => {
	gsap.set("#ball", { transformOrigin: "center center", force3D: true });

	if (props.status === 'active') {
		gsap.to("#ball", { scale: 1, backgroundColor: '#131415', duration: .5 })
		gsap.to("#copy", { opacity: 1, duration: .5, delay: .2 })
	} else {
		gsap.to("#copy", { opacity: 0, duration: .1 })
		gsap.to("#ball", { scale: .1, backgroundColor: '#E70C7B', duration: .5 })
	}
}

watch(props, () => {
	setStatus()
});

onMounted(() => {
	setStatus()
	document.addEventListener("mousemove", mousemove);
})

onBeforeUnmount(() => {
	document.removeEventListener("mousemove", mousemove);
})

</script>

<style lang="scss" scoped>
#mouse {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 0;
	display: block;
	user-select: none;
	pointer-events: none;
	width: 100px;
	height: 100px;
	z-index: 5000;
	display: flex;


	#ball {
		position: absolute;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		z-index: 1;
	}

	#copy {
		position: absolute;
		width: 100px;
		font-size: 1.4em;
		// line-height: 100px;
		z-index: 10;
		text-align: center;
		top: 50%;
		transform: translateY(-50%);
		color: var(--color-white)
	}
}
</style>