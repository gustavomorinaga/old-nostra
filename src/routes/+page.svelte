<script lang="ts">
	import { OfferJPG } from '$lib/assets';
	// import { CardProduct } from '$lib/components';
	import {
		BrandsLayout,
		CuratedPicksLayout,
		NewsletterLayout,
		OfferLayout,
		USPLayout
	} from '$lib/layouts';

	export let data;

	const offer = {
		description: '35% off only this Friday and get special gift',
		image: OfferJPG
	};
</script>

<!-- <ul>
	{#each data.products.data as product (product._id)}
		<li>
			<CardProduct {product} />
		</li>
	{/each}
</ul> -->

<BrandsLayout brands={data.brands} />
<USPLayout />
<CuratedPicksLayout />
<OfferLayout {offer} />
<NewsletterLayout />

<style lang="scss">
	// ul {
	// 	@apply grid grid-flow-col gap-4;

	// 	& > li {
	// 		@apply col-auto;
	// 	}
	// }
</style>
