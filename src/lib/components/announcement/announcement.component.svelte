<script lang="ts">
	import { default as Action } from './announcement-action.component.svelte';
	import { default as Content } from './announcement-content.component.svelte';
	import { default as Root } from './announcement-root.component.svelte';
	import type { ComponentProps } from 'svelte';

	export let show: ComponentProps<Root>['show'] = true;
	export let position: ComponentProps<Root>['position'] = 'top';

	const A = { Content, Action };
</script>

<Root {...$$restProps} bind:show bind:position>
	<slot {A} />
</Root>
