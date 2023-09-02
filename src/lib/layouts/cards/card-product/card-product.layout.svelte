<script lang="ts">
	import { MenJPG } from '$lib/assets';
	import { Card } from '$lib/components';
	import { currencyFormatter } from '$lib/utils';
	import type { IProduct } from '$lib/ts';

	export let product: IProduct;
	const { name, variants } = product;

	const hasVariants = !!variants?.length;
	const hasDiscount =
		!!variants?.at(0)?.originalPrice &&
		(variants?.at(0)?.originalPrice as number) > (variants?.at(0)?.price as number);
</script>

<Card class="product" as="article" let:C>
	<C.Figure src={MenJPG} alt={name} />

	{#if hasDiscount}
		<span class="badge">SALE</span>
	{/if}

	<C.Body>
		<div>
			<h3 class="name" title={name}>{name}</h3>

			{#if !hasVariants}
				<span class="price unavailable">Unavailable</span>
			{:else if variants?.at(0)?.status === 'out-of-stock'}
				<span class="price out-of-stock">Out of stock</span>
			{:else}
				<span class="price">
					{currencyFormatter({
						value: variants?.at(0)?.price || 0,
						locale: 'en-US',
						options: { currency: 'USD' }
					})}
				</span>

				{#if hasDiscount}
					<span class="original-price">
						{currencyFormatter({
							value: variants?.at(0)?.originalPrice || 0,
							locale: 'en-US',
							options: { currency: 'USD' }
						})}
					</span>
				{/if}
			{/if}
		</div>

		<C.Actions>
			<button title="Add to cart" on:click|preventDefault|stopPropagation>
				<iconify-icon icon="ph:shopping-cart" />
			</button>
		</C.Actions>
	</C.Body>
</Card>

<style lang="scss" global>
	article.product {
		@apply card card-compact rounded-none bg-base-100 p-0;

		& > figure {
			@apply rounded-box aspect-semi-square shadow;

			& > img {
				@apply w-full;
			}
		}

		& > span.badge {
			@apply badge-error absolute left-4 top-4 rounded-md font-semibold;
		}

		& > div.card-body {
			@apply flex-row px-0;

			& > div {
				& > h3.name {
					@apply card-title line-clamp-1 text-base;
				}

				& > span.price {
					@apply font-heading text-xl font-bold tabular-nums text-primary;

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

			& > div.card-actions {
				& > button {
					@apply btn-primary btn-square btn;

					& > iconify-icon {
						@apply text-xl;
					}
				}
			}
		}
	}
</style>
