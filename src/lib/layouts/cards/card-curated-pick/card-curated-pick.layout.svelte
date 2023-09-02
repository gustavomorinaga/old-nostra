<script lang="ts">
	import { Card } from '$lib/components';

	export let pick: {
		title: string;
		image: string;
		link: string;
	};
</script>

<Card class="curated-pick image-full" as="article" let:C>
	<C.Figure src={pick.image} alt={pick.title} />

	<C.Body>
		<C.Actions>
			<a href={pick.link}>
				{pick.title}
				<iconify-icon icon="ph:arrow-right" />
			</a>
		</C.Actions>
	</C.Body>
</Card>

<style lang="scss" global>
	article.curated-pick {
		@apply card overflow-hidden from-neutral shadow-md
		before:hidden after:absolute after:inset-0 after:bg-gradient-to-t after:from-primary-focus;

		& > figure {
			@apply aspect-semi-square;

			& > img {
				@apply w-full;
			}
		}

		& > .card-body {
			& > .card-actions {
				@apply mt-auto;

				& > a {
					@apply btn-accent btn-block btn justify-between shadow;

					& > iconify-icon {
						@apply text-xl;
					}
				}
			}
		}
	}
</style>
