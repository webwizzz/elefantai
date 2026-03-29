(function () {
	function hotspotSlider() {
		const sliders = document.querySelectorAll(".product-banner-slider");

		if (sliders.length) {
			sliders.forEach(slider => {
				let { sectionId, loop }= slider.dataset;

        loop = loop == 'true' ? true : false;
				

				const swiperHotspotSlider = new Swiper(`.product-banner-slider-${sectionId}.product-banner-slider-thumbs .swiper`, {
					loop,
					autoHeight: true,
					speed: 800,
					slidesPerView: 1,
					spaceBetween: 0,
					navigation: {
						nextEl: `.product-banner-slider-${sectionId} .slider-arrow-next`,
						prevEl: `.product-banner-slider-${sectionId} .slider-arrow-prev`,
					},
					keyboard: {
						enabled: true,
						onlyInViewport: false,
					},
				});
			})
		};
	}

	document.addEventListener('DOMContentLoaded', hotspotSlider);
	document.addEventListener('shopify:section:load', hotspotSlider);
})();