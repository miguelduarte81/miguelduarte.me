
<template>
	<section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
		<div class="container">
			<PrismicRichText :field="slice.primary.content" />
		</div>
	</section>
</template>

<script setup>

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
	getSliceComponentProps([
		"slice",
		"index",
		"slices",
		"context",
	]),
);
</script>

<style lang="scss">
figure {
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 0px;

	img {
		border-radius: 10px;
	}
}
</style>