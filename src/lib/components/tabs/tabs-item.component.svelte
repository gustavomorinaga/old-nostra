<script lang="ts">
	export let active = false;
	export let link: string;
</script>

<a class="tab {$$restProps.class || ''}" class:tab-active={active} href={link}>
	<slot />
</a>

<style lang="scss">
	a.tab {
		@apply transition-colors hover:bg-base-200;
	}
</style>
