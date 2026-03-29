function collectionWithTabs() {
  const tabsWidth = window.innerWidth;
  const cwts = document.querySelectorAll('.collections-with-tabs');

  cwts.forEach(cwt => {
    if (!cwt) return;

    const cwtNavigationItems = cwt.querySelectorAll('.tabs-navigation-item');
    const cwtNavigationSelect = cwt.querySelector('.tabs-navigation-select');
    const cwtList = cwt.querySelectorAll('.product-grid');

    const activateTab = (item) => {
      const tagid = item.dataset.tab || item.value;
      cwtNavigationItems.forEach(element => element.classList.remove('active'));
      cwtList.forEach(element => element.classList.remove('active'));
      item.classList.add('active');

      const tabElement = cwt.querySelector(`[data-tab-id="${tagid}"]`);
      if (tabElement) {
        tabElement.classList.add('active');
      }
    };

    if (tabsWidth >= 990) {
      cwtNavigationItems.forEach(item => {
        item.addEventListener('click', () => activateTab(item));
        item.addEventListener('keyup', () => activateTab(item));
      });
    } else {
      cwtNavigationSelect.addEventListener('change', () => activateTab(cwtNavigationSelect));
    }
  });
}

document.addEventListener('DOMContentLoaded', collectionWithTabs);
document.addEventListener('shopify:section:load', collectionWithTabs);
window.addEventListener('resize', collectionWithTabs);