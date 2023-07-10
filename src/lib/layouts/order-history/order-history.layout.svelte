<script lang="ts">
	import { Card } from '$lib/components';
</script>

<Card class="order-history" let:C>
	<C.Body>
		<C.Header>
			<C.Title as="h1">Order history</C.Title>
			<p>Here you can manage your order</p>
		</C.Header>
	</C.Body>
</Card>

<style lang="scss" global>
	section.order-history {
		@apply card-bordered card card-compact overflow-hidden;

		& > div.card-body {
			& > header {
				& > p {
					@apply text-base-content text-opacity-75;
				}
			}
		}
	}
</style>
