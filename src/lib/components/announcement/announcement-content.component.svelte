<span class="announcement-content">
	<slot />
</span>

<style lang="scss">
	span.announcement-content {
		@apply mx-auto text-center text-sm text-white;

		& :global(a) {
			@apply link font-semibold;
		}
	}
</style>
