<script lang="ts">
	import { Breadcrumb } from '$lib/components';
	import { ProductDetail, RelatedProductsLayout } from '$lib/layouts';

	export let data;
	const { product, relatedProducts } = data;
</script>

<Breadcrumb class="product-breadcrumb" let:B>
	<B.Item>Browse Products</B.Item>
	<B.Item>{product.category.name}</B.Item>
	<B.Item>{product.subCategory.name}</B.Item>
</Breadcrumb>

<ProductDetail {product} />

<RelatedProductsLayout products={relatedProducts.data} />
