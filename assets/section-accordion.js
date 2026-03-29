(function () {
  const sectionAccordion = () => {
    const faqItems = document.querySelectorAll('.accordion-wrapp-images .faq-item');
    const imageItems = document.querySelectorAll('.accordion-wrapp-images .image-item');

    if (faqItems.length === imageItems.length) {
      faqItems.forEach((faqItem, index) => {
        faqItem.addEventListener('click', () => {
          toggleAccordion(faqItem, index);
        });

        faqItem.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleAccordion(faqItem, index);
          }
        });
      });
    }
  };

  const toggleAccordion = (clickedFaqItem, index) => {
    const faqItems = document.querySelectorAll('.accordion-wrapp-images .faq-item');
    const imageItems = document.querySelectorAll('.accordion-wrapp-images .image-item');

    if (faqItems.length === imageItems.length) {
      faqItems.forEach((faqItem, i) => {
        const isClickedItem = i === index;
        const imageItem = imageItems[i];

        if (isClickedItem) {
          faqItem.classList.add('active');
          imageItem.classList.add('active');
        } else {
          faqItem.classList.remove('active');
          imageItem.classList.remove('active');
        }
      });
    }
  };

  document.addEventListener('DOMContentLoaded', sectionAccordion);
  document.addEventListener('shopify:section:load', sectionAccordion);
})();
