import './index.html';
import './index.scss';

const appElem = document.querySelector('.app');

const loadingIndicator = document.createElement('div');
loadingIndicator.textContent = 'Загрузка...';

const loadRoute = (url) => {
  try {
    const pathUrl = new URL(url);
    let path = pathUrl.pathname;

    if (path.startsWith('/')) {
      path = path.slice(1);
    }

    if (path === '' || path === 'index.html') {
      appElem.innerHTML = '';
      return;
    }

    appElem.appendChild(loadingIndicator);

    fetch(`./components/${path}.html`)
      .then(response => response.text())
      .then((html) => {
        appElem.innerHTML = html;
        appElem.removeChild(loadingIndicator);
      })
      .catch((error) => {
        console.error(`Error loading route: ${path}`, error);
      });
  }
  catch (error) {
    console.error('Cannot parse URL:', url);
  }
};

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    window.history.pushState({}, '', path);
    loadRoute(window.location.href);
  }
});

const handleLocation = () => {
  loadRoute(window.location.href);
};
window.addEventListener('popstate', handleLocation);
handleLocation();