<script lang="ts">
	import { TabsItem, TabsRoot } from '$lib/components';
	import { ProfileLayout } from '$lib/layouts';

	export let data;

	const tabs = [
		{
			name: 'Account settings',
			link: '/account'
		},
		{
			name: 'Manage password',
			link: '/account/password'
		},
		{
			name: 'Order history',
			link: '/account/orders'
		},
		{
			name: 'Payment methods',
			link: '/account/payments'
		},
		{
			name: 'Address',
			link: '/account/address'
		},
		{
			name: 'Notification',
			link: '/account/notification'
		}
	];
</script>

<ProfileLayout />
<TabsRoot>
	{#each tabs as tab}
		<TabsItem link={tab.link} active={data.currentPathname === tab.link}>
			{tab.name}
		</TabsItem>
	{/each}
</TabsRoot>
