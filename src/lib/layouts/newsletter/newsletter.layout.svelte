<section class="newsletter">
	<header>
		<h2>Subscribe to our newsletter to get updates to our latest collections</h2>
		<p>Get 20% off on your first order just by subscribing to our newsletter</p>
	</header>

	<form class="subscription">
		<label>
			<iconify-icon icon="ph:envelope" />
			<input type="email" placeholder="Enter your email" />
		</label>
		<button type="submit">Subscribe</button>
	</form>

	<footer>
		<small>You will be able to unsubscribe at any time.</small>
		<small>Read our Privacy Policy <a href="#">here</a>.</small>
	</footer>
</section>

<style lang="scss">
	section.newsletter {
		@apply grid place-items-center gap-y-6 text-center;

		& > header {
			& > h2 {
				@apply mb-4 max-w-2xl text-3xl font-bold;
			}

			& > p {
				@apply text-base-content;
			}
		}

		& form.subscription {
			@apply join gap-2;

			& > label {
				@apply input-bordered input join items-center overflow-hidden
				focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-base-200;

				& > * {
					@apply join-item;
				}

				& > iconify-icon {
					@apply text-lg text-base-content;
				}

				& > input {
					@apply input-md outline-none;
				}
			}

			& > button {
				@apply btn-primary btn;
			}
		}

		& > footer {
			@apply flex flex-col;

			& a {
				@apply link font-semibold;
			}
		}
	}
</style>
