<script lang="ts">
	import { Carousel } from '$lib/components';
	import type { ComponentProps } from 'svelte';

	export let photos: { uri: string; alt: string }[];

	const [viewerOptions, thumbsOptions]: ComponentProps<Carousel>['options'][] = [
		{
			slidesPerView: 1,
			effect: 'fade',
			navigation: { enabled: true },
			controller: { control: '.thumbs' },
			injectStyles: [
				`.swiper-button-prev, .swiper-button-next {
					--swiper-navigation-size: 1rem;
					background-color: hsl(var(--af) / 1);
					padding: 0.5rem 0.75rem;
					border-radius: 0.5rem;
				}`
			]
		},
		{
			centeredSlides: true,
			slidesPerView: 4,
			spaceBetween: 16,
			slideToClickedSlide: true,
			controller: { control: '.viewer' },
			injectStyles: [
				`.swiper-wrapper {
					margin-left: calc(-38.5%);
				}`
			]
		}
	];
</script>

<section {...$$restProps} class="gallery">
	<Carousel class="viewer" options={viewerOptions} let:C>
		{#each photos as photo}
			<C.Slide>
				<figure class="photo">
					<img src={photo.uri} alt={photo.alt} />
				</figure>
			</C.Slide>
		{/each}
	</Carousel>

	<Carousel class="thumbs" options={thumbsOptions} let:C>
		{#each photos as photo}
			<C.Slide>
				<figure class="photo">
					<img src={photo.uri} alt={photo.alt} />
				</figure>
			</C.Slide>
		{/each}
	</Carousel>
</section>

<style lang="scss" global>
	section.gallery {
		& .viewer,
		& .thumbs {
			& figure.photo {
				& > img {
					@apply h-full w-full object-cover;
				}
			}
		}

		& .viewer {
			@apply rounded-box mb-4 shadow-md;

			& figure.photo {
				@apply aspect-square;

				& > img {
					@apply object-top;
				}
			}
		}

		& .thumbs {
			& > .slide {
				@apply cursor-pointer pb-2;
			}

			& figure.photo {
				@apply rounded-box aspect-square overflow-hidden shadow-md;
			}
		}
	}
</style>
