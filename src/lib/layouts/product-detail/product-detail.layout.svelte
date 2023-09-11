<script lang="ts">
	import { CasualJPG, MenJPG, WomenJPG } from '$lib/assets';
	import { Rating } from '$lib/components';
	import { Gallery } from '$lib/layouts';
	import { currencyFormatter } from '$lib/utils';
	import type { IProduct, IProductVariant } from '$lib/ts';

	export let product: IProduct;

	$: ({ variants } = product);
	$: currentVariant = variants.at(0) as IProductVariant;
	$: hasVariants = !!variants.length;
	$: hasDiscount = !!currentVariant?.originalPrice;

	const photos = [
		{ uri: MenJPG, alt: 'Men' },
		{ uri: WomenJPG, alt: 'Men' },
		{ uri: CasualJPG, alt: 'Men' }
	];
</script>

<section class="product-detail">
	<Gallery {photos} />

	<article>
		<h1>{product.name}</h1>

		<Rating value={4.5} readonly />

		{#if !hasVariants}
			<span class="price unavailable">Unavailable</span>
		{:else if currentVariant.status === 'out-of-stock'}
			<span class="price out-of-stock">Out of stock</span>
		{:else}
			<span class="price">
				{currencyFormatter({ value: currentVariant.price })}
			</span>

			{#if hasDiscount}
				<span class="original-price">
					{currencyFormatter({ value: currentVariant.originalPrice || 0 })}
				</span>
			{/if}
		{/if}

		<hr />
	</article>
</section>

<style lang="scss" global>
	section.product-detail {
		@apply mb-8 grid grid-cols-2 gap-4;

		& > * {
			@apply col-span-1;
		}

		& > article {
			& > h1 {
				@apply mb-4 text-2xl font-bold;
			}

			& > fieldset.rating {
				@apply mb-6;
			}

			& > span.price {
				@apply block font-heading text-3xl font-bold tabular-nums text-primary;

				&.unavailable {
					@apply text-error;
				}

				&.out-of-stock {
					@apply text-warning;
				}
			}

			& > span.original-price {
				@apply align-top font-heading text-sm font-semibold text-gray-500 line-through;
			}
		}
	}
</style>
