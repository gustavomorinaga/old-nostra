<nav>
	<ul class="tabs tabs-boxed {$$restProps.class || ''}">
		<slot />
	</ul>
</nav>

<style lang="scss">
	nav {
		@apply relative block;

		& > ul.tabs {
			@apply z-10 mb-4 gap-1 rounded-xl border border-base-200 bg-base-100;
		}
	}
</style>
