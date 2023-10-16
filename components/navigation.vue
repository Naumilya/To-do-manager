<template>
	<nav class="navigation">
		<logo />
		<ul class="menu">
			<li class="menu__item menu__item_active">
				<NuxtLink class="menu__link" to="/all-tasksspan ">
					<img src="@/assets/svgs/grid.svg" alt="" class="menu__link-icon" />
					<span class="menu__link-name"> All Tasks</span>
					<span class="menu__link-counter">24</span>
				</NuxtLink>
			</li>
			<li class="menu__item">
				<NuxtLink class="menu__link" to="/starred">
					<img src="@/assets/svgs/star.svg" alt="" class="menu__link-icon" />
					<span> Starred</span>
					<span class="menu__link-counter"></span>
				</NuxtLink>
			</li>
			<li class="menu__item">
				<NuxtLink class="menu__link" to="/important">
					<img
						src="@/assets/svgs/alert-circle.svg"
						alt=""
						class="menu__link-icon"
					/>
					<span class="menu__link-name">Important</span>
					<span class="menu__link-counter">1</span>
				</NuxtLink>
			</li>

			<li class="menu__item">
				<NuxtLink class="menu__link" to="/completed">
					<img
						src="@/assets/svgs/check-circle.svg"
						alt=""
						class="menu__link-icon"
					/>
					<span class="menu__link-name">Completed</span>
					<span class="menu__link-counter">7</span>
				</NuxtLink>
			</li>
			<li class="menu__item">
				<NuxtLink class="menu__link" to="/deleted">
					<img src="@/assets/svgs/trash.svg" alt="" class="menu__link-icon" />
					<span class="menu__link-name"> Deleted</span>
					<span class="menu__link-counter">16</span>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.navigation {
}
.menu {
	list-style: none;
}
.menu__item {
	padding: 8px 24px;
}

.menu__item_active {
	border-left: 3px solid var(--primary-color);
}
.menu__link {
	display: flex;
	text-align: center;
	column-gap: 12px;
	text-decoration: none;
	color: var(--black-text-color);
}
.menu__link-icon {
	max-width: 24px;
}
.menu__link-name {
}
.menu__link-counter {
}
</style>
