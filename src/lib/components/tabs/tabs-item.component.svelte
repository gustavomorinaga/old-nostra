<script lang="ts">
	export let active = false;
	export let link: string;
</script>

<li>
	<a
		class="tab {$$restProps.class || ''}"
		class:tab-active={active}
		href={link}
		aria-current={active ? 'page' : 'false'}
	>
		<slot />
	</a>
</li>

<style lang="scss">
	a.tab {
		@apply transition-colors hover:bg-base-200;
	}
</style>
