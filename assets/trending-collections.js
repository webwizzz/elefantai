;(function () {
	'use strict';

	if (!customElements.get('trending-collections')) {
		class TrendingCollections extends HTMLElement {
			constructor() {
				super();
				this.slider = this.querySelector('.swiper.trending-collections__slider');
				this.slides = Array.from(this.querySelectorAll('.swiper-slide'));
				this.nextBtns = Array.from(this.querySelectorAll('.next'));
				this.prevBtns = Array.from(this.querySelectorAll('.prev'));
				this.swiper = null;
			}

			connectedCallback() {
				this.initSwiper();
				window.addEventListener('resize', () => this.initSwiper.call(this));
			}
		}

		TrendingCollections.prototype.initSwiper = function() {
			if (this.slider) {
				this.swiper = new Swiper(this.slider, {
					loop: true,
					autoplay: false,
					speed: 400,
					spaceBetween: 30,
					slidesPerView: 1,
					breakpoints: {
						750: {
							slidesPerView: 1.4
						},
						990: {
							slidesPerView: 2.4
						},
						1100: {
							slidesPerView: 2.9
						}
					},
					navigation: {
						nextEl: this.nextBtns[0],
						prevEl: this.prevBtns[0],
						disabledClass: 'nav--disabled'
					}
				});

				this.nextBtns.forEach((btn, ind) => {
					if (ind == 0) {
						return
					}
						btn.addEventListener('click', () => this.swiper.slideNext());
				});

				this.prevBtns.forEach((btn, ind) => {
					if (ind == 0) {
						return
					}
						btn.addEventListener('click', () => this.swiper.slidePrev());
				});
			}
		};

		customElements.define('trending-collections', TrendingCollections);
	}
})()


