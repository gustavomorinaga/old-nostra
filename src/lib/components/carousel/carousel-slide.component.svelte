<swiper-slide class="slide {$$restProps.class || ''}">
	<slot />
</swiper-slide>

<style lang="scss">
	swiper-slide.slide {
		@apply pointer-events-auto;
	}
</style>
