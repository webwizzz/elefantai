if (!customElements.get('quick-add-modal')) {
  customElements.define(
    'quick-add-modal',
    class QuickAddModal extends ModalDialog {
      constructor() {
        super();
        this.modalContent = this.querySelector('[id^="QuickAddInfo-"]');
        this.onModalLinkClick = this.onModalLinkClick.bind(this);
        this.hasModalLinkListener = false;
      }

      hide(preventFocus = false) {
        const cartNotification = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        if (cartNotification) cartNotification.setActiveElement(this.openedBy);
        this.modalContent.innerHTML = '';

        if (preventFocus) this.openedBy = null;
        super.hide();
      }

      show(opener) {

        opener.setAttribute('aria-disabled', true);
        opener.classList.add('loading');
        opener.querySelector('.loading-overlay__spinner').classList.remove('hidden');

        fetch(opener.getAttribute('data-product-url'))
          .then((response) => response.text())
          .then((responseText) => {
            const responseHTML = new DOMParser().parseFromString(responseText, 'text/html');
            this.productElement = responseHTML.querySelector('div[id^="MainProduct-"]');
            this.preventDuplicatedIDs();
            this.removeDOMElements();
            this.setInnerHTML(this.modalContent, this.productElement.innerHTML);
            this.bindModalLinkScroll();

            if (window.Shopify && Shopify.PaymentButton) {
              Shopify.PaymentButton.init();
            }

            if (window.ProductModel) window.ProductModel.loadShopifyXR();

            this.removeGalleryListSemantic();
            this.updateImageSizes();
            this.preventVariantURLSwitching();
            super.show(opener);
          })
          .finally(() => {
            opener.removeAttribute('aria-disabled');
            opener.classList.remove('loading');
            opener.querySelector('.loading-overlay__spinner').classList.add('hidden');
          });
      }

      bindModalLinkScroll() {
        if (this.hasModalLinkListener || !this.modalContent) return;
        this.modalContent.addEventListener('click', this.onModalLinkClick);
        this.hasModalLinkListener = true;
      }

      onModalLinkClick(event) {
        if (!this.modalContent) return;
        const link = event.target.closest('a[href]');
        if (!link || !this.modalContent.contains(link)) return;

        const hash = link.hash;
        if (!hash || hash === '#') return;

        const target = this.modalContent.querySelector(hash);
        if (!target) return;

        event.preventDefault();
        this.revealQuickAddHidden(target);
        this.scrollToTarget(target);
      }

      revealQuickAddHidden(target) {
        let current = target;
        while (current && current !== this.modalContent) {
          if (current.classList && current.classList.contains('quick-add-hidden')) {
            current.classList.remove('quick-add-hidden');
          }
          current = current.parentElement;
        }
      }

      scrollToTarget(target) {
        if (!this.modalContent) return;
        const containerRect = this.modalContent.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const offsetTop = targetRect.top - containerRect.top + this.modalContent.scrollTop;
        this.modalContent.scrollTo({
          top: Math.max(offsetTop - 16, 0),
          behavior: 'smooth',
        });
      }

      setInnerHTML(element, html) {
        element.innerHTML = html;

        // Reinjects the script tags to allow execution. By default, scripts are disabled when using element.innerHTML.
        element.querySelectorAll('script').forEach((oldScriptTag) => {
          const newScriptTag = document.createElement('script');
          Array.from(oldScriptTag.attributes).forEach((attribute) => {
            newScriptTag.setAttribute(attribute.name, attribute.value);
          });
          newScriptTag.appendChild(document.createTextNode(oldScriptTag.innerHTML));
          oldScriptTag.parentNode.replaceChild(newScriptTag, oldScriptTag);
        });
      }

      preventVariantURLSwitching() {
        const variantPicker = this.modalContent.querySelector('variant-radios,variant-selects');
        if (!variantPicker) return;

        variantPicker.setAttribute('data-update-url', 'false');
      }

      removeDOMElements() {
        const pickupAvailability = this.productElement.querySelector('pickup-availability');
        if (pickupAvailability) pickupAvailability.remove();

        const productModal = this.productElement.querySelector('product-modal');
        if (productModal) productModal.remove();

        const modalDialog = this.productElement.querySelectorAll('modal-dialog');
        if (modalDialog) modalDialog.forEach((modal) => modal.remove());
      }

      preventDuplicatedIDs() {
        const sectionId = this.productElement.dataset.section;
        this.productElement.innerHTML = this.productElement.innerHTML.replaceAll(sectionId, `quickadd-${sectionId}`);
        this.productElement.querySelectorAll('variant-selects, variant-radios, product-info').forEach((element) => {
          element.dataset.originalSection = sectionId;
        });
      }

      removeGalleryListSemantic() {
        const galleryList = this.modalContent.querySelector('[id^="Slider-Gallery"]');
        if (!galleryList) return;

        galleryList.setAttribute('role', 'presentation');
        galleryList.querySelectorAll('[id^="Slide-"]').forEach((li) => li.setAttribute('role', 'presentation'));
      }

      updateImageSizes() {
        const product = this.modalContent.querySelector('.product');
        const desktopColumns = product.classList.contains('product--columns');
        if (!desktopColumns) return;

        const mediaImages = product.querySelectorAll('.product__media img');
        if (!mediaImages.length) return;

        let mediaImageSizes =
          '(min-width: 1000px) 715px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)';

        if (product.classList.contains('product--medium')) {
          mediaImageSizes = mediaImageSizes.replace('715px', '605px');
        } else if (product.classList.contains('product--small')) {
          mediaImageSizes = mediaImageSizes.replace('715px', '495px');
        }

        mediaImages.forEach((img) => img.setAttribute('sizes', mediaImageSizes));
      }
    }
  );
}
