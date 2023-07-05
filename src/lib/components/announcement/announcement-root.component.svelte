<script>
	import { slide } from 'svelte/transition';

	export let show = true;
</script>

{#if show}
	<section class="announcement" transition:slide>
		<div>
			<slot />
		</div>
	</section>
{/if}

<style lang="scss">
	section.announcement {
		@apply sticky top-0 z-50 bg-primary p-2;

		& > div {
			@apply mx-auto flex max-w-6xl items-center px-4;
		}
	}
</style>
