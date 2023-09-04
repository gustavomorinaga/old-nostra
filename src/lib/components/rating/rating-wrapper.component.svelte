<script lang="ts">
	export let readonly = false;
</script>

<div class="rating-wrapper" class:readonly>
	<slot />
</div>

<style lang="scss" global>
	div.rating-wrapper {
		@apply relative inline-flex;

		&.readonly {
			@apply -ml-2;
		}
	}
</style>
