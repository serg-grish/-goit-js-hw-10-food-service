import menuTmpl from './templates/menu.hbs';
import menuList from './templates/menu.json';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuList);

menuRef.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  return menu.map(menuTmpl).join('');
}

const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') === JSON.stringify(Theme.LIGHT)) {
  setDefaultTheme();
} else if (localStorage.getItem('theme') === JSON.stringify(Theme.DARK)) {
  setDefaultDarkTheme();
}

themeSwitchToggleRef.addEventListener('change', () => {
  if (localStorage.getItem('theme') === JSON.stringify(Theme.LIGHT)) {
    updateTheme('dark-theme', 'light-theme');
  } else if (localStorage.getItem('theme') === JSON.stringify(Theme.DARK)) {
    updateTheme('light-theme', 'dark-theme');
  } else {
    updateTheme('dark-theme', 'light-theme');
  }
});

function updateTheme(addClass, remClass) {
  bodyRef.classList.add(addClass);
  bodyRef.classList.remove(remClass);
  if (addClass === 'light-theme') {
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  } else {
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  }
}

function setDefaultTheme() {
  updateTheme('light-theme', 'dark-theme');
}

function setDefaultDarkTheme() {
  updateTheme('dark-theme', 'light-theme');
  themeSwitchToggleRef.checked = true;
}
