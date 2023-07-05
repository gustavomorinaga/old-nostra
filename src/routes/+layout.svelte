<script>
	import { AnnouncementAction, AnnouncementContent, AnnouncementRoot } from '$lib/components';
	import { FooterLayout, NavbarLayout } from '$lib/layouts';
	import 'iconify-icon';
	import '../lib/styles/app.style.scss';

	let showAnnouncement = true;

	const handleAnnouncement = () => (showAnnouncement = !showAnnouncement);
</script>

<AnnouncementRoot show={showAnnouncement}>
	<AnnouncementContent>
		Sign up and <strong>GET 20% OFF</strong> for your first order.
		<a href="/signup">Sign up now</a>
	</AnnouncementContent>
	<AnnouncementAction on:click={handleAnnouncement} title="Close">
		<iconify-icon icon="ph:x" />
	</AnnouncementAction>
</AnnouncementRoot>

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
