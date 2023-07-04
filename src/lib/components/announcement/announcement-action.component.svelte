<script lang="ts">
	export let title: string;
</script>

<button on:click {title}>
	<slot />
</button>

<style lang="scss">
	button {
		@apply btn-primary btn-sm btn w-fit p-2;
	}
</style>
