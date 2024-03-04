<template>
	<svg class="scroll" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="0.5" y="0.5" width="14" height="24" rx="7" stroke="white" />
		<circle id="wheel" cx="7.5" cy="8.5" r="1.5" fill="white" />
	</svg>
</template>

<style lang="scss" scoped>
.scroll {
	position: absolute;
	width: 20px;
	top: 80vh;

	rect {
		stroke: var(--text-color);
	}

	#wheel {
		position: absolute;
		fill: var(--text-color);
		animation-name: moveDown;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}

	@keyframes moveDown {
		0% {
			transform: translateY(0px);
		}

		100% {
			transform: translateY(5px);
		}
	}
}
</style>