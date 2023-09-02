<div class="breadcrumbs {$$restProps.class || ''}">
	<ul>
		<slot />
	</ul>
</div>

<style lang="scss" global>
	div.breadcrumbs {
		@apply font-heading text-sm;

		& > ul {
			& > li {
				@apply text-base-content text-opacity-75 last:font-semibold last:text-opacity-100;
			}
		}
	}
</style>
