<template>
	<div class="container">

		<section class="header">

			<div class="grid">
				<div class="thirds">
					<PrismicRichText :field="profile.data.about" />
				</div>
			</div>
		</section>

		<section>
			<div class="grid">

				<div class="quarter">
					<h2 class="header4">Creative</h2>
					<PrismicRichText :field="profile.data.creative" />
				</div>

				<div class="quarter">
					<h2 class="header4">Digital</h2>
					<PrismicRichText :field="profile.data.digital" />
				</div>

				<div class="quarter">
					<h2 class="header4">Development</h2>
					<PrismicRichText :field="profile.data.development" />
				</div>

				<div class="quarter">
					<h2 class="header4">Software</h2>
					<PrismicRichText :field="profile.data.software" />
				</div>

			</div>
		</section>

		<section class="logos">
			<h3 class="header4">Some of the amazing clients I've worked with</h3>
			<div class="grid ">
				<div class="span2" v-for="logo in profile.data.logos" :key="logo.svg">
					<component :is="defineAsyncComponent(()=>import(`../components/Logos/${logo.svg}.vue`))" class="client-logo" />
				</div>
			</div>
		</section>

	</div>
</template>

<script setup>
const { client } = usePrismic();

const { data: profile } = useAsyncData("profile", () =>
	client.getSingle("profile")
);

</script>

<style lang="scss" scoped>
.header4 {
	color: var(--color-primary);
}

.logos {
	margin: 100px 0px;
	text-align: center;

	.grid {
		margin-top: 100px;
	}
}
</style>

<style lang="scss">
.client-logo {
	opacity: .6;

	* {
		fill: var(--text-color) !important;
	}
}
</style>