class FacetFiltersForm extends HTMLElement {
  constructor() {
    super();
    this.onActiveFilterClick = this.onActiveFilterClick.bind(this);
		this.onResize = this.onResize.bind(this);

    this.debouncedOnSubmit = debounce((event) => {
      this.onSubmitHandler(event);
    }, 500);

    const facetForm = this.querySelector('form');
    facetForm.addEventListener('input', this.debouncedOnSubmit.bind(this));

    const facetWrapper = this.querySelector('#FacetsWrapperDesktop');
    if (facetWrapper) facetWrapper.addEventListener('keyup', onKeyUpEscape);

    this.initNavigation();
  }

  initNavigation() {
    this.productGrid = document.querySelector('#product-grid');
    this.navigationLayouts = document.querySelectorAll('grid-navigation.grid-navigation');
    this.navigationItem = document.querySelectorAll('.grid-navigation__item');
  
    if (!this.productGrid) return;
  
    const allowedClasses = ['grid', 'product-grid', 'grid-style-collage', 'load_list'];
    if (this.navigationLayouts.length) this.setupEventListeners(allowedClasses);
    this.restoreStateFromSessionStorage();
		window.addEventListener('resize', this.onResize);
  }

	clickActiveItem() {
    if (!this.navigationItem) return;
    const width = window.innerWidth;

    this.navigationItem.forEach(item => {
      if (item.classList.contains('active') && width < 950 && item.classList.contains('item-mobile') ) {
        item.click();
      } else if (item.classList.contains('active') && width >= 950 && item.classList.contains('item-desktop')) {
        item.click();
      }
    })
  }

  setupEventListeners(allowedClasses) {
    this.navigationLayouts.forEach(layout => {
      layout.removeEventListener('click', this.boundHandleNavigation);
      layout.removeEventListener('keydown', this.boundHandleKeyDown);
    });
  
    this.boundHandleNavigation = event => this.handleNavigation(event, allowedClasses);
    this.boundHandleKeyDown = event => this.handleKeyDown(event, allowedClasses);
  
    this.navigationLayouts.forEach(layout => {
      layout.addEventListener('click', this.boundHandleNavigation);
      layout.addEventListener('keydown', this.boundHandleKeyDown);
    });
  }
  
  handleNavigation(event, allowedClasses) {
    const item = event.target.closest('.grid-navigation__item');
    if (!item) return;
  
    this.updateActiveItem(item);
    this.handleGridChange(item.dataset.gridType, allowedClasses);
    this.saveStateToSessionStorage();
  }
  
  handleKeyDown(event, allowedClasses) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const item = event.target.closest('.grid-navigation__item');
      if (!item) return;
  
      this.updateActiveItem(item);
      this.handleGridChange(item.dataset.gridType, allowedClasses);
      this.saveStateToSessionStorage();
    }
  }
  
  updateActiveItem(item) {
		const isMobile = item.classList.contains('item-mobile');
    this.navigationItem.forEach(navItem => {
			if (isMobile && navItem.classList.contains('item-mobile')) {
				navItem.classList.remove('active')
			} else if (!isMobile && navItem.classList.contains('item-desktop')) {
				navItem.classList.remove('active')
			}
		});
    item.classList.add('active');
  }
  
  handleGridChange(gridType, allowedClasses) {
    const classesToRemove = Array.from(this.productGrid.classList).filter(cls => !allowedClasses.includes(cls));
    this.productGrid.classList.remove(...classesToRemove);
    this.productGrid.classList.add(...gridType.split(' '));
    localStorage.setItem('selectedGridType', gridType);
  }
  
  saveStateToSessionStorage() {
    const width = window.innerWidth;
    const isMobile = width < 950;
    
    const activeItem = Array.from(this.navigationItem).find(item => {
      return item.classList.contains('active') && 
             (isMobile ? item.classList.contains('item-mobile') : item.classList.contains('item-desktop'));
    });
    
    if (!activeItem) return;
    
    const activeIndex = Array.from(this.navigationItem).indexOf(activeItem);
    
    sessionStorage.setItem('productGridView', activeItem.dataset.gridType);
    sessionStorage.setItem('activeIndex', activeIndex);
    sessionStorage.setItem('isMobileView', isMobile);
  }
  
  restoreStateFromSessionStorage() {
    const isGridList = sessionStorage.getItem('productGridView');
    const activeIndex = parseInt(sessionStorage.getItem('activeIndex'), 10);
    const savedIsMobile = sessionStorage.getItem('isMobileView') === 'true';
    const currentWidth = window.innerWidth;
    const currentIsMobile = currentWidth < 950;
  
    if (isGridList) {
      this.handleGridChange(isGridList, ['grid', 'product-grid', 'grid-style-collage']);
    }
		
    if (!isNaN(activeIndex) && this.navigationItem[activeIndex]) {
      // Якщо розмір екрану змінився, знаходимо відповідний елемент для поточного розміру
      let targetItem = this.navigationItem[activeIndex];
      
      // Якщо збережений стан був для іншого типу пристрою, шукаємо відповідний елемент
      if (savedIsMobile !== currentIsMobile) {
        const savedGridType = targetItem.dataset.gridType;
        targetItem = Array.from(this.navigationItem).find(item => {
          return item.dataset.gridType === savedGridType && 
                 (currentIsMobile ? item.classList.contains('item-mobile') : item.classList.contains('item-desktop'));
        }) || targetItem;
      }
      
      const isActiveMobile = targetItem.classList.contains('item-mobile');
      
      // Очищуємо активні стани для відповідного типу пристрою
      this.navigationItem.forEach(item => {
        if(isActiveMobile && item.classList.contains('item-mobile')) {
          item.classList.remove('active')
        } else if (!isActiveMobile && item.classList.contains('item-desktop')) {
          item.classList.remove('active')
        }
      });
      
      targetItem.classList.add('active');
    }
  }
	
	onResize() {
		this.clickActiveItem();
		this.saveStateToSessionStorage();
	}

  connectedCallback() {
    this.clickActiveItem();
  }

	disconnectedCallback() {
		window.removeEventListener('resize', this.onResize);
	}

  initLoadMore() {

    const cardsOnPage = document.querySelector('.load_list') || document.querySelector('#product-grid');
    const wrapper     = document.querySelector('.load-more-wrapper');
    if (!cardsOnPage || !wrapper) return;

    const mode      = wrapper.dataset.mode;
    const btn       = wrapper.querySelector('.load-more_btn');
    const spinner   = wrapper.querySelector('.load-more_spinner');
    let   nextUrl   = cardsOnPage.dataset.nextUrl;
    let   isLoading = false;

    function loadMoreCards() {
      if (!nextUrl || isLoading) return;
      isLoading = true;
      if (btn) btn.style.display = 'none';
      spinner.style.display = 'inline-flex';

      fetch(nextUrl)
        .then(res => res.text())
        .then(htmlText => {
          const html      = new DOMParser().parseFromString(htmlText, 'text/html');
          const newList   = html.querySelector('.load_list') || html.querySelector('#product-grid');
          const newItems  = newList.querySelectorAll('.load_item');
          const newUrl    = newList.dataset.nextUrl;

          newItems.forEach(item => cardsOnPage.append(item));
          nextUrl = newUrl;

          spinner.style.display = 'none';
          if (mode === 'load' && nextUrl && btn) {
            btn.style.display = 'inline-flex';
          }
          isLoading = false;
        })
        .catch(() => {
          spinner.style.display = 'none';
          if (btn) btn.style.display = 'inline-flex';
          isLoading = false;
        });
    }

    if (mode === 'load' && btn) {
      btn.addEventListener('click', loadMoreCards);
    }
    else if (mode === 'infinite') {
      window.addEventListener('scroll', function () {
        const rect = cardsOnPage.getBoundingClientRect(); 
        if (rect.bottom <= window.innerHeight + 300 && !isLoading) {
          loadMoreCards();
        }
      });
    }
  }

  static setListeners() {
    const onHistoryChange = (event) => {
      const searchParams = event.state ? event.state.searchParams : FacetFiltersForm.searchParamsInitial;
      if (searchParams === FacetFiltersForm.searchParamsPrev) return;
      FacetFiltersForm.renderPage(searchParams, null, false);
    };
    window.addEventListener('popstate', onHistoryChange);
  }

  static toggleActiveFacets(disable = true) {
    document.querySelectorAll('.js-facet-remove').forEach((element) => {
      element.classList.toggle('disabled', disable);
    });
  }

  static renderPage(searchParams, event, updateURLHash = true) {
    FacetFiltersForm.searchParamsPrev = searchParams;
    const sections = FacetFiltersForm.getSections();
    const countContainer = document.getElementById('ProductCount');
    const countContainerDesktop = document.getElementById('ProductCountDesktop');

    document.getElementById('ProductGridContainer').querySelector('.collection').classList.add('loading');

    if (countContainer) {
      countContainer.classList.add('loading');
    }
    if (countContainerDesktop) {
      countContainerDesktop.classList.add('loading');
    }

    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = (element) => element.url === url;

      FacetFiltersForm.filterData.some(filterDataUrl)
        ? FacetFiltersForm.renderSectionFromCache(filterDataUrl, event)
        : FacetFiltersForm.renderSectionFromFetch(url, event);
    });

    if (updateURLHash) FacetFiltersForm.updateURLHash(searchParams);

  }

  static renderSectionFromFetch(url, event) {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = responseText;
        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];
        FacetFiltersForm.renderFilters(html, event);
        FacetFiltersForm.renderProductGridContainer(html);
        FacetFiltersForm.renderProductCount(html);
        if (typeof initializeScrollAnimationTrigger === 'function') initializeScrollAnimationTrigger(html.innerHTML);
      });

  }

  static renderSectionFromCache(filterDataUrl, event) {
    const html = FacetFiltersForm.filterData.find(filterDataUrl).html;
    FacetFiltersForm.renderFilters(html, event);
    FacetFiltersForm.renderProductGridContainer(html);
    FacetFiltersForm.renderProductCount(html);
    if (typeof initializeScrollAnimationTrigger === 'function') initializeScrollAnimationTrigger(html.innerHTML);
  }

  static renderProductGridContainer(html) {

    const container = document.getElementById('ProductGridContainer');
    container.innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductGridContainer').innerHTML;

    const customNaviagationParent = container.closest('.collection-grid, .template-search');
    if (customNaviagationParent) {
      const customNaviagation = customNaviagationParent.querySelector('facet-filters-form');
      customNaviagation.initNavigation();

      const customLoadMoreButton = container.querySelector('.load-more-wrapper');
      if (customLoadMoreButton) {
        customNaviagation.initLoadMore();
      }
    }
  }

  static renderProductCount(html) {
    const count = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductCount').innerHTML;
    const container = document.getElementById('ProductCount');
    const containerDesktop = document.getElementById('ProductCountDesktop');
    container.innerHTML = count;
    container.classList.remove('loading');
    if (containerDesktop) {
      containerDesktop.innerHTML = count;
      containerDesktop.classList.remove('loading');
    }
  }

  static renderFilters(html, event) {
    const parsedHTML = new DOMParser().parseFromString(html, 'text/html');

    const facetDetailsElementsFromFetch = parsedHTML.querySelectorAll(
      '#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter'
    ); 
    
    const facetDetailsElementsFromDom = document.querySelectorAll(
      '#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter'
    );

    // Remove facets that are no longer returned from the server
    Array.from(facetDetailsElementsFromDom).forEach((currentElement) => {
      if (!Array.from(facetDetailsElementsFromFetch).some(({ id }) => currentElement.id === id)) {
        currentElement.remove();
      }
    });

    const matchesId = (element) => {
      const jsFilter = event ? event.target.closest('.js-filter') : undefined;
      return jsFilter ? element.id === jsFilter.id : false;
    };

    const facetsToRender = Array.from(facetDetailsElementsFromFetch).filter((element) => !matchesId(element));
    const countsToRender = Array.from(facetDetailsElementsFromFetch).find(matchesId);

    facetsToRender.forEach((elementToRender, index) => {
      const currentElement = document.getElementById(elementToRender.id);
      // Element already rendered in the DOM so just update the innerHTML

      if (currentElement) {
        document.getElementById(elementToRender.id).innerHTML = elementToRender.innerHTML;
      } else {
        if (index > 0) {
          const { className: previousElementClassName, id: previousElementId } = facetsToRender[index - 1];
          // Same facet type (eg horizontal/vertical or drawer/mobile)
          if (elementToRender.className === previousElementClassName) {
            document.getElementById(previousElementId).after(elementToRender);
            return;
          }
        }

        if (elementToRender.parentElement) {
          document.querySelector(`#${elementToRender.parentElement.id} .js-filter`).before(elementToRender);
        }
      }
    });

    FacetFiltersForm.renderActiveFacets(parsedHTML);
    FacetFiltersForm.renderAdditionalElements(parsedHTML);

    if (countsToRender) {
      const closestJSFilterID = event.target.closest('.js-filter').id;

      if (closestJSFilterID) {
        FacetFiltersForm.renderCounts(countsToRender, event.target.closest('.js-filter'));
        FacetFiltersForm.renderMobileCounts(countsToRender, document.getElementById(closestJSFilterID));

        const newFacetDetailsElement = document.getElementById(closestJSFilterID);
        const newElementSelector = newFacetDetailsElement.classList.contains('mobile-facets__details')
          ? `.mobile-facets__close-button`
          : `.facets__summary`;
        const newElementToActivate = newFacetDetailsElement.querySelector(newElementSelector);
        if (newElementToActivate) newElementToActivate.focus();
      }
    }
  }

  static renderActiveFacets(html) {
    const activeFacetElementSelectors = ['.active-facets-mobile', '.active-facets-desktop'];

    activeFacetElementSelectors.forEach((selector) => {
      const activeFacetsElement = html.querySelector(selector);
      if (!activeFacetsElement) return;
      document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;
    });

    FacetFiltersForm.toggleActiveFacets(false);
  }

  static renderAdditionalElements(html) {
    const mobileElementSelectors = ['.mobile-facets__open', '.mobile-facets__count', '.sorting'];

    mobileElementSelectors.forEach((selector) => {
      if (!html.querySelector(selector)) return;
      document.querySelector(selector).innerHTML = html.querySelector(selector).innerHTML;
    });

    document.getElementById('FacetFiltersFormMobile').closest('menu-drawer').bindEvents();
  }

  static renderCounts(source, target) {
    const targetSummary = target.querySelector('.facets__summary');
    const sourceSummary = source.querySelector('.facets__summary');

    if (sourceSummary && targetSummary) {
      targetSummary.outerHTML = sourceSummary.outerHTML;
    }

    const targetHeaderElement = target.querySelector('.facets__header');
    const sourceHeaderElement = source.querySelector('.facets__header');

    if (sourceHeaderElement && targetHeaderElement) {
      targetHeaderElement.outerHTML = sourceHeaderElement.outerHTML;
    }

    const targetWrapElement = target.querySelector('.facets-wrap');
    const sourceWrapElement = source.querySelector('.facets-wrap');

    if (sourceWrapElement && targetWrapElement) {
      const isShowingMore = Boolean(target.querySelector('show-more-button .label-show-more.hidden'));
      if (isShowingMore) {
        sourceWrapElement
          .querySelectorAll('.facets__item.hidden')
          .forEach((hiddenItem) => hiddenItem.classList.replace('hidden', 'show-more-item'));
      }

      targetWrapElement.outerHTML = sourceWrapElement.outerHTML;
    }
  }

  static renderMobileCounts(source, target) {
    const targetFacetsList = target.querySelector('.mobile-facets__list');
    const sourceFacetsList = source.querySelector('.mobile-facets__list');

    if (sourceFacetsList && targetFacetsList) {
      targetFacetsList.outerHTML = sourceFacetsList.outerHTML;
    }
  }

  static updateURLHash(searchParams) {
    history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
  }

  static getSections() {
    return [
      {
        section: document.getElementById('product-grid').dataset.id,
      },
    ];
  }

  createSearchParams(form) {
    const formData = new FormData(form);
    return new URLSearchParams(formData).toString();
  }

  onSubmitForm(searchParams, event) {
    FacetFiltersForm.renderPage(searchParams, event);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const sortFilterForms = document.querySelectorAll('facet-filters-form form');
    if (event.srcElement.className == 'mobile-facets__checkbox') {
      const searchParams = this.createSearchParams(event.target.closest('form'));
      this.onSubmitForm(searchParams, event);
    } else {
      const forms = [];
      const isMobile = event.target.closest('form').id === 'FacetFiltersFormMobile';

      sortFilterForms.forEach((form) => {
        if (!isMobile) {
          if (form.id === 'FacetSortForm' || form.id === 'FacetFiltersForm' || form.id === 'FacetSortDrawerForm') {
            const noJsElements = document.querySelectorAll('.no-js-list');
            noJsElements.forEach((el) => el.remove());
            forms.push(this.createSearchParams(form));
          }
        } else if (form.id === 'FacetFiltersFormMobile') {
          forms.push(this.createSearchParams(form));
        }
      });
      this.onSubmitForm(forms.join('&'), event);
    }
  }

  onActiveFilterClick(event) {
    event.preventDefault();
    FacetFiltersForm.toggleActiveFacets();
    const url = event.currentTarget.href.indexOf('?') == -1
        ? '' : event.currentTarget.href.slice(event.currentTarget.href.indexOf('?') + 1);
    FacetFiltersForm.renderPage(url);
  }
  
}

FacetFiltersForm.filterData = [];
FacetFiltersForm.searchParamsInitial = window.location.search.slice(1);
FacetFiltersForm.searchParamsPrev = window.location.search.slice(1);
customElements.define('facet-filters-form', FacetFiltersForm);
FacetFiltersForm.setListeners();

class PriceRange extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll('input').forEach((element) =>
      element.addEventListener('change', this.onRangeChange.bind(this))
    );
    this.setMinAndMaxValues();
  }

  onRangeChange(event) {
    this.adjustToValidValues(event.currentTarget);
    this.setMinAndMaxValues();
  }

  setMinAndMaxValues() {
    const inputs = this.querySelectorAll('input');
    const minInput = inputs[0];
    const maxInput = inputs[1];
    if (maxInput.value) minInput.setAttribute('max', maxInput.value);
    if (minInput.value) maxInput.setAttribute('min', minInput.value);
    if (minInput.value === '') maxInput.setAttribute('min', 0);
    if (maxInput.value === '') minInput.setAttribute('max', maxInput.getAttribute('max'));
  }

  adjustToValidValues(input) {
    const value = Number(input.value);
    const min = Number(input.getAttribute('min'));
    const max = Number(input.getAttribute('max'));

    if (value < min) input.value = min;
    if (value > max) input.value = max;
  }
}

customElements.define('price-range', PriceRange);

class FacetRemove extends HTMLElement {
  constructor() {
    super();
    const facetLink = this.querySelector('a');
    facetLink.setAttribute('role', 'button');
    facetLink.addEventListener('click', this.closeFilter.bind(this));
    facetLink.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.code.toUpperCase() === 'SPACE') this.closeFilter(event);
    });
  }

  closeFilter(event) {
    event.preventDefault();
    const form = this.closest('facet-filters-form') || document.querySelector('facet-filters-form');
    form.onActiveFilterClick(event);
  }
}

customElements.define('facet-remove', FacetRemove);