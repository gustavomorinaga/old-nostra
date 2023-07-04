<script lang="ts">
	import { CarouselRoot, CarouselSlide } from '$lib/components';
	import { balancer } from 'svelte-action-balancer';

	export let banners: { title: string; image: string; link: string }[] = [];
</script>

<CarouselRoot>
	{#each banners as banner}
		<CarouselSlide>
			<article class="banner-content image-full">
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
		</CarouselSlide>
	{/each}
</CarouselRoot>

<style lang="scss">
	article.banner-content {
		@apply card h-full w-full rounded-none before:pointer-events-none before:hidden
		after:absolute after:inset-0 after:block after:bg-primary-focus after:opacity-50;

		& > figure {
			& > img {
				@apply w-full;
			}
		}

		& > div.card-body {
			@apply items-center justify-center;

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
