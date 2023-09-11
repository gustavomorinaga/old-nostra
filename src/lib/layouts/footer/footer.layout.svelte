<script>
	import { LogoMinSVG } from '$lib/assets';

	const routes = [
		{
			category: 'Shop',
			links: [
				{
					name: 'All Collections',
					path: '/shop/all-collections'
				},
				{
					name: 'Winter Edition',
					path: '/shop/winter-edition'
				},
				{
					name: 'Discount',
					path: '/shop/discount'
				}
			]
		},
		{
			category: 'Company',
			links: [
				{
					name: 'About Us',
					path: '/company/about-us'
				},
				{
					name: 'Contact',
					path: '/company/contact'
				},
				{
					name: 'Affiliates',
					path: '/company/affiliates'
				}
			]
		},
		{
			category: 'Support',
			links: [
				{
					name: 'FAQs',
					path: '/support/faqs'
				},
				{
					name: 'Cookie Policy',
					path: '/support/cookie-policy'
				},
				{
					name: 'Terms of Use',
					path: '/support/terms-of-use'
				}
			]
		}
	];

	const paymentMethods = [
		{
			name: 'Mastercard',
			icon: 'logos:mastercard'
		},
		{
			name: 'Visa',
			icon: 'logos:visa'
		},
		{
			name: 'Paypal',
			icon: 'logos:paypal'
		}
	];
</script>

<footer>
	<div class="wrapper">
		<div>
			<div>
				<a class="logo" href="/">
					<figure>
						<img src={LogoMinSVG} alt="Logo" width="120" height="20" />
					</figure>
				</a>

				<p class="slogan">
					Specializes in providing high-quality, stylish products for your wardrobe
				</p>
			</div>

			{#each routes as route}
				<div>
					<span>{route.category}</span>
					<ul>
						{#each route.links as link}
							<li>
								<a href={link.path}>{link.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<div>
				<span>Payment Methods</span>

				<ul class="payment-methods">
					{#each paymentMethods as paymentMethod}
						<li>
							<iconify-icon icon={paymentMethod.icon} />
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<hr />

		<small>Copyright &copy; 2023 Nostra, All right reserved</small>
	</div>
</footer>

<style lang="scss">
	footer {
		@apply mt-16 bg-base-200 p-10;
		view-transition-name: footer;

		& > div.wrapper {
			@apply mx-auto max-w-6xl text-base-content text-opacity-75;

			& > div {
				@apply footer pb-4;

				& > div {
					& > a.logo {
						@apply mb-4 text-xl normal-case;

						& > figure {
							@apply overflow-hidden object-contain;
						}
					}

					& > p.slogan {
						@apply max-w-xs;
					}

					& > span {
						@apply footer-title font-heading opacity-100;
					}

					& > ul {
						@apply flex flex-col gap-2;

						&.payment-methods {
							@apply flex-row gap-4;
						}

						& > li {
							& > a {
								@apply link-hover link;
							}
						}
					}
				}
			}

			& > small {
				@apply mx-auto block text-center;
			}
		}
	}
</style>
