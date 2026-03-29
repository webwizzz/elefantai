(function () {
	function announsmentSlider() {
		const sliders = document.querySelectorAll(".announcement-slider");

		if(sliders.length) {
			sliders.forEach(slider => {
				const id = slider.dataset.sectionId;
				const speed = +slider.dataset.speed;
				const changeSpeed = +slider.dataset.changeSpeed;
				const slidesPerView = +slider.dataset.slidesPerView;
				const rotate = slider.dataset.rotate;

				const swiperOptions = {
					loop: true, 
					slidesPerView: 1, 
					spaceBetween: 20, 
					grabCursor: true, 
					longSwipesRatio: 0.3, 
					speed,
					breakpoints: {
						750: {
							slidesPerView: slidesPerView == 1 ? slidesPerView : 2,
						},
						1025: {
							slidesPerView,
							spaceBetween: 30
						}, 
					}
				}

				if (rotate == 'true') {
					swiperOptions.autoplay = {
							delay: changeSpeed
					};
				}

				const swiperannounsmentSlider = new Swiper(`.announcement-slider-${id}`, swiperOptions)
			});
		}
  };

  document.addEventListener('DOMContentLoaded', announsmentSlider);
  document.addEventListener('shopify:section:load', announsmentSlider);
  window.addEventListener('resize', announsmentSlider);

})();