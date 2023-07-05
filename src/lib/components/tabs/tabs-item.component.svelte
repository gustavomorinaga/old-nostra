<script lang="ts">
	export let active = false;
	export let link: string;
</script>

<a class="tab" class:tab-active={active} href={link}>
	<slot />
</a>
