<template>
	<div class="container">

		<section class="header">

			<div class="grid">
				<div class="thirds">
					<PrismicRichText :field="profile.data.about" />
					<a v-if="profile.data.curriculum_link.url" :href="profile.data.curriculum_link.url" target="blank" download class="btn">Download CV</a>
				</div>
			</div>
		</section>

		<section>
			<div class="grid">

				<div class="third">
					<h2 class="header4">Creative</h2>
					<PrismicRichText :field="profile.data.creative" />
				</div>

				<div class="third">
					<h2 class="header4">Digital</h2>
					<PrismicRichText :field="profile.data.digital" />
				</div>

				<div class="third">
					<h2 class="header4">Development</h2>
					<PrismicRichText :field="profile.data.development" />
				</div>

			</div>
		</section>
		
		<section>
			<div class="logos">
				<div class="grid">

					<div class="third">
						<h2 class="header4">Software & Apps</h2>
						<div class="grid software">
							<div class="span1 tooltip" v-for="logo in profile.data.software" :key="logo.svg">
								<span class="tooltiptext">{{ logo.svg}}</span>
								<component :is="defineAsyncComponent(()=>import(`../assets/svg/Logos/${logo.svg}.svg`))" class="logo" />
							</div>
						</div>
					</div>

					<div class="thirds">
						<h2 class="header4">Programming Languages & Tools</h2>
						<div class="grid languages">
							<div class="span1 tooltip" v-for="logo in profile.data.languages" :key="logo.svg">
								<span class="tooltiptext">{{ logo.svg}}</span>
								<component :is="defineAsyncComponent(()=>import(`../assets/svg/Logos/${logo.svg}.svg`))" class="logo" />
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</section>

		<section class="clients">
			<h3 class="header4">Some of the amazing clients I've worked with</h3>
			<div class="grid">
				<div class="span2" v-for="logo in profile.data.clients" :key="logo.svg">
					<component :is="defineAsyncComponent(()=>import(`../assets/svg/Clients/${logo.svg}.svg`))" class="client-logo" />
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

.btn {
	margin-top: 30px;
	padding: 0px 20px;
}

.logos {
	.grid {
		margin-top: 30px;

		.software {
			gap: 30px;
			grid-template-columns: repeat(6, minmax(0, 1fr));
			.logo {
				padding: 0px 10px;
			}
		}

		.languages {
			gap: 30px;
			.logo {
				padding: 0px 10px;
			}
		}
	}
}

.clients {
	margin: 100px 0px;
	text-align: center;

	.grid {
		margin-top: 100px;
	}
}
</style>

<style lang="scss">

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
	font-size: 12px;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.client-logo {
	opacity: .6;

	* {
		fill: var(--text-color) !important;
	}
}
</style>