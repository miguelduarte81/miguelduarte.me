<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>

const nuxtApp = useNuxtApp()

nuxtApp.hook("page:finish", () => {
	window.scrollTo(0, 0)
})

useHead({
	htmlAttrs: {
		lang: 'en'
	},
	meta: [
		{ key: 'theme-color', name: 'theme-color', content: '#E70C7B' }
	],
	link: [
		{ rel: 'icon', type: 'image/png', href: '/favicon.svg' },
	]
})

useSeoMeta({
	title: () => 'Product Designer based in Guildford, UK | Miguel Duarte',
	description: () => '',
	ogTitle: () => 'Product Designer based in Guildford, UK | Miguel Duarte',
	ogUrl: () => `https://miguelduarte.me`,
	ogDescription: () => '',
	ogImageType: () => 'image/jpeg',
	ogImage: () => '',
	ogImageWidth: () => '1200',
	ogImageHeight: () => '627',
	ogType: () => 'website',
	twitterTitle: () => 'Product Designer based in Guildford, UK | Miguel Duarte',
	twitterImage: () => '',
	twitterDescription: () => '',
})

</script>