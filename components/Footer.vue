<template>
	<div class="container">
		<div class="footer">
			<div class="grid">
				<div class="quarter">
					<h5 class="header5">Links</h5>
					<p>
						<NuxtLink to="/">Work</NuxtLink>
					</p>
					<p>
						<NuxtLink to="/profile">Profile</NuxtLink>
					</p>

				</div>
				<div class="quarter">
					<h5 class="header5">Social</h5>
					<p v-for="social in settings.data.social_media" :key="social.name">
						<NuxtLink :to="social.link.url">
							{{ social.name }}
						</NuxtLink>
					</p>

				</div>
				<div class="quarter">
					<h5 class="header5">Contacts</h5>
					<p>
						<a :href="`mailto:${settings.data.email}`" target="_blank">{{ settings.data.email }}</a>
					</p>
					<p>
						<a :href="`tel:${settings.data.phone}`" target="_blank">{{ settings.data.phone }}</a>
					</p>
				</div>
				<div class="quarter">
					<h5 class="header5">Location</h5>
					<PrismicRichText :field="settings.data.location" />
				</div>
			</div>
		</div>
	</div>
</template>


<script setup>
const { client } = usePrismic();

const { data: settings } = useAsyncData("settings", () =>
	client.getSingle("settings")
);

</script>

<style lang="scss" scoped>
.footer {
	margin-top: 50px;
	padding: 50px 0px;
	border-top: 1px solid var(--border-color);
}
</style>