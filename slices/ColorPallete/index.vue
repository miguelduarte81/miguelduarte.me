<template>
	<section>
		<div class="container">
			<div class="grid">
				<div class="half">
					<PrismicRichText :field="slice.primary.intro"></PrismicRichText>
				</div>

				<div class="colour span2" v-for="colour in slice.items" :key="colour.hex">
					<div class="spot" :style="{ 'backgroundColor': colour.hex }"></div>
					<div class="names">
						<p class="small" v-if="colour.pantone">{{ colour.pantone }}</p>
						<p class="small" v-if="colour.cmyk">{{ colour.cmyk }}</p>
						<p class="small" v-if="colour.rgb">{{ colour.rgb }}</p>
						<p class="small" v-if="colour.hex">{{ colour.hex }}</p>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script setup>
defineProps(
	getSliceComponentProps([
		"slice",
		"index",
		"slices",
		"context",
	]),
);
</script>

<style lang="scss" scoped>
.spot {
	display: block;
	width: 100%;
	height: 100px;
	background-color: beige;
}

.names {
	margin: 15px 0px;

	.small {
		font-size: 1.3em;
		margin: 0;
	}
}
</style>
