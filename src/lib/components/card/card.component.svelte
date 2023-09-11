<script lang="ts">
	import { default as Root } from './card-root.component.svelte';
	import { default as Figure } from './card-figure.component.svelte';
	import { default as Body } from './card-body.component.svelte';
	import { default as Header } from './card-header.component.svelte';
	import { default as Title } from './card-title.component.svelte';
	import { default as Actions } from './card-actions.component.svelte';
	import type { ComponentProps } from 'svelte';

	export let as: ComponentProps<Root>['as'] = 'section';

	const C = { Figure, Body, Header, Title, Actions };
</script>

<Root {...$$restProps} {as}>
	<slot {C} />
</Root>
