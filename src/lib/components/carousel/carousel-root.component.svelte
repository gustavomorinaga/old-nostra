<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import type { SwiperOptions } from 'swiper/types';

	let swiperRef: HTMLElement & { initialize: () => void };

	export let options: SwiperOptions = {};

	onMount(() => {
		register();
		Object.assign(swiperRef, options);
		swiperRef.initialize();
	});
</script>

<swiper-container bind:this={swiperRef} init="false" class={$$restProps.class || ''}>
	<slot />
</swiper-container>

<style lang="scss">
	swiper-container {
		--swiper-navigation-color: var(--p);
		@apply relative mb-16 block h-[50vh] overflow-hidden;
	}
</style>
