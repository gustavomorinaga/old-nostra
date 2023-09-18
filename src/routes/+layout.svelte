<script lang="ts">
	import 'iconify-icon';
	import '../lib/styles/app.style.scss';
	import { onNavigate } from '$app/navigation';
	import { Announcement } from '$lib/components';
	import { FooterLayout, MainLayout, NavbarLayout } from '$lib/layouts';
	import { startViewTransition } from '$lib/utils';

	let show = true;

	const handleAnnouncement = () => (show = !show);

	onNavigate(startViewTransition);
</script>

<Announcement let:A {show}>
	<A.Content>
		Sign up and <strong>GET 20% OFF</strong> for your first order.
		<a href="/signup">Sign up now</a>
	</A.Content>
	<A.Action on:click={handleAnnouncement} title="Close">
		<iconify-icon icon="ph:x" />
	</A.Action>
</Announcement>

<NavbarLayout />

<MainLayout>
	<slot />
</MainLayout>

<FooterLayout />
