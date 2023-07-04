<script lang="ts">
	export let pick: {
		title: string;
		image: string;
		link: string;
	};
</script>

<article class="curated-pick image-full">
	<figure>
		<img src={pick.image} alt={pick.title} />
	</figure>

	<div class="card-body">
		<div class="card-actions">
			<a href={pick.link}>
				{pick.title}
				<iconify-icon icon="ph:arrow-right" />
			</a>
		</div>
	</div>
</article>

<style lang="scss">
	article.curated-pick {
		@apply card h-72 overflow-hidden from-neutral shadow-md
		before:hidden after:absolute after:inset-0 after:bg-gradient-to-t after:from-primary-focus;

		& > figure {
			& > img {
				height: auto !important;
			}
		}

		& > div.card-body {
			& > div.card-actions {
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
