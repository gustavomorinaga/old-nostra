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
				<span>{brand.name}</span>
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
		}
	}
</style>
