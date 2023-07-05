<script>
	import { CoverJPG } from '$lib/assets';
</script>

<section class="profile">
	<figure>
		<img src={CoverJPG} alt="Profile cover" />
	</figure>

	<div class="card-body">
		<header>
			<div class="indicator">
				<div class="indicator-item indicator-top">
					<button title="Edit">
						<iconify-icon icon="ph:pencil-simple" />
					</button>
				</div>

				<figure class="avatar">
					<div>
						<img src="https://github.com/gustavomorinaga.png" alt="Avatar" />
					</div>
				</figure>
			</div>

			<h1>Gustavo Morinaga</h1>

			<button title="Options">
				<iconify-icon icon="ph:dots-three-outline-vertical-fill" />
			</button>
		</header>

		<div class="infos">
			<span class="info">
				<iconify-icon icon="ph:envelope" />
				<span>gustavo.morinaga27@gmail.com</span>
			</span>

			<span class="info">
				<iconify-icon icon="ph:phone" />
				<span>(11) 997692-2927</span>
			</span>
		</div>
	</div>
</section>

<style lang="scss">
	section.profile {
		@apply card-bordered card card-compact mb-4 bg-base-100;

		& > figure {
			@apply mx-2 mt-2 h-40 rounded-lg bg-base-300;
		}

		& > div.card-body {
			@apply relative pt-8;

			& > header {
				@apply flex justify-between;

				& > div.indicator {
					@apply absolute -top-32 left-8;

					& > div.indicator-item {
						@apply translate-x-0 translate-y-0;

						& > button {
							@apply btn-accent btn-sm btn w-fit px-2;

							& > iconify-icon {
								@apply text-base;
							}
						}
					}

					& > figure.avatar {
						@apply overflow-visible;

						& > div {
							@apply w-36 rounded-full bg-base-300 ring ring-base-100;
						}
					}
				}

				& > h1 {
					@apply text-xl;
				}

				& > button {
					@apply btn-ghost btn-sm btn w-fit border-base-200 px-2;

					& > iconify-icon {
						@apply text-base;
					}
				}
			}

			& > div.infos {
				@apply flex gap-4;

				& > span.info {
					@apply join items-center gap-2 text-base-content text-opacity-75;

					& > * {
						@apply join-item;
					}

					& > iconify-icon {
						@apply text-xl;
					}
				}
			}
		}
	}
</style>
