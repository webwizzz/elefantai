document.addEventListener('DOMContentLoaded', function () {
  var tabGroups = document.querySelectorAll('[data-product-meta-tabs]');
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  tabGroups.forEach(function (group) {
    initDesktopTabs(group, prefersReducedMotion);
    initMobileAccordions(group, prefersReducedMotion);
  });

  function initDesktopTabs(group, reduceMotion) {
    var tabs = Array.prototype.slice.call(group.querySelectorAll('.product-meta-tabs__tab'));
    var panels = Array.prototype.slice.call(group.querySelectorAll('.product-meta-tabs__panel'));
    var panelStage = group.querySelector('.product-meta-tabs__panel-stage');

    if (!tabs.length || !panels.length) return;

    function getActivePanel() {
      return group.querySelector('.product-meta-tabs__panel.is-active');
    }

    function setStageHeight(nextPanel, immediate) {
      if (!panelStage || !nextPanel) return;

      if (immediate || reduceMotion) {
        panelStage.style.height = 'auto';
        panelStage.style.overflow = 'visible';
        return;
      }

      var startHeight = panelStage.offsetHeight;
      var endHeight = nextPanel.scrollHeight;

      panelStage.style.height = startHeight + 'px';
      panelStage.style.overflow = 'hidden';

      window.requestAnimationFrame(function () {
        panelStage.style.height = endHeight + 'px';
      });

      var onTransitionEnd = function (event) {
        if (event.propertyName !== 'height') return;
        panelStage.style.height = 'auto';
        panelStage.style.overflow = 'visible';
        panelStage.removeEventListener('transitionend', onTransitionEnd);
      };

      panelStage.addEventListener('transitionend', onTransitionEnd);
    }

    setStageHeight(getActivePanel() || panels[0], true);

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        if (tab.classList.contains('is-active')) return;

        var target = tab.getAttribute('data-target');
        var activePanel = group.querySelector(target);
        if (!activePanel) return;

        tabs.forEach(function (button) {
          button.classList.remove('is-active');
          button.setAttribute('aria-selected', 'false');
        });

        panels.forEach(function (panel) {
          panel.classList.remove('is-active');
        });

        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        activePanel.classList.add('is-active');
        setStageHeight(activePanel, false);
      });
    });

    window.addEventListener('resize', function () {
      setStageHeight(getActivePanel(), true);
    });
  }

  function initMobileAccordions(group, reduceMotion) {
    var detailsItems = Array.prototype.slice.call(group.querySelectorAll('.product-meta-tabs__mobile-item'));
    if (!detailsItems.length) return;

    function setMobileBodyHeight(detailsEl) {
      var body = detailsEl.querySelector('.product-meta-tabs__mobile-body');
      if (!body) return;

      if (detailsEl.open) {
        detailsEl.style.setProperty('--meta-mobile-body-max-height', body.scrollHeight + 'px');
      } else {
        detailsEl.style.setProperty('--meta-mobile-body-max-height', '0px');
      }
    }

    detailsItems.forEach(function (detailsEl) {
      setMobileBodyHeight(detailsEl);

      detailsEl.addEventListener('toggle', function () {
        if (detailsEl.open) {
          detailsItems.forEach(function (otherDetailsEl) {
            if (otherDetailsEl !== detailsEl && otherDetailsEl.open) {
              otherDetailsEl.open = false;
            }
          });
        }

        if (reduceMotion) {
          setMobileBodyHeight(detailsEl);
        } else {
          window.requestAnimationFrame(function () {
            detailsItems.forEach(setMobileBodyHeight);
          });
        }
      });
    });

    window.addEventListener('resize', function () {
      detailsItems.forEach(setMobileBodyHeight);
    });
  }
});
