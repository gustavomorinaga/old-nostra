<script lang="ts">
	import { Breadcrumb } from '$lib/components';
	import { ProductDetail } from '$lib/layouts';

	export let data;
	const { product } = data;
</script>

<Breadcrumb class="product-breadcrumb" let:B>
	<B.Item>Browse Products</B.Item>
	<B.Item>{product.category.name}</B.Item>
	<B.Item>{product.subCategory.name}</B.Item>
</Breadcrumb>

<ProductDetail {product} />

<style lang="scss" global>
	div.product-breadcrumb {
		@apply mb-8;
	}
</style>
