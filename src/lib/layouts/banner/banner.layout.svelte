<script lang="ts">
	import { CardBanner, CarouselRoot, CarouselSlide } from '$lib/components';
	import type { ComponentProps } from 'svelte';

	export let banners: { title: string; image: string; link: string }[] = [];

	const options: ComponentProps<CarouselRoot>['options'] = {
		centeredSlides: true,
		loop: true,
		slidesPerView: 1,
		autoHeight: false,
		grabCursor: false,
		allowTouchMove: false,
		effect: 'fade',
		navigation: {
			enabled: true
		},
		pagination: {
			clickable: true
		},
		autoplay: {
			delay: 5000
		},
		injectStyles: [
			`.swiper-button-prev, .swiper-button-next {
				--swiper-navigation-size: 1rem;
				top: 1.5rem;
				left: auto;
				background-color: hsl(var(--af) / 1);
				padding: 0.75rem 1rem;
			}

			.swiper-button-prev {
				right: 3.6rem;
				border: solid hsl(var(--b3) / 1);
				border-width: 0 2px 0 0;
				border-radius: 0.375rem 0 0 0.375rem;
			}

			.swiper-button-next {
				right: 1rem;
				border-radius: 0 0.375rem 0.375rem 0;
			}`,
			`.swiper-pagination {
				--swiper-pagination-color: hsl(var(--af) / 1);
				--swiper-pagination-bullet-inactive-color: hsl(var(--b3) / 1);
				--swiper-pagination-bullet-inactive-opacity: 0.5;
			}`
		]
	};
</script>

<CarouselRoot class="banners" {options}>
	{#each banners as banner}
		<CarouselSlide>
			<CardBanner {banner} />
		</CarouselSlide>
	{/each}
</CarouselRoot>

<style lang="scss">
	:global(.banners) {
		@apply rounded-box shadow-md;
	}
</style>
