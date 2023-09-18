<script lang="ts">
	export let as: 'section' | 'article' | 'div';
</script>

<svelte:element this={as} class="card {$$restProps.class || ''}">
	<slot />
</svelte:element>

<style lang="scss" global>
	.card {
		@apply card-compact;
	}
</style>
