<script lang="ts">
	export let value = 1;
	export let readonly = true;

	const stars = 5;
</script>

<div class="rating">
	{#each Array(stars) as _, index}
		<input
			type="radio"
			name="rating"
			class="half-1 bg-amber-500"
			checked={value === (index + 1) / 2}
			{readonly}
		/>
		<input
			type="radio"
			name="rating"
			class="half-2 bg-amber-500"
			checked={value === index + 1}
			{readonly}
		/>
	{/each}
</div>

<style lang="scss">
	div.rating {
		@apply rating-half;

		& > input[type='radio'] {
			@apply mask mask-star;

			&.half-1 {
				@apply mask-half-1;
			}
			&.half-2 {
				@apply mask-half-2;
			}

			&:read-only {
				@apply pointer-events-none cursor-default;
			}
		}
	}
</style>
