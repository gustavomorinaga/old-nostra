<script lang="ts">
	import { BannerCoupleJPG, BannerWinterJPG, OfferJPG } from '$lib/assets';
	import {
		BannerLayout,
		BrandsLayout,
		CuratedPicksLayout,
		FeaturedProductsLayout,
		NewsletterLayout,
		USPLayout
	} from '$lib/layouts';
	import { CardOffer } from '$lib/components';

	export let data;

	const banners = [
		{
			title: 'Level up your style with our winter collections',
			image: BannerWinterJPG,
			link: '/shop/winter-edition'
		},
		{
			title: 'Check out our new casual collections',
			image: BannerCoupleJPG,
			link: '/shop/casual'
		}
	];

	const offer = {
		description: '35% off only this Friday and get special gift',
		image: OfferJPG
	};
</script>

<BannerLayout {banners} />
<BrandsLayout brands={data.brands} />
<USPLayout />
<CuratedPicksLayout />
<FeaturedProductsLayout products={data.products.data} />
<CardOffer {offer} />
<NewsletterLayout />
