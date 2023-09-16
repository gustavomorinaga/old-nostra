<script>
	import { slide } from 'svelte/transition';
</script>

<section class="announcement" transition:slide>
	<div>
		<slot />
	</div>
</section>

<style lang="scss">
	section.announcement {
		@apply sticky top-0 z-[60] bg-primary p-2;

		& > div {
			@apply mx-auto flex max-w-6xl items-center px-4;
		}
	}
</style>
