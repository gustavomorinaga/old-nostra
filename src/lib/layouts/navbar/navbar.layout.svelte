<script lang="ts">
	import { LogoMinSVG } from '$lib/assets';

	const routes = [
		{
			name: 'Shop',
			path: '/shop'
		},
		{
			name: 'Most wanted',
			path: '/most-wanted'
		},
		{
			name: 'New arrival',
			path: '/new-arrival'
		},
		{
			name: 'Brands',
			path: '/brands'
		}
	];
</script>

<header>
	<nav>
		<div class="navbar-start">
			<a class="logo" href="/">
				<figure>
					<img src={LogoMinSVG} alt="Logo" width="120" height="20" />
				</figure>
			</a>
		</div>

		<ul class="navbar-center">
			{#each routes as route}
				<li>
					<a href={route.path}>{route.name}</a>
				</li>
			{/each}
		</ul>

		<div class="navbar-end">
			<label class="search-bar">
				<iconify-icon icon="ph:magnifying-glass" />
				<input type="text" placeholder="Search" />
			</label>

			<button>
				<iconify-icon icon="ph:shopping-cart" />
			</button>
			<button>
				<iconify-icon icon="ph:user" />
			</button>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
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

			& > ul.navbar-center {
				@apply menu menu-horizontal font-semibold;
			}

			& > div.navbar-end {
				@apply gap-1;

				& > label.search-bar {
					@apply input-bordered input input-sm join items-center overflow-hidden
					focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-base-200;

					& > * {
						@apply join-item;
					}

					& > iconify-icon {
						@apply text-base-content;
					}

					& > input {
						@apply input-sm outline-none;
					}
				}

				& > button {
					@apply btn-ghost btn-square btn-sm btn w-fit px-2;

					& > iconify-icon {
						@apply text-xl text-base-content;
					}
				}
			}
		}
	}
</style>
