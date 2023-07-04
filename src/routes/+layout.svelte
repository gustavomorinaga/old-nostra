<script>
	import '../lib/styles/app.style.scss';
	import 'iconify-icon';
	import { AnnouncementAction, AnnouncementContent, AnnouncementRoot } from '$lib/components';
	import { FooterLayout, NavbarLayout } from '$lib/layouts';

	export let data;

	let showAnnouncement = true;

	const handleAnnouncement = () => (showAnnouncement = !showAnnouncement);
</script>

{#if showAnnouncement}
	<AnnouncementRoot>
		<AnnouncementContent>
			Sign up and <strong>GET 20% OFF</strong> for your first order.
			<a href="/signup">Sign up now</a>
		</AnnouncementContent>
		<AnnouncementAction on:click={handleAnnouncement} title="Close">
			<iconify-icon icon="ph:x" />
		</AnnouncementAction>
	</AnnouncementRoot>
{/if}

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
