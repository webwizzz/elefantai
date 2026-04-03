document.addEventListener('DOMContentLoaded', function () {
  var tabGroups = document.querySelectorAll('[data-product-meta-tabs]');

  tabGroups.forEach(function (group) {
    var tabs = group.querySelectorAll('.product-meta-tabs__tab');
    var panels = group.querySelectorAll('.product-meta-tabs__panel');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-target');

        tabs.forEach(function (button) {
          button.classList.remove('is-active');
          button.setAttribute('aria-selected', 'false');
        });

        panels.forEach(function (panel) {
          panel.classList.remove('is-active');
        });

        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        var activePanel = group.querySelector(target);
        if (activePanel) {
          activePanel.classList.add('is-active');
        }
      });
    });
  });
});
