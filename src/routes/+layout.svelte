<script>
	import 'iconify-icon';
	import '../lib/styles/app.style.scss';
	import { Announcement } from '$lib/components';
	import { FooterLayout, NavbarLayout } from '$lib/layouts';

	let showAnnouncement = true;

	const handleAnnouncement = () => (showAnnouncement = !showAnnouncement);
</script>

<Announcement let:A show={showAnnouncement}>
	<A.Content>
		Sign up and <strong>GET 20% OFF</strong> for your first order.
		<a href="/signup">Sign up now</a>
	</A.Content>
	<A.Action on:click={handleAnnouncement} title="Close">
		<iconify-icon icon="ph:x" />
	</A.Action>
</Announcement>

<NavbarLayout />

<main>
	<slot />
</main>

<FooterLayout />

<style lang="scss">
	main {
		@apply mx-auto min-h-screen max-w-6xl p-4;
	}
</style>
