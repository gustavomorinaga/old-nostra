<script lang="ts">
	import { balancer } from 'svelte-action-balancer';

	export let banner: { title: string; image: string; link: string };
</script>

<article class="banner image-full">
	<figure>
		<img src={banner.image} alt={banner.title} />
	</figure>

	<div class="card-body">
		<h2 use:balancer>{banner.title}</h2>

		<div class="card-actions">
			<a href={banner.link}>
				Shop now
				<iconify-icon icon="ph:arrow-right" />
			</a>
		</div>
	</div>
</article>

<style lang="scss">
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
