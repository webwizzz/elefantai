document.addEventListener("DOMContentLoaded", function() {
	function initializeSlider() {
		const horizontalSection = document.querySelector('.horizontal-section');

		if (!horizontalSection) return;
		const stickyWrapper = horizontalSection.querySelector('.sticky-wrapper');
		const elementWrapper = horizontalSection.querySelector('.element-wrapper');
		const windowWidth = window.innerWidth;

		if (windowWidth >= 1200 && elementWrapper && stickyWrapper) {
			const horLength = stickyWrapper.scrollHeight + elementWrapper.scrollWidth - windowWidth;
			const distFromTop = horizontalSection.getBoundingClientRect().top + window.scrollY;
			let scrollDistance = horLength - stickyWrapper.scrollHeight;

			const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
			if (isChrome) {
				scrollDistance += 17;
			}

			const windowHeight = window.innerHeight;
			const stickyWrapperHeight = stickyWrapper.scrollHeight;

			const centerStickyWrapper = () => {
				const availableHeight = Math.max(windowHeight - stickyWrapperHeight, 0);
				const topOffset = Math.max(availableHeight / 2, 0);
				stickyWrapper.style.top = `${topOffset}px`;
			};

			centerStickyWrapper();

			horizontalSection.style.height = `${horLength}px`;

			const onScroll = () => {
				if (window.innerWidth >= 1200) {
					const scrollTop = window.scrollY;
					const scrollPosition = Math.max(0, Math.min(scrollTop - distFromTop, scrollDistance));
					elementWrapper.style.transform = `translateX(-${scrollPosition}px)`;
				}
			};

			const optimizedScroll = () => {
				requestAnimationFrame(onScroll);
			};

			window.addEventListener('scroll', optimizedScroll);
			optimizedScroll();
		}
	}

	setTimeout(initializeSlider, 100);

	if (window.Shopify && Shopify.designMode) {
		const observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
					mutation.addedNodes.forEach(addedNode => {
						if (addedNode.nodeType === 1 && addedNode.classList && (addedNode.classList.contains('horizontal-section') || addedNode.querySelector('.horizontal-section'))) {
							setTimeout(initializeSlider, 500);
						}
					});
				}
			});
		});

		const config = { 
			childList: true, 
			subtree: true 
		};
		observer.observe(document.body, config);
	}
});
