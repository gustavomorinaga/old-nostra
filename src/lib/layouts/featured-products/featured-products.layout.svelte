<script lang="ts">
	import { CardProduct, CarouselRoot, CarouselSlide } from '$lib/components';
	import type { ComponentProps } from 'svelte';
	import type { IProduct } from '$lib/ts';

	export let products: IProduct[] = [];

	const options: ComponentProps<CarouselRoot>['options'] = {
		centeredSlides: false,
		loop: false,
		slidesPerView: 3,
		spaceBetween: 24,
		autoHeight: false,
		grabCursor: false,
		allowTouchMove: false,
		navigation: {
			enabled: true
		},
		scrollbar: {
			enabled: true,
			draggable: true
		},
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
				border-radius: 0.375rem 0 0 0.375rem;
			}

			.swiper-button-next {
				right: 0;
				border-radius: 0 0.375rem 0.375rem 0;
			}`,
			`.swiper-scrollbar {
				--swiper-scrollbar-size: 0.5rem;
				--swiper-scrollbar-sides-offset: 25%;
				--swiper-scrollbar-drag-bg-color: hsl(var(--p) / 1);
				--swiper-scrollbar-bg-color: hsl(var(--b3) / 1);
			}`
		]
	};
</script>

<section class="featured-products">
	<header>
		<h2>Featured products</h2>
	</header>

	<CarouselRoot class="products" {options}>
		{#each products as product (product._id)}
			<CarouselSlide>
				<a href="/product/{product.slug}">
					<CardProduct {product} />
				</a>
			</CarouselSlide>
		{/each}
	</CarouselRoot>
</section>

<style lang="scss">
	section.featured-products {
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
