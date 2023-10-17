<template>
	<NuxtLink class="logo" to="/">
		<img class="logo__image" src="@/assets/svgs/logo.svg" alt="logo" />
		<span class="logo__text">To Do Manager</span>
	</NuxtLink>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@use '@/assets/scss/_colors.scss';
.logo {
	display: flex;
	align-items: center;
	column-gap: 20px;

	padding: 24px;
	color: colors.$black-text-color;

	text-decoration: none;
	font-weight: 700;
}
</style>
