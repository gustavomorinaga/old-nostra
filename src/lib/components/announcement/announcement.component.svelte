<script lang="ts">
	import { default as Action } from './announcement-action.component.svelte';
	import { default as Content } from './announcement-content.component.svelte';
	import { default as Root } from './announcement-root.component.svelte';

	const A = { Content, Action };

	export let show = true;
</script>

{#if show}
	<Root>
		<slot {A} />
	</Root>
{/if}
