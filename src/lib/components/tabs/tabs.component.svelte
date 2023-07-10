<script lang="ts">
	import { default as Root } from './tabs-root.component.svelte';
	import { default as Item } from './tabs-item.component.svelte';

	const T = { Item };
</script>

<Root class={$$restProps.class || ''}>
	<slot {T} />
</Root>
