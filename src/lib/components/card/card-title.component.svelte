<script lang="ts">
	export let as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
</script>

<svelte:element this={as} class="card-title">
	<slot />
</svelte:element>
