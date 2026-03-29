;(function () {
	'use strict';

	if (!customElements.get('showcase-slider')) {
		class ShowcaseSlider extends HTMLElement {
			constructor() {
				super();
				this.slider = this.querySelector('.case-slider');
				this.swiper = null;
				this.slides = Array.from(this.querySelector('.swiper-slide'));
			}

			connectedCallback() {
				this.initSwiper();
				window.addEventListener('resize', () => this.initSwiper.call(this));
			}

			attributeChangedCallback() {
				this.initSwiper();
			}
		}

		ShowcaseSlider.prototype.initSwiper = function() {
			if (this.slider) {
				const { id } = this.slider.dataset;
				this.swiper = new Swiper(`.case-slider-${id}`, {
					loop: false,
					slidesPerView: 'auto',
					spaceBetween: 20,
					breakpoints: {
						1200: {
							spaceBetween: 30,
						},
					},
				});
			}
		};

		customElements.define('showcase-slider', ShowcaseSlider);
	}
})();
