<swiper-slide {...$$restProps} class="slide">
	<slot />
</swiper-slide>

<style lang="scss">
	swiper-slide.slide {
		@apply pointer-events-auto;
	}
</style>
