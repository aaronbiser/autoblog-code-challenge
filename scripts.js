
document.addEventListener('click', function (event) {
	event.preventDefault();

  const headerNavContainer = document.getElementById('header__nav-container')
  const searchInput = document.getElementById('search-input')

	if (event.target.id === 'header__toggle-search-container') {
    headerNavContainer.classList.add('header__nav-container--search-active')
    searchInput.focus()
  }

	if (event.target.id === 'cancel-button') {
    headerNavContainer.classList.remove('header__nav-container--search-active')
  }

  const foundNavItem = Object.entries(event.target.classList).find(c => c[1] === 'nav-item')

  if (foundNavItem) {
    const subnavMenu = event.target.nextElementSibling
    if (subnavMenu) {
      subnavMenu.classList.add('nav-menu--active')
    }
  } else {
    const navItems = document.getElementsByClassName('nav-item')
    
    for (let index = 0; index < navItems.length; index++) {
      const navItem = navItems[index];
      if (navItem.nextElementSibling) {
        navItem.nextElementSibling.classList.remove('nav-menu--active')
      }
    }
  }
}, false);
