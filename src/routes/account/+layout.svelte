<script lang="ts">
	import { Tabs } from '$lib/components';
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
<Tabs class="account-tabs" let:T>
	{#each tabs as tab}
		<T.Item link={tab.link} active={data.currentPathname === tab.link}>
			{tab.name}
		</T.Item>
	{/each}
</Tabs>

<slot />
