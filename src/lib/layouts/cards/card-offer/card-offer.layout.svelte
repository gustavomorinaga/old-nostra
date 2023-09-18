<script lang="ts">
	import { Card } from '$lib/components';
	import { balancer } from 'svelte-action-balancer';

	export let offer: { description: string; image: string };
</script>

<Card class="offer" as="article" let:C>
	<C.Figure src={offer.image} alt="Offer" />

	<C.Body>
		<h5>Limited offer</h5>
		<h6 use:balancer>{offer.description}</h6>

		<C.Actions>
			<a href="#">
				Grab it now
				<iconify-icon icon="ph:arrow-right" />
			</a>
		</C.Actions>
	</C.Body>
</Card>

<style lang="scss" global>
	article.offer {
		@apply card card-side mb-16 max-h-64 overflow-hidden bg-primary shadow-md;

		& > figure {
			@apply w-2/5;

			& > img {
				@apply max-w-full;
			}
		}

		& > div.card-body {
			@apply justify-center selection:bg-base-100 selection:text-primary;

			& > h5 {
				@apply card-title text-sm uppercase leading-normal text-base-300;
			}

			& > h6 {
				@apply text-4xl font-bold text-base-100;
			}

			& > div.card-actions {
				@apply mt-4;

				& > a {
					@apply btn btn-accent;

					& > iconify-icon {
						@apply text-xl;
					}
				}
			}
		}
	}
</style>
