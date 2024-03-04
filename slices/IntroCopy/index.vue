<template>
	<section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
		<div class="container">
			<div class="intro-copy grid">
				<div class="half">
					<h2 class="header3">{{ slice.primary.title }}</h2>
				</div>
				<div class="half">
					<PrismicRichText :field="slice.primary.copy" class="intro" />
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

<style lang="scss">
section[data-slice-type="intro_copy"] {
	&:first-of-type {
		margin-top: 100px;
	}
}
</style>