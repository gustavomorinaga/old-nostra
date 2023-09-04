<script lang="ts">
	export let groupId = '';
	export let readonly = false;

	const id = `rating-${groupId}`;
</script>

<fieldset {id} class="rating {$$restProps.class || ''}" disabled={readonly}>
	<slot />
</fieldset>

<style lang="scss" global>
	fieldset.rating {
		@apply rating-half items-center gap-2 disabled:pointer-events-none;
	}
</style>
