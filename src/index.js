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
  const allLinks = document.querySelectorAll('nav-btn');
  allLinks.forEach(link => link.classList.remove('nav-active'));

  if (path === '' || path === 'index.html') {
    appElem.appendChild(loadingIndicator);

    if (path === '' || path === 'index.html') {
      fetch(`./components/books.html`)
        .then(response => response.text())
        .then((html) => {
          appElem.innerHTML = html;
          appElem.removeChild(loadingIndicator);
        })
        .catch((error) => {
          console.error(`Error loading books route`, error);
        });
    }
    return;
  }

  appElem.appendChild(loadingIndicator);

  fetch(`./components/${path}.html`)
      .then(response => response.text())
      .then((html) => {
        appElem.innerHTML = html;

        const currentLink = document.querySelector(`a[href="${path}"]`);
        if (currentLink) {
          currentLink.classList.add('nav-active');
        }

        appElem.removeChild(loadingIndicator);
      })
      .catch((error) => {
        console.error(`Error loading route: ${path}`, error);
      });
  } catch (error) {
    console.error('Cannot parse URL:', url);
  }
};

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    window.history.pushState({}, '', path);

    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => link.classList.remove('nav-active'));

    e.target.classList.add('nav-active');

    loadRoute(window.location.href);
  }
});
window.addEventListener('popstate', handleLocation);
handleLocation();

let slider = document.querySelector('.slider');
let slides = slider.querySelectorAll('.slide1, .slide2, .slide3');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideIndex = 0;

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[n].classList.add('active');

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
    }
    dots[n].classList.add('active-dot');
};

dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        currentSlide = index;
        showSlide(currentSlide);
    });
  });

function nextSliders() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSliders, 5000);

showSlide(currentSlide);
