<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import { default as Root } from './carousel-root.component.svelte';
	import { default as Slide } from './carousel-slide.component.svelte';

	export let options: ComponentProps<Root>['options'] = {};

	const C = { Slide };
</script>

<Root class={$$restProps.class || ''} {options}>
	<slot {C} />
</Root>
