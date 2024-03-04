import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/prismic',
		'@nuxtjs/fontaine',
	],

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1'
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	vite: {
		plugins: [svgLoader()],
		vue: {
			template: {
				compilerOptions: {
					isCustomElement: tag => tag.startsWith('lord-')
				}
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "~/assets/styles/theme.scss";'
				}
			}
		},
	},

	css: [
		'~/assets/styles/main.scss',
		'~/assets/styles/typography.scss',
		'~/assets/styles/buttons.scss',
		'~/assets/styles/grid.scss'
	],

	devtools: {
		enabled: true
	},

	prismic: {
		endpoint: 'miguelduarte',
	},
})