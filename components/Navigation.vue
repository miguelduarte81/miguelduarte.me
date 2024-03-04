<template>
	<div id="nav">
		<div class="container">
			<div class="grid">
				<div class="span2">
					<NuxtLink to="/" aria-label="MD Logo">
						<Logo class="logo" />
					</NuxtLink>
				</div>
				<div class="span10 aright">
					<NuxtLink to="/" class="link">Work</NuxtLink>
					<NuxtLink to="/profile" class="link">Profile</NuxtLink>
					<NuxtLink to="mailto:info@miguelduarte.me" class="link">✉️</NuxtLink>
					<div class="link" @click="switchMode">🌓</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Logo from '~/assets/svg/Logo.svg?skipsvgo'

const mode = ref('light')

const activeMode = computed(() => {
	// return document.documentElement.getAttribute("data-theme")
})

const switchMode = () => {
	mode.value === 'dark' ? mode.value = 'light' : mode.value = 'dark'
	document.documentElement.setAttribute('data-theme', mode.value)
}

</script>

<style lang="scss" scoped>
#nav {
	position: fixed;
	width: 100vw;
	height: 70px;
	top: 0px;
	color: var(--text-color);
	border-bottom: 1px solid var(--border-color);
	z-index: 10000;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: var(--navigation-bg);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		display: inline-block;
	}

	.logo {
		position: relative;
		width: 60px;
		height: 60px;
		outline: none;
		user-select: none;
	}

	.link {
		position: relative;
		display: inline-block;
		margin-left: 30px;
		line-height: 70px;
		font-size: 1.6em;
	}
}
</style>