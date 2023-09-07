<script lang="ts">
	import { Carousel } from '$lib/components';
	import { CardProduct } from '$lib/layouts';
	import type { ComponentProps } from 'svelte';
	import type { IProduct } from '$lib/ts';

	export let products: IProduct[] = [];

	const hasProducts = !!products.length;

	const options: ComponentProps<Carousel>['options'] = {
		centeredSlides: false,
		loop: false,
		slidesPerView: 4,
		spaceBetween: 24,
		autoHeight: false,
		grabCursor: false,
		allowTouchMove: false,
		navigation: { enabled: true },
		injectStyles: [
			`.swiper {
				overflow-y: initial;
			}`,
			`.swiper-button-prev, .swiper-button-next {
				--swiper-navigation-size: 1rem;
				top: -3.75rem;
				left: auto;
				background-color: hsl(var(--af) / 1);
				padding: 0.75rem 1rem;
			}

			.swiper-button-prev {
				right: 2.6rem;
				border-radius: 0.5rem 0 0 0.5rem;
			}

			.swiper-button-next {
				right: 0;
				border-radius: 0 0.5rem 0.5rem 0;
			}`
		]
	};
</script>

{#if hasProducts}
	<section class="related-products">
		<header>
			<h2>Related Products</h2>
		</header>

		<Carousel class="products" {options} let:C>
			{#each products as product (product._id)}
				<C.Slide>
					<a href="/browse/{product.slug}">
						<CardProduct {product} />
					</a>
				</C.Slide>
			{/each}
		</Carousel>
	</section>
{/if}

<style lang="scss">
	section.related-products {
		@apply mb-16 block;

		& header {
			@apply mb-8 flex justify-between;

			& > h2 {
				@apply max-w-xs text-3xl font-bold;
			}
		}

		& :global(.products) {
			@apply h-fit overflow-visible;

			& > :global(swiper-slide) {
				@apply mb-12;
			}
		}
	}
</style>
