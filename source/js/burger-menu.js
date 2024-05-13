const switchButton = document.querySelector('.header__burger-menu-switcher');
const menu = document.querySelector('.header__navigation');
const menuItem = document.querySelectorAll('.header__navigation-item');
const pageHeader = document.querySelector('.header');
const menuOpenIcon = document.querySelector('.header__burger-menu-icon');
const menuCloseIcon = document.querySelector('.header__burger-menu-close');
const mediaTablet = window.matchMedia('(min-width: 768px)');

const openMenu = () => {
  pageHeader.style.height = '0';
  menuOpenIcon.classList.add('header__burger-menu-hidden');
  menuCloseIcon.classList.remove('header__burger-menu-hidden');
  menu.classList.remove('header__burger-menu-hidden');
  if (mediaTablet.matches) {
    pageHeader.style.height = `${pageHeader.scrollHeight -35}px`;
  } else {
    pageHeader.style.height = `${pageHeader.scrollHeight - 4}px`;
  }
  switchButton.removeEventListener('click', openMenu);
  switchButton.addEventListener('click', closeMenu)
}

const closeMenu = () => {
  pageHeader.style.height = '0';
  menuOpenIcon.classList.remove('header__burger-menu-hidden');
  menuCloseIcon.classList.add('header__burger-menu-hidden');
  menu.classList.add('header__burger-menu-hidden');
  if (mediaTablet.matches) {
    pageHeader.style.height = `${pageHeader.scrollHeight - 35}px`;
  } else {
    pageHeader.style.height = `${pageHeader.scrollHeight - 4}px`;
  }
  switchButton.removeEventListener('click', closeMenu);
  switchButton.addEventListener('click', openMenu);
}

switchButton.addEventListener('click', openMenu)

menuItem.forEach((item)=>{
  item.addEventListener('click', closeMenu);
})
