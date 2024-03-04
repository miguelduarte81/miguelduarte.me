<template>
	<div class="project">

		<section class="header">
			<div class="container">
				<Scroll />
				<div class="grid">
					<div class="third">
						<span class="header4">{{ page.data.agency }}</span>
						<h1 class="header1">{{ page.data.client }}</h1>
						<span class="label" v-for="service in page.data.services" :key="service.service"> {{ service.service }}</span>
					</div>
				</div>
			</div>
		</section>

		<SliceZone wrapper="div" :slices="page?.data.body ?? []" :components="components" />

		<section>
			<div class="container next">
				<NuxtLink :to="`/project/${nextProject}`">
					<h4 class="header5">Thank you for watching.</h4>
					<h4 class="header2">Next Project</h4>
				</NuxtLink>
			</div>
		</section>

	</div>
</template>

<script setup>
import { components } from "~/slices";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const { client } = usePrismic();
const route = useRoute();

useSeoMeta({
	title: () => `${page.value?.data.client} by Miguel Duarte` ,
	description: () => page.value?.data.meta_description,
	ogTitle: () => page.value?.data.meta_title,
	ogUrl: () => `https://miguelduarte.me${route.path}`,
	ogDescription: () => page.value?.data.meta_description,
	ogImageType: () => 'image/jpeg',
	ogImage: () => page.value?.data.meta_image.url,
	ogImageWidth: () => '1200',
	ogImageHeight: () => '627',
	ogType: () => 'article',
	twitterTitle: () => page.value?.data.meta_title,
	twitterImage: () => page.value?.data.meta_image.url,
	twitterDescription: () => page.value?.data.meta_description,
})

onMounted(() => {
	startAnim()
})

const startAnim = () => {

	ScrollTrigger.defaults({
		toggleActions: "play pause resume reset",
	})

	/* Skew Animation */
	let proxy = { skew: 0 },
		skewSetter = gsap.quickSetter(".skew", "skewY", "deg"), // fast
		clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees. 

	ScrollTrigger.create({
		onUpdate: (self) => {
			let skew = clamp(self.getVelocity() / -800);
			if (Math.abs(skew) > Math.abs(proxy.skew)) {
				proxy.skew = skew;
				gsap.to(proxy, { skew: 0, duration: 0.5, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
			}
		}
	});

	gsap.set(".skew", { transformOrigin: "right center", force3D: true });
}

const { data: page } = await useAsyncData(`[project-uid-${route.params.uid}]`, async () => {
	const document = await client.getByUID("project", route.params.uid);

	if (document) {
		return document;
	} else {
		throw createError({ statusCode: 404, message: "Page not found" });
	}
});

const { data: projects } = useAsyncData("projects", () =>
	client.getAllByType("project", {
		orderings: {
			field: 'document.last_publication_date',
			direction: 'desc',
		}
	})
);

const nextProject = computed(() => {
	let currIndex = projects?.value.findIndex(project => project.uid === route.params.uid)

	if (currIndex < projects?.value.length - 1) {
		currIndex++
	} else {
		currIndex = 0
	}

	const nextUID = projects?.value[currIndex].uid
	return nextUID;
})

</script>

<style lang="scss" scoped>
.next {
	text-align: center;
}
</style>