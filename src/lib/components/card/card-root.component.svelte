<script lang="ts">
	export let as: 'section' | 'article' | 'div' = 'section';
</script>

<svelte:element this={as} class="card {$$restProps.class || ''}">
	<slot />
</svelte:element>

<style lang="scss">
	.card {
		@apply card-compact;
	}
</style>
