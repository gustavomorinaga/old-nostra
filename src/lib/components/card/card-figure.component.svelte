<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<figure {...$$restProps}>
	<img {src} {alt} />
</figure>
