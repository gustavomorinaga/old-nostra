<script lang="ts">
	import type { IProduct } from '$lib/ts';

	export let product: IProduct;
</script>

<article class="card-product">
	<figure class="cover">
		<img
			src="https://images5.kabum.com.br/produtos/fotos/468145/apple-macbook-air-15-chip-m2-da-apple-com-gpu-de-10-nucleos-8gb-ram-256gb-ssd-meia-noite-mqkw3bz-a_1688062960_m.jpg"
			alt={product.name}
		/>
	</figure>

	<div class="card-body">
		<header>
			<h3 class="name">{product.name}</h3>
		</header>

		{#if !product.variants?.length}
			<span class="price unavailable">Unavailable</span>
		{:else if product.variants?.at(0)?.status === 'out-of-stock'}
			<span class="price out-of-stock">Out of stock</span>
		{:else}
			<span class="price">R$ {product.variants?.at(0)?.price || 0}</span>
		{/if}
	</div>
</article>

<style lang="scss">
	article.card-product {
		@apply card-bordered card card-compact min-h-[12rem];

		& > div.card-body {
			& > header {
				@apply flex items-center justify-between;

				& > h3.name {
					@apply card-title line-clamp-3 text-base;
				}
			}

			& > span.price {
				@apply text-lg font-semibold tabular-nums text-primary;

				&.unavailable {
					@apply text-error;
				}

				&.out-of-stock {
					@apply text-warning;
				}
			}
		}
	}
</style>
