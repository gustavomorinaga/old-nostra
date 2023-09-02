<script lang="ts">
	export let link: string = '';
</script>

<li>
	{#if link}
		<a href={link}>
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</li>
