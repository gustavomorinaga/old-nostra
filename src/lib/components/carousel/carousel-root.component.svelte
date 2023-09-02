<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import type { SwiperOptions } from 'swiper/types';

	let ref: HTMLElement & { initialize: () => void };

	export let options: SwiperOptions = {};

	onMount(() => {
		register();
		Object.assign(ref, options);
		ref.initialize();
	});
</script>

<swiper-container bind:this={ref} init="false" class={$$restProps.class || ''}>
	<slot />
</swiper-container>

<style lang="scss">
	swiper-container {
		--swiper-navigation-color: var(--p);
		@apply relative block overflow-hidden;
	}
</style>
