<script lang="ts">
	import type { IBrand } from '$lib/ts';

	export let brands: IBrand[] = [];
</script>

<section class="brands">
	<header>
		<h2>Brands</h2>
	</header>

	<ul>
		{#each brands as brand (brand._id)}
			<li>
				<a href="/brand/{brand.name}" title={brand.name}>
					<figure>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_brand_Adidas.png/640px-Logo_brand_Adidas.png"
							alt="Brand"
						/>
					</figure>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	section.brands {
		@apply mb-16 block;

		& header {
			@apply mb-8 flex justify-between;

			& > h2 {
				@apply max-w-xs text-3xl font-bold;
			}
		}

		& > ul {
			@apply menu menu-horizontal menu-lg;

			& > li {
				& > a {
					& > figure {
						@apply aspect-video h-16 w-full overflow-hidden;

						& > img {
							@apply mx-auto h-full;
						}
					}
				}
			}
		}
	}
</style>
