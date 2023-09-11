<script lang="ts">
	import { default as Root } from './rating-root.component.svelte';
	import { default as Star } from './rating-star.component.svelte';
	import { default as Wrapper } from './rating-wrapper.component.svelte';
	import { default as Legend } from './rating-legend.component.svelte';

	import { generateDOMId } from '$lib/utils';

	export let stars = 5;
	export let value = 0;
	export let readonly = false;

	const groupId = generateDOMId();
</script>

<Root {groupId} {...$$restProps} {readonly}>
	<Wrapper {readonly}>
		{@const isEmpty = value === 0}
		<Star {groupId} {isEmpty} isHidden />

		{#each Array(stars) as _, index}
			{@const isHalf = Math.round(value * 2) / 2 === index + 0.5}
			{@const isWhole = value === index + 1}

			<Star {groupId} {isHalf} {isWhole} />
		{/each}
	</Wrapper>

	<Legend>{`(${value})`}</Legend>
</Root>
