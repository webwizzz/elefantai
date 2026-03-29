(function () {
	const addNotification = () => {
		const notification = document.querySelector('.notification');
		const timeout = notification.dataset.timeout * 1000;
		let times = notification.dataset.times;
		let notificationShowedTimes = parseInt(localStorage.getItem('notificationCounter') || 0);

		const btn = document.querySelector('.notification__btn');

		if (btn) {
			btn.addEventListener('click', () => {
				btn.closest('.notification').classList.add('close');
			});
		}

		if (notification && notificationShowedTimes < times) {
			setTimeout(() => {
				notification.classList.add('open');
			}, timeout);
			++notificationShowedTimes;
			localStorage.setItem('notificationCounter', notificationShowedTimes);
		}

		// Subscribe popup
		const addSubscribePopup = document.querySelector('.subscribe-popup-wrap');
		if (addSubscribePopup) {
			const elementToclick = notification.querySelector('.notification__wrapper');
			const subscribePopup = addSubscribePopup.querySelector('.promo-popup-subscribe');
			const emailInput = subscribePopup.querySelector('input[type="email"]');
			const closePopup = addSubscribePopup.querySelectorAll(".promo-popup-close, .overlay");

			elementToclick.style.cursor = 'pointer';
			elementToclick.tabIndex = 0;
			elementToclick.addEventListener('click', () => {
				subscribePopup.classList.add('active');
				subscribePopup.style.visibility = 'visible';
				emailInput.focus();
			});
			elementToclick.addEventListener('keydown', (event) => {
				if (event.key === "Enter" || event.key === " ") {
					subscribePopup.classList.add('active');
					subscribePopup.style.visibility = 'visible';
					emailInput.focus();
					event.preventDefault();
				}
			});

			closePopup.forEach((element) => {
				element.addEventListener('click', () => {
					subscribePopup.classList.remove('active');
					subscribePopup.style.visibility = 'hidden';
				});
				element.addEventListener('keydown', (event) => {
					if (event.key === "Enter" || event.key === " ") {
						subscribePopup.classList.remove('active');
						subscribePopup.style.visibility = 'hidden';
						event.preventDefault();
					}
				});
			});

			document.addEventListener('keydown', (event) => {
				if (event.key === "Escape" && subscribePopup.classList.contains('active')) {
					subscribePopup.classList.remove('active');
					subscribePopup.style.visibility = 'hidden';
				}
			});
		}
	}
	document.addEventListener('DOMContentLoaded', addNotification);
	document.addEventListener('shopify:section:load', addNotification);
})();
