<template>
	<div class="container">

		<Mouse :status="cursorStatus" :text="cursorText" class="hide-mobile" />

		<section class="intro">
			<div class="grid">
				<div class="thirds">
					<span class="main-title light">Hello! 👋</span>
					<h1 class="main-title">I'm Miguel Duarte,<br /><span ref="role">{{ roles[0] }}</span></h1>
					<h2 class="main-title light">based in Guildford, UK.</h2>
				</div>
			</div>
		</section>

		<h3 class="header4">Featured Projects</h3>

		<div class="work grid">

			<div class="half project" v-for="(project, index) in projects" :key="index">

				<NuxtLink :to="`/project/${project.uid}/`">

					<div class="work--preview skew" @mouseenter="changeCursor('active', 'View<br/>Work')"
						@mouseleave="changeCursor('normal', '')">
						<div class="bg" :style="{ backgroundImage: `url(${project.data.hero.url})` }"></div>
						<div class="protect"></div>
					</div>

					<div class="description">
						<span class="header4">{{ project.data.agency }}</span>
						<h2 class="header3">
							<div class="hand">👉</div>{{ project.data.client }}
						</h2>

						<span class="label" v-for="(service, index) in project.data.services" :key="index">
							{{ service.service }}
						</span>
					</div>
				</NuxtLink>

			</div>
		</div>

	</div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger);

const cursorStatus = ref('normal')
const cursorText = ref('')

const role = ref()
const roleCount = ref(0)
const roles = ref([
	'a Product Designer',
	'Interface Designer',
	'Experience Creator',
	'a Creative Coder',
	'a JAMstack Developer',
	'a Creative Director',
])

const { client } = usePrismic();

const { data: projects } = useAsyncData("projects", () =>
	client.getAllByType("project", {
		orderings: {
			field: 'document.last_publication_date',
			direction: 'desc',
		}
	})
);

onMounted(() => {
	startAnim()

	const scramble = setInterval(scrambleRole, 5000);
})

const changeCursor = (status, text) => {
	cursorStatus.value = status
	cursorText.value = text
}

const scrambleRole = () => {
	if (roleCount.value < roles.value.length - 1) {
		roleCount.value++
	} else {
		roleCount.value = 0
	}
	gsap.to(role.value, { duration: 1, scrambleText: roles.value[roleCount.value] });
}

const startAnim = () => {

	ScrollTrigger.defaults({
		toggleActions: "play pause resume reset",
	})

	/* Skew Animation */
	let proxy = { skew: 0 },
		skewSetter = gsap.quickSetter(".skew", "skewY", "deg"), // fast
		clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees. 

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
</script>


<style lang="scss" scoped>
.intro {
	min-height: 75vh;
	display: flex;
	align-items: center;
}

span.main-title {
	display: block;
	margin-bottom: 30px;
}

.work {
	margin-top: -100px;
	padding-top: 200px;
	padding-bottom: 100px;
}

.project {

	&:nth-child(even) {
		margin-top: -150px;
		padding-bottom: 180px;
	}

	.work--preview {
		position: relative;
		width: 100%;
		height: 500px;

		display: flex;
		align-items: center;
		margin: 15px 0px;
		border-radius: 10px;
		overflow: hidden;

		.bg {
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center center;
			transition: all .8s ease-out;
		}

		&:hover {
			.protect {
				width: 0;
			}

			.bg {
				transform: scale(1.1);
			}

		}

	}

	.description {
		margin-top: 30px;

		.header3 {
			position: relative;
			overflow: hidden;
			transition: all .3s ease-out;
			left: 0px;

			.hand {
				transition: all .5s ease-out;
				position: absolute;
				display: inline;
				left: -80px;
			}
		}
	}

	&:hover {
		.description {
			.header3 {
				padding-left: 60px;

				.hand {
					left: 0px;
				}
			}
		}
	}
}

.protect {
	position: absolute;
	width: 100%;
	height: 100%;
	background: var(--color-pure-black);
	z-index: 10;
	mix-blend-mode: overlay;
	opacity: .2;
	transition: width .5s;
}
</style>