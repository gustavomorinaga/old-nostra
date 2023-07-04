<script lang="ts">
	import { page } from '$app/stores';
	import { NotFoundSVG } from '$lib/assets';
</script>

<section class="error">
	<div>
		<img src={NotFoundSVG} alt="Not Found" />

		<div>
			<h1>I have bad news for you</h1>
			<p>The page are you looking for might be removed or is temporarily unavailable</p>

			<a href="/">Come Home</a>
		</div>
	</div>
</section>

<style lang="scss">
	section.error {
		@apply hero mt-16 block;

		& > div {
			@apply hero-content max-w-none flex-col justify-between p-0 lg:flex-row-reverse;

			& > img {
				@apply w-72 lg:w-1/2;
			}

			& > div {
				@apply block;

				& > h1 {
					@apply mb-4 text-5xl font-bold;
				}

				& > p {
					@apply mb-8 text-lg;
				}

				& > a {
					@apply btn-primary btn;
				}
			}
		}
	}
</style>
