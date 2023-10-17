<template>
	<div>
		<div class="sidebar">
			<navigation />
		</div>
		<div class="container">
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@use '@/assets/scss/_colors.scss';

.sidebar {
	position: fixed;

	max-width: 288px;
	margin: 24px 32px 24px 24px;
	border-radius: 8px;
	box-shadow: inset 0px 0px 1px colors.$iner-shadow-color;
	background-color: colors.$white-color;
	height: 100vh;
	width: 100%;
}
</style>
