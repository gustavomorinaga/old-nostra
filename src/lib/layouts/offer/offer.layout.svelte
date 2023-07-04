<script lang="ts">
	import { balancer } from 'svelte-action-balancer';

	export let offer: { description: string; image: string };
</script>

<article class="offer">
	<figure>
		<img src={offer.image} alt="Offer" width="640" height="427" />
	</figure>

	<div class="card-body">
		<h5>Limited offer</h5>
		<h6 use:balancer>{offer.description}</h6>

		<div class="card-actions">
			<a href="#">
				Grab it now
				<iconify-icon icon="ph:arrow-right" />
			</a>
		</div>
	</div>
</article>

<style lang="scss">
	article.offer {
		@apply card card-side mb-16 max-h-64 bg-primary shadow-md;

		& > figure {
			@apply w-2/5 object-cover;
		}

		& > div.card-body {
			& > h5 {
				@apply card-title text-sm uppercase leading-normal text-base-300;
			}

			& > h6 {
				@apply text-4xl font-bold text-base-100;
			}

			& > div.card-actions {
				@apply mt-4;

				& > a {
					@apply btn-accent btn;

					& > iconify-icon {
						@apply text-xl;
					}
				}
			}
		}
	}
</style>
