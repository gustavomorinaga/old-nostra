<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import type { SwiperOptions } from 'swiper/types';

	let swiperRef: HTMLElement & { initialize: () => void };

	const SWIPER_OPTIONS: SwiperOptions = {
		navigation: {
			enabled: true
		},
		centeredSlides: true,
		loop: true,
		slidesPerView: 1,
		pagination: {
			clickable: true
		},
		grabCursor: false,
		allowTouchMove: false,
		autoHeight: false,
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
			}
			`,
			`.swiper-pagination-bullet-active {
				--swiper-pagination-color: hsl(var(--af) / 1);
			}`
		]
	};

	onMount(() => {
		register();
		Object.assign(swiperRef, SWIPER_OPTIONS);
		swiperRef.initialize();
	});
</script>

<swiper-container bind:this={swiperRef} init="false" class="banner">
	<slot />
</swiper-container>

<style lang="scss">
	swiper-container.banner {
		--swiper-navigation-color: var(--p);
		@apply rounded-box relative mb-16 h-[50vh] overflow-hidden shadow-md;
	}
</style>
