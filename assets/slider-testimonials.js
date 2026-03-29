(function () {
  function testimonialsSlider() {
    const sliders = document.querySelectorAll(".testimonials-slider");
    if (!sliders.length) return;

    sliders.forEach(slider => {
      if (slider.dataset.inited === 'true') return;

      const spaceBetween = document.querySelectorAll('.kawai-mood').length ? 50 : 30;
      const id = slider.dataset.sectionId,
        sliderInit = slider.dataset.sliderInit,
        centeredSlides = slider.dataset.centeredSlides === 'true',
        columnsDesktop = slider.dataset.columnsDesktop ? slider.dataset.columnsDesktop : 2;

      if (sliderInit != 'true') return;

      const swiperfeaturedBlogSlider = new Swiper(`.testimonials-slider-${id}`, {
        loop: true,
        centeredSlides,
        slidesPerView: 1,
        spaceBetween: 30,
        slideToClickedSlide: true,

        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        threshold: 20,
        touchRatio: 1,
        touchAngle: 45,
        shortSwipes: true,
        followFinger: true,

        navigation: {
          nextEl: `#shopify-section-${id} .slider-arrow-next`,
          prevEl: `#shopify-section-${id} .slider-arrow-prev`,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
            threshold: 0,
            longSwipesRatio: 0.1,
            longSwipesMs: 220,
            touchRatio: 1.6,
            touchAngle: 30,
            shortSwipes: true,
            followFinger: true
          },
          750: {
            slidesPerView: 2,
            threshold: 6,
            longSwipesRatio: 0.14,
            longSwipesMs: 220,
            touchRatio: 1.3,
            touchAngle: 30,
            shortSwipes: true,
            followFinger: true
          },
          990: {
            spaceBetween,
            slidesPerView: columnsDesktop,
            threshold: 20,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            touchRatio: 1,
            touchAngle: 45
          }
        }
      });

      ensureEqualSlideHeights(`.testimonials-slider-${id} .swiper-slide`);
      slider.dataset.inited = 'true';

      const testimonialsWrapper = document.querySelector(`#shopify-section-${id} .testimonials`);
      testimonialsWrapper?.addEventListener('click', (event) => {
        if (event.target.classList.contains('slider-arrow-next') || event.target.closest('.slider-arrow-next')) {
          swiperfeaturedBlogSlider.slideNext();
          updateSideBlockItem();
        } else if (event.target.classList.contains('slider-arrow-prev') || event.target.closest('.slider-arrow-prev')) {
          swiperfeaturedBlogSlider.slidePrev();
          updateSideBlockItem();
        }
      });
    });
  }

  function ensureEqualSlideHeights(slideSelector) {
    const slides = document.querySelectorAll(slideSelector);
    if (!slides.length) return;
    let maxHeight = 0;
    slides.forEach(slide => {
      slide.style.height = "auto";
      const h = slide.offsetHeight;
      if (h > maxHeight) maxHeight = h;
    });
    slides.forEach(slide => { slide.style.height = `${maxHeight}px`; });
  }

  function updateSideBlockItem() {
    const activeSlide = document.querySelector('.testimonials__slider-wrapper .swiper-slide-active');
    if (!activeSlide) return;
    const activeCategory = activeSlide.getAttribute('data-testimonial-category');
    const sideBlockItems = document.querySelectorAll('.side-block-item');
    sideBlockItems.forEach(item => {
      const sideCategory = item.getAttribute('data-side-category');
      if (activeCategory == sideCategory) item.classList.add('side-active');
      else item.classList.remove('side-active');
    });
  }

  document.addEventListener('DOMContentLoaded', testimonialsSlider);
  document.addEventListener('shopify:section:load', testimonialsSlider);
  window.addEventListener('resize', testimonialsSlider);
})();
