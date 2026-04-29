(() => {
  function initPincodeValidators(root = document) {
    const validatorWrappers = root.querySelectorAll('.pincode-validator-wrapper');

    if (validatorWrappers.length === 0) return; // No validator block

    if (typeof window.isPincodeVerified === 'undefined') {
      window.isPincodeVerified = false;
    }

    validatorWrappers.forEach(wrapper => {
      if (wrapper.dataset.pincodeInit === 'true') return;
      wrapper.dataset.pincodeInit = 'true';

      const input = wrapper.querySelector('.pincode-validator__input');
      const btn = wrapper.querySelector('.pincode-validator__btn');
      const msg = wrapper.querySelector('.pincode-validator__message');
      const dataEl = wrapper.querySelector('.pincode-validator-data');

      let pincodeMap = {};
      if (dataEl) {
        try {
          const rawList = JSON.parse(dataEl.textContent);
          if (rawList) {
            rawList.split('\n').forEach(line => {
              const parts = line.split(':');
              if (parts.length >= 1) {
                const code = parts[0].trim();
                const date = parts.slice(1).join(':').trim() || "Delivery available in your area";
                if (code) pincodeMap[code] = date;
              }
            });
          }
        } catch (e) {
          console.error("Error parsing pincode list", e);
        }
      }

      const csvUrl = wrapper.getAttribute('data-csv-url');
      if (csvUrl) {
        fetch(csvUrl)
          .then(response => response.text())
          .then(csvText => {
            const lines = csvText.split('\n');
            // Start from row 1 to skip header if it exists (usually "Pincode,Delivery Date")
            const startIdx = (lines[0].toLowerCase().includes('pincode')) ? 1 : 0;

            for (let i = startIdx; i < lines.length; i++) {
              const line = lines[i].trim();
              if (!line) continue;

              // Handle simple CSV splitting by comma
              // This regex handles basic CSV quoting nicely: /,(?=(?:(?:[^"]*"){2})*[^"]*$)/
              const parts = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
              if (parts.length >= 1) {
                // Remove quotes
                const code = parts[0].replace(/"/g, '').trim();
                const date = (parts[1] ? parts[1].replace(/"/g, '').trim() : null) || "Delivery available in your area";
                if (code) {
                  pincodeMap[code] = date; // CSV overwrites or adds to map
                }
              }
            }
          })
          .catch(err => console.error("Error loading CSV pincodes:", err));
      }

      btn.addEventListener('click', () => {
        const val = input.value.trim();
        msg.classList.remove('hidden', 'success', 'error');

        if (!val) {
          msg.textContent = "Please enter a pincode.";
          msg.classList.add('error');
          window.isPincodeVerified = false;
          updateInterceptionOverlay();
          return;
        }

        if (!/^\d{6}$/.test(val)) {
          if (/[a-zA-Z]/.test(val)) {
            msg.textContent = "We don't deliver outside India.";
            updateDeliveryBlock('invalid', '', "We don't deliver outside India.");
          } else {
            msg.textContent = "Invalid pincode.";
            updateDeliveryBlock('invalid', '', "Invalid pincode.");
          }
          msg.classList.add('error');
          window.isPincodeVerified = false;
          updateInterceptionOverlay();
          return;
        }

        if (pincodeMap.hasOwnProperty(val)) {
          msg.innerHTML = `Awesome! Delivery is available at your location.<br>Expected in: <strong>${pincodeMap[val]}</strong>`;
          msg.classList.add('success');
          window.isPincodeVerified = true;

          let dateStr = pincodeMap[val];
          let status = 'standard';
          const digitsMatch = dateStr.match(/\d+/g);
          if (digitsMatch) {
            const maxDigit = Math.max(...digitsMatch.map(Number));
            if (maxDigit <= 3) status = 'express';
          } else if (dateStr.toLowerCase().includes('express')) {
            status = 'express';
          }
          updateDeliveryBlock(status, dateStr);
        } else {
          // Find error message setting, but we'll use a default if not wired up to JS specifically
          msg.textContent = "Delivery isn’t available at this pincode right now. We’ll be there soon!";
          msg.classList.add('error');
          window.isPincodeVerified = false;
          updateDeliveryBlock('invalid');
        }

        updateInterceptionOverlay();
      });
    });

    bindToast();
    updateInterceptionOverlay();
    bindInterceptionOverlays(root);
  }

  function updateDeliveryBlock(status, dateStr = '', overrideMessage = null) {
    const headings = document.querySelectorAll('.delivery-pickup-heading');
    const descriptions = document.querySelectorAll('.delivery-pickup-description');
    const singleTexts = document.querySelectorAll('.delivery-text');

    if (status === 'express' || status === 'standard') {
      headings.forEach(el => { el.innerHTML = '<strong>Delivery available</strong>'; });
      descriptions.forEach(el => { el.innerHTML = `Awesome! Delivery is available at your location.<br>Expected in: <strong>${dateStr}</strong>`; });
      singleTexts.forEach(el => { el.innerHTML = `Awesome! Delivery is available at your location.<br><strong>Expected in: ${dateStr}</strong>`; });
    } else if (status === 'invalid') {
      const errMsg = overrideMessage || `Delivery isn’t available at this pincode right now. We’ll be there soon!`;
      headings.forEach(el => { el.innerHTML = '<strong>Delivery unavailable</strong>'; });
      descriptions.forEach(el => { el.innerHTML = errMsg; });
      singleTexts.forEach(el => { el.innerHTML = `<strong>${errMsg}</strong>`; });
    }
  }

  function bindToast() {
    const toast = document.getElementById('pincode-toast');
    if (!toast || toast.dataset.pincodeInit === 'true') return;

    const closeBtn = toast.querySelector('.pincode-toast__close');
    closeBtn.addEventListener('click', () => {
      toast.classList.add('hidden');
    });

    toast.dataset.pincodeInit = 'true';
  }

  function showToast() {
    const toast = document.getElementById('pincode-toast');
    if (!toast) return;

    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 5000);
  }

  function updateInterceptionOverlay() {
    const overlays = document.querySelectorAll('.pincode-interception-overlay');
    overlays.forEach(overlay => {
      if (window.isPincodeVerified) {
        overlay.style.display = 'none';
      } else {
        overlay.style.display = 'block';
      }
    });
  }

  function bindInterceptionOverlays(root) {
    const overlays = root.querySelectorAll('.pincode-interception-overlay');
    overlays.forEach(overlay => {
      if (overlay.dataset.pincodeInit === 'true') return;
      overlay.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        showToast();
      });
      overlay.dataset.pincodeInit = 'true';
    });
  }

  window.initPincodeValidators = initPincodeValidators;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initPincodeValidators(document));
  } else {
    initPincodeValidators(document);
  }
})();
