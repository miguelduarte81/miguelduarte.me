<template>
	<section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
		<div class="container">
			<div class="gallery grid">
				<div class="half" v-for="image in slice.items" :key="image.alt">
					<figure>
						<PrismicImage :field="image.image" class="skew img-fluid" />
						<figcaption>{{ image.image.alt }}</figcaption>
					</figure>
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
.gallery {
	margin-bottom: 150px;

	figure {
		padding: 0;
	}

	:nth-child(even) {
		figure {
			margin-top: 120px;
			margin-bottom: -150px;
		}

		@media only screen and (max-width: 767px) {
			margin-top: 0px;
			padding-bottom: 0px;
		}
	}
}
</style>


