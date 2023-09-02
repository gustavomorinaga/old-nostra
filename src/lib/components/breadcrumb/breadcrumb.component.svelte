<script lang="ts">
	import { default as Root } from './breadcrumb-root.component.svelte';
	import { default as Item } from './breadcrumb-item.component.svelte';

	const B = { Item };
</script>

<Root class={$$restProps.class || ''}>
	<slot {B} />
</Root>
