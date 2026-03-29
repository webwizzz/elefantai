(function () {

  function promoPopup() {
    const modalWindowSubscribe = document.querySelector(".promo-popup-subscribe");
    const promoSubmitButton = document.querySelector(".promo-popup-form-submit");
    const buttonCloseSubscribe = document.querySelector(".promo-popup-close-subscribe");

    const modalWindowPromo = document.querySelector(".promo-popup-promo");
    const buttonClosePromo = document.querySelector(".promo-popup-close-promo");

    const promoFormSubmitedShowTimes = document.querySelector(".promo-popup-wrap").dataset.popupTimes;
    const promoFormSubmitedShowTimeout = document.querySelector(".promo-popup-wrap").dataset.popupTimeout;

    let promoFormSubmitedTimes = parseInt(localStorage.getItem('counter') || 0);
    let promoFormSubmited = localStorage.getItem('formSubmited') || false;
    let promoSubmitButtonClicked = localStorage.getItem('promoSubmitButtonPosition') || false;

    const currentURL = window.location.href;
    const containsChallenge = currentURL.includes('challenge');
    const containsPosted = currentURL.includes('customer_posted=true');

    if (modalWindowPromo.classList.contains('promo-popup-success') && promoFormSubmited == "false" && promoSubmitButtonClicked == "true") {
      modalWindowPromo.style.visibility = 'visible';
      modalWindowPromo.classList.add('active');
      document.querySelector("body").classList.add('overflow-hidden');

      localStorage.setItem('formSubmited', true);

    } else if (parseInt(promoFormSubmitedTimes) < parseInt(promoFormSubmitedShowTimes) && containsChallenge == false && containsPosted == false) {
      setTimeout(() => {
        modalWindowSubscribe.style.visibility = 'visible';
        modalWindowSubscribe.classList.add('active');
        document.querySelector("body").classList.add('overflow-hidden');
        localStorage.setItem('formSubmited', false);
        localStorage.setItem('counter', ++promoFormSubmitedTimes);

        promoSubmitButton.addEventListener('click', function (event) {
          localStorage.setItem('promoSubmitButtonPosition', true);
        });

      }, promoFormSubmitedShowTimeout * 1000);

    }

    buttonCloseSubscribe.addEventListener('click', function (event) {
      modalWindowSubscribe.style.visibility = 'hidden';
      modalWindowSubscribe.classList.remove('active');
      document.querySelector("body").classList.remove('overflow-hidden');
    });

    buttonClosePromo.addEventListener('click', function (event) {
      modalWindowPromo.style.visibility = 'hidden';
      modalWindowPromo.classList.remove('active');
      document.querySelector("body").classList.remove('overflow-hidden');
    });

    const modalWindowSubscribeClose = modalWindowSubscribe.querySelector(".overlay");
    if (modalWindowSubscribeClose) {
      modalWindowSubscribeClose.addEventListener('click', function (event) {
        if (modalWindowSubscribe.classList.contains('active')) {
          modalWindowSubscribe.style.visibility = 'hidden';
          modalWindowSubscribe.classList.remove('active');
          document.querySelector("body").classList.remove('overflow-hidden');
        }
      });
    }

    const modalWindowPromoClose = modalWindowPromo.querySelector(".overlay");
    if (modalWindowPromoClose) {
      modalWindowPromoClose.addEventListener('click', function (event) {
        if (modalWindowPromo.classList.contains('active')) {
          modalWindowPromo.style.visibility = 'hidden';
          modalWindowPromo.classList.remove('active');
          document.querySelector("body").classList.remove('overflow-hidden');
        }
      });
    }

    const copyCode = document.querySelector('.promo-popup-promo button');
    if (copyCode) {
      copyCode.addEventListener('click', function (event) {
        let copyText = document.getElementById("copyPromoCode");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        copyText.classList.add('copied');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', promoPopup);
  document.addEventListener('shopify:section:load', promoPopup);

})();