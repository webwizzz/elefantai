(function () {
  const initCollapsibleDescription = (root = document) => {
    const containers = root.querySelectorAll('.collabsible_description');

    containers.forEach((container) => {
      const text = container.querySelector('.collapsible_text');
      const btn = container.querySelector('.collapsible_description_btn');

      if (!text || !btn || btn.dataset.collapsibleBound === 'true') return;

      btn.dataset.collapsibleBound = 'true';

      btn.addEventListener('click', () => {
        text.classList.toggle('expanded');
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initCollapsibleDescription();
  });

  document.addEventListener('shopify:section:load', (event) => {
    initCollapsibleDescription(event.target);
  });
})();