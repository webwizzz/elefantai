(function () {
	function featuredBlogSlider() {
		const sliders = document.querySelectorAll(".blog-slider");

		if (sliders.length) {
			sliders.forEach(slider => {
				const id = slider.dataset.id,
					sliderLoop = slider.dataset.loop,
					sliderLoopTrue = (sliderLoop === "true");

				const swiperfeaturedBlogSlider = new Swiper(`.blog-slider-${id}`, {
					loop: true,
					slidesPerView: 1,
					spaceBetween: 20,
					navigation: {
						nextEl: `#shopify-section-${id} .slider-arrow-next`,
						prevEl: `#shopify-section-${id} .slider-arrow-prev`,
					},
					breakpoints: {
						750: {
							loop: sliderLoopTrue,
							slidesPerView: 2
						},
						990: {
							loop: sliderLoopTrue,
							slidesPerView: 'auto'
						},
						1199: {
							loop: sliderLoopTrue,
							slidesPerView: 'auto',
							spaceBetween: 30
						}
					}
				});
			});
		}
	}

	document.addEventListener('DOMContentLoaded', featuredBlogSlider);
	document.addEventListener('shopify:section:load', featuredBlogSlider);
	window.addEventListener('resize', featuredBlogSlider);
})();