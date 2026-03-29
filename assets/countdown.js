(function () {
	const initTimer = () => {
	  const currentTime = new Date().getTime();
	  const countDownTimer = document.querySelectorAll(".countdown-bar-js");
  
	  countDownTimer.forEach((timer) => {
		const endDateStr = timer.dataset.date;
		const completedCountdown = timer.dataset.complited;
		const endTime = new Date(endDateStr).getTime();
		const timeLeft = endTime - currentTime;
  
		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
		const formattedDays = String(days).padStart(2, "0");
		const formattedHours = String(hours).padStart(2, "0");
		const formattedMinutes = String(minutes).padStart(2, "0");
		const formattedSeconds = String(seconds).padStart(2, "0");
  
		if (timeLeft < 0 && completedCountdown === "show_zeroes") {
		  clearInterval(initTimer);
  
		  timer.querySelector(".countdown-bar__days .countdown-bar__number").textContent = '00';
		  timer.querySelector(".countdown-bar__hours .countdown-bar__number").textContent = '00';
		  timer.querySelector(".countdown-bar__min .countdown-bar__number").textContent = '00';
		  timer.querySelector(".countdown-bar__sec .countdown-bar__number").textContent = '00';
  
		} else if (timeLeft < 0 && completedCountdown === "hide_coundown") {
		  clearInterval(initTimer);
  
		  if (timer) {
			timer.remove();
		  }
  
		} else if (timeLeft < 0 && completedCountdown === "disable_buttons") {
		  clearInterval(initTimer);
  
		  timer.querySelector(".countdown-bar__days .countdown-bar__number").textContent = '00';
		  timer.querySelector(".countdown-bar__hours .countdown-bar__number").textContent = '00';
		  timer.querySelector(".countdown-bar__min .countdown-bar__number").textContent = '00';
		  timer.querySelector(".countdown-bar__sec .countdown-bar__number").textContent = '00';
  
		  const buyButtonsWrapp = timer.closest('.product');
		  if (buyButtonsWrapp) {
			const buyButtons = buyButtonsWrapp.querySelectorAll('.product-form__buttons button');
			buyButtons.forEach((button) => {
			  button.setAttribute('disabled', true);
			});
		  }
  
		} else {
		  timer.querySelector(".countdown-bar__days .countdown-bar__number").textContent = formattedDays;
		  timer.querySelector(".countdown-bar__hours .countdown-bar__number").textContent = formattedHours;
		  timer.querySelector(".countdown-bar__min .countdown-bar__number").textContent = formattedMinutes;
		  timer.querySelector(".countdown-bar__sec .countdown-bar__number").textContent = formattedSeconds;
		}
	  });
	};
  
	document.addEventListener("shopify:section:load", function () {
	  if (!document.hidden) {
		setInterval(initTimer, 1000);
	  }
	});
  
	if (!document.hidden) {
	  setInterval(initTimer, 1000);
	}
  })();