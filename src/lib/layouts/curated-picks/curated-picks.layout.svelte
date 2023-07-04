<script>
	import { BestSellerJPG, CasualJPG, MenJPG, WomenJPG } from '$lib/assets';
	import { CardCuratedPick } from '$lib/components';

	const curatedPicks = [
		{
			title: 'Best Sellers',
			image: BestSellerJPG,
			link: '/shop/best-sellers'
		},
		{
			title: 'Shop Men',
			image: MenJPG,
			link: '/shop/men'
		},
		{
			title: 'Shop Women',
			image: WomenJPG,
			link: '/shop/women'
		},
		{
			title: 'Shop Casual',
			image: CasualJPG,
			link: '/shop/casual'
		}
	];
</script>

<section class="curated-picks">
	<header>
		<h2>Curated picks</h2>
	</header>

	<ul>
		{#each curatedPicks as pick}
			<li>
				<CardCuratedPick {pick} />
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	section.curated-picks {
		@apply mb-16 block;

		& header {
			@apply mb-8 flex justify-between;

			& > h2 {
				@apply max-w-xs text-3xl font-bold;
			}
		}

		& > ul {
			@apply grid auto-cols-fr grid-flow-col gap-4;
		}
	}
</style>
