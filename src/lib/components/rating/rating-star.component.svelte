<script lang="ts">
	import { generateDOMId } from '$lib/utils';

	export let groupId = '';
	export let isHidden = false;
	export let isEmpty = false;
	export let isHalf = false;
	export let isWhole = false;
</script>

{#if isHidden}
	{@const id = `rating-hidden-${groupId}`}

	<label for={id} />
	<input {id} type="radio" name="rating" class="rating-hidden" checked={isEmpty} />
{:else}
	{@const id = generateDOMId()}
	{@const firstId = `rating-h1-${groupId}-${id}`}
	{@const secondId = `rating-h2-${groupId}-${id}`}

	<label for={firstId} />
	<input id={firstId} type="radio" name="rating" class="half-1 bg-amber-500" checked={isHalf} />

	<label for={secondId} />
	<input id={secondId} type="radio" name="rating" class="half-2 bg-amber-500" checked={isWhole} />
{/if}

<style lang="scss">
	input[type='radio'] {
		@apply mask mask-star;

		&.half-1 {
			@apply mask-half-1;
		}
		&.half-2 {
			@apply mask-half-2;
		}
	}
</style>
