<script lang="ts">
	import { Carousel } from '$lib/components';
	import { CardBanner } from '$lib/layouts';
	import type { ComponentProps } from 'svelte';

	export let banners: { title: string; image: string; link: string }[];

	const hasBanners = !!banners.length;

	const options: ComponentProps<Carousel>['options'] = {
		centeredSlides: true,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		effect: 'fade',
		navigation: { enabled: true },
		pagination: { clickable: true },
		autoplay: { delay: 5000 },
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
				border-radius: 0.5rem 0 0 0.5rem;
			}

			.swiper-button-next {
				right: 1rem;
				border-radius: 0 0.5rem 0.5rem 0;
			}`,
			`.swiper-pagination {
				--swiper-pagination-color: hsl(var(--af) / 1);
				--swiper-pagination-bullet-inactive-color: hsl(var(--b3) / 1);
				--swiper-pagination-bullet-inactive-opacity: 0.5;
			}`
		]
	};
</script>

{#if hasBanners}
	<Carousel class="banners" {options} let:C>
		{#each banners as banner}
			<C.Slide>
				<CardBanner {banner} />
			</C.Slide>
		{/each}
	</Carousel>
{/if}

<style lang="scss" global>
	.banners {
		@apply rounded-box mb-16 h-[40vh] shadow-md;
	}
</style>
