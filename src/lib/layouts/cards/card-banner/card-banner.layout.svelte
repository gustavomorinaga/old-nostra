<script lang="ts">
	import { Card } from '$lib/components';
	import { balancer } from 'svelte-action-balancer';

	export let banner: { title: string; image: string; link: string };
</script>

<Card class="banner image-full" as="article" let:C>
	<C.Figure src={banner.image} alt={banner.title} />

	<C.Body>
		<h2 use:balancer>{banner.title}</h2>

		<C.Actions>
			<a href={banner.link}>
				Shop now
				<iconify-icon icon="ph:arrow-right" />
			</a>
		</C.Actions>
	</C.Body>
</Card>

<style lang="scss" global>
	article.banner {
		@apply card h-full w-full rounded-none before:pointer-events-none before:hidden
		after:absolute after:inset-0 after:block after:bg-primary-focus after:opacity-50;

		& > figure {
			@apply aspect-video;

			& > img {
				@apply w-full;
			}
		}

		& > div.card-body {
			@apply items-center justify-center text-center;

			& > h2 {
				@apply text-5xl font-bold text-white drop-shadow;
			}

			& > div.card-actions {
				@apply mt-4;

				& > a {
					@apply btn-accent btn shadow;

					& > iconify-icon {
						@apply text-xl;
					}
				}
			}
		}
	}
</style>
