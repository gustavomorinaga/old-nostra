<nav {...$$restProps} class="breadcrumbs">
	<ul>
		<slot />
	</ul>
</nav>

<style lang="scss" global>
	nav.breadcrumbs {
		@apply mb-4 font-heading text-sm;

		& > ul {
			& > li {
				@apply text-base-content text-opacity-75 last:font-semibold last:text-opacity-100;
			}
		}
	}
</style>
