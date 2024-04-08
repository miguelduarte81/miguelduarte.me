<template>
	<section>
		<div class="container video">
			<div style="padding:61.39% 0 0 0;position:relative;">
				<iframe 
					:src="`https://player.vimeo.com/video/${slice.primary.vimeo_id}?
					controls=${slice.primary.controls}
					&amp;loop=${slice.primary.loop}
					&amp;playsinline=1
					&amp;title=0
					&amp;vimeo_logo=0
					&amp;volume=0
					&amp;pip=0
					&amp;byline=0
					&amp;muted=1
					&amp;autoplay=1
					&amp;badge=0
					&amp;autopause=0
					`" 
					frameborder="0" 
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
					style="position:absolute;top:0;left:0;width:100%;height:100%;" 
					title="AlpineAnswers Landing Area"
				></iframe>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.VideoPlayerSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style lang="scss">
.video {
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 0px;
	border-radius: 10px;
}
</style>

