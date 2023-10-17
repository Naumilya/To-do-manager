// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		'@/assets/scss/_fonts.scss',
		'@/assets/scss/_colors.scss',
		'@/assets/scss/_mixins.scss',
		'@/assets/scss/global.scss',
	],
});
