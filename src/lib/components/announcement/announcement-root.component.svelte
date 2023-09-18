<script lang="ts">
	import { browser } from '$app/environment';
	import { portal } from 'svelte-portal';

	let ref: HTMLElement;

	export let show: boolean;
	export let position: 'top' | 'bottom';

	const positionMap = {
		top: 'paddingTop',
		bottom: 'paddingBottom'
	} as const;

	const handlePosition = (height = 0) => {
		document.body.style[positionMap[position]] = show ? `${height}px` : '0px';
	};

	$: browser && handlePosition(ref?.offsetHeight);
</script>

{#if show}
	<section
		{...$$restProps}
		bind:this={ref}
		class="announcement"
		data-position={position}
		use:portal
	>
		<div>
			<slot />
		</div>
	</section>
{/if}

<style lang="scss">
	section.announcement {
		@apply fixed inset-x-0 z-[60] h-12 bg-primary p-2;
		view-transition-name: announcement;

		&[data-position='top'] {
			@apply bottom-auto top-0;
		}
		&[data-position='bottom'] {
			@apply bottom-0 top-auto;
		}

		& > div {
			@apply mx-auto flex max-w-6xl items-center px-4;
		}
	}
</style>
