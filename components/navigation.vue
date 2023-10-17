<template>
	<nav class="navigation">
		<logo />
		<ul class="menu">
			<li
				class="menu__item"
				:class="{ menu__item_active: $route.path === '/' }"
			>
				<NuxtLink class="menu__link" to="/">
					<img src="@/assets/svgs/grid.svg" alt="" class="menu__link-icon" />
					<span class="menu__link-name">All Tasks</span>
					<span class="menu__link-counter">24</span>
				</NuxtLink>
			</li>
			<li
				class="menu__item"
				:class="{ menu__item_active: $route.path === '/starred' }"
			>
				<NuxtLink class="menu__link" to="/starred">
					<img src="@/assets/svgs/star.svg" alt="" class="menu__link-icon" />
					<span>Starred</span>
					<span class="menu__link-counter"></span>
				</NuxtLink>
			</li>
			<li
				class="menu__item"
				:class="{ menu__item_active: $route.path === '/important' }"
			>
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

			<li
				class="menu__item"
				:class="{ menu__item_active: $route.path === '/completed' }"
			>
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
			<li
				class="menu__item"
				:class="{ menu__item_active: $route.path === '/deleted' }"
			>
				<NuxtLink class="menu__link" to="/deleted">
					<img src="@/assets/svgs/trash.svg" alt="" class="menu__link-icon" />
					<span class="menu__link-name">Deleted</span>
					<span class="menu__link-counter">16</span>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@use '@/assets/scss/_colors.scss';
.navigation {
	.menu {
		list-style: none;

		&__item {
			padding: 8px 24px;

			&:hover,
			&_active {
				border-left: 3px solid colors.$primary-color;
				background: linear-gradient(
					to right,
					rgba(colors.$primary-color, 0.15) 5%,
					#fff
				);
			}
		}

		&__link {
			display: flex;
			text-align: center;
			column-gap: 12px;
			text-decoration: none;
			color: colors.$black-text-color;

			&-icon {
				max-width: 24px;
			}

			&-name {
			}

			&-counter {
				margin-left: auto;
			}
		}
	}
}
</style>
