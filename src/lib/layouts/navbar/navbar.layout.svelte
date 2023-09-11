<script lang="ts">
	import { LogoMinSVG } from '$lib/assets';

	const routes = [
		{
			name: 'Shop',
			paths: [
				{
					name: 'Men',
					link: '/shop/men'
				},
				{
					name: 'Women',
					link: '/shop/women'
				},
				{
					name: 'Casual',
					link: '/shop/casual'
				}
			]
		},
		{
			name: 'Most wanted',
			link: '/most-wanted'
		},
		{
			name: 'New arrival',
			link: '/new-arrival'
		},
		{
			name: 'Brands',
			link: '/brands'
		}
	];
</script>

<header class="navbar-container">
	<nav>
		<div class="navbar-start">
			<a class="logo" href="/">
				<figure>
					<img src={LogoMinSVG} alt="Logo" width="120" height="20" />
				</figure>
			</a>
		</div>

		<div class="navbar-center">
			<ul class="menu menu-horizontal">
				{#each routes as route}
					<li>
						{#if !route?.paths?.length}
							<a href={route.link}>{route.name}</a>
						{:else}
							<details>
								<summary>{route.name}</summary>
								<ul>
									{#each route.paths as path}
										<li>
											<a href={path.link}>{path.name}</a>
										</li>
									{/each}
								</ul>
							</details>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<div class="navbar-end">
			<label class="search-bar">
				<iconify-icon icon="ph:magnifying-glass" />
				<input type="text" placeholder="Search" />
			</label>

			<a href="/cart" title="Cart">
				<iconify-icon icon="ph:shopping-cart" />
			</a>
			<a href="/account" title="Account">
				<iconify-icon icon="ph:user" />
			</a>
		</div>
	</nav>
</header>

<style lang="scss" global>
	header.navbar-container {
		@apply z-50 bg-base-100;

		& nav {
			@apply navbar mx-auto max-w-6xl justify-between px-4;

			& > * {
				@apply w-fit;
			}

			& > div.navbar-start {
				& > a.logo {
					& > figure {
						@apply overflow-hidden object-contain;
					}
				}
			}

			& > div.navbar-center {
				& > ul {
					@apply font-semibold;
				}
			}

			& > div.navbar-end {
				@apply gap-1;

				& > label.search-bar {
					@apply input join input-bordered input-sm items-center overflow-hidden
					focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-base-200;

					& > * {
						@apply join-item;
					}

					& > input {
						@apply input-sm outline-none;
					}
				}

				& > a {
					@apply btn btn-square btn-ghost btn-sm w-fit px-2;

					& > iconify-icon {
						@apply text-base;
					}
				}
			}
		}
	}
</style>
