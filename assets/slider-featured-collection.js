class FeaturedCollectionSlider {
	constructor(sliderElement) {
	  this.sliderElement = sliderElement;
	  this.id = sliderElement.dataset.sectionId;
	  this.centeredSlide = sliderElement.dataset.centeredSlide === 'true';
	  this.centeredSlides = sliderElement.dataset.centeredSlides === 'true';
	  this.columnsMobile = parseFloat(sliderElement.dataset.columnsMobile || 1, 10);
	  this.columnsDesktop = parseFloat(sliderElement.dataset.columnsDesktop || 2, 10);
  
	  this.initSlider();
	  this.attachNavigationHandlers();
	}
  
	initSlider() {
	  const tabletSlides = this.centeredSlide ? 2.4 : 2;
	  const proTabletSlides = this.centeredSlide ? 2.8 : 2;
	  const initialSlide = this.centeredSlide ? 1 : 0;
  
	  this.swiper = new Swiper(`.collection-slider-${this.id}`, {
		loop: true,
		centeredSlides: false,
		initialSlide: initialSlide,
		slidesPerView: this.columnsMobile,
		slideToClickedSlide: false,
		spaceBetween: 20,
		grabCursor: true,
		longSwipesMs: 500,
		longSwipesRatio: 1,
		navigation: {
		  nextEl: `.collection-slider-${this.id} .slider-arrow-next`,
		  prevEl: `.collection-slider-${this.id} .slider-arrow-prev`,
		},
		breakpoints: {
		  750: {
			loop: false,
			slidesPerView: tabletSlides,
		  },
		  990: {
			centeredSlides: this.centeredSlides,
			slidesPerView: proTabletSlides,
		  },
		  1099: {
			loop: true,
			initialSlide: 0,
			centeredSlides: this.centeredSlides,
			slidesPerView: this.columnsDesktop,
			spaceBetween: 30,
		  },
		},
	  });
	}
  
	attachNavigationHandlers() {
	  this.btnPrev = document.querySelector(`#shopify-section-${this.id} .featured-collection-header .slider-arrow-prev`);
	  this.btnNext = document.querySelector(`#shopify-section-${this.id} .featured-collection-header .slider-arrow-next`);
  
	  if (this.btnNext) {
		this.nextClickHandler = () => this.swiper.slideNext();
		this.btnNext.addEventListener('click', this.nextClickHandler);
	  }
  
	  if (this.btnPrev) {
		this.prevClickHandler = () => this.swiper.slidePrev();
		this.btnPrev.addEventListener('click', this.prevClickHandler);
	  }
	}
  
	destroy() {
	  if (this.btnNext && this.nextClickHandler) {
		this.btnNext.removeEventListener('click', this.nextClickHandler);
	  }
  
	  if (this.btnPrev && this.prevClickHandler) {
		this.btnPrev.removeEventListener('click', this.prevClickHandler);
	  }
  
	  if (this.swiper) {
		this.swiper.destroy(true, true);
	  }
  
	  this.sliderElement.classList.remove('initialized');
	}
  }
  
  const sliderInstances = new Map();
  
  function initializeFeaturedCollectionSliders() {
	const sliders = document.querySelectorAll('.collection-slider');
  
	sliders.forEach((slider) => {
	  if (!sliderInstances.has(slider)) {
		const instance = new FeaturedCollectionSlider(slider);
		sliderInstances.set(slider, instance);
		slider.classList.add('initialized');
	  }
	});
  }
  
  function destroyAllSliders() {
	sliderInstances.forEach((instance, slider) => {
	  instance.destroy();
	  sliderInstances.delete(slider);
	});
  }
  
  document.addEventListener('DOMContentLoaded', initializeFeaturedCollectionSliders);
  document.addEventListener('shopify:section:load', initializeFeaturedCollectionSliders);
  document.addEventListener('shopify:section:unload', (event) => {
	const slider = event.target.querySelector('.collection-slider');
	if (slider && sliderInstances.has(slider)) {
	  const instance = sliderInstances.get(slider);
	  instance.destroy();
	  sliderInstances.delete(slider);
	}
  });
  
  document.addEventListener('shopify:page:unload', destroyAllSliders);
  