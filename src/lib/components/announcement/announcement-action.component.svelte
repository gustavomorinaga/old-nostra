<script lang="ts">
	export let title: string;
</script>

<button class="announcement-action" type="button" on:click {title}>
	<slot />
</button>

<style lang="scss" global>
	button.announcement-action {
		@apply btn btn-primary btn-sm w-fit p-2;
	}
</style>
