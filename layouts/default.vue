<template>
	<div class="sidebar">
		<NuxtLink class="logo" to="/">
			<img class="logo__image" src="@/assets/svgs/logo.svg" alt="logo" />
			<span class="logo__text">To Do Manager</span>
		</NuxtLink>
	</div>
	<div class="container">
		<slot />
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
.sidebar {
	max-width: 288px;
}

.logo {
	display: flex;
	align-items: center;
	column-gap: 20px;

	text-decoration: none;
	color: #120e21;
	font-weight: 700;
}
</style>
