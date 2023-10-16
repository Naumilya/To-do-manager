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

<style scoped>
.sidebar {
	max-width: 288px;
}
</style>
