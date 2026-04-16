document.addEventListener('DOMContentLoaded', () => {
  const validatorWrappers = document.querySelectorAll('.pincode-validator-wrapper');
  
  if (validatorWrappers.length === 0) return; // No validator block
  
  window.isPincodeVerified = false;

  validatorWrappers.forEach(wrapper => {
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

      if (pincodeMap.hasOwnProperty(val)) {
        msg.textContent = pincodeMap[val];
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
        msg.textContent = "Sorry, delivery is not available in your area.";
        msg.classList.add('error');
        window.isPincodeVerified = false;
        updateDeliveryBlock('invalid');
      }
      
      updateInterceptionOverlay();
    });
  });

  function updateDeliveryBlock(status, dateStr = '') {
    const headings = document.querySelectorAll('.delivery-pickup-heading');
    const descriptions = document.querySelectorAll('.delivery-pickup-description');
    const singleTexts = document.querySelectorAll('.delivery-text');
    
    if (status === 'express') {
      headings.forEach(el => { el.innerHTML = '<strong>Express delivery available</strong>'; });
      descriptions.forEach(el => { el.innerHTML = `<span>Expected delivery date: ${dateStr}</span>`; });
      singleTexts.forEach(el => { el.innerHTML = `<strong>Express delivery expected:</strong> ${dateStr}`; });
    } else if (status === 'standard') {
      headings.forEach(el => { el.innerHTML = '<strong>Delivery available</strong>'; });
      descriptions.forEach(el => { el.innerHTML = `<span>Standard delivery days: ${dateStr}</span>`; });
      singleTexts.forEach(el => { el.innerHTML = `<strong>Standard delivery:</strong> ${dateStr}`; });
    } else if (status === 'invalid') {
      headings.forEach(el => { el.innerHTML = '<strong>Delivery unavailable</strong>'; });
      descriptions.forEach(el => { el.innerHTML = `<span>We do not deliver to this pincode.</span>`; });
      singleTexts.forEach(el => { el.innerHTML = `<strong>Delivery unavailable for this pincode.</strong>`; });
    }
  }

  const toast = document.getElementById('pincode-toast');
  if (toast) {
    const closeBtn = toast.querySelector('.pincode-toast__close');
    closeBtn.addEventListener('click', () => {
      toast.classList.add('hidden');
    });
  }

  function showToast() {
    if (toast) {
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 5000);
    }
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
  
  // Initialize overlay display
  updateInterceptionOverlay();

  // Attach click listener to overlays
  document.querySelectorAll('.pincode-interception-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      showToast();
    });
  });
});
